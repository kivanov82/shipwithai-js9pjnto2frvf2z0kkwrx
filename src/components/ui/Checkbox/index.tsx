'use client';

import { type FC, type InputHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, className, id, ...props }, ref) => {
    const checkboxId = id || label?.toLowerCase().replace(/\s/g, '-');
    
    return (
      <div className="flex items-center">
        <input
          ref={ref}
          type="checkbox"
          id={checkboxId}
          className={cn(
            'w-5 h-5 rounded border-2 border-neutral-300 text-sage-500',
            'focus:ring-2 focus:ring-sage-500 focus:ring-offset-2',
            'disabled:opacity-50 disabled:cursor-not-allowed',
            className
          )}
          {...props}
        />
        {label && (
          <label
            htmlFor={checkboxId}
            className="ml-2 text-sm font-medium text-neutral-700 cursor-pointer"
          >
            {label}
          </label>
        )}
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';