'use client'

import { useState } from 'react'
import ProductCard from '@/components/product/ProductCard'
import Button from '@/components/ui/Button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

// Mock data - will be replaced with real data from backend
const mockProducts = [
  {
    id: '1',
    name: 'Smart LED Bulb Kit',
    description: 'Color-changing WiFi bulbs that sync with your mood',
    price: 49.99,
    originalPrice: 69.99,
    image: '/api/placeholder/400/300',
    category: 'Lighting',
    isNew: true,
    inStock: true,
  },
  {
    id: '2',
    name: 'Video Doorbell Pro',
    description: '4K video with AI person detection and two-way audio',
    price: 199.99,
    image: '/api/placeholder/400/300',
    category: 'Security',
    inStock: true,
  },
  {
    id: '3',
    name: 'Smart Thermostat',
    description: 'Learn your schedule and save energy automatically',
    price: 249.99,
    image: '/api/placeholder/400/300',
    category: 'Climate',
    inStock: true,
  },
  {
    id: '4',
    name: 'Home Hub Display',
    description: 'Central control for all your smart devices',
    price: 149.99,
    originalPrice: 179.99,
    image: '/api/placeholder/400/300',
    category: 'Control',
    inStock: false,
  },
]

const categories = ['All', 'Lighting', 'Security', 'Climate', 'Control']

export default function ProductShowcase() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredProducts = selectedCategory === 'All'
    ? mockProducts
    : mockProducts.filter(product => product.category === selectedCategory)

  return (
    <section className="py-20">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Popular Smart Home Products
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Hand-picked devices that work seamlessly together
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`
                  px-6 py-2 rounded-full font-medium transition-all
                  ${selectedCategory === category
                    ? 'bg-sage-500 text-white'
                    : 'bg-sage-50 text-gray-700 hover:bg-sage-100'
                  }
                `}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link href="/products">
            <Button size="lg" className="group">
              View All Products
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
