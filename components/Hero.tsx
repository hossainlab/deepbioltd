import React from 'react'
import Link from 'next/link'
import { services, servicesWithExamples } from '@/lib/services/data'

/**
 * Two-column editorial opening: the claim on the left, the evidence for it on
 * the right, on one screen.
 *
 * Earlier versions put a raw DESeq2 volcano plot here. It was real output,
 * which is why it seemed like the honest choice — but a matplotlib export is a
 * working artifact, not a designed one: it carries its own bold sans title
 * fighting the page serif, sits on a white ground that reads as a box, and
 * renders 8pt gene labels at display scale.
 *
 * Removing it left the right half empty. The fix was not a new asset but
 * moving content that was already on the page: the downloadable-report index
 * used to sit full-width below the fold, where it read as an afterthought.
 * Beside the headline it does two jobs — it fills the measure, and it puts a
 * checkable claim next to an unprovable one.
 */
export const Hero: React.FC = () => {
  const examples = servicesWithExamples;

  return (
    <header className="bg-paper pt-36 pb-20 md:pt-44 md:pb-24">
      <div className="max-w-plate mx-auto grid gap-16 px-6 md:px-10 lg:grid-cols-[1.02fr_0.98fr] lg:gap-20">
        {/* Claim */}
        <div>
          <h1 className="font-serif text-[2.75rem] leading-[1.08] tracking-[-0.02em] sm:text-6xl lg:text-[4rem] text-ink text-balance">
            Your sequencer produces terabytes. Nobody reads them.
          </h1>

          <p className="mt-10 max-w-measure font-serif text-xl leading-[1.6] text-ink-mid">
            We turn genomic, transcriptomic and structural data into findings you
            can put in front of a reviewer &mdash; with the pipelines, the figures
            and the paper trail behind them.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <Link
              href="/contact"
              className="bg-brand-primary px-7 py-3.5 text-sm font-semibold text-paper transition-colors hover:bg-[#1a4b75]"
            >
              Start a project
            </Link>
            <Link
              href="/services"
              className="border-b border-rule-strong pb-0.5 text-sm font-semibold text-ink transition-colors hover:border-ink"
            >
              See all {services.length} analyses
            </Link>
          </div>

          {/* Also does structural work: the evidence column runs taller than
              the claim, and this closes most of the gap at the foot of it. */}
          <p className="mt-12 border-t border-rule pt-6 text-sm leading-relaxed text-ink-mid">
            Not sure which analysis you need? Describe the data and the question
            to{' '}
            <a
              href="mailto:info@deepbioltd.com"
              className="border-b border-rule-strong text-ink transition-colors hover:border-ink"
            >
              info@deepbioltd.com
            </a>{' '}
            and we will tell you &mdash; or tell you it is not something we
            should take on.
          </p>
        </div>

        {/* Evidence */}
        <div className="lg:pt-3">
          <p className="border-b border-rule pb-4 text-sm text-ink-mid">
            {examples.length} of our {services.length} analyses ship a full report
            you can read before commissioning anything
          </p>

          <ul>
            {examples.map((service) => (
              <li key={service.id} className="border-b border-rule/70">
                <a
                  href={service.example!.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-baseline justify-between gap-6 py-4"
                >
                  <span>
                    <span className="block font-serif text-[1.0625rem] leading-[1.45] text-ink decoration-rule-strong underline-offset-4 group-hover:underline">
                      {service.example!.title}
                    </span>
                    <span className="mt-1 block text-sm text-ink-faint">
                      {service.title}
                    </span>
                  </span>
                  <span
                    aria-hidden
                    className="shrink-0 text-xs text-ink-faint transition-colors group-hover:text-ink"
                  >
                    PDF
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};
