import { Button } from '../ui/Button'
import { CheckCircle, Calendar, Wrench, Phone } from 'lucide-react'

const features = [
  {
    icon: CheckCircle,
    title: 'Professional Setup',
    description: 'Certified technicians handle everything'
  },
  {
    icon: Calendar,
    title: 'Flexible Scheduling',
    description: 'Book at your convenience, 7 days a week'
  },
  {
    icon: Wrench,
    title: 'Complete Installation',
    description: 'All devices configured and tested'
  },
  {
    icon: Phone,
    title: 'Ongoing Support',
    description: '24/7 help whenever you need it'
  }
]

export const InstallationCTA = () => {
  return (
    <section className="py-16 px-4 bg-sage-50">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-12">
              <h2 className="text-3xl font-bold mb-4">
                Professional Installation Available
              </h2>
              <p className="text-xl text-neutral-600 mb-8">
                Don't worry about the technical details. Our certified installers will set up 
                your entire smart home system and teach you how to use it.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                {features.map((feature) => {
                  const Icon = feature.icon
                  return (
                    <div key={feature.title} className="flex gap-3">
                      <Icon className="w-5 h-5 text-sage-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-semibold mb-1">{feature.title}</h3>
                        <p className="text-sm text-neutral-600">{feature.description}</p>
                      </div>
                    </div>
                  )
                })}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg">
                  Book Installation
                </Button>
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </div>
            </div>
            
            <div className="relative h-full min-h-[300px] lg:min-h-[500px]">
              <img
                src="/api/placeholder/600/500"
                alt="Professional installer setting up smart home devices"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}