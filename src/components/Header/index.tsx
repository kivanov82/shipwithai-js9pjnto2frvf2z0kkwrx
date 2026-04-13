'use client';

import { type FC, useState } from 'react';
import Link from 'next/link';
import { Container } from '@/components/Container';
import { IconButton } from '@/components/IconButton';
import { Badge } from '@/components/Badge';
import {
  ShoppingCartIcon,
  SearchIcon,
  MenuIcon,
  CloseIcon,
} from '@/components/Icons';
import { cn } from '@/lib/utils';

export interface HeaderProps {
  /** Number of items in cart */
  cartItemCount?: number;
}

export const Header: FC<HeaderProps> = ({ cartItemCount = 0 }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '/products', label: 'All Products' },
    { href: '/products/lighting', label: 'Lighting' },
    { href: '/products/security', label: 'Security' },
    { href: '/products/climate', label: 'Climate' },
    { href: '/about', label: 'About' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-neutral-200">
      <Container>
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl md:text-2xl font-semibold text-neutral-900"
          >
            Smart<span className="text-sage-600">Home</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-neutral-600 font-medium transition-colors hover:text-sage-600"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <IconButton size="md" aria-label="Search">
              <SearchIcon className="h-5 w-5" />
            </IconButton>
            
            <IconButton size="md" aria-label="Shopping cart" className="relative">
              <ShoppingCartIcon className="h-5 w-5" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center bg-sage-600 text-white text-xs font-semibold rounded-full">
                  {cartItemCount}
                </span>
              )}
            </IconButton>

            {/* Mobile Menu Toggle */}
            <IconButton
              size="md"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMobileMenuOpen ? (
                <CloseIcon className="h-5 w-5" />
              ) : (
                <MenuIcon className="h-5 w-5" />
              )}
            </IconButton>
          </div>
        </div>

        {/* Mobile Navigation */}
        <nav
          className={cn(
            'md:hidden overflow-hidden transition-all duration-300',
            isMobileMenuOpen ? 'max-h-64 pb-4' : 'max-h-0'
          )}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block py-2 text-neutral-600 font-medium transition-colors hover:text-sage-600"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </Container>
    </header>
  );
};