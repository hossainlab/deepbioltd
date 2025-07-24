
import React, { memo } from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => (
  <div className="text-center mb-12">
    <h2 className="text-3xl sm:text-4xl font-bold font-heading text-primary mb-4">
      {title}
    </h2>
    {subtitle && <p className="text-lg text-light-text max-w-3xl mx-auto">{subtitle}</p>}
  </div>
);

export default memo(SectionTitle);
