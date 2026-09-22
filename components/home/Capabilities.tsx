import React from 'react';
import Link from 'next/link';
import { capabilities } from '@/lib/home/capabilities';
import { SectionHeading } from './SectionHeading';

/**
 * A specification table, not a card grid.
 *
 * The thing a PI actually needs to know before emailing is what to send and
 * what comes back, and that data already exists on every service. Six identical
 * rounded cards each holding one sentence would have said less and taken more
 * room. The in/out pair is set in mono because it is interface with the lab,
 * not prose.
 */
export const Capabilities: React.FC = () => {
  return (
    <div className="max-w-plate mx-auto px-6 md:px-10">
      <SectionHeading
        title="The data exists. The analysis is the hard part."
        deck="Sequencing runs finish and the files sit there. These are the six things we are asked for most often, and what each one takes and returns."
      />

      <dl className="mt-14 border-t border-rule">
        {capabilities.map((c) => (
          <div
            key={c.label}
            className="grid gap-x-10 gap-y-4 border-b border-rule py-7 md:grid-cols-[16rem_1fr_15rem]"
          >
            <dt className="text-lg font-semibold leading-snug text-ink">
              {c.label}
            </dt>

            <dd className="max-w-measure text-[0.9375rem] leading-relaxed text-slate">
              {c.line}
            </dd>

            <dd className="data space-y-1.5 text-slate">
              <span className="block">
                <span className="text-brand">in</span>&nbsp;&nbsp;{c.input}
              </span>
              <span className="block">
                <span className="text-brand">out</span>&nbsp;&nbsp;{c.output}
              </span>
            </dd>
          </div>
        ))}
      </dl>

      <p className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 text-[0.9375rem]">
        <Link href="/services" className="link-rule">
          All twenty services
        </Link>
        <Link href="/methodology" className="link-rule">
          How we approach a project
        </Link>
      </p>
    </div>
  );
};
