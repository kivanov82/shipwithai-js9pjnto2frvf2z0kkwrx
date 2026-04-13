'use client';

import { type FC } from 'react';
import Image from 'next/image';
import { Card } from '../Card';
import { Badge } from '../Badge';
import { Button } from '../Button';
import { PriceDisplay } from '../PriceDisplay';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  badge?: {
    text: string;
    variant: 'default' | 'success' | 'warning' | 'error' | 'info';
  };
  inStock?: boolean;
  onAddToCart?: (productId: string) => void;
  className?: string;
}

export const ProductCard: FC<ProductCardProps> = ({
  id,
  name,
  description,
  price,
  originalPrice,
  image,
  badge,
  inStock = true,
  onAddToCart,
  className
}) => {
  const handleAddToCart = () => {
    if (onAddToCart && inStock) {
      onAddToCart(id);
    }
  };
  
  return (
    <Card
      variant="interactive"
      className={cn('flex flex-col h-full p-0 overflow-hidden', className)}
    >
      <div className="relative aspect-[4/3] bg-neutral-50">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {badge && (
          <div className="absolute top-3 left-3">
            <Badge variant={badge.variant}>{badge.text}</Badge>
          </div>
        )}
        {!inStock && (
          <div className="absolute inset-0 bg-white/80 flex items-center justify-center">
            <Badge variant="error">Out of Stock</Badge>
          </div>
        )}
      </div>
      
      <div className="flex flex-col flex-1 p-5">
        <h3 className="text-lg font-semibold text-neutral-900 mb-2 line-clamp-2">
          {name}
        </h3>
        <p className="text-sm text-neutral-600 mb-4 line-clamp-2">
          {description}
        </p>
        
        <div className="mt-auto space-y-3">
          <PriceDisplay
            price={price}
            originalPrice={originalPrice}
          />
          
          <Button
            variant="primary"
            size="md"
            className="w-full"
            disabled={!inStock}
            onClick={handleAddToCart}
          >
            {inStock ? 'Add to Cart' : 'Out of Stock'}
          </Button>
        </div>
      </div>
    </Card>
  );
};