import React from 'react'
import Link from 'next/link'
import {
  services,
  serviceCategories,
  servicesWithExamples,
} from '@/lib/services/data'

/**
 * The service catalogue, grouped by discipline.
 *
 * Replaces a page that carried twelve hand-written capability cards plus a
 * "Real-World Impact" block of six unverifiable client stories. Both are gone:
 * the catalogue is now the same twenty analyses listed on /case-studies, so
 * the two pages can no longer disagree, and the only claims made are what an
 * analysis does, what it takes in and what it returns.
 */
export const ServicesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-paper">
      <section className="pt-36 pb-16 md:pt-44 md:pb-20">
        <div className="max-w-plate mx-auto px-6 md:px-10">
          <h1 className="font-serif text-[2.75rem] leading-[1.08] tracking-[-0.02em] sm:text-6xl text-ink max-w-[18ch]">
            Twenty analyses we run
          </h1>
          <p className="mt-8 max-w-measure font-serif text-xl leading-[1.6] text-ink-mid">
            Each one has a defined input and a defined deliverable. Six ship a
            worked example you can download and read before you commit to
            anything.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <Link
              href="/contact"
              className="bg-brand-primary px-7 py-3.5 text-sm font-semibold text-paper transition-colors hover:bg-[#1a4b75]"
            >
              Scope a project
            </Link>
            <Link
              href="/case-studies"
              className="border-b border-rule-strong pb-0.5 text-sm font-semibold text-ink transition-colors hover:border-ink"
            >
              See the {servicesWithExamples.length} worked examples
            </Link>
          </div>
        </div>
      </section>

      {serviceCategories.map((category) => {
        const group = services.filter((s) => s.category === category)

        return (
          <section key={category} className="pb-16 md:pb-20">
            <div className="max-w-plate mx-auto px-6 md:px-10">
              <h2 className="border-t border-rule pt-6 font-serif text-2xl text-ink">
                {category}
              </h2>

              <dl className="mt-6 grid gap-x-16 md:grid-cols-2">
                {group.map((s) => (
                  <div key={s.id} className="border-t border-rule py-7">
                    <dt className="flex flex-wrap items-baseline gap-x-3">
                      <span className="font-serif text-xl leading-snug text-ink">
                        {s.title}
                      </span>
                      {s.example && (
                        <span className="text-xs text-signal">Worked example</span>
                      )}
                    </dt>

                    <dd>
                      <p className="mt-2 max-w-measure text-[0.9375rem] leading-relaxed text-ink-mid">
                        {s.description}
                      </p>

                      <div className="mt-4 grid gap-1 text-sm text-ink-faint sm:grid-cols-[4rem_1fr] sm:gap-x-4">
                        <span>You send</span>
                        <span className="text-ink-mid">{s.input}</span>
                        <span className="mt-1 sm:mt-0">You get</span>
                        <span className="text-ink-mid">{s.output}</span>
                      </div>

                      {s.example && (
                        <p className="mt-4 text-sm text-ink-faint">{s.example.title}</p>
                      )}

                      {s.example && (
                        <a
                          href={s.example.pdf}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-2 inline-block w-fit border-b border-rule-strong text-sm font-semibold text-ink transition-colors hover:border-ink"
                        >
                          {/* Never lowercase the title — it mangles acronyms
                              like MASH, PCSK9 and GBM. */}
                          Read the worked example
                        </a>
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </section>
        )
      })}

      <section className="pb-24 md:pb-32">
        <div className="max-w-plate mx-auto px-6 md:px-10">
          <div className="border-t border-rule pt-8">
            <h2 className="font-serif text-3xl text-ink max-w-[22ch]">
              Not listed? Ask anyway.
            </h2>
            <p className="mt-5 max-w-measure text-[0.9375rem] leading-relaxed text-ink-mid">
              This is what we run most often, not the limit of what we can do.
              If your analysis is not here, describe it and we will tell you
              honestly whether it is something we should take on.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-block bg-brand-primary px-7 py-3.5 text-sm font-semibold text-paper transition-colors hover:bg-[#1a4b75]"
            >
              Describe your project
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
