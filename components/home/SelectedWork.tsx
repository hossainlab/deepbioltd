import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { servicesWithExamples } from '@/lib/services/data';
import { SectionHeading } from './SectionHeading';

/**
 * Three plates, numbered continuously with the rest of the page.
 *
 * Method demonstrations, not client outcomes — the underlying case-study data
 * has no outcome field and no named client, and inventing one here would undo
 * the point of the rebuild. Every plate links to a real PDF.
 */
export const SelectedWork: React.FC = () => {
  return (
    <div className="max-w-plate mx-auto px-6 md:px-10">
      <SectionHeading
        title="What actually lands in your inbox."
        deck="Three analyses with the full report attached to each. Not a capability list — the output."
      />

      <div className="mt-16 grid gap-12 md:grid-cols-3 md:gap-10">
        {servicesWithExamples.slice(0, 3).map((service, i) => {
          const item = service.example!;
          return (
          <figure key={service.id} className="plate flex flex-col">
            {/* Fixed aspect box so all three plates share a baseline and the
                captions start at the same height. The source figures have
                different native ratios and different amounts of built-in
                whitespace, so object-contain rather than a crop — never crop
                a scientific figure. */}
            <div className="relative aspect-[4/3] w-full bg-white">
              <Image
                src={item.figure}
                alt={item.figureAlt}
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-contain p-3"
              />
            </div>

            <figcaption className="text-ink-mid">
              <span className="fig-no text-ink">Fig. {i + 2}</span> {service.description}
            </figcaption>

            <h3 className="mt-5 font-serif text-lg leading-snug text-ink">
              {item.title}
            </h3>
            <p className="mt-1 text-sm text-ink-faint">{service.title}</p>

            <a
              href={item.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto pt-4 inline-block w-fit border-b border-rule-strong text-sm font-semibold text-ink transition-colors hover:border-ink"
            >
              Read the report
            </a>
          </figure>
          );
        })}
      </div>

      <p className="mt-12 text-[0.9375rem]">
        <Link
          href="/case-studies"
          className="border-b border-rule-strong text-ink transition-colors hover:border-ink"
        >
          All case studies
        </Link>
      </p>
    </div>
  );
};
