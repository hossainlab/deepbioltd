import React from 'react'
import Link from 'next/link'
import { services, servicesWithExamples } from '@/lib/services/data'
import { ContactMark } from '@/components/brand/ContactMark'

/**
 * The opening is a navy band because that is where the mark lives: the logo is
 * a blue monoline drawing, and on a white ground at nav size it is a small blue
 * smudge. Given a dark field it reads, and the rest of the page can stay light.
 *
 * One bold element, the contact diagram. Everything beside it is type and a
 * hairline.
 *
 * The line this opening used to carry — "Your sequencer produces terabytes.
 * Nobody reads them." — sold an analysis service: send files, get figures. It
 * was a good line for that business and it is the wrong one for this company,
 * which is not competing on turnaround against every other bioinformatics shop.
 * The claim now is the gap the company exists to close, and the deck resolves
 * it. The evidence under both is unchanged and still derived from the
 * catalogue, because a claim this size needs the counts to be real.
 */

/** The worked example that carries the structural work, not the statistics. */
const heroExample =
  servicesWithExamples.find((s) => s.id === 'binder-design') ?? servicesWithExamples[0]

export const Hero: React.FC = () => (
  <header className="on-deep relative overflow-hidden bg-abyss pt-28 pb-14 md:pt-32 md:pb-20">
    <div className="max-w-plate mx-auto grid items-center gap-14 px-6 md:px-10 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
      <div>
        {/* The company's category line, marked by the rung. This is the one
            page where a descriptor above the headline earns its place: it is
            what DeepBio is, not a restatement of the nav label below it. */}
        <div className="flex items-center gap-5">
          <span className="rung-dark w-[61px] shrink-0" aria-hidden />
          <p className="data text-on-deep-mid">Foundational AI for Life Sciences</p>
        </div>

        <h1 className="mt-7 max-w-[19ch] text-display text-on-deep">
          The models that read biology are open to everyone. Almost no lab here
          is using them.
        </h1>

        <p className="mt-6 max-w-[54ch] text-deck text-on-deep-mid">
          DeepBio runs protein-structure, sequence and single-cell foundation
          models on South Asian data &mdash; and hands back the structures, the
          ranked candidates and the paper trail behind them.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Link href="/contact" className="btn-light">
            Start a project
          </Link>
          <Link href="/services" className="btn-outline-light">
            See all {services.length} analyses
          </Link>
        </div>

        <p className="data mt-9 max-w-[62ch] border-t border-deep-rule pt-5 leading-relaxed text-on-deep-faint">
          {services.length} analyses in the catalogue &nbsp;/&nbsp;{' '}
          {servicesWithExamples.length} ship a full report you can read before
          commissioning anything
        </p>
      </div>

      {/* The diagram is drawn rather than measured, so the caption sends anyone
          who wants the real numbers to the report the shape stands for. */}
      <figure className="lg:pl-4">
        <ContactMark className="w-full h-auto" />
        <figcaption className="data mt-4 flex flex-wrap items-baseline gap-x-3 gap-y-1 border-t border-deep-rule pt-4 text-on-deep-faint">
          <span className="text-beam">Structure-based design</span>
          <span>{heroExample.example!.title}</span>
          <a
            href={heroExample.example!.pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="link-rule-deep ml-auto font-normal"
          >
            Read the report
          </a>
        </figcaption>
      </figure>
    </div>
  </header>
)
