'use client';

import { type FC } from 'react';
import { cn } from '@/lib/utils';

interface ShoppingCartIconProps {
  count?: number;
  className?: string;
}

export const ShoppingCartIcon: FC<ShoppingCartIconProps> = ({ count = 0, className }) => {
  return (
    <div className={cn('relative', className)}>
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
      {count > 0 && (
        <span className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center bg-sage-500 text-white rounded-full text-xs font-semibold">
          {count > 99 ? '99+' : count}
        </span>
      )}
    </div>
  );
};