import { Hero } from '@/components/Home/Hero'
import { FeaturedProducts } from '@/components/Home/FeaturedProducts'
import { QuizBanner } from '@/components/Home/QuizBanner'
import { BundleShowcase } from '@/components/Home/BundleShowcase'
import { InstallationCTA } from '@/components/Home/InstallationCTA'
import { Header } from '@/components/Layout/Header'
import { Footer } from '@/components/Layout/Footer'

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Hero />
        <FeaturedProducts />
        <QuizBanner />
        <BundleShowcase />
        <InstallationCTA />
      </main>
      <Footer />
    </>
  )
}