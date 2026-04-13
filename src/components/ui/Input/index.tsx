'use client';

import { type FC, type InputHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  label?: string;
  helperText?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error = false, label, helperText, className, id, ...props }, ref) => {
    const inputId = id || label?.toLowerCase().replace(/\s/g, '-');
    
    const inputClasses = cn(
      'h-12 w-full px-4 text-base bg-white rounded-lg border-2 transition-all duration-200 ease-out',
      'placeholder:text-neutral-400',
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
            htmlFor={inputId}
            className="block text-sm font-medium text-neutral-700 mb-2"
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={inputClasses}
          {...props}
        />
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

Input.displayName = 'Input';