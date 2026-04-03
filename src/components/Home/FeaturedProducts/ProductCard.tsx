import { type FC } from 'react'
import Link from 'next/link'
import { Star, ShoppingCart, Zap } from 'lucide-react'
import { formatPrice } from '@/lib/utils'

interface ProductCardProps {
  product: {
    id: string
    name: string
    category: string
    price: number
    rating: number
    reviewCount: number
    image: string
    badge?: string
    features: string[]
  }
}

export const ProductCard: FC<ProductCardProps> = ({ product }) => {
  return (
    <Link href={`/products/${product.id}`} className="group">
      <div className="device-card h-full flex flex-col">
        {/* Badge */}
        {product.badge && (
          <div className="absolute top-4 right-4 z-10">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-sage-100 text-sage-800">
              {product.badge}
            </span>
          </div>
        )}

        {/* Image */}
        <div className="relative aspect-square rounded-lg overflow-hidden bg-sage-50 mb-4">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col">
          <p className="text-sm text-sage-600 font-medium mb-1">{product.category}</p>
          <h3 className="text-lg font-semibold text-neutral-900 mb-2 group-hover:text-sage-700 transition-colors">
            {product.name}
          </h3>

          {/* Rating */}
          <div className="flex items-center space-x-1 mb-3">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < Math.floor(product.rating)
                      ? 'fill-amber-400 text-amber-400'
                      : 'text-neutral-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-neutral-600">{product.rating}</span>
            <span className="text-sm text-neutral-400">({product.reviewCount})</span>
          </div>

          {/* Features */}
          <ul className="space-y-1 mb-4 flex-1">
            {product.features.slice(0, 2).map((feature, index) => (
              <li key={index} className="flex items-start space-x-1.5">
                <Zap className="h-3 w-3 text-sage-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-neutral-600">{feature}</span>
              </li>
            ))}
          </ul>

          {/* Price & Action */}
          <div className="flex items-center justify-between pt-4 border-t border-sage-100">
            <span className="price-tag">{formatPrice(product.price)}</span>
            <button className="p-2 rounded-lg bg-sage-100 text-sage-700 hover:bg-sage-200 transition-colors">
              <ShoppingCart className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </Link>
  )
}