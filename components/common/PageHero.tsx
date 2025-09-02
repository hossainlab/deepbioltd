
import React from 'react';
import { PageHero as NewPageHero } from '../ui/Typography.tsx';

interface PageHeroProps {
  title: string;
  subtitle: string;
}

// Legacy PageHero component - redirects to new design system component
const PageHero: React.FC<PageHeroProps> = ({ title, subtitle }) => (
  <NewPageHero title={title} subtitle={subtitle} />
);

export default PageHero;
