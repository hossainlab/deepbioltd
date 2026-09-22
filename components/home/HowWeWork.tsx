import React from 'react';
import { processSteps } from '@/lib/home/process';
import { SectionHeading } from './SectionHeading';

/**
 * The one place on the page that carries numbers, because this is the one place
 * the content is genuinely a sequence.
 *
 * The schematic that used to sit beside this list is gone. It baked in its own
 * bold-sans title under the heading, ran its own 1–5 numbering beside this 1–4
 * list, and rendered its sublabels near 7pt at the size it was placed. It was
 * the list again, in a worse medium.
 *
 * What replaced it is the rung: four ticks, four steps, the interval marks the
 * logo already draws. Structure instead of a picture of structure.
 */
export const HowWeWork: React.FC = () => {
  return (
    <div className="max-w-plate mx-auto px-6 md:px-10">
      <SectionHeading
        title="A scope in writing, before any work starts."
        deck="Four steps from first call to delivered analysis. You know the deliverables, the timeline and the price before we begin."
        tone="dark"
      />

      <ol className="mt-14 grid gap-px border-t border-deep-rule md:grid-cols-2 lg:grid-cols-4">
        {processSteps.map((step) => (
          <li
            key={step.n}
            className="border-b border-deep-rule pb-8 pt-7 md:border-b-0 md:pr-8"
          >
            <div className="flex items-center gap-4">
              <span className="data text-beam">{step.n}</span>
              <span className="h-px flex-1 bg-deep-rule" aria-hidden />
            </div>

            <h3 className="mt-5 text-lg font-semibold text-on-deep">
              {step.title}
            </h3>
            <p className="mt-3 text-[0.9375rem] leading-relaxed text-on-deep-mid">
              {step.line}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
};
