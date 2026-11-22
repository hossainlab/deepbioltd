import type { Metadata } from 'next'
import Link from 'next/link'
import { Shell } from '@/components/minimal/Shell'
import { Masthead } from '@/components/minimal/Masthead'
import { Colophon } from '@/components/minimal/Colophon'
import { PubEntry, Thumb, pubLink, glyphStroke as stroke } from '@/components/minimal/PubEntry'
import { courses, type Course } from '@/lib/training/courses'
import { ISCB_FRAMEWORK_URL } from '@/lib/training/iscb'

export const metadata: Metadata = {
  title: 'Training | DeepBio',
  description:
    'DeepBio training courses in bioinformatics, computational biology, and AI, designed to the ISCB Competency Framework 3.0.',
}

/** Line drawings standing in for course thumbnails, keyed by course slug. */
function CourseGlyph({ slug }: { slug: string }) {
  switch (slug) {
    case 'bioinformatics-101':
      // Two aligned sequences with matching columns.
      return (
        <g {...stroke}>
          {[14, 24, 34, 44, 54, 64].map((x, i) => (
            <g key={x}>
              <rect x={x - 4} y="18" width="8" height="8" rx="1" />
              <rect x={x - 4} y="34" width="8" height="8" rx="1" />
              {i !== 2 && i !== 4 && <path d={`M${x} 27v6`} opacity={0.55} />}
            </g>
          ))}
        </g>
      )
    case 'python-data-science':
      // A bar chart over a code bracket.
      return (
        <g {...stroke}>
          <path d="M14 46h52" />
          <path d="M20 46V32M30 46V22M40 46V28M50 46V16M60 46V26" strokeWidth={3} />
          <path d="M10 14l-4 4 4 4M70 14l4 4-4 4" opacity={0.6} />
        </g>
      )
    case 'genomic-variant-analysis':
      // Stacked reads with one variant column.
      return (
        <g {...stroke}>
          <path d="M8 14h40M18 22h44M10 30h36M24 38h46M14 46h40" />
          <path d="M38 10v40" strokeWidth={2.4} strokeDasharray="2 3" />
        </g>
      )
    case 'structural-biology':
      // A helix beside a pocket with a small molecule.
      return (
        <g {...stroke}>
          <path d="M10 12c10 0 10 8 0 8s-10 8 0 8 10 8 0 8-10 8 0 8 10 8 0 8" />
          <path d="M34 14c18-4 34 8 30 24s-24 14-30 4" />
          <path d="M46 26l5-3 5 3v6l-5 3-5-3z" />
        </g>
      )
    case 'md-simulation':
      // A molecule with motion trails.
      return (
        <g {...stroke}>
          <circle cx="44" cy="30" r="6" />
          <circle cx="60" cy="22" r="4" />
          <circle cx="58" cy="42" r="4" />
          <path d="M49 27l7-3M49 34l6 5" />
          <path d="M10 22h18M14 30h20M10 38h18" opacity={0.5} />
        </g>
      )
    case 'molecular-docking':
      // A ligand fitting into a receptor cleft.
      return (
        <g {...stroke}>
          <path d="M8 48V16h22l6 10h8l6-10h22v32z" />
          <path d="M34 22l6-4 6 4v7l-6 4-6-4z" />
        </g>
      )
    case 'rnaseq-analysis':
      // A volcano plot.
      return (
        <g {...stroke}>
          <path d="M8 50h64M40 50V8" opacity={0.5} />
          {[[18, 16], [22, 24], [26, 34], [56, 14], [60, 22], [54, 32], [34, 44], [44, 44], [38, 40], [46, 38]].map(([x, y]) => (
            <circle key={`${x}-${y}`} cx={x} cy={y} r="2" />
          ))}
        </g>
      )
    case 'single-cell-analysis':
      // Three clusters of cells.
      return (
        <g {...stroke}>
          {[[18, 20], [24, 26], [16, 30], [22, 16], [54, 16], [60, 22], [52, 24], [40, 44], [46, 40], [34, 42], [42, 50]].map(([x, y]) => (
            <circle key={`${x}-${y}`} cx={x} cy={y} r="3" />
          ))}
        </g>
      )
    case 'machine-learning-biology':
      // A small neural network.
      return (
        <g {...stroke}>
          {[16, 30, 44].map((y) => [24, 38].map((y2) => <path key={`${y}-${y2}`} d={`M16 ${y}L40 ${y2}`} opacity={0.45} />))}
          {[24, 38].map((y) => <path key={y} d={`M40 ${y}L64 31`} opacity={0.45} />)}
          {[16, 30, 44].map((y) => <circle key={y} cx="16" cy={y} r="3.5" fill="#fff" />)}
          {[24, 38].map((y) => <circle key={y} cx="40" cy={y} r="3.5" fill="#fff" />)}
          <circle cx="64" cy="31" r="3.5" fill="#fff" />
        </g>
      )
    case 'agentic-ai-computational-biology':
      // An agent loop: a central node cycling through three tools.
      return (
        <g {...stroke}>
          <circle cx="40" cy="30" r="7" />
          <circle cx="40" cy="30" r="2" fill="currentColor" stroke="none" />
          <circle cx="40" cy="8" r="4" />
          <circle cx="60" cy="42" r="4" />
          <circle cx="20" cy="42" r="4" />
          <path d="M44 10c10 3 16 14 16 27M57 46c-10 7-24 7-34 0M20 37c0-13 6-24 16-27" opacity={0.6} />
          <path d="M60 37l-2-4M23 46l3 3M36 10l3-3" />
        </g>
      )
    case 'ai-for-biological-discovery':
      // An open book with a spark: the handbook-led seminar.
      return (
        <g {...stroke}>
          <path d="M40 18c-8-5-18-5-26-2v30c8-3 18-3 26 2 8-5 18-5 26-2V16c-8-3-18-3-26 2z" />
          <path d="M40 18v30" opacity={0.6} />
          <path d="M54 6v8M50 10h8" strokeWidth={2} />
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

function Entry({ c }: { c: Course }) {
  const href = `/training/${c.slug}`
  return (
    <PubEntry thumb={<Thumb href={href} glyph={<CourseGlyph slug={c.slug} />} />}>
      <Link href={href} className={`font-bold ${pubLink}`}>
        {c.title}
      </Link>
      <p>
        <strong>{c.level}</strong>
        <span className="text-[color:var(--home-muted)]"> · {c.weeks} weeks</span>
      </p>
      <p>{c.tools?.length ? c.tools.slice(0, 5).join(' · ') : c.primaryText ? 'Primary text: The Life Sciences AI Handbook' : null}</p>
      <p>
        <Link href={href} className={pubLink}>
          view syllabus
        </Link>
      </p>
      <p className="mt-2.5">{c.summary}</p>
    </PubEntry>
  )
}

export default function TrainingIndex() {
  return (
    <Shell>
      <div className="text-[color:var(--home-ink)]">
        <Masthead />

        <main className="mx-auto w-full max-w-[36rem] px-4 sm:px-0">
          <div className="pb-8 pt-8 text-center">
            <h1 className="text-[1.05rem] text-[color:var(--home-accent)]">Training</h1>
            <p className="mt-2 text-[13px] text-[color:var(--home-muted)]">
              Courses in bioinformatics, computational biology, and AI, designed to the{' '}
              <a href={ISCB_FRAMEWORK_URL} target="_blank" rel="noopener noreferrer" className={pubLink}>
                ISCB Competency Framework 3.0
              </a>
              .
            </p>
          </div>

          <ul>
            {courses.map((c) => (
              <Entry key={c.slug} c={c} />
            ))}
          </ul>
        </main>

        <Colophon />
      </div>
    </Shell>
  )
}
