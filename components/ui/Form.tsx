import React, { memo, forwardRef } from 'react';

// Common form props
interface BaseFormProps {
  label?: string;
  error?: string;
  helperText?: string;
  required?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  className?: string;
}

// Input component
interface InputProps extends BaseFormProps, Omit<React.InputHTMLAttributes<HTMLInputElement>, 'className'> {
  variant?: 'outlined' | 'filled';
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({
  label,
  error,
  helperText,
  required = false,
  disabled = false,
  fullWidth = false,
  variant = 'outlined',
  startIcon,
  endIcon,
  className = '',
  id,
  ...props
}, ref) => {
  const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;
  
  const baseClasses = 'w-full px-4 py-2.5 text-base border rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-200';
  
  const variantClasses = {
    outlined: error 
      ? 'border-red-300 bg-white focus:border-red-500' 
      : 'border-gray-300 bg-white focus:border-primary-500',
    filled: error
      ? 'border-red-200 bg-gray-50 focus:bg-white focus:border-red-500'
      : 'border-gray-200 bg-gray-50 focus:bg-white focus:border-primary-500',
  };

  const disabledClasses = disabled ? 'opacity-60 cursor-not-allowed bg-gray-100' : '';
  const fullWidthClass = fullWidth ? 'w-full' : '';
  
  const inputClasses = `${baseClasses} ${variantClasses[variant]} ${disabledClasses} ${fullWidthClass} ${startIcon ? 'pl-12' : ''} ${endIcon ? 'pr-12' : ''} ${className}`;

  return (
    <div className={`${fullWidth ? 'w-full' : ''}`}>
      {label && (
        <label htmlFor={inputId} className="block text-sm font-medium text-gray-700 mb-2">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <div className="relative">
        {startIcon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <div className="text-gray-400">{startIcon}</div>
          </div>
        )}
        <input
          ref={ref}
          id={inputId}
          className={inputClasses}
          disabled={disabled}
          required={required}
          {...props}
        />
        {endIcon && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <div className="text-gray-400">{endIcon}</div>
          </div>
        )}
      </div>
      {(error || helperText) && (
        <p className={`mt-2 text-sm ${error ? 'text-red-600' : 'text-gray-500'}`}>
          {error || helperText}
        </p>
      )}
    </div>
  );
});

Input.displayName = 'Input';

