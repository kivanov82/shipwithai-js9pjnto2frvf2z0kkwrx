'use client'

import { type FC } from 'react'
import Link from 'next/link'
import { Star, ArrowRight } from 'lucide-react'
import { ProductCard } from './ProductCard'

// Mock data - would come from API/CMS
const featuredProducts = [
  {
    id: '1',
    name: 'Smart Hub Pro',
    category: 'Controllers',
    price: 149.99,
    rating: 4.8,
    reviewCount: 234,
    image: '/api/placeholder/300/300',
    badge: 'Best Seller',
    features: ['Controls 100+ devices', 'Voice activated', 'Easy setup'],
  },
  {
    id: '2',
    name: 'Motion Sensor Kit',
    category: 'Security',
    price: 79.99,
    rating: 4.6,
    reviewCount: 189,
    image: '/api/placeholder/300/300',
    features: ['Pet friendly', '30ft range', 'Battery powered'],
  },
  {
    id: '3',
    name: 'Smart Thermostat',
    category: 'Climate',
    price: 199.99,
    rating: 4.9,
    reviewCount: 412,
    image: '/api/placeholder/300/300',
    badge: 'Energy Saver',
    features: ['Save 23% on energy', 'Learning AI', 'Remote control'],
  },
  {
    id: '4',
    name: 'Color Smart Bulbs (4-pack)',
    category: 'Lighting',
    price: 89.99,
    rating: 4.7,
    reviewCount: 567,
    image: '/api/placeholder/300/300',
    features: ['16 million colors', 'Schedule ready', 'Music sync'],
  },
]

export const FeaturedProducts: FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-neutral-900 sm:text-4xl">
            Featured Products
          </h2>
          <p className="mt-4 text-lg text-neutral-600">
            Hand-picked devices that work seamlessly together to create your perfect smart home ecosystem
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View All CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/products"
            className="inline-flex items-center space-x-2 text-sage-600 hover:text-sage-700 font-medium transition-colors"
          >
            <span>View all products</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}