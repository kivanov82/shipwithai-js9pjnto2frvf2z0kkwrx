import Hero from '@/components/home/Hero'
import Features from '@/components/home/Features'
import ProductShowcase from '@/components/home/ProductShowcase'
import QuizCTA from '@/components/home/QuizCTA'
import Newsletter from '@/components/home/Newsletter'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <ProductShowcase />
      <QuizCTA />
      <Newsletter />
    </>
  )
}
