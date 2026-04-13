'use client';

import { type FC } from 'react';
import Image from 'next/image';
import { Card } from '@/components/Card';
import { Button } from '@/components/Button';
import { Badge } from '@/components/Badge';
import { formatPrice } from '@/lib/utils';

export interface ProductCardProps {
  /** Product ID */
  id: string;
  /** Product name */
  name: string;
  /** Product description */
  description?: string;
  /** Product price */
  price: number;
  /** Sale price if on sale */
  salePrice?: number;
  /** Product image URL */
  image: string;
  /** Product image alt text */
  imageAlt: string;
  /** Stock status */
  inStock?: boolean;
  /** Badge text */
  badge?: string;
  /** Badge variant */
  badgeVariant?: 'default' | 'success' | 'warning' | 'error' | 'info';
  /** Click handler for add to cart */
  onAddToCart?: (id: string) => void;
}

export const ProductCard: FC<ProductCardProps> = ({
  id,
  name,
  description,
  price,
  salePrice,
  image,
  imageAlt,
  inStock = true,
  badge,
  badgeVariant = 'info',
  onAddToCart,
}) => {
  const isOnSale = salePrice !== undefined && salePrice < price;
  const displayPrice = isOnSale ? salePrice : price;

  return (
    <Card variant="interactive" padding="none" className="group overflow-hidden">
      {/* Image Container */}
      <div className="relative aspect-[4/3] bg-neutral-100 overflow-hidden">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {badge && (
          <div className="absolute top-2 right-2">
            <Badge variant={badgeVariant}>{badge}</Badge>
          </div>
        )}
        {!inStock && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <Badge variant="error" size="md">
              Out of Stock
            </Badge>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-neutral-900 mb-1 line-clamp-1">
          {name}
        </h3>
        {description && (
          <p className="text-sm text-neutral-600 mb-3 line-clamp-2">
            {description}
          </p>
        )}

        {/* Price */}
        <div className="flex items-baseline gap-2 mb-4">
          <span className="text-2xl font-semibold font-mono text-neutral-900">
            {formatPrice(displayPrice)}
          </span>
          {isOnSale && (
            <span className="text-lg font-mono text-neutral-400 line-through">
              {formatPrice(price)}
            </span>
          )}
        </div>

        {/* Action */}
        <Button
          variant="primary"
          size="md"
          fullWidth
          disabled={!inStock}
          onClick={() => onAddToCart?.(id)}
        >
          {inStock ? 'Add to Cart' : 'Out of Stock'}
        </Button>
      </div>
    </Card>
  );
};