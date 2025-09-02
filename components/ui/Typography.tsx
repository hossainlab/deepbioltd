import React, { memo } from 'react';

// Typography variants
export type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
export type HeadingVariant = 'hero' | 'section' | 'subsection' | 'card' | 'service';
export type TextVariant = 'body-lg' | 'body' | 'body-sm' | 'caption' | 'overline';
export type TextAlign = 'left' | 'center' | 'right';

// Base heading component
interface HeadingProps {
  level: HeadingLevel;
  variant?: HeadingVariant;
  align?: TextAlign;
  className?: string;
  children: React.ReactNode;
}

const headingVariants = {
  hero: 'text-4xl md:text-5xl lg:text-6xl font-bold text-primary',
  section: 'text-3xl md:text-4xl font-bold text-primary',
  subsection: 'text-2xl md:text-3xl font-semibold text-primary',
  card: 'text-xl md:text-2xl font-semibold text-primary',
  service: 'text-2xl md:text-3xl font-bold text-primary',
};

const alignClasses = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
};

export const Heading: React.FC<HeadingProps> = memo(({ 
  level, 
  variant = 'section', 
  align = 'left',
  className = '',
  children 
}) => {
  const Component = level;
  const variantClasses = headingVariants[variant];
  const alignClass = alignClasses[align];
  
  return (
    <Component 
      className={`font-heading ${variantClasses} ${alignClass} ${className}`}
    >
      {children}
    </Component>
  );
});

// Section title component (replaces SectionTitle)
interface SectionTitleProps {
  title: string;
  subtitle?: string;
  variant?: 'section' | 'hero' | 'subsection';
  align?: TextAlign;
  className?: string;
  withAccent?: boolean;
}

export const SectionTitle: React.FC<SectionTitleProps> = memo(({ 
  title, 
  subtitle, 
  variant = 'section',
  align = 'center',
  className = '',
  withAccent = false
}) => {
  const containerAlignClass = align === 'center' ? 'text-center' : align === 'right' ? 'text-right' : 'text-left';
  
  return (
    <div className={`mb-12 ${containerAlignClass} ${className}`}>
      <Heading level="h2" variant={variant} align={align} className="mb-4">
        {title}
      </Heading>
      {withAccent && (
        <div className={`w-20 h-1 bg-secondary mt-2 mb-4 ${align === 'center' ? 'mx-auto' : align === 'right' ? 'ml-auto' : ''}`}></div>
      )}
      {subtitle && (
        <Text variant="body-lg" className={`text-gray-600 max-w-3xl ${align === 'center' ? 'mx-auto' : ''}`}>
          {subtitle}
        </Text>
      )}
    </div>
  );
});

// Service section title component (replaces ServiceSectionTitle)
interface ServiceSectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export const ServiceSectionTitle: React.FC<ServiceSectionTitleProps> = memo(({ 
  title, 
  subtitle,
  className = '' 
}) => (
  <div className={`mb-8 ${className}`}>
    <Heading level="h2" variant="service" className="mb-2">
      {title}
    </Heading>
    <div className="w-20 h-1 bg-secondary mb-4"></div>
    {subtitle && (
      <Text variant="body" className="text-gray-600 max-w-2xl">
        {subtitle}
      </Text>
    )}
  </div>
));

// Text component
interface TextProps {
  variant?: TextVariant;
  align?: TextAlign;
  className?: string;
  children: React.ReactNode;
}

const textVariants = {
  'body-lg': 'text-lg leading-relaxed',
  'body': 'text-base leading-normal',
  'body-sm': 'text-sm leading-normal',
  'caption': 'text-xs leading-tight text-gray-500',
  'overline': 'text-xs font-semibold uppercase tracking-wider text-gray-400',
};

export const Text: React.FC<TextProps> = memo(({ 
  variant = 'body', 
  align = 'left',
  className = '',
  children 
}) => {
  const variantClasses = textVariants[variant];
  const alignClass = alignClasses[align];
  
  return (
    <p className={`font-sans ${variantClasses} ${alignClass} ${className}`}>
      {children}
    </p>
  );
});

// Page hero component
interface PageHeroProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export const PageHero: React.FC<PageHeroProps> = memo(({ 
  title, 
  subtitle,
  className = '' 
}) => (
  <section className={`bg-gradient-to-br from-primary-50 to-primary-100 py-20 px-8 ${className}`}>
    <div className="max-w-4xl mx-auto text-center">
      <Heading level="h1" variant="hero" align="center" className="mb-6">
        {title}
      </Heading>
      {subtitle && (
        <Text variant="body-lg" align="center" className="text-gray-600 max-w-2xl mx-auto">
          {subtitle}
        </Text>
      )}
    </div>
  </section>
));

// Export legacy components for backward compatibility
export { SectionTitle as LegacySectionTitle, ServiceSectionTitle as LegacyServiceSectionTitle };