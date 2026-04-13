'use client'

import { type FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Star, ShoppingCart } from 'lucide-react'
import { cn } from '@/lib/utils'

interface Product {
  id: string
  name: string
  description: string
  price: number
  originalPrice?: number
  category: string
  image: string
  rating: number
  reviews: number
  badge?: 'sale' | 'new' | 'popular'
}

interface ProductCardProps {
  product: Product
  className?: string
}

export const ProductCard: FC<ProductCardProps> = ({ product, className }) => {
  const discount = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    // TODO: Implement cart functionality
    console.log('Add to cart:', product.id)
  }

  return (
    <Link href={`/products/${product.id}`}>
      <article className={cn(
        'group relative bg-white rounded-xl overflow-hidden border-2 border-neutral-100 hover:border-sage-200 transition-all duration-300 hover:shadow-lg',
        className
      )}>
        {/* Badge */}
        {product.badge && (
          <div className="absolute top-4 left-4 z-10">
            <span className={cn(
              'px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wide',
              product.badge === 'sale' && 'bg-red-500 text-white',
              product.badge === 'new' && 'bg-sage-500 text-white',
              product.badge === 'popular' && 'bg-amber-500 text-white'
            )}>
              {product.badge}
            </span>
          </div>
        )}

        {/* Image Container */}
        <div className="aspect-[4/3] bg-neutral-50 overflow-hidden">
          <div className="w-full h-full flex items-center justify-center p-8">
            {/* Placeholder for actual image */}
            <div className="w-32 h-32 bg-sage-100 rounded-lg animate-pulse" />
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Category */}
          <p className="text-xs font-medium text-sage-600 uppercase tracking-wide mb-2">
            {product.category.replace('-', ' ')}
          </p>

          {/* Title */}
          <h3 className="text-lg font-semibold text-neutral-900 group-hover:text-sage-600 transition-colors line-clamp-1">
            {product.name}
          </h3>

          {/* Description */}
          <p className="mt-2 text-sm text-neutral-600 line-clamp-2">
            {product.description}
          </p>

          {/* Rating */}
          <div className="mt-3 flex items-center gap-2">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
              <span className="text-sm font-medium text-neutral-700">{product.rating}</span>
            </div>
            <span className="text-sm text-neutral-500">({product.reviews} reviews)</span>
          </div>

          {/* Price and CTA */}
          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-neutral-900">
                ${product.price}
              </span>
              {product.originalPrice && (
                <>
                  <span className="text-sm text-neutral-400 line-through">
                    ${product.originalPrice}
                  </span>
                  <span className="text-sm font-medium text-red-600">
                    -{discount}%
                  </span>
                </>
              )}
            </div>

            <button
              onClick={handleAddToCart}
              className="p-2 bg-sage-50 hover:bg-sage-100 rounded-lg transition-colors group-hover:scale-110 transform duration-200"
              aria-label="Add to cart"
            >
              <ShoppingCart className="h-5 w-5 text-sage-600" />
            </button>
          </div>
        </div>
      </article>
    </Link>
  )
}