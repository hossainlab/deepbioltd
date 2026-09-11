import React from 'react';
import Link from 'next/link';
import { capabilities } from '@/lib/home/capabilities';
import { SectionHeading } from './SectionHeading';

/**
 * A definition list, not a card grid.
 *
 * Six capabilities, each a term and its gloss, separated by hairlines. The
 * twelve-card icon grid lives on /services; repeating that markup with fewer
 * cards would have changed the count without changing the language.
 */
export const Capabilities: React.FC = () => {
  return (
    <div className="max-w-plate mx-auto px-6 md:px-10">
      <SectionHeading
        title="The data exists. The analysis is the hard part."
        deck="Sequencing runs finish and the files sit there. These are the six things we are asked for most often."
      />

      <dl className="mt-16 grid gap-x-16 md:grid-cols-2">
        {capabilities.map((c) => (
          <div
            key={c.label}
            className="grid gap-2 border-t border-rule py-7 md:grid-cols-[13rem_1fr] md:gap-8"
          >
            <dt className="font-serif text-xl leading-snug text-ink">{c.label}</dt>
            <dd className="text-[0.9375rem] leading-relaxed text-ink-mid max-w-measure">
              {c.line}
            </dd>
          </div>
        ))}
      </dl>

      <p className="mt-10 text-[0.9375rem] text-ink-mid">
        <Link
          href="/services"
          className="border-b border-rule-strong text-ink transition-colors hover:border-ink"
        >
          All twelve services
        </Link>
        <span className="mx-3 text-ink-faint">/</span>
        <Link
          href="/methodology"
          className="border-b border-rule-strong text-ink transition-colors hover:border-ink"
        >
          How we approach a project
        </Link>
      </p>
    </div>
  );
};
