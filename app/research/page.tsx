import type { Metadata } from 'next'
import Link from 'next/link'
import { Shell } from '@/components/minimal/Shell'
import { Masthead } from '@/components/minimal/Masthead'
import { Colophon } from '@/components/minimal/Colophon'
import { projects } from '@/lib/research/projects'

export const metadata: Metadata = {
  title: 'Research | DeepBio',
  description: 'Active research programs at DeepBio.',
}

/** Previous version: backups/homepage-2026-11-15/research/page.tsx */

function Entry({
  title,
  meta,
  summary,
  href,
}: {
  title: string
  meta: string
  summary: string
  href: string
}) {
  return (
    <article className="border-b border-[color:var(--home-rule)] py-8 first:pt-0 last:border-b-0 last:pb-0">
      <h2 className="text-[1.25rem] font-medium leading-[1.3] tracking-[-0.01em]">
        <Link href={href} className="transition-colors hover:text-[color:var(--home-accent)]">
          {title}
        </Link>
      </h2>
      <p className="mt-1.5 text-[13px] leading-5 text-[color:var(--home-muted)]">{meta}</p>
      <p className="mt-3 text-[13.5px] leading-[1.55]">{summary}</p>
      <Link
        href={href}
       
        className="mt-4 inline-block text-[13.5px] font-medium text-[color:var(--home-accent)] hover:opacity-70"
      >
        Continue reading →
      </Link>
    </article>
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

          {projects.map((p) => (
            <Entry
              key={p.slug}
              title={p.title}
              meta={`${p.area} · Active program`}
              summary={p.subtitle}
              href={`/research/${p.slug}`}
            />
          ))}
        </main>

        <Colophon />
      </div>
    </Shell>
  )
}
