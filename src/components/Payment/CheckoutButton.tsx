'use client';

import { useState } from 'react';
import { useStripe, useElements } from '@stripe/react-stripe-js';
import { Button } from '@/components/ui/button';
import { ShoppingCart, CreditCard, Loader2 } from 'lucide-react';
import { formatPrice, Product } from '@/lib/stripe';

interface CheckoutButtonProps {
  product: Product;
  quantity?: number;
  className?: string;
}

export default function CheckoutButton({ 
  product, 
  quantity = 1, 
  className 
}: CheckoutButtonProps) {
  const stripe = useStripe();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleCheckout = async () => {
    if (!stripe) {
      setError('Stripe is not loaded');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      // Create checkout session
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          productId: product.id,
          quantity,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to create checkout session');
      }

      // Redirect to Stripe Checkout
      const { error } = await stripe.redirectToCheckout({
        sessionId: data.sessionId,
      });

      if (error) {
        throw new Error(error.message);
      }
    } catch (err) {
      console.error('Checkout error:', err);
      setError(err instanceof Error ? err.message : 'Something went wrong');
    } finally {
      setIsLoading(false);
    }
  };

  const totalPrice = product.price * quantity;

  return (
    <div className="space-y-2">
      <Button
        onClick={handleCheckout}
        disabled={!stripe || isLoading || !product.inStock}
        className={`w-full bg-gradient-to-r from-[#B87333] to-[#FFB347] hover:from-[#9A5F2A] hover:to-[#E6A033] text-white font-medium shadow-lg hover:shadow-xl transition-all duration-200 ${className}`}
        size="lg"
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Processing...
          </>
        ) : !product.inStock ? (
          'Out of Stock'
        ) : (
          <>
            <ShoppingCart className="mr-2 h-4 w-4" />
            Buy Now - {formatPrice(totalPrice)}
          </>
        )}
      </Button>
      
      {error && (
        <p className="text-red-500 text-sm text-center">{error}</p>
      )}
      
      <div className="flex items-center justify-center text-xs text-[#FFB347] gap-1">
        <CreditCard className="h-3 w-3" />
        <span>🧪 Demo Mode • Test Cards • iDEAL • No Real Charges</span>
      </div>
    </div>
  );
}