import React from 'react';

/**
 * Contact block, now the body of /contact rather than a homepage section.
 *
 * The "Book Consultation" control used to be a <button> with no handler and no
 * href — the primary commercial CTA did nothing. There is no scheduling tool in
 * the repo and adding one would mean a new third-party dependency, so it is now
 * a mailto pre-filled with the four things we need in order to quote.
 *
 * TODO(deepbio): if a real booking URL exists (Cal.com, Calendly), swap the
 * href on "Request a scoping call" for it.
 */

const BOOKING_MAILTO =
  'mailto:info@deepbioltd.com?subject=Consultation%20request' +
  '&body=What%20data%20do%20you%20have%3F%0A%0A' +
  'How%20much%20of%20it%3F%0A%0A' +
  'What%20question%20do%20you%20need%20answered%3F%0A%0A' +
  'Any%20deadline%3F';

const channels = [
  {
    title: 'Start a project',
    line: 'Scoping, quotes and anything analysis-related.',
    value: 'services@deepbioltd.com',
    href: 'mailto:services@deepbioltd.com?subject=Project%20enquiry',
  },
  {
    title: 'General enquiries',
    line: 'Partnerships, academic collaboration, press and everything else.',
    value: 'info@deepbioltd.com',
    href: 'mailto:info@deepbioltd.com',
  },
  {
    title: 'By phone',
    line: 'Dhaka office hours, Sunday to Thursday.',
    value: '+880 1843 381652',
    href: 'tel:+8801843381652',
  },
];

export const Contact: React.FC = () => {
  return (
    <div className="max-w-plate mx-auto px-6 md:px-10">
      <h1 className="font-serif text-[2.75rem] leading-[1.08] tracking-[-0.02em] sm:text-6xl text-ink max-w-[16ch]">
        Tell us what you&rsquo;re working on.
      </h1>

      <p className="mt-8 max-w-measure font-serif text-xl leading-[1.6] text-ink-mid">
        Send the data type, the volume and the question you need answered. You
        get a written scope with a fixed price back. If we are not the right
        fit, we will say so.
      </p>

      <div className="mt-10">
        <a
          href={BOOKING_MAILTO}
          className="inline-block bg-brand-primary px-7 py-3.5 text-sm font-semibold text-paper transition-colors hover:bg-[#1a4b75]"
        >
          Request a scoping call
        </a>
      </div>

      <dl className="mt-20 grid gap-x-16 md:grid-cols-3">
        {channels.map((c) => (
          <div key={c.title} className="border-t border-rule py-7">
            <dt className="font-serif text-xl text-ink">{c.title}</dt>
            <dd className="mt-2 text-[0.9375rem] leading-relaxed text-ink-mid">
              {c.line}
              <a
                href={c.href}
                className="mt-3 block w-fit border-b border-rule-strong text-ink transition-colors hover:border-ink"
              >
                {c.value}
              </a>
            </dd>
          </div>
        ))}
      </dl>

      <p className="mt-12 max-w-measure border-t border-rule pt-6 text-sm text-ink-faint">
        DeepBio Limited operates from Dhaka, Bangladesh, working with research
        groups internationally.
        {/* TODO(deepbio): add the registered office address and company
            registration number here — international B2B buyers check for both. */}
      </p>
    </div>
  );
};
