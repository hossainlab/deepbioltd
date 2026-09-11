import React from 'react';
import Link from 'next/link';

/**
 * Closing ask. The page previously ran 6,320px and ended without one.
 */
export const CtaBlock: React.FC = () => {
  return (
    <div className="max-w-plate mx-auto px-6 md:px-10">
      <div className="border-t border-deep-rule pt-8">
        <h2 className="font-serif text-3xl md:text-[2.75rem] leading-[1.12] tracking-[-0.015em] text-paper max-w-3xl">
          Tell us what you&rsquo;re working on.
        </h2>

        <p className="mt-6 max-w-measure font-serif text-lg md:text-xl leading-[1.6] text-paper/70">
          Send the data type, the volume and the question. You get a written
          scope with a fixed price back. If we are not the right fit, we say so.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
          <Link
            href="/contact"
            className="bg-paper px-7 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-white"
          >
            Start a project
          </Link>
          <a
            href="mailto:info@deepbioltd.com"
            className="border-b border-deep-rule pb-0.5 text-sm font-semibold text-paper/80 transition-colors hover:border-paper hover:text-paper"
          >
            info@deepbioltd.com
          </a>
        </div>
      </div>
    </div>
  );
};
