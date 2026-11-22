import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Shell } from '@/components/minimal/Shell'
import { Masthead } from '@/components/minimal/Masthead'
import { Colophon } from '@/components/minimal/Colophon'
import {
  courses,
  defaultRubric,
  gradeBands,
  aiPolicy,
  courseEvaluation,
  RUBRIC_LEVELS,
  placeholderTeam,
  type CourseTeamMember,
  type Reading,
} from '@/lib/training/courses'
import { teamMembers } from '@/lib/team/data'
import { iscbCompetencies, ISCB_FRAMEWORK_URL } from '@/lib/training/iscb'

type Params = { slug: string }

// Only the slugs in lib/training/courses.ts exist; anything else is a hard 404.
export const dynamicParams = false

export function generateStaticParams(): Params[] {
  return courses.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params
  const c = courses.find((x) => x.slug === slug)
  if (!c) return {}
  return { title: `${c.title} | Training | DeepBio`, description: c.summary }
}

/** The syllabus sections every course has, in order. */
const sections = [
  { id: 'overview', label: 'Overview' },
  { id: 'team', label: 'Course Team' },
  { id: 'objectives', label: 'Learning Objectives' },
  { id: 'syllabus', label: 'Syllabus' },
  { id: 'iscb', label: 'ISCB Competency' },
  { id: 'assessment', label: 'Assessment' },
  { id: 'rubric', label: 'Grading Rubric' },
  { id: 'ai', label: 'Learner Use of Generative AI' },
  { id: 'evaluation', label: 'Evaluating the Course' },
  { id: 'resources', label: 'Supplementary Resources' },
]

const link = 'text-[color:var(--home-accent)] hover:opacity-70'
const h2 = 'mb-3 text-[1.4rem] font-semibold tracking-[-0.015em]'
const rule = 'border-[color:var(--home-rule-soft)]'

/**
 * One portrait in the course team grid, styled like the homepage Team row.
 * DeepBio members are looked up by name; an unnamed slot renders as
 * "To be announced" with a silhouette.
 */
