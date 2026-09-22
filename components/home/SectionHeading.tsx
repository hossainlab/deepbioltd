import React from 'react';

interface SectionHeadingProps {
  title: string;
  /** Standfirst. One or two sentences, set larger than body. */
  deck?: string;
  tone?: 'light' | 'dark';
}

/**
 * The rung, the heading, the standfirst.
 *
 * The rung is the logo's own device — the interval ticks between the two
 * strands — doing structural work: it marks where a section begins, which is
 * what lets the rest of the page drop card borders entirely. It replaced a
 * tracked-out uppercase eyebrow that restated the nav label six times a page.
 */
export const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  deck,
  tone = 'light',
}) => {
  const isDark = tone === 'dark';

  return (
    <div>
      <div className={isDark ? 'rung-dark max-w-[18rem]' : 'rung max-w-[18rem]'} aria-hidden />

      <h2
        className={`mt-8 text-section max-w-[22ch] ${
          isDark ? 'text-on-deep' : 'text-ink'
        }`}
      >
        {title}
      </h2>

      {deck && (
        <p
          className={`mt-5 max-w-measure text-deck ${
            isDark ? 'text-on-deep-mid' : 'text-slate'
          }`}
        >
          {deck}
        </p>
      )}
    </div>
  );
};
