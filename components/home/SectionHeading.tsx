import React from 'react';

interface SectionHeadingProps {
  title: string;
  /** Standfirst. One or two sentences, set larger than body. */
  deck?: string;
  tone?: 'light' | 'dark';
}

/**
 * A rule, a heading, a standfirst. That is the whole device.
 *
 * The previous version stacked a tracked-out uppercase eyebrow above every
 * heading and coloured the second clause with a gradient. Both are decoration
 * that appears regardless of content — the eyebrow restated the nav label and
 * the gradient did the same trick six times on one page. The rule is doing
 * real work here: it marks where one section ends and the next begins, which
 * is what lets the page drop card borders everywhere else.
 */
export const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  deck,
  tone = 'light',
}) => {
  const isDark = tone === 'dark';

  return (
    <div className={`border-t pt-8 ${isDark ? 'border-deep-rule' : 'border-rule'}`}>
      <h2
        className={`font-serif text-3xl md:text-[2.75rem] leading-[1.12] tracking-[-0.015em] max-w-3xl ${
          isDark ? 'text-paper' : 'text-ink'
        }`}
      >
        {title}
      </h2>

      {deck && (
        <p
          className={`mt-6 font-serif text-lg md:text-xl leading-[1.6] max-w-measure ${
            isDark ? 'text-paper/70' : 'text-ink-mid'
          }`}
        >
          {deck}
        </p>
      )}
    </div>
  );
};
