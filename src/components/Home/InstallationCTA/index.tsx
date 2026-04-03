'use client'

import { type FC } from 'react'
import Link from 'next/link'
import { Calendar, CheckCircle, Users, Award, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

const installationFeatures = [
  {
    icon: CheckCircle,
    title: 'Certified Professionals',
    description: 'All installers are background-checked and certified',
  },
  {
    icon: Calendar,
    title: 'Flexible Scheduling',
    description: 'Book appointments that work with your schedule',
  },
  {
    icon: Users,
    title: 'In-Person Training',
    description: 'Learn how to use your new devices hands-on',
  },
  {
    icon: Award,
    title: 'Satisfaction Guaranteed',
    description: '100% satisfaction guarantee on all installations',
  },
]

export const InstallationCTA: FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl overflow-hidden">
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-sage-600 to-sage-700" />
          
          {/* Pattern Overlay */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }} />
          </div>

          <div className="relative p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold text-white sm:text-4xl mb-6">
                  Professional Installation Included
                </h2>
                <p className="text-lg text-sage-100 mb-8">
                  Every purchase comes with professional installation by our certified experts. 
                  No hidden fees, no surprises – just seamless setup and peace of mind.
                </p>

                {/* Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                  {installationFeatures.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start space-x-3"
                    >
                      <feature.icon className="h-6 w-6 text-sage-200 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-white">{feature.title}</h3>
                        <p className="text-sm text-sage-100 mt-1">{feature.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <Link
                  href="/installation"
                  className="inline-flex items-center justify-center rounded-lg px-8 py-3 text-base font-medium bg-white text-sage-700 hover:bg-sage-50 transition-colors"
                >
                  Learn More About Installation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </motion.div>

              {/* Visual */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative"
              >
                <div className="relative rounded-xl overflow-hidden bg-white/10 backdrop-blur-sm p-8">
                  {/* Installation Process Visual */}
                  <div className="space-y-6">
                    {['Schedule', 'Install', 'Learn', 'Enjoy'].map((step, index) => (
                      <div key={step} className="flex items-center space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                            <span className="text-lg font-bold text-white">{index + 1}</span>
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: '100%' }}
                              transition={{ duration: 1, delay: index * 0.2 }}
                              className="h-full bg-white rounded-full"
                            />
                          </div>
                        </div>
                        <div className="flex-shrink-0">
                          <span className="text-sm font-medium text-white">{step}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-8 text-center">
                    <p className="text-2xl font-bold text-white">Average Install Time</p>
                    <p className="text-4xl font-bold text-white mt-2">2-3 Hours</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}