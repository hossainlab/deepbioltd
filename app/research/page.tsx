import type { Metadata } from 'next'
import Link from 'next/link'
import { Shell } from '@/components/minimal/Shell'
import { Masthead } from '@/components/minimal/Masthead'
import { Colophon } from '@/components/minimal/Colophon'
import { PubEntry, pubLink } from '@/components/minimal/PubEntry'
import { projects } from '@/lib/research/projects'

export const metadata: Metadata = {
  title: 'Research | DeepBio',
  description: 'Active research programs at DeepBio.',
}

/** Previous version: backups/homepage-2026-11-15/research/page.tsx */

const link = pubLink

const stroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

/**
 * Line drawings standing in for figure thumbnails, one per program. Keyed by
 * project slug; anything unlisted gets the protein ribbon.
 */
function ProjectGlyph({ slug }: { slug: string }) {
  switch (slug) {
    case 'raredx-modality': {
      // A target with seven modality spokes.
      const spokes = Array.from({ length: 7 }, (_, i) => {
        const a = (i / 7) * Math.PI * 2 - Math.PI / 2
        return { x: 40 + Math.cos(a) * 22, y: 30 + Math.sin(a) * 22 }
      })
      return (
        <g {...stroke}>
          <circle cx="40" cy="30" r="7" />
          <circle cx="40" cy="30" r="2" fill="currentColor" stroke="none" />
          {spokes.map((p, i) => (
            <g key={i}>
              <path d={`M${40 + (p.x - 40) * 0.42} ${30 + (p.y - 30) * 0.42}L${p.x} ${p.y}`} opacity={0.6} />
              <circle cx={p.x} cy={p.y} r="3.2" />
            </g>
          ))}
        </g>
      )
    }
    case 'restoring-carbapenems':
      // "generic-bacterium" by Pauline Franz, from bioicons.com, released
      // under CC0. Recolored to the page accent and scaled from its native
      // 66.88 x 51.83 box into the 80 x 60 one the thumbnails use.
      return (
        <g transform="translate(1.55 0.2) scale(1.15)">
          <g fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={1.5}>
            <path d="M26.94,30.86a8.63,8.63,0,0,1,2.09-12L52.59,2.31a8.6,8.6,0,1,1,9.9,14.06L38.92,33A8.62,8.62,0,0,1,26.94,30.86Z" />
            <path d="M41.74,24.51c-.33,6.79-11.06,6.92-10.9-.45C31.06,17.49,41.48,16.67,41.74,24.51Z" />
            <path d="M38.1,19.17c4.63,1.49,4.85,8.3.32,10.11" />
          </g>
          <g fill="currentColor">
            <path d="M28,31.09a8.12,8.12,0,0,0-6.73,1,49.17,49.17,0,0,0-5.22,4.46,11.81,11.81,0,0,1-2.95,2c-1.41.6-2.68.19-4.16.11A11.49,11.49,0,0,0,.19,41.78c-.58.55.3,1.44.88.88a10.69,10.69,0,0,1,9-2.71,5.72,5.72,0,0,0,3.4-.28A11.56,11.56,0,0,0,16.21,38c3.5-2.74,6.42-7.12,11.46-5.72A.63.63,0,0,0,28,31.09Z" />
            <path d="M25.7,29.58c-.39,5.26-5.8,6.39-9.55,8.73a10.72,10.72,0,0,0-2.44,2,5.22,5.22,0,0,0-.92,1.27,14.12,14.12,0,0,0-.46,2.07,10.23,10.23,0,0,1-5.58,7c-.72.35-.09,1.42.63,1.08a10.86,10.86,0,0,0,5-4.78,14.72,14.72,0,0,0,1.19-3.27A8,8,0,0,1,14,41.94,5,5,0,0,1,15,40.81c2.63-2.64,6.6-3.32,9.39-5.78A7.79,7.79,0,0,0,27,29.58c.06-.8-1.19-.8-1.25,0Z" />
          </g>
        </g>
      )
    case 'amr-drug-repurposing':
      // Rod-shaped bacterium with flagella, and a compound docking in.
      return (
        <g {...stroke}>
          <rect x="16" y="20" width="36" height="18" rx="9" />
          <path d="M16 29c-4-4-8 4-12 0M52 26c4-4 8 4 12 0M52 33c4-4 8 4 12 0" opacity={0.6} />
          <path d="M60 46l6-4 6 4v7l-6 4-6-4z" />
          <path d="M60 46l-6-3" opacity={0.6} />
        </g>
      )
    case 'neglected-tropical-diseases':
      // A protein ribbon under a magnifier.
      return (
        <g {...stroke}>
          <path d="M8 36c5-12 11-12 16 0s11 12 16 0 11-12 16 0" />
          <circle cx="54" cy="24" r="11" />
          <path d="M62 32l9 9" strokeWidth={2.4} />
        </g>
      )
    case 'bangladesh-biomarkers':
      // Horizontal double helix with one knocked-out rung.
      return (
        <g {...stroke}>
          <path d="M6 22c12 0 12 16 24 16s12-16 24-16 12 16 24 16" />
          <path d="M6 38c12 0 12-16 24-16s12 16 24 16 12-16 24-16" />
          {[12, 24, 48, 60, 72].map((x) => (
            <path key={x} d={`M${x} 26v8`} opacity={0.55} />
          ))}
          <path d="M33 24l8 12M41 24l-8 12" strokeWidth={2.2} />
        </g>
      )
    default:
      return (
        <g {...stroke}>
          <path d="M8 34c5-12 11-12 16 0s11 12 16 0 11-12 16 0 11 12 16 0" />
        </g>
      )
  }
}

/**
 * One program, laid out like the Resources publication list: a thumbnail on
 * the left, then title, area, models used, a read-more link and the lede.
 */
function Entry({ p }: { p: (typeof projects)[number] }) {
  const href = `/research/${p.slug}`
  return (
    <PubEntry
      thumb={
        <Link
          href={href}
          tabIndex={-1}
          aria-hidden="true"
          className="flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-[3px] bg-white text-[#205E92] ring-1 ring-[color:var(--home-rule-soft)]"
        >
          <svg viewBox="0 0 80 60" className="w-[78%]">
            <ProjectGlyph slug={p.slug} />
          </svg>
        </Link>
      }
    >
        <Link href={href} className={`font-bold ${link}`}>
          {p.title}
        </Link>
        <p>
          <strong>{p.area}</strong>
          <span className="text-[color:var(--home-muted)]"> · Active program</span>
        </p>
        <p>{p.models.join(' · ')}</p>
        <p>
          <Link href={href} className={link}>
            read more
          </Link>
        </p>
        <p className="mt-2.5">{p.subtitle}</p>
    </PubEntry>
  )
}

export default function ResearchIndex() {
  return (
    <Shell>
      <div className="text-[color:var(--home-ink)]">
        <Masthead />

        <main className="mx-auto w-full max-w-[36rem] px-4 sm:px-0">
          <div className="pb-8 pt-8 text-center">
            <h1 className="text-[1.05rem] text-[color:var(--home-accent)]">Research</h1>
            <p className="mt-2 text-[13px] text-[color:var(--home-muted)]">
              Active research programs at DeepBio.
            </p>
          </div>

          <ul>
            {projects.map((p) => (
              <Entry key={p.slug} p={p} />
            ))}
          </ul>
        </main>

        <Colophon />
      </div>
    </Shell>
  )
}
