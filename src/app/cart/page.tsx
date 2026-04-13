'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Container,
  Section,
  Card,
  Button,
  PriceDisplay,
  QuantitySelector,
  Breadcrumb,
  IconButton
} from '@/components/ui';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: '1',
      name: 'Smart Light Bulb Pro',
      price: 29.99,
      quantity: 2,
      image: '/api/placeholder/120/120'
    },
    {
      id: '2',
      name: 'Smart Thermostat',
      price: 199.00,
      quantity: 1,
      image: '/api/placeholder/120/120'
    }
  ]);
  
  const updateQuantity = (id: string, quantity: number) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };
  
  const removeItem = (id: string) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };
  
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const tax = subtotal * 0.08;
  const shipping = subtotal > 100 ? 0 : 9.99;
  const total = subtotal + tax + shipping;
  
  if (cartItems.length === 0) {
    return (
      <Section>
        <Container>
          <Card className="text-center py-16">
            <h2 className="text-2xl font-semibold mb-4">Your cart is empty</h2>
            <p className="text-neutral-600 mb-8">Add some smart home devices to get started!</p>
            <Link href="/products">
              <Button variant="primary">Browse Products</Button>
            </Link>
          </Card>
        </Container>
      </Section>
    );
  }
  
  return (
    <>
      <Section size="sm">
        <Container>
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'Cart' }
            ]}
          />
          <h1 className="text-4xl font-bold text-neutral-900 mt-8">Shopping Cart</h1>
        </Container>
      </Section>
      
      <Section>
        <Container>
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card>
                <div className="space-y-6">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex gap-4 pb-6 border-b border-neutral-200 last:border-0">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={120}
                        height={120}
                        className="rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
                        <PriceDisplay price={item.price} className="mb-4" />
                        <div className="flex items-center justify-between">
                          <QuantitySelector
                            quantity={item.quantity}
                            onQuantityChange={(qty) => updateQuantity(item.id, qty)}
                          />
                          <IconButton
                            variant="ghost"
                            onClick={() => removeItem(item.id)}
                            aria-label="Remove item"
                          >
                            <svg className="w-5 h-5 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                          </IconButton>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
            
            <div>
              <Card>
                <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-neutral-600">Subtotal</span>
                    <span className="font-mono">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-600">Tax</span>
                    <span className="font-mono">${tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-600">Shipping</span>
                    <span className="font-mono">
                      {shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}
                    </span>
                  </div>
                  <div className="pt-3 border-t border-neutral-200">
                    <div className="flex justify-between">
                      <span className="text-lg font-semibold">Total</span>
                      <span className="text-lg font-semibold font-mono">${total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
                <Button variant="primary" size="lg" className="w-full mb-3">
                  Proceed to Checkout
                </Button>
                <Button variant="outline" size="lg" className="w-full">
                  Continue Shopping
                </Button>
                {shipping > 0 && (
                  <p className="text-sm text-neutral-600 text-center mt-4">
                    Free shipping on orders over $100
                  </p>
                )}
              </Card>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}