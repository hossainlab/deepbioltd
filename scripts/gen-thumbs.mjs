/**
 * Generate right-sized WebP derivatives for the images shown on index pages.
 *
 * These are served as plain static files (`unoptimized` on next/image), which
 * skips the on-demand image optimizer: on Netlify each optimizer call costs
 * ~400-700ms, and the sources here are far larger than their display size.
 *
 * Run after adding or replacing a source image:  node scripts/gen-thumbs.mjs
 */
import sharp from 'sharp'
import { readdir } from 'node:fs/promises'
import path from 'node:path'

const jobs = [
  // Course cards render at 152-176px wide; 400px covers 2x displays.
  { dir: 'public/course_img', match: /-card\.jpe?g$/, width: 400, height: 300, fit: 'cover' },
  // Team portraits render in a 76px circle, but some are zoomed up to 2.7x.
  { dir: 'public/images/team', match: /\.(png|jpe?g)$/i, width: 400, height: 400, fit: 'cover' },
  { dir: 'public/images/management', match: /\.(png|jpe?g)$/i, width: 400, height: 400, fit: 'cover' },
  // Logos render up to 200px wide, on white, so keep the whole mark.
  { dir: 'public/partner_logos/clean', match: /\.(png|jpe?g)$/i, width: 400, fit: 'inside' },
]

let made = 0, saved = 0
for (const job of jobs) {
  let files = []
  try { files = await readdir(job.dir) } catch { continue }
  for (const f of files.filter((f) => job.match.test(f))) {
    const src = path.join(job.dir, f)
    const out = path.join(job.dir, f.replace(/\.[^.]+$/, '.webp'))
    const before = (await sharp(src).metadata()).size ?? 0
    const img = sharp(src).resize({ width: job.width, height: job.height, fit: job.fit, withoutEnlargement: true })
    await img.webp({ quality: 82 }).toFile(out)
    const after = (await sharp(out).metadata()).size ?? 0
    made++; saved += before - after
    console.log(`${String(Math.round(before / 1024)).padStart(5)}k -> ${String(Math.round(after / 1024)).padStart(4)}k  ${out}`)
  }
}
console.log(`\n${made} files, ${Math.round(saved / 1024)}k saved`)
