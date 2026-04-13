import { Badge } from '../ui/Badge'
import { Button } from '../ui/Button'
import { Card, CardContent } from '../ui/Card'
import { Home, Shield, Lightbulb } from 'lucide-react'

const bundles = [
  {
    name: 'Starter Pack',
    description: 'Perfect for beginners',
    price: 299,
    savings: 50,
    items: [
      'Smart Hub',
      '2 Smart Bulbs',
      '1 Motion Sensor',
      'Mobile App Setup'
    ],
    icon: Home,
    color: 'sage'
  },
  {
    name: 'Security Bundle',
    description: 'Complete home protection',
    price: 599,
    savings: 120,
    items: [
      'Security Hub',
      '3 Door Sensors',
      '2 Cameras',
      'Professional Installation'
    ],
    icon: Shield,
    color: 'amber'
  },
  {
    name: 'Comfort Bundle',
    description: 'Ultimate convenience',
    price: 899,
    savings: 200,
    items: [
      'Smart Thermostat',
      '4 Smart Bulbs',
      '2 Smart Switches',
      'Voice Assistant',
      'Setup & Training'
    ],
    icon: Lightbulb,
    color: 'blue'
  }
]

export const BundleShowcase = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-sage-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Limited Time Offer
          </Badge>
          <h2 className="text-4xl font-bold mb-4">Smart Home Bundles</h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Save big with our curated bundles - everything you need to get started
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {bundles.map((bundle) => {
            const Icon = bundle.icon
            return (
              <Card key={bundle.name} className="relative overflow-hidden hover:shadow-xl transition-all">
                <div className="absolute top-0 right-0 bg-red-500 text-white px-3 py-1 text-sm font-semibold">
                  Save ${bundle.savings}
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-sage-100 rounded-lg">
                      <Icon className="w-6 h-6 text-sage-700" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{bundle.name}</h3>
                      <p className="text-neutral-600 text-sm">{bundle.description}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="text-3xl font-bold text-sage-700 mb-1">
                      ${bundle.price}
                    </div>
                    <p className="text-sm text-neutral-500 line-through">
                      ${bundle.price + bundle.savings}
                    </p>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {bundle.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-sage-500 rounded-full" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <Button className="w-full">
                    Choose {bundle.name}
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}