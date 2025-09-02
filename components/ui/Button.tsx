import React, { memo, forwardRef } from 'react';
import { Link } from 'react-router-dom';

// Button variants and sizes
export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'outline' | 'ghost' | 'danger';
export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

// Base button props
interface BaseButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  loading?: boolean;
  disabled?: boolean;
  className?: string;
  children: React.ReactNode;
}

// Button component props
interface ButtonProps extends BaseButtonProps {
  type?: 'button' | 'submit' | 'reset';
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

// Link button component props
interface LinkButtonProps extends BaseButtonProps {
  to: string;
  external?: boolean;
}

// Anchor button component props
interface AnchorButtonProps extends BaseButtonProps {
  href: string;
  target?: string;
  rel?: string;
}

// Variant styles
const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-primary-500 text-white border-primary-500 hover:bg-primary-600 hover:border-primary-600 focus:ring-primary-200 active:bg-primary-700',
  secondary: 'bg-secondary-500 text-white border-secondary-500 hover:bg-secondary-600 hover:border-secondary-600 focus:ring-secondary-200 active:bg-secondary-700',
  tertiary: 'bg-gray-100 text-gray-700 border-gray-200 hover:bg-gray-200 hover:border-gray-300 focus:ring-gray-100 active:bg-gray-300',
  outline: 'bg-transparent text-primary-600 border-primary-500 hover:bg-primary-50 hover:text-primary-700 focus:ring-primary-200 active:bg-primary-100',
  ghost: 'bg-transparent text-gray-600 border-transparent hover:bg-gray-100 hover:text-gray-700 focus:ring-gray-100 active:bg-gray-200',
  danger: 'bg-red-500 text-white border-red-500 hover:bg-red-600 hover:border-red-600 focus:ring-red-200 active:bg-red-700',
};

// Size styles
const sizeStyles: Record<ButtonSize, string> = {
  xs: 'px-3 py-1.5 text-xs font-medium',
  sm: 'px-4 py-2 text-sm font-medium',
  md: 'px-6 py-2.5 text-base font-medium',
  lg: 'px-8 py-3 text-lg font-medium',
  xl: 'px-10 py-4 text-xl font-medium',
};

// Base button classes
const baseButtonClasses = 'inline-flex items-center justify-center rounded-lg border font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed active:transform active:scale-[0.98]';

// Get button classes
const getButtonClasses = (
  variant: ButtonVariant,
  size: ButtonSize,
  fullWidth: boolean,
  loading: boolean,
  disabled: boolean,
  className: string
): string => {
  const classes = [
    baseButtonClasses,
    variantStyles[variant],
    sizeStyles[size],
    fullWidth ? 'w-full' : '',
    loading ? 'cursor-wait' : '',
    disabled ? 'pointer-events-none' : '',
    className,
  ];

  return classes.filter(Boolean).join(' ');
};

// Loading spinner component
const LoadingSpinner: React.FC<{ size: ButtonSize }> = ({ size }) => {
  const spinnerSize = {
    xs: 'w-3 h-3',
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
    xl: 'w-7 h-7',
  }[size];

  return (
    <svg className={`animate-spin -ml-1 mr-2 ${spinnerSize}`} fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path className="opacity-75" fill="currentColor" d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
    </svg>
  );
};

// Main Button component
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  loading = false,
  disabled = false,
  className = '',
  type = 'button',
  onClick,
  children,
  ...props
}, ref) => {
  const buttonClasses = getButtonClasses(variant, size, fullWidth, loading, disabled, className);

  return (
    <button
      ref={ref}
      type={type}
      className={buttonClasses}
      disabled={disabled || loading}
      onClick={onClick}
      {...props}
    >
      {loading && <LoadingSpinner size={size} />}
      {children}
    </button>
  );
});

Button.displayName = 'Button';

// Link Button component (for internal links)
export const LinkButton = memo<LinkButtonProps>(({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  loading = false,
  disabled = false,
  className = '',
  to,
  external = false,
  children,
  ...props
}) => {
  const buttonClasses = getButtonClasses(variant, size, fullWidth, loading, disabled, className);

  if (external) {
    return (
      <a
        href={to}
        className={buttonClasses}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {loading && <LoadingSpinner size={size} />}
        {children}
      </a>
    );
  }

  return (
    <Link
      to={to}
      className={buttonClasses}
      {...props}
    >
      {loading && <LoadingSpinner size={size} />}
      {children}
    </Link>
  );
});

LinkButton.displayName = 'LinkButton';

// Anchor Button component (for external links)
export const AnchorButton = memo<AnchorButtonProps>(({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  loading = false,
  disabled = false,
  className = '',
  href,
  target = '_blank',
  rel = 'noopener noreferrer',
  children,
  ...props
}) => {
  const buttonClasses = getButtonClasses(variant, size, fullWidth, loading, disabled, className);

  return (
    <a
      href={href}
      className={buttonClasses}
      target={target}
      rel={rel}
      {...props}
    >
      {loading && <LoadingSpinner size={size} />}
      {children}
    </a>
  );
});

AnchorButton.displayName = 'AnchorButton';

// Button group component for grouped buttons
interface ButtonGroupProps {
  className?: string;
  children: React.ReactNode;
}

export const ButtonGroup: React.FC<ButtonGroupProps> = memo(({ className = '', children }) => (
  <div className={`inline-flex rounded-lg shadow-sm ${className}`}>
    {React.Children.map(children, (child, index) => {
      if (React.isValidElement(child)) {
        const isFirst = index === 0;
        const isLast = index === React.Children.count(children) - 1;
        
        let roundedClasses = '';
        if (isFirst && isLast) {
          roundedClasses = 'rounded-lg';
        } else if (isFirst) {
          roundedClasses = 'rounded-l-lg rounded-r-none';
        } else if (isLast) {
          roundedClasses = 'rounded-r-lg rounded-l-none';
        } else {
          roundedClasses = 'rounded-none';
        }

        return React.cloneElement(child, {
          className: `${child.props.className || ''} ${roundedClasses} -ml-px first:ml-0`.trim(),
        });
      }
      return child;
    })}
  </div>
));

ButtonGroup.displayName = 'ButtonGroup';