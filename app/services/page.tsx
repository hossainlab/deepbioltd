import type { Metadata } from 'next'
import { Shell } from '@/components/minimal/Shell'
import { Masthead } from '@/components/minimal/Masthead'
import { Colophon } from '@/components/minimal/Colophon'
import { services, serviceCategories } from '@/lib/services/data'

export const metadata: Metadata = {
  title: 'Services | DeepBio',
  description: 'Bioinformatics and computational biology analyses run by DeepBio in Dhaka, Bangladesh.',
}

/** Previous version: backups/homepage-2026-11-15/services/page.tsx (components/ServicesPage.tsx). */

export default function ServicesIndex() {
  return (
    <Shell>
      <div className="text-[color:var(--home-ink)]">
        <Masthead />

        <main className="mx-auto w-full max-w-[36rem] px-4 sm:px-0">
          <div className="pb-6 pt-8 text-center">
            <h1 className="text-[1.05rem] text-[color:var(--home-accent)]">Services</h1>
            <p className="mt-2 text-[13px] text-[color:var(--home-muted)]">
              Analyses we run for labs, hospitals and companies. Six include a worked example you can read first.
            </p>
          </div>

          {serviceCategories.map((cat) => {
            const items = services.filter((s) => s.category === cat)
            if (!items.length) return null
            return (
              <section key={cat} aria-labelledby={`cat-${cat}`} className="pt-6">
                <h2
                  id={`cat-${cat}`}
                  className="border-b border-[color:var(--home-rule)] pb-2 text-center text-base font-bold"
                >
                  {cat}
                </h2>
                <ul>
                  {items.map((s) => (
                    <li key={s.id} className="border-b border-[color:var(--home-rule-soft)] py-5 last:border-b-0">
                      <h3 className="text-[1.05rem] font-medium leading-snug tracking-[-0.01em]">{s.title}</h3>
                      <p className="mt-2 text-[13.5px] leading-[1.55]">{s.description}</p>
                      <dl className="mt-2 grid grid-cols-[4.5rem_1fr] gap-x-2 gap-y-0.5 text-[12.5px] leading-5 text-[color:var(--home-muted)]">
                        <dt>You send</dt>
                        <dd>{s.input}</dd>
                        <dt>You get</dt>
                        <dd>{s.output}</dd>
                      </dl>
                      {s.example && (
                        <a
                          href={s.example.pdf}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-3 inline-block text-[13px] font-medium text-[color:var(--home-accent)] hover:opacity-70"
                        >
                          Worked example: {s.example.title} (PDF) →
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </section>
            )
          })}

          <p className="mt-10 border-t border-[color:var(--home-rule)] pt-6 text-center text-[14px] leading-[1.6]">
            Need something not listed, or a custom model? Write to{' '}
            <a
              href="mailto:info@deepbioltd.com?subject=Service%20enquiry"
              className="text-[color:var(--home-accent)] underline underline-offset-4"
            >
              info@deepbioltd.com
            </a>{' '}
            with a short description of your data and question.
          </p>
        </main>

        <Colophon />
      </div>
    </Shell>
  )
}
