import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Smart Home Store - Transform Your Living Space',
  description: 'Discover our curated selection of smart home devices. Easy setup, professional installation, and ongoing support.',
  openGraph: {
    title: 'Smart Home Store',
    description: 'Transform your living space with intelligent automation',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}