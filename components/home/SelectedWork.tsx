import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { servicesWithExamples } from '@/lib/services/data';
import { SectionHeading } from './SectionHeading';

/**
 * Chosen by id, not by catalogue order.
 *
 * The third slot used to fall to the polygenic-risk study, whose example figure
 * is the workflow schematic — a diagram of boxes with its own baked-in title
 * and sublabels that land near 7pt at plate width. The PCSK9 structure is a
 * result rather than a diagram of a process, and it is legible at this size.
 */
const FEATURED_IDS = ['deseq2-rna-seq', 'gene-regulatory-network', 'binder-design'];

const featured = FEATURED_IDS.map((id) => {
  const service = servicesWithExamples.find((s) => s.id === id);
  if (!service) {
    throw new Error(`Unknown featured service id: ${id}`);
  }
  return service;
});

/**
 * Three plates, each linked to the report it came out of.
 *
 * Method demonstrations, not client outcomes — the case-study data has no
 * outcome field and no named client, and inventing one here would undo the
 * point of the rebuild.
 *
 * The figures are real matplotlib exports on white grounds, so they get a white
 * panel and a hairline rather than being dropped onto the page ground, where
 * their own backgrounds would read as unexplained boxes.
 */
export const SelectedWork: React.FC = () => {
  return (
    <div className="max-w-plate mx-auto px-6 md:px-10">
      <SectionHeading
        title="What actually lands in your inbox."
        deck="Three analyses with the full report attached to each. Not a capability list — the output."
      />

      <div className="mt-14 grid gap-10 md:grid-cols-3">
        {featured.map((service, i) => {
          const item = service.example!;
          return (
            <figure key={service.id} className="flex flex-col">
              {/* Fixed ratio so the three captions start at one height. The
                  source figures have different native ratios, so contain
                  rather than crop — never crop a scientific figure. */}
              <div className="relative aspect-[4/3] w-full border border-rule bg-white">
                <Image
                  src={item.figure}
                  alt={item.figureAlt}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-contain p-3"
                />
              </div>

              <figcaption className="data mt-4 text-slate">
                <span className="fig-no">Fig. {i + 1}</span>
                <span className="ml-3">{service.title}</span>
              </figcaption>

              <h3 className="mt-3 text-lg font-semibold leading-snug text-ink">
                {item.title}
              </h3>
              <p className="mt-2 text-[0.9375rem] leading-relaxed text-slate">
                {service.description}
              </p>

              <a
                href={item.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="link-rule mt-5 inline-block w-fit pt-1 text-[0.9375rem]"
              >
                Read the report
              </a>
            </figure>
          );
        })}
      </div>

      <p className="mt-10 text-[0.9375rem]">
        <Link href="/case-studies" className="link-rule">
          All case studies
        </Link>
      </p>
    </div>
  );
};
