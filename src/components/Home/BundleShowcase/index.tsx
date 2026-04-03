'use client'

import { type FC } from 'react'
import Link from 'next/link'
import { Package, Home, Shield, Lightbulb, ArrowRight, Check } from 'lucide-react'
import { motion } from 'framer-motion'
import { formatPrice } from '@/lib/utils'

// Mock bundle data
const bundles = [
  {
    id: 'starter',
    name: 'Starter Bundle',
    description: 'Perfect for your first smart home',
    price: 299.99,
    savings: 49.99,
    icon: Home,
    color: 'from-sage-100 to-sage-200',
    products: ['Smart Hub', '2 Smart Bulbs', '1 Smart Plug', 'Motion Sensor'],
    features: [
      'Professional installation included',
      'Voice control ready',
      'Energy monitoring',
      '30-day return policy',
    ],
  },
  {
    id: 'security',
    name: 'Security Bundle',
    description: 'Complete home protection system',
    price: 599.99,
    savings: 99.99,
    icon: Shield,
    color: 'from-blue-100 to-blue-200',
    products: ['Security Hub', '3 Cameras', '2 Door Sensors', 'Smart Lock'],
    features: [
      '24/7 monitoring ready',
      'Mobile alerts',
      'Cloud storage included',
      'Professional installation',
    ],
    popular: true,
  },
  {
    id: 'comfort',
    name: 'Comfort Bundle',
    description: 'Ultimate convenience & energy savings',
    price: 499.99,
    savings: 79.99,
    icon: Lightbulb,
    color: 'from-amber-100 to-amber-200',
    products: ['Smart Thermostat', '4 Smart Bulbs', '2 Smart Plugs', 'Hub'],
    features: [
      'Save up to 23% on energy',
      'Automated scheduling',
      'Remote control',
      'Professional setup',
    ],
  },
]

export const BundleShowcase: FC = () => {
  return (
    <section className="py-20 bg-sage-50/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Package className="h-6 w-6 text-sage-600" />
            <span className="text-sm font-medium text-sage-700 uppercase tracking-wider">
              Bundle & Save
            </span>
          </div>
          <h2 className="text-3xl font-bold text-neutral-900 sm:text-4xl">
            Pre-Built Smart Home Bundles
          </h2>
          <p className="mt-4 text-lg text-neutral-600">
            Get everything you need in one package. Professional installation included with every bundle.
          </p>
        </div>

        {/* Bundles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {bundles.map((bundle, index) => (
            <motion.div
              key={bundle.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {/* Popular Badge */}
              {bundle.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <span className="inline-flex items-center px-4 py-1 rounded-full text-xs font-medium bg-sage-600 text-white shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}

              <div className={`h-full rounded-2xl bg-white shadow-lg overflow-hidden border-2 transition-all hover:shadow-xl ${
                bundle.popular ? 'border-sage-600' : 'border-transparent'
              }`}>
                {/* Header */}
                <div className={`p-6 bg-gradient-to-br ${bundle.color}`}>
                  <bundle.icon className="h-12 w-12 text-neutral-700 mb-4" />
                  <h3 className="text-2xl font-bold text-neutral-900">{bundle.name}</h3>
                  <p className="text-neutral-700 mt-2">{bundle.description}</p>
                </div>

                {/* Pricing */}
                <div className="p-6 border-b border-neutral-100">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-neutral-900">
                      {formatPrice(bundle.price)}
                    </span>
                    <span className="ml-2 text-sm text-neutral-500 line-through">
                      {formatPrice(bundle.price + bundle.savings)}
                    </span>
                  </div>
                  <p className="text-sm text-sage-600 font-medium mt-1">
                    Save {formatPrice(bundle.savings)}
                  </p>
                </div>

                {/* What's Included */}
                <div className="p-6">
                  <h4 className="text-sm font-semibold text-neutral-900 uppercase tracking-wider mb-3">
                    What's Included
                  </h4>
                  <ul className="space-y-2 mb-6">
                    {bundle.products.map((product, i) => (
                      <li key={i} className="text-sm text-neutral-600">
                        • {product}
                      </li>
                    ))}
                  </ul>

                  {/* Features */}
                  <ul className="space-y-3 mb-6">
                    {bundle.features.map((feature, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <Check className="h-4 w-4 text-sage-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-neutral-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Link
                    href={`/bundles/${bundle.id}`}
                    className={`w-full ${
                      bundle.popular ? 'smart-button-primary' : 'smart-button-secondary'
                    } justify-center`}
                  >
                    View Bundle Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}