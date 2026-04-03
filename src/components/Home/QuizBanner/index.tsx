'use client'

import { type FC } from 'react'
import Link from 'next/link'
import { Sparkles, ArrowRight, Home, Lightbulb, Shield } from 'lucide-react'
import { motion } from 'framer-motion'

export const QuizBanner: FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-sage-50 via-white to-sage-100 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl bg-white shadow-xl overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23647864' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }} />
          </div>

          <div className="relative grid md:grid-cols-2 gap-8 p-8 lg:p-12">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col justify-center"
            >
              <div className="flex items-center space-x-2 mb-4">
                <Sparkles className="h-5 w-5 text-sage-600" />
                <span className="text-sm font-medium text-sage-700 uppercase tracking-wider">
                  Personalized Recommendations
                </span>
              </div>
              
              <h2 className="text-3xl font-bold text-neutral-900 sm:text-4xl mb-4">
                Not sure where to start?
              </h2>
              
              <p className="text-lg text-neutral-600 mb-8">
                Take our quick quiz and discover the perfect smart home setup for your lifestyle. 
                Get personalized recommendations in under 2 minutes.
              </p>

              <Link
                href="/quiz"
                className="smart-button-primary inline-flex w-fit px-8 py-3 text-base"
              >
                Start the Quiz
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>

            {/* Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative flex items-center justify-center"
            >
              <div className="relative">
                {/* Central Quiz Icon */}
                <div className="w-32 h-32 rounded-full bg-sage-100 flex items-center justify-center">
                  <Home className="h-16 w-16 text-sage-600" />
                </div>
                
                {/* Orbiting Icons */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0"
                >
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center">
                      <Lightbulb className="h-6 w-6 text-amber-500" />
                    </div>
                  </div>
                  <div className="absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <div className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center">
                      <Shield className="h-6 w-6 text-blue-500" />
                    </div>
                  </div>
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                    <div className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center">
                      <Sparkles className="h-6 w-6 text-sage-500" />
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}