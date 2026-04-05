'use client';

import { Elements } from '@stripe/react-stripe-js';
import { stripePromise } from '@/lib/stripe';

interface StripeProviderProps {
  children: React.ReactNode;
}

export default function StripeProvider({ children }: StripeProviderProps) {
  return (
    <Elements 
      stripe={stripePromise}
      options={{
        appearance: {
          theme: 'night', // Dark theme to match UI design
          variables: {
            colorPrimary: '#B87333', // Warm copper
            colorBackground: '#0F0E0C', // Deep warm black
            colorText: '#FFB347', // Soft amber
            fontFamily: 'DM Sans, sans-serif',
            borderRadius: '8px',
          },
        },
        locale: 'nl', // Dutch locale for Netherlands market
      }}
    >
      {children}
    </Elements>
  );
}