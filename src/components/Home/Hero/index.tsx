'use client'

import { type FC } from 'react'
import Link from 'next/link'
import { ArrowRight, Sparkles, Shield, Clock } from 'lucide-react'
import { motion } from 'framer-motion'

export const Hero: FC = () => {
  return (
    <section className="relative overflow-hidden hero-gradient">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-sage-200/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-sage-300/20 blur-3xl" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center space-x-2 mb-6">
              <Sparkles className="h-5 w-5 text-sage-600" />
              <span className="text-sm font-medium text-sage-700">Welcome to the future of living</span>
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl">
              Transform Your Home Into a
              <span className="text-sage-600 block mt-2">Smart Living Space</span>
            </h1>
            
            <p className="mt-6 text-lg text-neutral-600 leading-relaxed">
              Experience the perfect blend of comfort and intelligence. Our curated selection of smart home devices brings automation to every corner of your life.
            </p>

            {/* Features */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-sage-600 flex-shrink-0" />
                <span className="text-sm text-neutral-700">Professional Installation</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-sage-600 flex-shrink-0" />
                <span className="text-sm text-neutral-700">24/7 Support</span>
              </div>
              <div className="flex items-center space-x-2">
                <Sparkles className="h-5 w-5 text-sage-600 flex-shrink-0" />
                <span className="text-sm text-neutral-700">Easy Setup</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/quiz"
                className="smart-button-primary px-8 py-3 text-base"
              >
                Take the Smart Home Quiz
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/products"
                className="smart-button-outline px-8 py-3 text-base"
              >
                Browse Products
              </Link>
            </div>
          </motion.div>

          {/* Image/Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              {/* Placeholder for smart home visualization */}
              <div className="aspect-[4/3] bg-gradient-to-br from-sage-100 to-sage-200 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="grid grid-cols-3 gap-4 max-w-sm mx-auto">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                      <div
                        key={i}
                        className="aspect-square rounded-lg bg-white/80 backdrop-blur-sm shadow-lg flex items-center justify-center"
                      >
                        <div className="h-8 w-8 rounded-full bg-sage-400/50 animate-pulse" />
                      </div>
                    ))}
                  </div>
                  <p className="mt-6 text-sm text-sage-700 font-medium">Smart devices working in harmony</p>
                </div>
              </div>
            </div>
            
            {/* Floating badges */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="absolute -left-4 top-8 bg-white rounded-lg shadow-lg p-3"
            >
              <div className="flex items-center space-x-2">
                <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm font-medium text-neutral-700">All Systems Online</span>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="absolute -right-4 bottom-8 bg-white rounded-lg shadow-lg p-3"
            >
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium text-neutral-700">Energy Saved:</span>
                <span className="text-sm font-mono text-sage-600">23%</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}