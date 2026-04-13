import Link from 'next/link'
import Image from 'next/image'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'
import { formatPrice } from '@/lib/utils'
import { ShoppingCart } from 'lucide-react'

interface Product {
  id: string
  name: string
  description: string
  price: number
  originalPrice?: number
  image: string
  category: string
  isNew?: boolean
  inStock: boolean
}

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0

  return (
    <Card variant="interactive" className="group overflow-hidden flex flex-col h-full">
      <Link href={`/products/${product.id}`} className="block">
        {/* Image Container */}
        <div className="relative aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden mb-4">
          {/* Replace with Next.js Image when real images are available */}
          <div className="w-full h-full bg-sage-100/50" />
          
          {/* Badges */}
          <div className="absolute top-2 left-2 flex gap-2">
            {product.isNew && (
              <Badge variant="info">New</Badge>
            )}
            {discount > 0 && (
              <Badge variant="error">-{discount}%</Badge>
            )}
          </div>

          {/* Quick Add Button - shows on hover */}
          <div className="absolute inset-x-0 bottom-0 p-2 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <Button
              size="sm"
              className="w-full"
              onClick={(e) => {
                e.preventDefault()
                // Add to cart logic here
                console.log('Add to cart:', product.id)
              }}
              disabled={!product.inStock}
            >
              <ShoppingCart size={16} className="mr-2" />
              {product.inStock ? 'Quick Add' : 'Out of Stock'}
            </Button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col">
          <p className="text-sm text-gray-500 mb-1">{product.category}</p>
          <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-sage-600 transition-colors">
            {product.name}
          </h3>
          <p className="text-sm text-gray-600 mb-3 flex-1 line-clamp-2">
            {product.description}
          </p>

          {/* Price */}
          <div className="flex items-center gap-2">
            <span className="text-xl font-semibold font-mono text-gray-900">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through font-mono">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>

          {/* Stock Status */}
          {!product.inStock && (
            <p className="text-sm text-red-600 mt-2">Out of stock</p>
          )}
        </div>
      </Link>
    </Card>
  )
}
