'use client'

import { type FC } from 'react'
import Link from 'next/link'
import { Home, ShoppingCart, Menu, X, Lightbulb, Package, Phone, Calendar } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useState } from 'react'

export const Header: FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navigation = [
    { name: 'Products', href: '/products', icon: Lightbulb },
    { name: 'Bundles', href: '/bundles', icon: Package },
    { name: 'Quiz', href: '/quiz' },
    { name: 'Installation', href: '/installation', icon: Calendar },
    { name: 'Support', href: '/support', icon: Phone },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Home className="h-8 w-8 text-sage-600" />
            <span className="text-xl font-semibold text-neutral-900">SmartHome</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center space-x-1 text-sm font-medium text-neutral-600 transition-colors hover:text-sage-600"
              >
                {item.icon && <item.icon className="h-4 w-4" />}
                <span>{item.name}</span>
              </Link>
            ))}
          </div>

          {/* Cart & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Link
              href="/cart"
              className="relative p-2 text-neutral-600 transition-colors hover:text-sage-600"
            >
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-sage-600 text-xs font-medium text-white">
                0
              </span>
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-neutral-600"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            'md:hidden transition-all duration-200 ease-in-out',
            mobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
          )}
        >
          <div className="space-y-1 pb-3 pt-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center space-x-2 rounded-lg px-3 py-2 text-base font-medium text-neutral-600 hover:bg-sage-50 hover:text-sage-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.icon && <item.icon className="h-5 w-5" />}
                <span>{item.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  )
}