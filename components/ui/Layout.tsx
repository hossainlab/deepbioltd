import React, { memo } from 'react';

// Container component for consistent max-width and padding
interface ContainerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
  className?: string;
  children: React.ReactNode;
}

const containerSizes = {
  sm: 'max-w-2xl',
  md: 'max-w-4xl',
  lg: 'max-w-6xl',
  xl: 'max-w-7xl',
  '2xl': 'max-w-8xl',
  full: 'max-w-full',
};

export const Container: React.FC<ContainerProps> = memo(({ 
  size = 'xl', 
  className = '', 
  children 
}) => {
  const sizeClass = containerSizes[size];
  
  return (
    <div className={`${sizeClass} mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
});

Container.displayName = 'Container';

// Section component for consistent section spacing
interface SectionProps {
  variant?: 'default' | 'compact' | 'spacious' | 'hero';
  background?: 'white' | 'gray' | 'primary' | 'secondary' | 'gradient';
  className?: string;
  children: React.ReactNode;
}

const sectionVariants = {
  compact: 'py-12',
  default: 'py-16 sm:py-20',
  spacious: 'py-20 sm:py-24 lg:py-32',
  hero: 'py-24 sm:py-32 lg:py-40',
};

const backgroundVariants = {
  white: 'bg-white',
  gray: 'bg-gray-50',
  primary: 'bg-primary-500 text-white',
  secondary: 'bg-secondary-500 text-white',
  gradient: 'bg-gradient-to-br from-primary-50 to-secondary-50',
};

export const Section: React.FC<SectionProps> = memo(({ 
  variant = 'default',
  background = 'white',
  className = '',
  children 
}) => {
  const variantClass = sectionVariants[variant];
  const backgroundClass = backgroundVariants[background];
  
  return (
    <section className={`${variantClass} ${backgroundClass} ${className}`}>
      {children}
    </section>
  );
});

Section.displayName = 'Section';

// Grid component for consistent grid layouts
interface GridProps {
  cols?: 1 | 2 | 3 | 4 | 5 | 6 | 12;
  gap?: 'sm' | 'md' | 'lg' | 'xl';
  responsive?: boolean;
  className?: string;
  children: React.ReactNode;
}

const gridCols = {
  1: 'grid-cols-1',
  2: 'grid-cols-1 md:grid-cols-2',
  3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
  4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  5: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5',
  6: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6',
  12: 'grid-cols-12',
};

const gridGaps = {
  sm: 'gap-4',
  md: 'gap-6',
  lg: 'gap-8',
  xl: 'gap-12',
};

export const Grid: React.FC<GridProps> = memo(({ 
  cols = 3,
  gap = 'lg',
  responsive = true,
  className = '',
  children 
}) => {
  const colClass = responsive ? gridCols[cols] : `grid-cols-${cols}`;
  const gapClass = gridGaps[gap];
  
  return (
    <div className={`grid ${colClass} ${gapClass} ${className}`}>
      {children}
    </div>
  );
});

Grid.displayName = 'Grid';

// Flex component for consistent flex layouts
interface FlexProps {
  direction?: 'row' | 'col';
  align?: 'start' | 'center' | 'end' | 'stretch';
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
  wrap?: boolean;
  gap?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  children: React.ReactNode;
}

const flexDirections = {
  row: 'flex-row',
  col: 'flex-col',
};

const alignItems = {
  start: 'items-start',
  center: 'items-center',
  end: 'items-end',
  stretch: 'items-stretch',
};

const justifyContent = {
  start: 'justify-start',
  center: 'justify-center',
  end: 'justify-end',
  between: 'justify-between',
  around: 'justify-around',
  evenly: 'justify-evenly',
};

const flexGaps = {
  sm: 'gap-2',
  md: 'gap-4',
  lg: 'gap-6',
  xl: 'gap-8',
};

export const Flex: React.FC<FlexProps> = memo(({ 
  direction = 'row',
  align = 'start',
  justify = 'start',
  wrap = false,
  gap = 'md',
  className = '',
  children 
}) => {
  const directionClass = flexDirections[direction];
  const alignClass = alignItems[align];
  const justifyClass = justifyContent[justify];
  const wrapClass = wrap ? 'flex-wrap' : '';
  const gapClass = flexGaps[gap];
  
  return (
    <div className={`flex ${directionClass} ${alignClass} ${justifyClass} ${wrapClass} ${gapClass} ${className}`}>
      {children}
    </div>
  );
});

Flex.displayName = 'Flex';

// Card component for consistent card styling
interface CardProps {
  variant?: 'default' | 'elevated' | 'outlined' | 'ghost';
  padding?: 'sm' | 'md' | 'lg' | 'xl';
  hover?: boolean;
  className?: string;
  children: React.ReactNode;
}

const cardVariants = {
  default: 'bg-white border border-gray-200 shadow-sm',
  elevated: 'bg-white shadow-lg',
  outlined: 'bg-white border-2 border-gray-200',
  ghost: 'bg-transparent',
};

const cardPadding = {
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
  xl: 'p-10',
};

export const Card: React.FC<CardProps> = memo(({ 
  variant = 'default',
  padding = 'md',
  hover = false,
  className = '',
  children 
}) => {
  const variantClass = cardVariants[variant];
  const paddingClass = cardPadding[padding];
  const hoverClass = hover ? 'transition-all duration-200 hover:shadow-lg hover:scale-[1.02]' : '';
  
  return (
    <div className={`rounded-lg ${variantClass} ${paddingClass} ${hoverClass} ${className}`}>
      {children}
    </div>
  );
});

Card.displayName = 'Card';

// Stack component for vertical spacing
interface StackProps {
  spacing?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  className?: string;
  children: React.ReactNode;
}

const stackSpacing = {
  xs: 'space-y-2',
  sm: 'space-y-4',
  md: 'space-y-6',
  lg: 'space-y-8',
  xl: 'space-y-12',
  '2xl': 'space-y-16',
};

export const Stack: React.FC<StackProps> = memo(({ 
  spacing = 'md',
  className = '',
  children 
}) => {
  const spacingClass = stackSpacing[spacing];
  
  return (
    <div className={`${spacingClass} ${className}`}>
      {children}
    </div>
  );
});

Stack.displayName = 'Stack';

// Center component for centering content
interface CenterProps {
  className?: string;
  children: React.ReactNode;
}

export const Center: React.FC<CenterProps> = memo(({ 
  className = '',
  children 
}) => (
  <div className={`flex items-center justify-center ${className}`}>
    {children}
  </div>
));

Center.displayName = 'Center';

// Spacer component for flexible spacing
interface SpacerProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  className?: string;
}

const spacerSizes = {
  xs: 'h-2',
  sm: 'h-4',
  md: 'h-8',
  lg: 'h-12',
  xl: 'h-16',
  '2xl': 'h-24',
};

export const Spacer: React.FC<SpacerProps> = memo(({ 
  size = 'md',
  className = '' 
}) => {
  const sizeClass = spacerSizes[size];
  
  return <div className={`${sizeClass} ${className}`} />;
});

Spacer.displayName = 'Spacer';

// Divider component
interface DividerProps {
  orientation?: 'horizontal' | 'vertical';
  variant?: 'solid' | 'dashed';
  className?: string;
}

export const Divider: React.FC<DividerProps> = memo(({ 
  orientation = 'horizontal',
  variant = 'solid',
  className = '' 
}) => {
  const orientationClasses = {
    horizontal: 'w-full h-px',
    vertical: 'h-full w-px',
  };
  
  const variantClasses = {
    solid: 'bg-gray-200',
    dashed: 'border-t border-dashed border-gray-200 bg-transparent',
  };
  
  const orientationClass = orientationClasses[orientation];
  const variantClass = variantClasses[variant];
  
  return <div className={`${orientationClass} ${variantClass} ${className}`} />;
});

Divider.displayName = 'Divider';