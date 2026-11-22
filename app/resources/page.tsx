import type { Metadata } from 'next'
import Image from 'next/image'
import { Shell } from '@/components/minimal/Shell'
import { Masthead } from '@/components/minimal/Masthead'
import { Colophon } from '@/components/minimal/Colophon'
import { PubEntry, pubLink } from '@/components/minimal/PubEntry'
import { modelCategories, type ModelSource } from '@/lib/resources/models'
import { toolkits, type Toolkit } from '@/lib/resources/toolkits'

export const metadata: Metadata = {
  title: 'Resources | DeepBio',
  description: 'Papers and code for the biological foundation models DeepBio works with.',
}

const link = pubLink

/** Line icons for entries whose repository has no figure, one per section. */
function Glyph({ category }: { category: string }) {
  const common = {
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.6,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  }
  switch (category) {
    case 'genomic':
      return (
        <g {...common}>
          <path d="M28 12c24 12 24 24 0 36s-24 24 0 36" />
          <path d="M52 12c-24 12-24 24 0 36s24 24 0 36" />
          {[18, 30, 42, 54, 66, 78].map((y) => (
            <path key={y} d={`M${y % 24 === 6 ? 31 : 33} ${y}h${y % 24 === 6 ? 18 : 14}`} />
          ))}
        </g>
      )
    case 'single-cell':
      return (
        <g {...common}>
          {[
            [24, 30, 12],
            [52, 26, 10],
            [40, 54, 13],
            [64, 58, 9],
            [20, 66, 9],
          ].map(([cx, cy, r]) => (
            <g key={`${cx}-${cy}`}>
              <circle cx={cx} cy={cy} r={r} />
              <circle cx={cx + 2} cy={cy - 1} r={r / 3} fill="currentColor" stroke="none" opacity={0.35} />
            </g>
          ))}
        </g>
      )
    case 'chemistry':
      return (
        <g {...common}>
          <path d="M40 20l17 10v20l-17 10-17-10V30z" />
          <path d="M57 30l14-8M40 60v16M23 30l-14-8" />
          <circle cx="71" cy="22" r="3" />
          <circle cx="40" cy="76" r="3" />
        </g>
      )
    case 'skills':
      // An agent hub with three skills docked into it.
      return (
        <g {...common}>
          <rect x="30" y="36" width="20" height="20" rx="3" />
          <circle cx="40" cy="46" r="3" fill="currentColor" stroke="none" />
          <rect x="7" y="12" width="19" height="13" rx="2" />
          <rect x="54" y="12" width="19" height="13" rx="2" />
          <rect x="31" y="70" width="19" height="13" rx="2" />
          <path d="M31 41L17 25M49 41l14-16M40 56v14" opacity={0.55} />
        </g>
      )
    default:
      return (
        <g {...common}>
          <path d="M10 48c6-18 14-18 20 0s14 18 20 0 14-18 20 0" />
          <path d="M10 62c6-10 14-10 20 0s14 10 20 0 14-10 20 0" opacity={0.45} />
          <path d="M14 30h52" opacity={0.3} />
        </g>
      )
  }
}

const frame =
  'relative block aspect-[4/3] w-full overflow-hidden rounded-[3px] bg-white ring-1 ring-[color:var(--home-rule-soft)]'

/** Drawn icon with a short label, used wherever an entry has no figure. */
function GlyphThumb({ label, category }: { label: string; category: string }) {
  return (
    <div className={`${frame} flex flex-col items-center justify-center gap-1 text-[#205E92]`} aria-hidden="true">
      <svg viewBox="0 0 80 90" className="h-[58%] w-auto">
        <Glyph category={category} />
      </svg>
      <span className="px-2 text-center text-[11px] font-semibold text-[#205E92]">{label}</span>
    </div>
  )
}

function Thumb({ m, category }: { m: ModelSource; category: string }) {
  if (m.thumb) {
    return (
      <a href={m.codeUrl} target="_blank" rel="noopener noreferrer" className={frame} tabIndex={-1}>
        <Image src={m.thumb} alt={`Figure from the ${m.name} repository`} fill sizes="152px" className="object-cover" />
      </a>
    )
  }
  return <GlyphThumb label={m.name.match(/\(([^)]+)\)/)?.[1] ?? m.name} category={category} />
}