function TeamCard({ member }: { member: CourseTeamMember }) {
  const known = member.name ? teamMembers.find((m) => m.name === member.name) : undefined
  const image = member.image ?? known?.image
  const linkedin = member.linkedin ?? known?.linkedin
  const name = member.name ?? 'To be announced'

  const card = (
    <>
      <span className="relative mx-auto block h-[76px] w-[76px] overflow-hidden rounded-full bg-white ring-1 ring-[color:var(--home-rule-soft)] transition-transform duration-300 group-hover:-translate-y-0.5">
        {image ? (
          <Image src={image} alt="" fill sizes="152px" className="object-cover object-top" />
        ) : (
          <svg viewBox="0 0 76 76" aria-hidden="true" className="h-full w-full text-[color:var(--home-muted)] opacity-30">
            <circle cx="38" cy="30" r="13" fill="currentColor" />
            <path d="M12 72c2-16 13-24 26-24s24 8 26 24z" fill="currentColor" />
          </svg>
        )}
      </span>
      <span
        className={`mt-2 block text-[12px] font-medium leading-[1.25] [text-wrap:balance] ${
          member.name ? 'text-[color:var(--home-ink)] group-hover:text-[color:var(--home-accent)]' : 'italic text-[color:var(--home-muted)]'
        }`}
      >
        {name}
      </span>
      <span className="mt-0.5 block text-[10.5px] leading-[1.3] text-[color:var(--home-muted)] [text-wrap:balance]">
        {member.role}
      </span>
    </>
  )

  return (
    <li className="w-1/3 px-1 text-center sm:w-1/4 md:w-[calc(100%/6)]">
      {linkedin ? (
        <a href={linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${name}, ${member.role} — LinkedIn`} className="group block">
          {card}
        </a>
      ) : (
        <div className="group block" aria-label={`${name}, ${member.role}`}>
          {card}
        </div>
      )}
    </li>
  )
}

/** A reading list; linked titles open the source in a new tab. */
function ReadingList({ items }: { items: Reading[] }) {
  return (
    <ul className="mt-1 list-disc space-y-0.5 pl-5">
      {items.map((r) => (
        <li key={r.title}>
          {r.href ? (
            <a href={r.href} target="_blank" rel="noopener noreferrer" className={link}>
              {r.title}
            </a>
          ) : (
            r.title
          )}
        </li>
      ))}
    </ul>
  )
}

/** Bold run-in label for the parts of a syllabus week. */
const weekLabel = 'mt-3 text-[0.8rem] font-semibold uppercase tracking-wide text-[color:var(--home-muted)]'

export default async function CourseSyllabus({ params }: { params: Promise<Params> }) {
  const { slug } = await params
  const c = courses.find((x) => x.slug === slug)
  if (!c) notFound()

  const rubric = c.rubric ?? defaultRubric
  const rubricLevels = c.rubricLevels ?? RUBRIC_LEVELS
  const policy = c.aiPolicy ?? aiPolicy
  const evaluation = c.evaluation ?? courseEvaluation
  const showDue = c.assessment.some((a) => a.due)
  const showDescription = c.assessment.some((a) => a.description)
  const team = c.team?.length ? c.team : placeholderTeam
  const others = courses.filter((x) => x.slug !== c.slug)

  return (
    <Shell>
      <div className="text-[color:var(--home-ink)]">
        <Masthead />

        <div className="relative mx-auto w-full max-w-[76rem] px-4 sm:px-6">
          {/* Contents rail, desktop only. Spans the full article height so the sticky nav stays pinned. */}
          <aside className="absolute bottom-0 left-6 top-0 hidden w-[10.5rem] xl:block">
            <nav aria-label="Contents" className="sticky top-40 border-r border-[color:var(--home-rule-soft)] pr-4 pt-2">
              <Link href="/training" className="text-[13px] text-[color:var(--home-muted)] hover:text-[color:var(--home-accent)]">
                ← Back to Training
              </Link>
              <p className="mt-6 text-[13px] font-semibold">Contents</p>
              <ul className="mt-3 space-y-2.5 text-[13px] leading-snug">
                {sections.map((s) => (
                  <li key={s.id}>
                    <a href={`#${s.id}`} className="block border-l-2 border-transparent pl-3 hover:border-[color:var(--home-accent)] hover:text-[color:var(--home-accent)]">
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          <article className="mx-auto max-w-[48rem] pt-12">
            <Link href="/training" className="text-[13px] text-[color:var(--home-muted)] hover:text-[color:var(--home-accent)] xl:hidden">
              ← Back to Training
            </Link>

            <p className="mt-6 text-[13px] uppercase tracking-wide text-[color:var(--home-accent)] xl:mt-0">
              Syllabus · {c.level}
            </p>
            <h1 className="mt-3 text-[2rem] font-bold leading-[1.12] tracking-[-0.025em] sm:text-[2.625rem]">{c.title}</h1>
            <p className="mt-5 text-[1.15rem] italic leading-[1.5] opacity-90 sm:text-[1.3rem]">{c.summary}</p>
            <p className="mt-6 text-[15px] font-semibold">DeepBio Training</p>
            <p className="mt-1 text-[13px] text-[color:var(--home-muted)]">{c.weeks} weeks · Online and Dhaka, Bangladesh</p>

            <div className="mt-10 space-y-12 text-[1.05rem] leading-[1.7] sm:text-[1.15rem]">
              <section id="overview" className="scroll-mt-8">
                <h2 className={h2}>Overview</h2>
                <div className="space-y-4">
                  {c.overview.map((para) => (
                    <p key={para}>{para}</p>
                  ))}
                </div>
                <dl className={`mt-6 divide-y ${rule} border-y ${rule} text-[0.95rem]`}>
                  <div className="grid gap-1 py-2.5 sm:grid-cols-[9rem_1fr]">
                    <dt className="font-semibold">Level</dt>
                    <dd>{c.level}</dd>
                  </div>
                  {c.audience && (
                    <div className="grid gap-1 py-2.5 sm:grid-cols-[9rem_1fr]">
                      <dt className="font-semibold">For</dt>
                      <dd>{c.audience}</dd>
                    </div>
                  )}
                  <div className="grid gap-1 py-2.5 sm:grid-cols-[9rem_1fr]">
                    <dt className="font-semibold">Duration</dt>
                    <dd>{c.weeks} weeks</dd>
                  </div>
                  {c.format && (
                    <div className="grid gap-1 py-2.5 sm:grid-cols-[9rem_1fr]">
                      <dt className="font-semibold">Format</dt>
                      <dd>{c.format}</dd>
                    </div>
                  )}
                  <div className="grid gap-1 py-2.5 sm:grid-cols-[9rem_1fr]">
                    <dt className="font-semibold">Prerequisites</dt>
                    <dd>{c.prerequisites}</dd>
                  </div>
                  {c.primaryText && (
                    <div className="grid gap-1 py-2.5 sm:grid-cols-[9rem_1fr]">
                      <dt className="font-semibold">Primary text</dt>
                      <dd>
                        <a href={c.primaryText.href} target="_blank" rel="noopener noreferrer" className={link}>
                          {c.primaryText.citation}
                        </a>
                        {c.primaryText.doi && (
                          <>
                            {' '}
                            <a href={`https://doi.org/${c.primaryText.doi}`} target="_blank" rel="noopener noreferrer" className={`font-mono text-[0.85rem] ${link}`}>
                              doi:{c.primaryText.doi}
                            </a>
                          </>
                        )}
                      </dd>
                    </div>
                  )}
                  {c.tools?.length ? (
                    <div className="grid gap-1 py-2.5 sm:grid-cols-[9rem_1fr]">
                      <dt className="font-semibold">Tools</dt>
                      <dd className="font-mono text-[0.85rem]">{c.tools.join(' · ')}</dd>
                    </div>
                  ) : null}
                </dl>
              </section>

              <section id="team" className="scroll-mt-8">
                <h2 className={h2}>Course Team</h2>
                <ul className="flex flex-wrap gap-y-5">
                  {team.map((m, i) => (
                    <TeamCard key={`${m.name ?? 'tba'}-${i}`} member={m} />
                  ))}
                </ul>
              </section>

              <section id="objectives" className="scroll-mt-8">
                <h2 className={h2}>Learning Objectives</h2>
                <p>By the end of the course, learners will be able to:</p>
                <ol className="mt-3 list-decimal space-y-1.5 pl-6">
                  {c.objectives.map((o) => (
                    <li key={o}>{o}</li>
                  ))}
                </ol>
              </section>

              <section id="syllabus" className="scroll-mt-8">
                <h2 className={h2}>Syllabus</h2>
                <ol className={`divide-y ${rule} border-y ${rule}`}>
                  {c.syllabus.map((w, i) => (
                    <li key={w.title} className="grid gap-1 py-4 sm:grid-cols-[6rem_1fr]">
                      <p className="font-mono text-[0.85rem] text-[color:var(--home-muted)] sm:pt-1">Week {i + 1}</p>
                      <div className="text-[0.95rem]">
                        <p className="text-[1.05rem] font-semibold sm:text-[1.1rem]">{w.title}</p>
                        {w.theme && <p className="mt-0.5 italic text-[color:var(--home-muted)]">{w.theme}</p>}
                        {w.topics && <p className="mt-1">{w.topics.join(' · ')}</p>}
                        {w.lab && (
                          <p className="mt-1.5 text-[color:var(--home-muted)]">
                            <span className="font-semibold text-[color:var(--home-ink)]">Lab:</span> {w.lab}
                          </p>
                        )}
                        {w.note && <p className="mt-2">{w.note}</p>}
                        {w.readings && (
                          <>
                            <p className={weekLabel}>{w.note ? 'Options' : 'Required reading'}</p>
                            <ReadingList items={w.readings} />
                          </>
                        )}
                        {w.optionalReadings && (
                          <>
                            <p className={weekLabel}>Optional reading</p>
                            <ReadingList items={w.optionalReadings} />
                          </>
                        )}
                        {w.objectives && (
                          <>
                            <p className={weekLabel}>Learning objectives</p>
                            <ul className="mt-1 list-disc space-y-0.5 pl-5">
                              {w.objectives.map((o) => (
                                <li key={o}>{o}</li>
                              ))}
                            </ul>
                          </>
                        )}
                        {w.questions && (
                          <>
                            <p className={weekLabel}>Discussion questions</p>
                            <ul className="mt-1 list-disc space-y-0.5 pl-5">
                              {w.questions.map((q) => (
                                <li key={q}>{q}</li>
                              ))}
                            </ul>
                          </>
                        )}
                        {w.assignment && (
                          <p className="mt-3 border-l-2 border-[color:var(--home-accent)] pl-3">
                            <span className="font-semibold">Assessment:</span> {w.assignment}
                          </p>
                        )}
                      </div>
                    </li>
                  ))}
                </ol>
              </section>

              <section id="iscb" className="scroll-mt-8">
                <h2 className={h2}>ISCB Competency</h2>
                <p>
                  The course is designed against the{' '}
                  <a href={ISCB_FRAMEWORK_URL} target="_blank" rel="noopener noreferrer" className={link}>
                    ISCB Competency Framework 3.0
                  </a>
                  . It builds these competencies:
                </p>
                <ul className={`mt-4 divide-y ${rule} border-y ${rule}`}>
                  {c.competencies.map(({ code, how }) => (
                    <li key={code} className="grid gap-1 py-3 sm:grid-cols-[3.5rem_1fr]">
                      <p className="font-mono text-[0.9rem] font-semibold text-[color:var(--home-accent)] sm:pt-0.5">{code}</p>
                      <div>
                        <a href={iscbCompetencies[code].href} target="_blank" rel="noopener noreferrer" className="font-semibold hover:text-[color:var(--home-accent)]">
                          {iscbCompetencies[code].title}
                        </a>
                        <p className="mt-0.5 text-[0.95rem] text-[color:var(--home-muted)]">{how}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </section>

              <section id="assessment" className="scroll-mt-8">
                <h2 className={h2}>Assessment</h2>
                {c.assessmentNote && <p className="mb-4">{c.assessmentNote}</p>}
                <table className="w-full border-collapse text-left text-[0.95rem]">
                  <thead>
                    <tr className={`border-b ${rule}`}>
                      <th className="py-2 pr-4 font-semibold">Component</th>
                      <th className="py-2 pr-4 font-semibold">Weight</th>
                      {showDue && <th className="py-2 pr-4 font-semibold">Due</th>}
                      {showDescription && <th className="py-2 font-semibold">Description</th>}
                    </tr>
                  </thead>
                  <tbody>
                    {c.assessment.map((a) => (
                      <tr key={a.item} className={`border-b ${rule} align-top`}>
                        <td className="py-2.5 pr-4 font-medium">{a.item}</td>
                        <td className="py-2.5 pr-4 font-mono text-[0.9rem]">{a.weight}%</td>
                        {showDue && <td className="py-2.5 pr-4">{a.due}</td>}
                        {showDescription && <td className="py-2.5">{a.description}</td>}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </section>

              <section id="rubric" className="scroll-mt-8">
                <h2 className={h2}>Grading Rubric</h2>
                <p>{c.rubricIntro ?? 'Labs and the capstone are marked against these criteria.'}</p>
                <div className="mt-4 overflow-x-auto">
                  <table className="w-full min-w-[40rem] border-collapse text-left text-[0.85rem] leading-[1.5]">
                    <thead>
                      <tr className={`border-b ${rule}`}>
                        <th className="w-[8.5rem] py-2 pr-3 font-semibold">Criterion</th>
                        {rubricLevels.map((l) => (
                          <th key={l} className="py-2 pr-3 font-semibold">{l}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {rubric.map((r) => (
                        <tr key={r.criterion} className={`border-b ${rule} align-top`}>
                          <td className="py-2.5 pr-3 font-medium">{r.criterion}</td>
                          {r.levels.map((d, i) => (
                            <td key={i} className="py-2.5 pr-3">{d}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {c.rubricNotes?.map((n) => (
                  <p key={n} className="mt-4">{n}</p>
                ))}
                {c.showGradeBands !== false && (
                  <>
                    <p className="mt-6 font-semibold">Final grade</p>
                    <ul className={`mt-2 divide-y ${rule} border-y ${rule} text-[0.95rem]`}>
                      {gradeBands.map((g) => (
                        <li key={g.band} className="grid grid-cols-[6.5rem_1fr] gap-2 py-2">
                          <span className="font-mono text-[0.85rem]">{g.band}</span>
                          <span>{g.grade}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </section>

              <section id="ai" className="scroll-mt-8">
                <h2 className={h2}>Learner Use of Generative AI</h2>
                {policy.lead && <p className="mb-4">{policy.lead}</p>}
                {policy.groups.map((g, i) => (
                  <div key={g.heading ?? i} className="mt-4 first:mt-0">
                    {g.heading && <p className="font-semibold">{g.heading}</p>}
                    <ul className="mt-1.5 list-disc space-y-1.5 pl-5">
                      {g.items.map((x) => (
                        <li key={x}>{x}</li>
                      ))}
                    </ul>
                  </div>
                ))}
                {policy.closing?.map((x) => (
                  <p key={x} className="mt-4">{x}</p>
                ))}
              </section>

              <section id="evaluation" className="scroll-mt-8">
                <h2 className={h2}>Evaluating the Course</h2>
                {evaluation.lead && <p className="mb-3">{evaluation.lead}</p>}
                <ul className="list-disc space-y-1.5 pl-5">
                  {evaluation.items.map((x) => (
                    <li key={x.text}>
                      {x.label && <span className="font-semibold">{x.label}: </span>}
                      {x.text}
                    </li>
                  ))}
                </ul>
              </section>

              <section id="resources" className="scroll-mt-8">
                <h2 className={h2}>Supplementary Resources</h2>
                <ul className={`divide-y ${rule} border-y ${rule}`}>
                  {c.resources.map((r) => (
                    <li key={r.href} className="py-2.5">
                      <a href={r.href} target="_blank" rel="noopener noreferrer" className={link}>
                        {r.label}
                      </a>
                    </li>
                  ))}
                </ul>
                {c.credit && (
                  <p className="mt-5 text-[0.9rem] text-[color:var(--home-muted)]">
                    {c.credit.text}{' '}
                    <a href={c.credit.source.href} target="_blank" rel="noopener noreferrer" className={link}>
                      {c.credit.source.label}
                    </a>
                    , licensed{' '}
                    <a href={c.credit.license.href} target="_blank" rel="noopener noreferrer" className={link}>
                      {c.credit.license.label}
                    </a>
                    .
                  </p>
                )}
              </section>
            </div>

            <hr className="mt-14 border-0 border-t border-[color:var(--home-rule)]" />
            <p className="mt-6 text-[13px] font-semibold">More courses</p>
            <ul className="mt-3 space-y-2 text-[15px]">
              {others.map((o) => (
                <li key={o.slug}>
                  <Link href={`/training/${o.slug}`} className="hover:text-[color:var(--home-accent)]">{o.title}</Link>
                </li>
              ))}
            </ul>
          </article>
        </div>

        <Colophon className="max-w-[48rem]" />
      </div>
    </Shell>
  )
}