// Textarea component
interface TextareaProps extends BaseFormProps, Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'className'> {
  variant?: 'outlined' | 'filled';
  resize?: 'none' | 'vertical' | 'horizontal' | 'both';
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(({
  label,
  error,
  helperText,
  required = false,
  disabled = false,
  fullWidth = false,
  variant = 'outlined',
  resize = 'vertical',
  className = '',
  id,
  rows = 4,
  ...props
}, ref) => {
  const textareaId = id || `textarea-${Math.random().toString(36).substr(2, 9)}`;
  
  const baseClasses = 'w-full px-4 py-2.5 text-base border rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-200';
  
  const variantClasses = {
    outlined: error 
      ? 'border-red-300 bg-white focus:border-red-500' 
      : 'border-gray-300 bg-white focus:border-primary-500',
    filled: error
      ? 'border-red-200 bg-gray-50 focus:bg-white focus:border-red-500'
      : 'border-gray-200 bg-gray-50 focus:bg-white focus:border-primary-500',
  };

  const resizeClasses = {
    none: 'resize-none',
    vertical: 'resize-y',
    horizontal: 'resize-x',
    both: 'resize',
  };

  const disabledClasses = disabled ? 'opacity-60 cursor-not-allowed bg-gray-100' : '';
  const fullWidthClass = fullWidth ? 'w-full' : '';
  
  const textareaClasses = `${baseClasses} ${variantClasses[variant]} ${resizeClasses[resize]} ${disabledClasses} ${fullWidthClass} ${className}`;

  return (
    <div className={`${fullWidth ? 'w-full' : ''}`}>
      {label && (
        <label htmlFor={textareaId} className="block text-sm font-medium text-gray-700 mb-2">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <textarea
        ref={ref}
        id={textareaId}
        className={textareaClasses}
        disabled={disabled}
        required={required}
        rows={rows}
        {...props}
      />
      {(error || helperText) && (
        <p className={`mt-2 text-sm ${error ? 'text-red-600' : 'text-gray-500'}`}>
          {error || helperText}
        </p>
      )}
    </div>
  );
});

Textarea.displayName = 'Textarea';

// Select component
interface SelectProps extends BaseFormProps, Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'className'> {
  variant?: 'outlined' | 'filled';
  placeholder?: string;
  options?: Array<{ value: string | number; label: string; disabled?: boolean }>;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(({
  label,
  error,
  helperText,
  required = false,
  disabled = false,
  fullWidth = false,
  variant = 'outlined',
  placeholder,
  options = [],
  className = '',
  id,
  children,
  ...props
}, ref) => {
  const selectId = id || `select-${Math.random().toString(36).substr(2, 9)}`;
  
  const baseClasses = 'w-full px-4 py-2.5 text-base border rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-200 appearance-none bg-no-repeat bg-right bg-select-arrow';
  
  const variantClasses = {
    outlined: error 
      ? 'border-red-300 bg-white focus:border-red-500' 
      : 'border-gray-300 bg-white focus:border-primary-500',
    filled: error
      ? 'border-red-200 bg-gray-50 focus:bg-white focus:border-red-500'
      : 'border-gray-200 bg-gray-50 focus:bg-white focus:border-primary-500',
  };

  const disabledClasses = disabled ? 'opacity-60 cursor-not-allowed bg-gray-100' : '';
  const fullWidthClass = fullWidth ? 'w-full' : '';
  
  const selectClasses = `${baseClasses} ${variantClasses[variant]} ${disabledClasses} ${fullWidthClass} ${className}`;

  return (
    <div className={`${fullWidth ? 'w-full' : ''}`}>
      {label && (
        <label htmlFor={selectId} className="block text-sm font-medium text-gray-700 mb-2">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <div className="relative">
        <select
          ref={ref}
          id={selectId}
          className={selectClasses}
          disabled={disabled}
          required={required}
          {...props}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option 
              key={option.value} 
              value={option.value} 
              disabled={option.disabled}
            >
              {option.label}
            </option>
          ))}
          {children}
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
      {(error || helperText) && (
        <p className={`mt-2 text-sm ${error ? 'text-red-600' : 'text-gray-500'}`}>
          {error || helperText}
        </p>
      )}
    </div>
  );
});

Select.displayName = 'Select';

// Checkbox component
interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'className' | 'type'> {
  label?: string;
  description?: string;
  error?: string;
  fullWidth?: boolean;
  className?: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(({
  label,
  description,
  error,
  fullWidth = false,
  className = '',
  id,
  disabled = false,
  ...props
}, ref) => {
  const checkboxId = id || `checkbox-${Math.random().toString(36).substr(2, 9)}`;
  
  return (
    <div className={`${fullWidth ? 'w-full' : ''}`}>
      <div className="flex items-start">
        <div className="flex items-center h-5">
          <input
            ref={ref}
            id={checkboxId}
            type="checkbox"
            className={`w-4 h-4 text-primary-600 bg-white border-gray-300 rounded focus:ring-primary-500 focus:ring-2 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
            disabled={disabled}
            {...props}
          />
        </div>
        <div className="ml-3 text-sm">
          {label && (
            <label htmlFor={checkboxId} className={`font-medium text-gray-700 ${disabled ? 'opacity-50' : ''}`}>
              {label}
            </label>
          )}
          {description && (
            <p className={`text-gray-500 ${disabled ? 'opacity-50' : ''}`}>
              {description}
            </p>
          )}
        </div>
      </div>
      {error && (
        <p className="mt-2 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
});

Checkbox.displayName = 'Checkbox';

// Radio component
interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'className' | 'type'> {
  label?: string;
  description?: string;
  error?: string;
  fullWidth?: boolean;
  className?: string;
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(({
  label,
  description,
  error,
  fullWidth = false,
  className = '',
  id,
  disabled = false,
  ...props
}, ref) => {
  const radioId = id || `radio-${Math.random().toString(36).substr(2, 9)}`;
  
  return (
    <div className={`${fullWidth ? 'w-full' : ''}`}>
      <div className="flex items-start">
        <div className="flex items-center h-5">
          <input
            ref={ref}
            id={radioId}
            type="radio"
            className={`w-4 h-4 text-primary-600 bg-white border-gray-300 focus:ring-primary-500 focus:ring-2 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
            disabled={disabled}
            {...props}
          />
        </div>
        <div className="ml-3 text-sm">
          {label && (
            <label htmlFor={radioId} className={`font-medium text-gray-700 ${disabled ? 'opacity-50' : ''}`}>
              {label}
            </label>
          )}
          {description && (
            <p className={`text-gray-500 ${disabled ? 'opacity-50' : ''}`}>
              {description}
            </p>
          )}
        </div>
      </div>
      {error && (
        <p className="mt-2 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
});

Radio.displayName = 'Radio';

// Form group component
interface FormGroupProps {
  className?: string;
  children: React.ReactNode;
}

export const FormGroup: React.FC<FormGroupProps> = memo(({ className = '', children }) => (
  <div className={`space-y-6 ${className}`}>
    {children}
  </div>
));

FormGroup.displayName = 'FormGroup';