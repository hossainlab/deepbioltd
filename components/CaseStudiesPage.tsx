import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { servicesWithExamples } from '@/lib/services/data'

/**
 * The worked examples, and only those.
 *
 * This page previously listed twenty-four cards, eighteen of which had
 * pdfUrl: '#' — a visitor clicking three quarters of them went nowhere. Every
 * entry here resolves to a real report. The full catalogue lives on /services.
 *
 * Framing note: these are method demonstrations, not client outcomes. No
 * engagement here is attributable to a named client and the data carries no
 * outcome field, so the copy claims what the analysis IS and what it produces.
 */
export const CaseStudiesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-paper">
      <section className="pt-36 pb-16 md:pt-44 md:pb-20">
        <div className="max-w-plate mx-auto px-6 md:px-10">
          <h1 className="font-serif text-[2.75rem] leading-[1.08] tracking-[-0.02em] sm:text-6xl text-ink max-w-[18ch]">
            Read the work before you commission any
          </h1>
          <p className="mt-8 max-w-measure font-serif text-xl leading-[1.6] text-ink-mid">
            {servicesWithExamples.length} analyses with the full report attached
            to each — the same document a client receives at the end of a
            project, figures and methods included.
          </p>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="max-w-plate mx-auto px-6 md:px-10">
          {servicesWithExamples.map((service, i) => {
            const ex = service.example!

            return (
              <article
                key={service.id}
                className="grid gap-8 border-t border-rule py-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16"
              >
                <div className="lg:pt-2">
                  <p className="text-sm text-ink-faint">{service.title}</p>

                  <h2 className="mt-3 font-serif text-2xl md:text-3xl leading-[1.2] text-ink max-w-[22ch]">
                    {ex.title}
                  </h2>

                  <p className="mt-5 max-w-measure text-[0.9375rem] leading-relaxed text-ink-mid">
                    {service.description}
                  </p>

                  <div className="mt-6 grid gap-1 text-sm text-ink-faint sm:grid-cols-[4rem_1fr] sm:gap-x-4">
                    <span>You send</span>
                    <span className="text-ink-mid">{service.input}</span>
                    <span className="mt-1 sm:mt-0">You get</span>
                    <span className="text-ink-mid">{service.output}</span>
                  </div>

                  <a
                    href={ex.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-7 inline-block w-fit border-b border-rule-strong text-sm font-semibold text-ink transition-colors hover:border-ink"
                  >
                    Read the full report
                  </a>
                </div>

                <figure className="plate">
                  <div className="relative aspect-[4/3] w-full bg-white">
                    <Image
                      src={ex.figure}
                      alt={ex.figureAlt}
                      fill
                      sizes="(min-width: 1024px) 620px, 100vw"
                      className="object-contain p-3"
                      priority={i === 0}
                    />
                  </div>
                  <figcaption className="text-ink-mid max-w-measure">
                    <span className="fig-no text-ink">Fig. {i + 1}</span>{' '}
                    {ex.figureAlt}
                  </figcaption>
                </figure>
              </article>
            )
          })}

          <div className="border-t border-rule pt-8">
            <p className="max-w-measure text-[0.9375rem] leading-relaxed text-ink-mid">
              These six are the analyses we have published worked examples for.
              We run twenty in total.
            </p>
            <p className="mt-6 text-[0.9375rem]">
              <Link
                href="/services"
                className="border-b border-rule-strong text-ink transition-colors hover:border-ink"
              >
                The full catalogue
              </Link>
              <span className="mx-3 text-ink-faint">/</span>
              <Link
                href="/contact"
                className="border-b border-rule-strong text-ink transition-colors hover:border-ink"
              >
                Scope a project
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
