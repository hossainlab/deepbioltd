import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Shell } from '@/components/minimal/Shell'
import { Masthead } from '@/components/minimal/Masthead'
import { Colophon } from '@/components/minimal/Colophon'
import { projects } from '@/lib/research/projects'

type Params = { slug: string }

// Only the slugs in lib/research/projects.ts exist; anything else is a hard 404.
export const dynamicParams = false

export function generateStaticParams(): Params[] {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params
  const p = projects.find((x) => x.slug === slug)
  if (!p) return {}
  return { title: `${p.title} | DeepBio`, description: p.subtitle }
}

const sections = [
  { id: 'problem', label: 'The problem' },
  { id: 'approach', label: 'Our approach' },
  { id: 'models', label: 'Models' },
  { id: 'focus', label: 'Current focus' },
  { id: 'collaborate', label: 'Collaborate' },
]

export default async function ResearchArticle({ params }: { params: Promise<Params> }) {
  const { slug } = await params
  const p = projects.find((x) => x.slug === slug)
  if (!p) notFound()

  const words = [p.subtitle, p.problem, p.approach, ...p.models, ...p.focus].join(' ').split(/\s+/).length
  const minutes = Math.max(1, Math.round(words / 220))
  const others = projects.filter((x) => x.slug !== p.slug)

  return (
    <Shell>
      <div className="text-[color:var(--home-ink)]">
        <Masthead />

        <div className="relative mx-auto w-full max-w-[76rem] px-4 sm:px-6">
          {/* Contents rail, desktop only */}
          <aside className="absolute left-6 top-0 hidden w-[10.5rem] xl:block">
            <nav aria-label="Contents" className="sticky top-8 border-r border-[color:var(--home-rule-soft)] pr-4 pt-2">
              <Link href="/research" className="text-[13px] text-[color:var(--home-muted)] hover:text-[color:var(--home-accent)]">
                ← Back to Research
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
            <Link href="/research" className="text-[13px] text-[color:var(--home-muted)] hover:text-[color:var(--home-accent)] xl:hidden">
              ← Back to Research
            </Link>

            <p className="mt-6 text-[13px] uppercase tracking-wide text-[color:var(--home-accent)] xl:mt-0">{p.area}</p>
            <h1 className="mt-3 text-[2rem] font-bold leading-[1.12] tracking-[-0.025em] sm:text-[2.625rem]">{p.title}</h1>
            <p className="mt-5 text-[1.15rem] italic leading-[1.5] text-[color:var(--home-ink)] opacity-90 sm:text-[1.3rem]">{p.subtitle}</p>
            <p className="mt-6 text-[15px] font-semibold">DeepBio</p>
            <p className="mt-1 text-[13px] text-[color:var(--home-muted)]">{minutes} min read · Dhaka, Bangladesh</p>

            <div className="mt-10 space-y-12 text-[1.05rem] leading-[1.7] sm:text-[1.15rem]">
              <section id="problem" className="scroll-mt-8">
                <h2 className="mb-3 text-[1.4rem] font-semibold tracking-[-0.015em]">The problem</h2>
                <p>{p.problem}</p>
              </section>

              <section id="approach" className="scroll-mt-8">
                <h2 className="mb-3 text-[1.4rem] font-semibold tracking-[-0.015em]">Our approach</h2>
                <p>{p.approach}</p>
              </section>

              <section id="models" className="scroll-mt-8">
                <h2 className="mb-3 text-[1.4rem] font-semibold tracking-[-0.015em]">Models</h2>
                <ul className="divide-y divide-[color:var(--home-rule-soft)] border-y border-[color:var(--home-rule-soft)]">
                  {p.models.map((m) => (
                    <li key={m} className="py-2.5 font-mono text-[0.9rem]">{m}</li>
                  ))}
                </ul>
              </section>

              <section id="focus" className="scroll-mt-8">
                <h2 className="mb-3 text-[1.4rem] font-semibold tracking-[-0.015em]">Current focus</h2>
                <ul className="list-disc space-y-1.5 pl-5">
                  {p.focus.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </section>

              <section id="collaborate" className="scroll-mt-8">
                <h2 className="mb-3 text-[1.4rem] font-semibold tracking-[-0.015em]">Collaborate</h2>
                <p>
                  We work with hospitals, universities and industry partners on this program. To discuss data,
                  compute or co-development, write to{' '}
                  <a href="mailto:info@deepbioltd.com" className="text-[color:var(--home-accent)] underline underline-offset-4">
                    info@deepbioltd.com
                  </a>
                  .
                </p>
              </section>
            </div>

            <hr className="mt-14 border-0 border-t border-[color:var(--home-rule)]" />
            <p className="mt-6 text-[13px] font-semibold">More research</p>
            <ul className="mt-3 space-y-2 text-[15px]">
              {others.map((o) => (
                <li key={o.slug}>
                  <Link href={`/research/${o.slug}`} className="hover:text-[color:var(--home-accent)]">{o.title}</Link>
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
