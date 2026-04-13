import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import './globals.css'
import { CartProvider } from '@/lib/hooks/useCart'

const dmSans = DM_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Smart Home Store',
  description: 'Transform your home with our curated smart devices',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={dmSans.className}>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  )
}