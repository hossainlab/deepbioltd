'use client'

import React, { useState } from 'react';

export interface AccordionItem {
  q: string;
  a: string;
}

interface AccordionProps {
  items: AccordionItem[];
  /** Index open on first render. Omit to start fully collapsed. */
  defaultOpen?: number;
}

/**
 * Hairline-ruled disclosure list. No card, no chevron icon — a plus/minus set in
 * the brand blue, which is quieter than an icon set and keeps the accent doing
 * one consistent job across the page: marking the thing you can act on.
 *
 * Extracted from the identical implementations that had been copied into
 * AmbassadorHandbookPage and CareerGuideHandbookPage.
 */
export const Accordion: React.FC<AccordionProps> = ({ items, defaultOpen }) => {
  const [open, setOpen] = useState<number | null>(defaultOpen ?? null);

  return (
    <div>
      {items.map((item, i) => {
        const isOpen = open === i;
        const panelId = `accordion-panel-${i}`;

        return (
          <div key={i} className="border-t border-rule">
            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls={panelId}
              className="group flex w-full items-baseline justify-between gap-8 py-5 text-left"
              onClick={() => setOpen(isOpen ? null : i)}
            >
              <span className="text-lg font-semibold leading-snug text-ink">
                {item.q}
              </span>
              <span
                aria-hidden
                className="shrink-0 text-lg leading-none text-brand transition-colors group-hover:text-ink"
              >
                {isOpen ? '–' : '+'}
              </span>
            </button>

            {isOpen && (
              <div id={panelId} className="pb-6 pr-8">
                <p className="max-w-measure text-[0.9375rem] leading-relaxed text-slate">
                  {item.a}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
