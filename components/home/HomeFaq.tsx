import React from 'react';
import { Accordion } from '@/components/ui/Accordion';
import { homeFaqs } from '@/lib/home/faqs';
import { SectionHeading } from './SectionHeading';

export const HomeFaq: React.FC = () => {
  return (
    <div className="max-w-plate mx-auto px-6 md:px-10">
      <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
        <SectionHeading
          title="Asked before the first email."
          deck="If yours isn't here, send it to info@deepbioltd.com and you'll get a straight answer."
        />

        <div className="lg:pt-2">
          <Accordion items={homeFaqs} />
        </div>
      </div>
    </div>
  );
};
