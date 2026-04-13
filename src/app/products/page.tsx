import { type Metadata } from 'next'
import { ProductsPage } from '@/components/Products/ProductsPage'
import { Header } from '@/components/Layout/Header'
import { Footer } from '@/components/Layout/Footer'

export const metadata: Metadata = {
  title: 'Smart Home Products | Transform Your Living Space',
  description: 'Browse our curated selection of smart home devices. From lighting to security, find everything you need to create your intelligent home.',
}

export default function Products() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-neutral-50">
        <ProductsPage />
      </main>
      <Footer />
    </>
  )
}