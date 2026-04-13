'use client'

import { useState } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import Button from '@/components/ui/Button'
import IconButton from '@/components/ui/IconButton'
import { ShoppingCart, Search, Menu, X, User } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [cartItemCount] = useState(0) // Will be connected to cart state later

  const navLinks = [
    { label: 'Products', href: '/products' },
    { label: 'Categories', href: '/categories' },
    { label: 'Smart Home Quiz', href: '/quiz' },
    { label: 'About', href: '/about' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-sage-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <span className="text-xl font-semibold text-gray-900">Smart Home Store</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-600 hover:text-sage-600 font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <IconButton
              icon={<Search size={20} />}
              aria-label="Search products"
              className="hidden sm:flex"
            />

            {/* Account */}
            <IconButton
              icon={<User size={20} />}
              aria-label="Account"
              className="hidden sm:flex"
            />

            {/* Cart */}
            <Link href="/cart" className="relative">
              <IconButton
                icon={<ShoppingCart size={20} />}
                aria-label="Shopping cart"
              />
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 w-5 h-5 bg-sage-500 text-white text-xs font-semibold rounded-full flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </Link>

            {/* Mobile Menu Toggle */}
            <IconButton
              icon={isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              className="lg:hidden"
            />
          </div>
        </div>

        {/* Mobile Navigation */}
        <nav
          className={cn(
            'lg:hidden overflow-hidden transition-all duration-300',
            isMenuOpen ? 'max-h-80' : 'max-h-0'
          )}
        >
          <div className="py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-3 text-gray-600 hover:text-sage-600 hover:bg-sage-50 rounded-lg font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2 mt-2 border-t space-y-2">
              <Button
                variant="secondary"
                className="w-full justify-center"
                onClick={() => setIsMenuOpen(false)}
              >
                <Search size={18} className="mr-2" />
                Search
              </Button>
              <Button
                variant="outline"
                className="w-full justify-center"
                onClick={() => setIsMenuOpen(false)}
              >
                <User size={18} className="mr-2" />
                Sign In
              </Button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}
