import { Shield, Zap, Smartphone, Clock } from 'lucide-react'

interface Feature {
  icon: React.ReactNode
  title: string
  description: string
}

export default function Features() {
  const features: Feature[] = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: 'Secure & Private',
      description: 'Bank-level encryption keeps your home data safe and private.',
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: 'Energy Efficient',
      description: 'Save up to 30% on energy bills with intelligent automation.',
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: 'Easy Control',
      description: 'Manage everything from one simple app on your phone.',
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: 'Quick Setup',
      description: 'Get up and running in minutes, no expertise required.',
    },
  ]

  return (
    <section className="py-20 bg-sage-50/50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Smart Home?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience the benefits of a connected home that works for you.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow duration-200"
            >
              <div className="w-12 h-12 bg-sage-100 rounded-lg flex items-center justify-center text-sage-600 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
