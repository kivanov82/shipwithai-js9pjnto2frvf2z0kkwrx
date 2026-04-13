'use client';

import { type FC, type ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
}

export const Button: FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  className,
  children,
  disabled,
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-sage-500 text-white hover:bg-sage-600 active:bg-sage-700',
    secondary: 'bg-sage-50 text-sage-900 hover:bg-sage-100 active:bg-sage-200',
    outline: 'bg-white border-2 border-sage-300 text-sage-700 hover:bg-sage-50 active:bg-sage-100',
    ghost: 'bg-transparent text-sage-700 hover:bg-sage-50 active:bg-sage-100'
  };
  
  const sizes = {
    sm: 'h-8 px-3 text-sm rounded-md',
    md: 'h-10 px-6 text-base rounded-lg',
    lg: 'h-12 px-8 text-lg rounded-lg'
  };
  
  return (
    <button
      className={cn(
        baseClasses,
        variants[variant],
        sizes[size],
        className
      )}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <>
          <span className="animate-spin h-4 w-4 mr-2 border-2 border-current border-t-transparent rounded-full" />
          Loading...
        </>
      ) : (
        children
      )}
    </button>
  );
};