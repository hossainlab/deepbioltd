import React from 'react';
import Image from 'next/image';
import { processSteps } from '@/lib/home/process';
import { SectionHeading } from './SectionHeading';

/**
 * The one place on the page that carries numbers, because this is the one
 * place the content is genuinely a sequence. Numbering the capability list or
 * the section headers would be ornament wearing the costume of structure.
 *
 * Set on the dark ground so the run of paper sections has a break in it, and
 * so the workflow schematic reads as a plate rather than another white box.
 */
export const HowWeWork: React.FC = () => {
  return (
    <div className="max-w-plate mx-auto px-6 md:px-10">
      <SectionHeading
        title="A scope in writing, before any work starts."
        deck="Four steps from first call to delivered analysis. You know the deliverables, the timeline and the price before we begin."
        tone="dark"
      />

      <div className="mt-16 grid items-center gap-16 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
        <ol>
          {processSteps.map((step) => (
            <li
              key={step.n}
              className="grid grid-cols-[2.5rem_1fr] gap-5 border-t border-deep-rule py-7"
            >
              <span
                aria-hidden
                className="font-serif text-xl tabular-nums text-paper/35"
              >
                {step.n}
              </span>
              <div>
                <h3 className="font-serif text-xl text-paper">{step.title}</h3>
                <p className="mt-2 text-[0.9375rem] leading-relaxed text-paper/60">
                  {step.line}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <figure className="plate-dark">
          <div className="bg-paper p-5 md:p-7">
            <Image
              src="/case_studies/img/figures_workflow_abstract.png"
              alt="Schematic of the cardiometabolic polygenic risk score workflow, running from the 1000 Genomes reference cohort through PGS Catalog weights, variant matching and scoring to per-trait outputs and a written report."
              width={1977}
              height={1040}
              sizes="(min-width: 1024px) 620px, 100vw"
              className="w-full h-auto"
            />
          </div>
          <figcaption className="text-paper/55 max-w-measure">
            <span className="fig-no text-paper/80">Fig. 1</span>{' '}
            Workflow from our cardiometabolic polygenic risk study. Every project
            takes this shape: reference data in, scoring, then a report you can
            hand to a reviewer.
          </figcaption>
        </figure>
      </div>
    </div>
  );
};
