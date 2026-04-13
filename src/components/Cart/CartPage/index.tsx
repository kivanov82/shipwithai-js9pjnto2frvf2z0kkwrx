'use client'

import { type FC } from 'react'
import Link from 'next/link'
import { Minus, Plus, X, ShoppingBag, ArrowRight, Shield, Truck } from 'lucide-react'
import { motion } from 'framer-motion'
import { useCart } from '@/lib/hooks/useCart'

export const CartPage: FC = () => {
  const { items, updateQuantity, removeItem, subtotal, tax, total, itemCount } = useCart()

  if (items.length === 0) {
    return (
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-24 h-24 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingBag className="h-12 w-12 text-sage-600" />
            </div>
            <h1 className="text-3xl font-bold text-neutral-900 mb-4">
              Your cart is empty
            </h1>
            <p className="text-lg text-neutral-600 mb-8">
              Discover our smart home products and start building your connected home.
            </p>
            <Link
              href="/products"
              className="smart-button-primary px-8 py-3 inline-flex items-center"
            >
              Browse Products
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-neutral-900 mb-8">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl border-2 border-neutral-100 p-6"
              >
                <div className="flex flex-col sm:flex-row gap-6">
                  {/* Product Image */}
                  <div className="w-full sm:w-32 h-32 bg-neutral-100 rounded-lg flex-shrink-0">
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="w-20 h-20 bg-sage-100 rounded-lg animate-pulse" />
                    </div>
                  </div>

                  {/* Product Details */}
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-neutral-900">
                          {item.name}
                        </h3>
                        <p className="text-sm text-neutral-600 mt-1">
                          {item.description}
                        </p>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="p-2 hover:bg-neutral-100 rounded-lg transition-colors"
                        aria-label="Remove item"
                      >
                        <X className="h-5 w-5 text-neutral-400" />
                      </button>
                    </div>

                    <div className="flex items-center justify-between">
                      {/* Quantity Selector */}
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                          className="w-8 h-8 rounded-lg border-2 border-neutral-200 hover:border-sage-300 flex items-center justify-center transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="w-12 text-center font-medium">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 rounded-lg border-2 border-neutral-200 hover:border-sage-300 flex items-center justify-center transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>

                      {/* Price */}
                      <div className="text-right">
                        <div className="text-lg font-semibold text-neutral-900">
                          ${(item.price * item.quantity).toFixed(2)}
                        </div>
                        <div className="text-sm text-neutral-500">
                          ${item.price.toFixed(2)} each
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Trust Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className="flex items-center gap-3 p-4 bg-sage-50 rounded-lg">
                <Shield className="h-5 w-5 text-sage-600 flex-shrink-0" />
                <div>
                  <p className="font-medium text-neutral-900">Secure Checkout</p>
                  <p className="text-sm text-neutral-600">SSL encrypted payment</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-sage-50 rounded-lg">
                <Truck className="h-5 w-5 text-sage-600 flex-shrink-0" />
                <div>
                  <p className="font-medium text-neutral-900">Free Shipping</p>
                  <p className="text-sm text-neutral-600">On orders over $50</p>
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl border-2 border-neutral-100 p-6 sticky top-8">
              <h2 className="text-xl font-semibold text-neutral-900 mb-6">
                Order Summary
              </h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-neutral-600">
                  <span>Subtotal ({itemCount} items)</span>
                  <span className="font-medium text-neutral-900">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-neutral-600">
                  <span>Shipping</span>
                  <span className="font-medium text-neutral-900">
                    {subtotal >= 50 ? 'FREE' : '$9.99'}
                  </span>
                </div>
                <div className="flex justify-between text-neutral-600">
                  <span>Tax</span>
                  <span className="font-medium text-neutral-900">${tax.toFixed(2)}</span>
                </div>
              </div>

              <div className="border-t border-neutral-200 pt-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-lg font-semibold text-neutral-900">Total</span>
                  <span className="text-2xl font-bold text-neutral-900">
                    ${total.toFixed(2)}
                  </span>
                </div>
              </div>

              <button className="smart-button-primary w-full py-3 text-base mb-4">
                Proceed to Checkout
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>

              <Link
                href="/products"
                className="block text-center text-sage-600 hover:text-sage-700 font-medium"
              >
                Continue Shopping
              </Link>

              {/* Promo Code */}
              <div className="mt-6 pt-6 border-t border-neutral-200">
                <details className="group">
                  <summary className="cursor-pointer text-sm font-medium text-neutral-700 hover:text-neutral-900">
                    Have a promo code?
                  </summary>
                  <div className="mt-4 flex gap-2">
                    <input
                      type="text"
                      placeholder="Enter code"
                      className="flex-1 px-3 py-2 border-2 border-neutral-200 rounded-lg text-sm focus:outline-none focus:border-sage-500"
                    />
                    <button className="px-4 py-2 bg-sage-100 text-sage-700 rounded-lg hover:bg-sage-200 transition-colors text-sm font-medium">
                      Apply
                    </button>
                  </div>
                </details>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}