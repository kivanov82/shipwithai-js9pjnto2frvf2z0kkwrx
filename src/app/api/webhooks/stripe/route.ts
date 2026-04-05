import { NextRequest, NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';
import { headers } from 'next/headers';

// Handle Stripe webhook events
export async function POST(request: NextRequest) {
  const body = await request.text();
  const signature = headers().get('stripe-signature');

  if (!signature) {
    return NextResponse.json(
      { error: 'Missing stripe-signature header' },
      { status: 400 }
    );
  }

  let event;

  try {
    // Verify webhook signature
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err) {
    console.error('Webhook signature verification failed:', err);
    return NextResponse.json(
      { error: 'Invalid signature' },
      { status: 400 }
    );
  }

  // Handle the event
  try {
    switch (event.type) {
      case 'checkout.session.completed':
        const session = event.data.object;
        console.log('✅ Payment successful:', {
          sessionId: session.id,
          customerEmail: session.customer_details?.email,
          amountTotal: session.amount_total,
          productId: session.metadata?.productId,
          quantity: session.metadata?.quantity,
        });
        
        // Here you would:
        // 1. Update your database with the order
        // 2. Send confirmation email to customer
        // 3. Notify fulfillment team
        // 4. Update inventory
        
        break;

      case 'payment_intent.succeeded':
        const paymentIntent = event.data.object;
        console.log('💳 Payment intent succeeded:', paymentIntent.id);
        break;

      case 'payment_intent.payment_failed':
        const failedPayment = event.data.object;
        console.log('❌ Payment failed:', failedPayment.id);
        
        // Here you would:
        // 1. Log the failure reason
        // 2. Notify customer of payment failure
        // 3. Suggest alternative payment methods
        
        break;

      default:
        console.log(`Unhandled event type: ${event.type}`);
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error('Webhook handler error:', error);
    return NextResponse.json(
      { error: 'Webhook handler failed' },
      { status: 500 }
    );
  }
}
