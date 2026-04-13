import { Container } from '@/components/Container'
import { Section } from '@/components/Section'
import { HeroSection } from '@/components/HeroSection'
import { FeaturesSection } from '@/components/FeaturesSection'
import { ProductShowcase } from '@/components/ProductShowcase'
import { QuizCTA } from '@/components/QuizCTA'

// Mock data for now - will be replaced with actual data from backend
const featuredProducts = [
  {
    id: '1',
    name: 'Smart LED Bulb',
    description: 'Color-changing WiFi bulb with voice control',
    price: 29.99,
    salePrice: 24.99,
    image: '/api/placeholder/400/300',
    imageAlt: 'Smart LED bulb',
    inStock: true,
    badge: 'Sale',
    badgeVariant: 'error' as const,
  },
  {
    id: '2',
    name: 'Security Camera',
    description: '1080p HD camera with night vision and two-way audio',
    price: 89.99,
    image: '/api/placeholder/400/300',
    imageAlt: 'Security camera',
    inStock: true,
    badge: 'New',
    badgeVariant: 'info' as const,
  },
  {
    id: '3',
    name: 'Smart Thermostat',
    description: 'Learn your schedule and save on energy bills',
    price: 179.99,
    image: '/api/placeholder/400/300',
    imageAlt: 'Smart thermostat',
    inStock: true,
  },
  {
    id: '4',
    name: 'Door Lock Pro',
    description: 'Keyless entry with smartphone control',
    price: 249.99,
    image: '/api/placeholder/400/300',
    imageAlt: 'Smart door lock',
    inStock: false,
  },
]

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <ProductShowcase products={featuredProducts} />
      <QuizCTA />
    </>
  )
}