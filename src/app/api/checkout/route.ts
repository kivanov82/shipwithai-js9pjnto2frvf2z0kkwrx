import { NextRequest, NextResponse } from 'next/server';
import { stripe, DEMO_PRODUCTS } from '@/lib/stripe';

export async function POST(request: NextRequest) {
  try {
    const { productId, quantity = 1 } = await request.json();

    // Find the product
    const product = DEMO_PRODUCTS.find(p => p.id === productId);
    if (!product) {
      return NextResponse.json(
        { error: 'Product not found' },
        { status: 404 }
      );
    }

    if (!product.inStock) {
      return NextResponse.json(
        { error: 'Product out of stock' },
        { status: 400 }
      );
    }

    // Create Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card', 'ideal'], // Support cards and iDEAL for Dutch market
      line_items: [
        {
          price_data: {
            currency: 'eur',
            product_data: {
              name: product.name,
              description: product.description,
              images: product.image ? [product.image] : [],
            },
            unit_amount: product.price,
          },
          quantity,
        },
      ],
      mode: 'payment', // One-time payment
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/checkout/cancel`,
      metadata: {
        productId: product.id,
        quantity: quantity.toString(),
      },
      // Dutch market specific settings
      shipping_address_collection: {
        allowed_countries: ['NL'], // Netherlands only as per e-commerce specialist
      },
      phone_number_collection: {
        enabled: true,
      },
      // Demo mode banner
      custom_text: {
        submit: {
          message: '🧪 DEMO MODE: This is a test payment. No real money will be charged.',
        },
      },
    });

    return NextResponse.json({ sessionId: session.id });
  } catch (error) {
    console.error('Checkout session creation failed:', error);
    return NextResponse.json(
      { error: 'Failed to create checkout session' },
      { status: 500 }
    );
  }
}
