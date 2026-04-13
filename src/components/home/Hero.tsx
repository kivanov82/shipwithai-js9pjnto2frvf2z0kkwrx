'use client'

import { useState, useEffect } from 'react'
import Button from '@/components/ui/Button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function Hero() {
  const [imageLoaded, setImageLoaded] = useState(false)

  useEffect(() => {
    setImageLoaded(true)
  }, [])

  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-sage-50 via-white to-sage-100/30" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-sage-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-sage-300/20 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className={`space-y-8 ${imageLoaded ? 'animate-fadeIn' : 'opacity-0'}`}>
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Make Your Home
                <span className="text-sage-600 block">Smarter Today</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-xl">
                Transform your living space with curated smart home products that simplify life and save energy.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/products">
                <Button size="lg" className="group">
                  Shop All Products
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/quiz">
                <Button variant="outline" size="lg">
                  Take the Smart Home Quiz
                </Button>
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-6 pt-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-sage-100 border-2 border-white flex items-center justify-center"
                  >
                    <span className="text-xs font-semibold text-sage-700">{i}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-600">
                <span className="font-semibold text-gray-900">10,000+</span> happy customers
              </p>
            </div>
          </div>

          {/* Hero Image/Illustration */}
          <div className={`relative ${imageLoaded ? 'animate-fadeIn' : 'opacity-0'} delay-150`}>
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Smart home illustration placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-sage-400 to-sage-600 rounded-3xl opacity-10" />
              <div className="absolute inset-4 bg-white rounded-2xl shadow-2xl p-8">
                <div className="grid grid-cols-2 gap-4 h-full">
                  {/* Mock smart home devices */}
                  <div className="bg-sage-50 rounded-xl p-4 flex flex-col items-center justify-center">
                    <div className="w-12 h-12 bg-sage-500 rounded-full mb-2" />
                    <span className="text-sm font-medium text-gray-700">Smart Lights</span>
                  </div>
                  <div className="bg-sage-50 rounded-xl p-4 flex flex-col items-center justify-center">
                    <div className="w-12 h-12 bg-sage-500 rounded-full mb-2" />
                    <span className="text-sm font-medium text-gray-700">Security</span>
                  </div>
                  <div className="bg-sage-50 rounded-xl p-4 flex flex-col items-center justify-center">
                    <div className="w-12 h-12 bg-sage-500 rounded-full mb-2" />
                    <span className="text-sm font-medium text-gray-700">Climate</span>
                  </div>
                  <div className="bg-sage-50 rounded-xl p-4 flex flex-col items-center justify-center">
                    <div className="w-12 h-12 bg-sage-500 rounded-full mb-2" />
                    <span className="text-sm font-medium text-gray-700">Entertainment</span>
                  </div>
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 bg-white rounded-full shadow-lg px-4 py-2">
                <span className="text-sage-600 font-semibold">Easy Setup</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
