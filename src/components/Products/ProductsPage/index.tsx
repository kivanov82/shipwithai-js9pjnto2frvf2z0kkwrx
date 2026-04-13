'use client'

import { type FC, useState, useMemo } from 'react'
import { Search, SlidersHorizontal, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { ProductCard } from '../ProductCard'
import { FilterSidebar } from '../FilterSidebar'
import { cn } from '@/lib/utils'

// Mock data - will be replaced with API calls
const MOCK_PRODUCTS = [
  {
    id: '1',
    name: 'Smart LED Bulb Pro',
    description: 'Color-changing WiFi bulb with voice control',
    price: 29.99,
    originalPrice: 39.99,
    category: 'lighting',
    image: '/api/placeholder/400/300',
    rating: 4.5,
    reviews: 234,
    badge: 'sale'
  },
  {
    id: '2',
    name: 'Home Security Camera HD',
    description: '1080p indoor camera with night vision',
    price: 79.99,
    category: 'security',
    image: '/api/placeholder/400/300',
    rating: 4.7,
    reviews: 156,
    badge: 'popular'
  },
  {
    id: '3',
    name: 'Smart Thermostat V2',
    description: 'Save energy with intelligent temperature control',
    price: 249.99,
    category: 'climate',
    image: '/api/placeholder/400/300',
    rating: 4.8,
    reviews: 412,
    badge: 'new'
  },
  {
    id: '4',
    name: 'WiFi Smart Plug (4-Pack)',
    description: 'Control any device from your phone',
    price: 49.99,
    originalPrice: 59.99,
    category: 'accessories',
    image: '/api/placeholder/400/300',
    rating: 4.3,
    reviews: 89,
    badge: 'sale'
  },
  {
    id: '5',
    name: 'Video Doorbell Pro',
    description: 'See who\'s at your door from anywhere',
    price: 199.99,
    category: 'security',
    image: '/api/placeholder/400/300',
    rating: 4.6,
    reviews: 267
  },
  {
    id: '6',
    name: 'Smart Light Strip',
    description: '16 million colors, music sync enabled',
    price: 69.99,
    category: 'lighting',
    image: '/api/placeholder/400/300',
    rating: 4.4,
    reviews: 178
  }
]

const CATEGORIES = [
  { id: 'all', name: 'All Products', count: MOCK_PRODUCTS.length },
  { id: 'lighting', name: 'Smart Lighting', count: 2 },
  { id: 'security', name: 'Security', count: 2 },
  { id: 'climate', name: 'Climate Control', count: 1 },
  { id: 'accessories', name: 'Accessories', count: 1 }
]

const SORT_OPTIONS = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Highest Rated' },
  { value: 'newest', label: 'Newest First' }
]

export const ProductsPage: FC = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [sortBy, setSortBy] = useState('featured')
  const [showMobileFilters, setShowMobileFilters] = useState(false)
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 500])

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let products = [...MOCK_PRODUCTS]

    // Category filter
    if (selectedCategory !== 'all') {
      products = products.filter(p => p.category === selectedCategory)
    }

    // Search filter
    if (searchQuery) {
      products = products.filter(p => 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }

    // Price filter
    products = products.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1])

    // Sort
    switch (sortBy) {
      case 'price-asc':
        products.sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        products.sort((a, b) => b.price - a.price)
        break
      case 'rating':
        products.sort((a, b) => b.rating - a.rating)
        break
      // featured and newest would use actual data
    }

    return products
  }, [searchQuery, selectedCategory, sortBy, priceRange])

  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-neutral-900 sm:text-5xl">
            Smart Home Products
          </h1>
          <p className="mt-4 text-lg text-neutral-600">
            Transform your home with our curated selection of smart devices
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-400" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white border-2 border-neutral-200 rounded-lg focus:outline-none focus:border-sage-500 focus:ring-2 focus:ring-sage-500/20 transition-all"
            />
          </div>
        </div>

        {/* Filters and Products Grid */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Desktop Sidebar */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <FilterSidebar
              categories={CATEGORIES}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
              priceRange={priceRange}
              onPriceChange={setPriceRange}
            />
          </aside>

          {/* Mobile Filter Button */}
          <button
            onClick={() => setShowMobileFilters(true)}
            className="lg:hidden flex items-center justify-center gap-2 px-4 py-2 bg-white border-2 border-neutral-200 rounded-lg hover:border-sage-500 transition-colors"
          >
            <SlidersHorizontal className="h-5 w-5" />
            <span>Filters</span>
          </button>

          {/* Products Section */}
          <div className="flex-1">
            {/* Sort and Results Count */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-sm text-neutral-600">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'} found
              </p>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 bg-white border-2 border-neutral-200 rounded-lg focus:outline-none focus:border-sage-500 text-sm"
              >
                {SORT_OPTIONS.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence>
                {filteredProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <ProductCard product={product} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Empty State */}
            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-lg text-neutral-600">No products match your search criteria.</p>
                <button
                  onClick={() => {
                    setSearchQuery('')
                    setSelectedCategory('all')
                    setPriceRange([0, 500])
                  }}
                  className="mt-4 text-sage-600 hover:text-sage-700 font-medium"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Filter Drawer */}
        <AnimatePresence>
          {showMobileFilters && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 lg:hidden"
            >
              <div className="absolute inset-0 bg-black/50" onClick={() => setShowMobileFilters(false)} />
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: 0 }}
                exit={{ x: '-100%' }}
                transition={{ type: 'spring', damping: 30, stiffness: 300 }}
                className="absolute left-0 top-0 h-full w-80 bg-white shadow-xl"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-semibold">Filters</h2>
                    <button
                      onClick={() => setShowMobileFilters(false)}
                      className="p-2 hover:bg-neutral-100 rounded-lg transition-colors"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>
                  <FilterSidebar
                    categories={CATEGORIES}
                    selectedCategory={selectedCategory}
                    onCategoryChange={setSelectedCategory}
                    priceRange={priceRange}
                    onPriceChange={setPriceRange}
                  />
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}