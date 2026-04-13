'use client';

import { type FC, type ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'ghost';
}

export const IconButton: FC<IconButtonProps> = ({
  size = 'md',
  variant = 'default',
  className,
  children,
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center rounded-lg transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const sizes = {
    sm: 'h-8 w-8',
    md: 'h-10 w-10',
    lg: 'h-12 w-12'
  };
  
  const variants = {
    default: 'hover:bg-sage-50 active:bg-sage-100',
    ghost: 'hover:bg-neutral-100 active:bg-neutral-200'
  };
  
  return (
    <button
      className={cn(baseClasses, sizes[size], variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
};