'use client';

import { type FC, type TextareaHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: boolean;
  helperText?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error = false, helperText, className, id, rows = 4, ...props }, ref) => {
    const textareaId = id || label?.toLowerCase().replace(/\s/g, '-');
    
    const textareaClasses = cn(
      'w-full px-4 py-3 text-base bg-white rounded-lg border-2 transition-all duration-200 ease-out resize-none',
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
            htmlFor={textareaId}
            className="block text-sm font-medium text-neutral-700 mb-2"
          >
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={textareaId}
          rows={rows}
          className={textareaClasses}
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

Textarea.displayName = 'Textarea';