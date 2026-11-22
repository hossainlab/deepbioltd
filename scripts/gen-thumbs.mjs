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
import { readdir, readFile, stat } from 'node:fs/promises'
import path from 'node:path'

const SOURCE_EXTENSIONS = ['.png', '.jpg', '.jpeg']

async function firstExisting(base) {
  for (const ext of SOURCE_EXTENSIONS) {
    try {
      await stat(base + ext)
      return base + ext
    } catch {}
  }
  return null
}

async function convert(src, out, resize, crop) {
  const before = (await stat(src)).size
  let img = sharp(src)
  if (crop) {
    const { width, height } = await img.metadata()
    const side = Math.round(Math.min(width, height) * crop.size)
    img = img.extract({
      left: Math.round(width * crop.left),
      top: Math.round(height * crop.top),
      width: side,
      height: side,
    })
  }
  await img.resize(resize).webp({ quality: 82 }).toFile(out)
  const after = (await stat(out)).size
  console.log(`${String(Math.round(before / 1024)).padStart(5)}k -> ${String(Math.round(after / 1024)).padStart(4)}k  ${out}`)
  return before - after
}

let made = 0
let saved = 0

/**
 * Team portraits. Aspect ratio is preserved, because the homepage frames each
 * face with its own object-position and scale, tuned to the source's
 * proportions — a square crop here silently reframes those portraits.
 *
 * Several people have both a .png and a .jpg holding *different* photos, so the
 * source is resolved in a fixed order rather than by scanning the directory.
 */
/**
 * Sources that are full-body shots rather than headshots. A square source fills
 * a square frame exactly, so object-position cannot recentre it and the CSS
 * zoom alone leaves the face high in the circle; crop to the face here instead.
 * Values are fractions of the source width/height.
 */
const PORTRAIT_CROP = {
  '/images/team/muhib.webp': { left: 0.15, top: 0.0, size: 0.58 },
  '/images/team/jubayer.webp': { left: 0.135, top: 0.06, size: 0.67 },
}

const teamData = await readFile('lib/team/data.ts', 'utf8')
const portraits = [...teamData.matchAll(/image: '([^']+)'/g)].map((m) => m[1])
for (const ref of portraits) {
  const base = path.join('public', ref).replace(/\.[^.]+$/, '')
  const src = await firstExisting(base)
  if (!src) {
    console.warn(`  no source found for ${ref}`)
    continue
  }
  const crop = PORTRAIT_CROP[ref]
  saved += await convert(src, `${base}.webp`, { width: 400, fit: 'inside', withoutEnlargement: true }, crop)
  made++
}

/** Course cards render at 152-176px wide; 400px covers 2x displays. */
for (const f of (await readdir('public/course_img')).filter((f) => /-card\.jpe?g$/.test(f))) {
  const src = path.join('public/course_img', f)
  saved += await convert(src, src.replace(/\.[^.]+$/, '.webp'), { width: 400, height: 300, fit: 'cover' })
  made++
}

/** Partner logos render up to 200px wide, on white, so keep the whole mark. */
for (const f of (await readdir('public/partner_logos/clean')).filter((f) => /\.(png|jpe?g)$/i.test(f))) {
  const src = path.join('public/partner_logos/clean', f)
  saved += await convert(src, src.replace(/\.[^.]+$/, '.webp'), { width: 400, fit: 'inside', withoutEnlargement: true })
  made++
}

console.log(`\n${made} files, ${Math.round(saved / 1024)}k saved`)
