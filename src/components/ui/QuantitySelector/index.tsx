'use client';

import { type FC } from 'react';
import { cn } from '@/lib/utils';
import { IconButton } from '../IconButton';

interface QuantitySelectorProps {
  quantity: number;
  onQuantityChange: (quantity: number) => void;
  min?: number;
  max?: number;
  className?: string;
}

export const QuantitySelector: FC<QuantitySelectorProps> = ({
  quantity,
  onQuantityChange,
  min = 1,
  max = 99,
  className
}) => {
  const handleDecrease = () => {
    if (quantity > min) {
      onQuantityChange(quantity - 1);
    }
  };
  
  const handleIncrease = () => {
    if (quantity < max) {
      onQuantityChange(quantity + 1);
    }
  };
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value) || min;
    if (value >= min && value <= max) {
      onQuantityChange(value);
    }
  };
  
  return (
    <div className={cn(
      'inline-flex items-center border-2 border-neutral-300 rounded-lg',
      className
    )}>
      <IconButton
        size="md"
        variant="ghost"
        onClick={handleDecrease}
        disabled={quantity <= min}
        className="rounded-r-none"
        aria-label="Decrease quantity"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
        </svg>
      </IconButton>
      
      <input
        type="number"
        value={quantity}
        onChange={handleInputChange}
        className="w-16 text-center font-mono border-0 focus:outline-none"
        min={min}
        max={max}
        aria-label="Quantity"
      />
      
      <IconButton
        size="md"
        variant="ghost"
        onClick={handleIncrease}
        disabled={quantity >= max}
        className="rounded-l-none"
        aria-label="Increase quantity"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
      </IconButton>
    </div>
  );
};