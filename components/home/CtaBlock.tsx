import React from 'react';
import Link from 'next/link';

/** Closing ask. The page previously ran 6,320px and ended without one. */
export const CtaBlock: React.FC = () => {
  return (
    <div className="max-w-plate mx-auto px-6 md:px-10">
      <div className="rung-dark max-w-[18rem]" aria-hidden />

      <div className="mt-8 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-20">
        <div>
          <h2 className="text-section max-w-[18ch] text-on-deep">
            Tell us what you&rsquo;re working on.
          </h2>

          <p className="mt-5 max-w-measure text-deck text-on-deep-mid">
            Send the data type, the volume and the question. You get a written
            scope with a fixed price back. If we are not the right fit, we say so.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4 lg:justify-end">
          <Link href="/contact" className="btn-light">
            Start a project
          </Link>
          <a href="mailto:info@deepbioltd.com" className="link-rule-deep text-[0.9375rem]">
            info@deepbioltd.com
          </a>
        </div>
      </div>
    </div>
  );
};
