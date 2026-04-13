'use client'

import { type FC, useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { cn } from '@/lib/utils'

interface Category {
  id: string
  name: string
  count: number
}

interface FilterSidebarProps {
  categories: Category[]
  selectedCategory: string
  onCategoryChange: (category: string) => void
  priceRange: [number, number]
  onPriceChange: (range: [number, number]) => void
}

export const FilterSidebar: FC<FilterSidebarProps> = ({
  categories,
  selectedCategory,
  onCategoryChange,
  priceRange,
  onPriceChange
}) => {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    categories: true,
    price: true,
    features: false
  })

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }))
  }

  return (
    <div className="space-y-6">
      {/* Categories */}
      <div className="bg-white rounded-lg border-2 border-neutral-100 p-6">
        <button
          onClick={() => toggleSection('categories')}
          className="flex items-center justify-between w-full text-left"
        >
          <h3 className="text-lg font-semibold text-neutral-900">Categories</h3>
          {expandedSections.categories ? (
            <ChevronUp className="h-5 w-5 text-neutral-400" />
          ) : (
            <ChevronDown className="h-5 w-5 text-neutral-400" />
          )}
        </button>
        
        {expandedSections.categories && (
          <div className="mt-4 space-y-2">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => onCategoryChange(category.id)}
                className={cn(
                  'flex items-center justify-between w-full px-3 py-2 rounded-lg text-left transition-colors',
                  selectedCategory === category.id
                    ? 'bg-sage-50 text-sage-700 font-medium'
                    : 'text-neutral-600 hover:bg-neutral-50'
                )}
              >
                <span>{category.name}</span>
                <span className="text-sm text-neutral-400">{category.count}</span>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Price Range */}
      <div className="bg-white rounded-lg border-2 border-neutral-100 p-6">
        <button
          onClick={() => toggleSection('price')}
          className="flex items-center justify-between w-full text-left"
        >
          <h3 className="text-lg font-semibold text-neutral-900">Price Range</h3>
          {expandedSections.price ? (
            <ChevronUp className="h-5 w-5 text-neutral-400" />
          ) : (
            <ChevronDown className="h-5 w-5 text-neutral-400" />
          )}
        </button>

        {expandedSections.price && (
          <div className="mt-4 space-y-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-neutral-600">${priceRange[0]}</span>
              <span className="text-neutral-600">${priceRange[1]}</span>
            </div>
            
            {/* Price slider would go here */}
            <div className="relative h-2 bg-neutral-200 rounded-full">
              <div 
                className="absolute h-full bg-sage-500 rounded-full"
                style={{
                  left: `${(priceRange[0] / 500) * 100}%`,
                  right: `${100 - (priceRange[1] / 500) * 100}%`
                }}
              />
            </div>

            {/* Quick price options */}
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => onPriceChange([0, 50])}
                className="px-3 py-2 text-sm bg-neutral-50 hover:bg-neutral-100 rounded-lg transition-colors"
              >
                Under $50
              </button>
              <button
                onClick={() => onPriceChange([50, 150])}
                className="px-3 py-2 text-sm bg-neutral-50 hover:bg-neutral-100 rounded-lg transition-colors"
              >
                $50 - $150
              </button>
              <button
                onClick={() => onPriceChange([150, 300])}
                className="px-3 py-2 text-sm bg-neutral-50 hover:bg-neutral-100 rounded-lg transition-colors"
              >
                $150 - $300
              </button>
              <button
                onClick={() => onPriceChange([300, 500])}
                className="px-3 py-2 text-sm bg-neutral-50 hover:bg-neutral-100 rounded-lg transition-colors"
              >
                Over $300
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Features (placeholder) */}
      <div className="bg-white rounded-lg border-2 border-neutral-100 p-6">
        <button
          onClick={() => toggleSection('features')}
          className="flex items-center justify-between w-full text-left"
        >
          <h3 className="text-lg font-semibold text-neutral-900">Features</h3>
          {expandedSections.features ? (
            <ChevronUp className="h-5 w-5 text-neutral-400" />
          ) : (
            <ChevronDown className="h-5 w-5 text-neutral-400" />
          )}
        </button>

        {expandedSections.features && (
          <div className="mt-4 space-y-3">
            {['Voice Control', 'App Control', 'Energy Saving', 'Hub Required'].map(feature => (
              <label key={feature} className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-sage-600 border-2 border-neutral-300 rounded focus:ring-sage-500"
                />
                <span className="text-neutral-600">{feature}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Clear Filters */}
      <button
        onClick={() => {
          onCategoryChange('all')
          onPriceChange([0, 500])
        }}
        className="w-full px-4 py-2 text-sm font-medium text-sage-600 hover:text-sage-700 hover:bg-sage-50 rounded-lg transition-colors"
      >
        Clear all filters
      </button>
    </div>
  )
}