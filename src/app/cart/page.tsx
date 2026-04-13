'use client'

import { useState } from 'react'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import Input from '@/components/ui/Input'
import { formatPrice } from '@/lib/utils'
import { Minus, Plus, X, ShoppingBag, ArrowRight } from 'lucide-react'

interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
  image: string
}

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: '1',
      name: 'Smart LED Bulb Kit',
      price: 49.99,
      quantity: 2,
      image: '/api/placeholder/100/100',
    },
    {
      id: '2',
      name: 'Video Doorbell Pro',
      price: 199.99,
      quantity: 1,
      image: '/api/placeholder/100/100',
    },
  ])

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity === 0) {
      setCartItems(cartItems.filter(item => item.id !== id))
    } else {
      setCartItems(cartItems.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      ))
    }
  }

  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)
  const shipping = subtotal > 100 ? 0 : 9.99
  const tax = subtotal * 0.08 // 8% tax
  const total = subtotal + shipping + tax

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="container-custom max-w-2xl text-center">
          <ShoppingBag className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Your cart is empty
          </h1>
          <p className="text-gray-600 mb-8">
            Add some smart home products to get started!
          </p>
          <Link href="/products">
            <Button size="lg" className="group">
              Continue Shopping
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container-custom">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>

        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4 mb-8 lg:mb-0">
            {cartItems.map((item) => (
              <Card key={item.id} className="p-4">
                <div className="flex gap-4">
                  {/* Product Image */}
                  <div className="w-24 h-24 bg-sage-100 rounded-lg flex-shrink-0" />

                  {/* Product Details */}
                  <div className="flex-1">
                    <div className="flex justify-between mb-2">
                      <h3 className="font-semibold text-gray-900">{item.name}</h3>
                      <button
                        onClick={() => updateQuantity(item.id, 0)}
                        className="text-gray-400 hover:text-gray-600 p-1"
                        aria-label="Remove item"
                      >
                        <X size={20} />
                      </button>
                    </div>
                    <p className="text-gray-600 mb-4">{formatPrice(item.price)}</p>

                    {/* Quantity Selector */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center border-2 border-gray-200 rounded-lg">
                        <button
                          onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
                          className="p-2 hover:bg-gray-100 transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="px-4 font-mono font-medium">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-2 hover:bg-gray-100 transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                      <p className="font-semibold text-gray-900">
                        {formatPrice(item.price * item.quantity)}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Order Summary */}
          <div>
            <Card className="sticky top-28">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Order Summary</h2>

              <div className="space-y-2 mb-4 pb-4 border-b">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span className="font-mono">{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span className="font-mono">
                    {shipping === 0 ? 'FREE' : formatPrice(shipping)}
                  </span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Estimated Tax</span>
                  <span className="font-mono">{formatPrice(tax)}</span>
                </div>
              </div>

              <div className="flex justify-between text-lg font-semibold text-gray-900 mb-6">
                <span>Total</span>
                <span className="font-mono">{formatPrice(total)}</span>
              </div>

              {shipping > 0 && (
                <p className="text-sm text-sage-600 mb-4">
                  Add {formatPrice(100 - subtotal)} more for free shipping!
                </p>
              )}

              <Link href="/checkout" className="block mb-3">
                <Button fullWidth size="lg">
                  Proceed to Checkout
                </Button>
              </Link>

              <Link href="/products">
                <Button variant="outline" fullWidth>
                  Continue Shopping
                </Button>
              </Link>

              {/* Promo Code */}
              <div className="mt-6 pt-6 border-t">
                <p className="text-sm font-medium text-gray-900 mb-2">Promo Code</p>
                <div className="flex gap-2">
                  <Input placeholder="Enter code" className="flex-1" />
                  <Button variant="secondary">Apply</Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
