'use client';

import { type FC, type SelectHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: SelectOption[];
  placeholder?: string;
  error?: boolean;
  helperText?: string;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, options, placeholder, error = false, helperText, className, id, ...props }, ref) => {
    const selectId = id || label?.toLowerCase().replace(/\s/g, '-');
    
    const selectClasses = cn(
      'h-12 w-full px-4 text-base bg-white rounded-lg border-2 transition-all duration-200 ease-out',
      'focus:outline-none focus:ring-2 focus:ring-sage-500 focus:ring-offset-2',
      'disabled:bg-neutral-50 disabled:cursor-not-allowed disabled:opacity-50',
      error
        ? 'border-error text-error focus:border-error focus:ring-error'
        : 'border-neutral-300 hover:border-neutral-400 focus:border-sage-500',
      className
    );
    
    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={selectId}
            className="block text-sm font-medium text-neutral-700 mb-2"
          >
            {label}
          </label>
        )}
        <select
          ref={ref}
          id={selectId}
          className={selectClasses}
          {...props}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {helperText && (
          <p className={cn(
            'mt-1 text-sm',
            error ? 'text-error' : 'text-neutral-500'
          )}>
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Select.displayName = 'Select';