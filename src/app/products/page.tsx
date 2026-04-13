'use client'

import { useState } from 'react'
import ProductCard from '@/components/product/ProductCard'
import Button from '@/components/ui/Button'
import { ChevronDown } from 'lucide-react'

// Mock data - will be replaced with real data
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
  {
    id: '5',
    name: 'Smart Lock Pro',
    description: 'Keyless entry with fingerprint and app control',
    price: 299.99,
    image: '/api/placeholder/400/300',
    category: 'Security',
    inStock: true,
  },
  {
    id: '6',
    name: 'Motion Sensor Light',
    description: 'Battery-powered lights that turn on automatically',
    price: 29.99,
    image: '/api/placeholder/400/300',
    category: 'Lighting',
    inStock: true,
  },
]

const categories = ['All', 'Lighting', 'Security', 'Climate', 'Control']
const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'newest', label: 'Newest First' },
]

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [sortBy, setSortBy] = useState('featured')
  const [showFilters, setShowFilters] = useState(false)

  const filteredProducts = selectedCategory === 'All'
    ? mockProducts
    : mockProducts.filter(product => product.category === selectedCategory)

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price
      case 'price-high':
        return b.price - a.price
      case 'newest':
        return a.isNew ? -1 : 1
      default:
        return 0
    }
  })

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sage-50 to-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            All Products
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Explore our complete collection of smart home devices. Everything you need to create your connected home.
          </p>
        </div>
      </section>

      {/* Filters and Sort */}
      <section className="py-8 border-b sticky top-20 bg-white z-40">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            {/* Category Pills */}
            <div className="flex flex-wrap gap-2">
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

            {/* Sort Dropdown */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 pr-8 border rounded-lg text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-sage-500"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="container-custom">
          <div className="mb-6 flex items-center justify-between">
            <p className="text-gray-600">
              Showing {sortedProducts.length} products
            </p>
          </div>

          {sortedProducts.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {sortedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">No products found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
