import { type FC, type ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Button size */
  size?: 'sm' | 'md' | 'lg';
  /** Visual variant */
  variant?: 'default' | 'ghost';
}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ className, size = 'md', variant = 'default', children, ...props }, ref) => {
    const baseClasses = `
      inline-flex items-center justify-center rounded-lg
      transition-all duration-200 ease-out
      focus:outline-none focus:ring-2 focus:ring-sage-500 focus:ring-offset-2
      disabled:opacity-50 disabled:cursor-not-allowed
    `;

    const sizeClasses = {
      sm: 'h-8 w-8',
      md: 'h-10 w-10',
      lg: 'h-12 w-12',
    };

    const variantClasses = {
      default: 'hover:bg-sage-50 active:bg-sage-100',
      ghost: 'hover:bg-transparent hover:text-sage-600',
    };

    return (
      <button
        ref={ref}
        className={cn(
          baseClasses,
          sizeClasses[size],
          variantClasses[variant],
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

IconButton.displayName = 'IconButton';