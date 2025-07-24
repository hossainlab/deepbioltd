
import React from 'react';

interface PageHeroProps {
  title: string;
  subtitle: string;
}

const PageHero: React.FC<PageHeroProps> = ({ title, subtitle }) => (
    <div className="bg-primary text-white text-center py-20 px-4">
        <h1 className="text-4xl sm:text-5xl font-bold font-heading">{title}</h1>
        <p className="mt-4 text-xl max-w-3xl mx-auto text-gray-300">{subtitle}</p>
    </div>
);

export default PageHero;
