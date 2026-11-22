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
    case 'drug-discovery-with-ai-agents':
      // Evidence layers funnelling to a single decision.
      return (
        <g {...stroke}>
          <path d="M8 10h64L46 34v16l-12 6V34z" />
          <path d="M20 22h40" opacity={0.45} />
          <circle cx="40" cy="46" r="2.5" fill="currentColor" stroke="none" />
        </g>
      )
    case 'antimicrobial-peptide-discovery-with-ai-agents':
      // A helical peptide meeting a bacterial membrane bilayer.
      return (
        <g {...stroke}>
          <path d="M14 16c8 0 8 7 0 7s-8 7 0 7 8 7 0 7 8 7 0 7" transform="translate(10 -4)" />
          <path d="M18 14c7 2 7 9 0 11s-7 9 0 11 7 9 0 11" opacity={0.75} />
          <path d="M8 46h64M8 54h64" opacity={0.55} />
          {[14, 26, 38, 50, 62].map((x) => (
            <circle key={x} cx={x} cy={50} r="2" opacity={0.5} />
          ))}
          <path d="M44 20l6 6-6 6" opacity={0.7} />
        </g>
      )
    case 'cheminformatics-with-ai-agents':
      // A molecule with an agent loop running under it.
      return (
        <g {...stroke}>
          <path d="M40 14l10 6v12l-10 6-10-6V20z" />
          <path d="M50 20l9-5M30 20l-9-5M40 38v7" opacity={0.7} />
          <circle cx="59" cy="15" r="2.5" />
          <circle cx="21" cy="15" r="2.5" />
          <path d="M16 40a26 20 0 0 0 48 0" strokeDasharray="3 4" opacity={0.55} />
          <path d="M64 40l-5-3M64 40l-5 3" opacity={0.55} />
        </g>
      )
    case 'computational-biology-with-ai-agents':
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
    case 'foundation-models-for-biological-discovery':
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
