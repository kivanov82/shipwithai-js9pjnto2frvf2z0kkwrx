import { type Metadata } from 'next'
import { CartPage } from '@/components/Cart/CartPage'
import { Header } from '@/components/Layout/Header'
import { Footer } from '@/components/Layout/Footer'

export const metadata: Metadata = {
  title: 'Shopping Cart | Smart Home Store',
  description: 'Review and purchase your selected smart home products.',
}

export default function Cart() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-neutral-50">
        <CartPage />
      </main>
      <Footer />
    </>
  )
}