import { loadStripe } from '@stripe/stripe-js';
import Stripe from 'stripe';

// Client-side Stripe instance
export const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

// Server-side Stripe instance
export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-04-10',
  typescript: true,
});

// Product types for our smart home store
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number; // in cents
  image?: string;
  category: 'adapters' | 'sensors' | 'controllers' | 'cameras' | 'systems';
  inStock: boolean;
}

// Demo products for testing
export const DEMO_PRODUCTS: Product[] = [
  {
    id: 'zigbee-hub-pro',
    name: '[DEMO] Zigbee Hub Pro',
    description: 'Central controller for your smart home ecosystem',
    price: 12900, // €129.00
    category: 'controllers',
    inStock: true,
  },
  {
    id: 'motion-sensor-pack',
    name: '[DEMO] Motion Sensor 4-Pack',
    description: 'Wireless motion sensors with 2-year battery life',
    price: 7900, // €79.00
    category: 'sensors',
    inStock: true,
  },
  {
    id: 'smart-door-lock',
    name: '[DEMO] Smart Door Lock',
    description: 'Keyless entry with smartphone control',
    price: 19900, // €199.00
    category: 'controllers',
    inStock: true,
  },
  {
    id: 'complete-starter-kit',
    name: '[DEMO] Complete Starter Kit',
    description: 'Everything needed for basic home automation',
    price: 34900, // €349.00
    category: 'systems',
    inStock: true,
  },
];

// Utility to format price
export const formatPrice = (cents: number, locale: string = 'nl-NL') => {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: 'EUR',
  }).format(cents / 100);
};
