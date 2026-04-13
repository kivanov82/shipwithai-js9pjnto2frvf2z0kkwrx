import { type FC } from 'react';
import { cn } from '@/lib/utils';

interface PriceDisplayProps {
  price: number;
  originalPrice?: number;
  currency?: string;
  className?: string;
}

export const PriceDisplay: FC<PriceDisplayProps> = ({
  price,
  originalPrice,
  currency = '$',
  className
}) => {
  const formatPrice = (amount: number) => {
    return `${currency}${amount.toFixed(2)}`;
  };
  
  const hasDiscount = originalPrice && originalPrice > price;
  const discountPercentage = hasDiscount
    ? Math.round(((originalPrice - price) / originalPrice) * 100)
    : 0;
  
  return (
    <div className={cn('flex items-baseline gap-2', className)}>
      <span className="font-mono text-2xl font-semibold text-neutral-900">
        {formatPrice(price)}
      </span>
      {hasDiscount && (
        <>
          <span className="font-mono text-lg text-neutral-400 line-through">
            {formatPrice(originalPrice)}
          </span>
          <span className="text-sm font-medium text-red-600">
            -{discountPercentage}%
          </span>
        </>
      )}
    </div>
  );
};