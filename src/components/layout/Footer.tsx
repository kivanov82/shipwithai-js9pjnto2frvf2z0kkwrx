import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  const footerSections = [
    {
      title: 'Products',
      links: [
        { label: 'Smart Lighting', href: '/products/lighting' },
        { label: 'Security Systems', href: '/products/security' },
        { label: 'Climate Control', href: '/products/climate' },
        { label: 'Entertainment', href: '/products/entertainment' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '/about' },
        { label: 'Blog', href: '/blog' },
        { label: 'Careers', href: '/careers' },
        { label: 'Press', href: '/press' },
      ],
    },
    {
      title: 'Support',
      links: [
        { label: 'Help Center', href: '/help' },
        { label: 'Shipping Info', href: '/shipping' },
        { label: 'Returns', href: '/returns' },
        { label: 'Warranty', href: '/warranty' },
      ],
    },
  ]

  const socialLinks = [
    { label: 'Facebook', href: 'https://facebook.com' },
    { label: 'Twitter', href: 'https://twitter.com' },
    { label: 'Instagram', href: 'https://instagram.com' },
    { label: 'YouTube', href: 'https://youtube.com' },
  ]

  return (
    <footer className="bg-sage-50 pt-16 pb-8 mt-20">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-8 border-b">
          {/* Brand & Contact */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-sage-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <span className="text-xl font-semibold text-gray-900">Smart Home Store</span>
            </Link>
            <p className="text-gray-600 mb-6 max-w-sm">
              Transform your living space with curated smart home products that make life easier.
            </p>
            <div className="space-y-3">
              <a href="tel:1-800-SMARTHOME" className="flex items-center text-gray-600 hover:text-sage-600">
                <Phone size={16} className="mr-3" />
                1-800-SMARTHOME
              </a>
              <a href="mailto:support@smarthomestore.com" className="flex items-center text-gray-600 hover:text-sage-600">
                <Mail size={16} className="mr-3" />
                support@smarthomestore.com
              </a>
              <p className="flex items-start text-gray-600">
                <MapPin size={16} className="mr-3 mt-0.5" />
                123 Tech Lane, San Francisco, CA 94105
              </p>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-gray-900 mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-sage-600 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Smart Home Store. All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-sage-600 text-sm transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex items-center space-x-6">
            <Link href="/privacy" className="text-gray-600 hover:text-sage-600 text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-600 hover:text-sage-600 text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