/**
 * One model, laid out like an academic publication list: a figure thumbnail
 * on the left, then the paper title, model and lab, authors, venue,
 * paper / code links and a one-line summary.
 */
function Entry({ m, category }: { m: ModelSource; category: string }) {
  return (
    <PubEntry
      thumb={
        <Thumb m={m} category={category} />
      }
    >
        <a
          href={m.paperUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`font-bold ${link}`}
        >
          {m.title}
        </a>
        <p>
          <strong>{m.name}</strong>
          <span className="text-[color:var(--home-muted)]"> · {m.developer}</span>
        </p>
        <p>{m.authors}</p>
        <p>
          <em>{m.venue}</em>, {m.year}
        </p>
        <p>
          <a href={m.paperUrl} target="_blank" rel="noopener noreferrer" className={link}>
            paper
          </a>
          {' / '}
          <a href={m.codeUrl} target="_blank" rel="noopener noreferrer" className={link}>
            code
          </a>
          {m.license && <span className="text-[color:var(--home-muted)]"> · {m.license}</span>}
        </p>
        <p className="mt-2.5">{m.summary}</p>
    </PubEntry>
  )
}

/**
 * One agent skill library or research assistant. Same publication layout as a
 * model, except the bold line falls back to the project name when there is no
 * paper, and the links line carries the repository.
 */
function ToolkitEntry({ t }: { t: Toolkit }) {
  return (
    <PubEntry thumb={<GlyphThumb label={t.name} category="skills" />}>
      <a
        href={t.paper?.url ?? t.codeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`font-bold ${link}`}
      >
        {t.paper?.title ?? t.name}
      </a>
      <p>
        {t.paper ? (
          <>
            <strong>{t.name}</strong>
            <span className="text-[color:var(--home-muted)]"> · {t.developer}</span>
          </>
        ) : (
          // Without a paper the bold line above is already the name, so only the developer is new.
          <span className="text-[color:var(--home-muted)]">{t.developer}</span>
        )}
      </p>
      {t.paper && (
        <>
          <p>{t.paper.authors}</p>
          <p>
            <em>{t.paper.venue}</em>, {t.paper.year}
          </p>
        </>
      )}
      <p>
        <a href={t.codeUrl} target="_blank" rel="noopener noreferrer" className={link}>
          code
        </a>
        {t.paper && (
          <>
            {' / '}
            <a href={t.paper.url} target="_blank" rel="noopener noreferrer" className={link}>
              paper
            </a>
          </>
        )}
        {t.docsUrl && (
          <>
            {' / '}
            <a href={t.docsUrl} target="_blank" rel="noopener noreferrer" className={link}>
              {t.docsLabel ?? 'docs'}
            </a>
          </>
        )}
        {t.license && <span className="text-[color:var(--home-muted)]"> · {t.license}</span>}
      </p>
      <p className="mt-2.5">{t.summary}</p>
    </PubEntry>
  )
}

export default function ResourcesIndex() {
  return (
    <Shell>
      <div className="text-[color:var(--home-ink)]">
        <Masthead />

        <main className="mx-auto w-full max-w-[36rem] px-4 sm:px-0">
          <div className="pb-4 pt-8">
            <h1 className="text-center text-[1.05rem] text-[color:var(--home-accent)]">Resources</h1>
            <p className="mt-3 text-[13.5px] leading-[1.55]">
              The open agent skill libraries that connect models and public databases to AI agents,
              followed by the biological foundation models we build on, with the paper that
              introduced each one and where to get its code or weights.
            </p>
          </div>

          <section aria-labelledby="cat-skills" className="pt-6">
            <h2 id="cat-skills" className="text-[1.15rem] font-normal">
              Agent skills &amp; research assistants
            </h2>
            <ul>
              {toolkits.map((t) => (
                <ToolkitEntry key={t.codeUrl} t={t} />
              ))}
            </ul>
          </section>

          {modelCategories.map((cat) => (
            <section key={cat.id} aria-labelledby={`cat-${cat.id}`} className="pt-6">
              <h2 id={`cat-${cat.id}`} className="text-[1.15rem] font-normal">
                {cat.title}
              </h2>
              <ul>
                {cat.models.map((m) => (
                  <Entry key={m.name} m={m} category={cat.id} />
                ))}
              </ul>
            </section>
          ))}
        </main>

        <Colophon />
      </div>
    </Shell>
  )
}
