import { NextResponse } from 'next/server'

export const runtime = 'edge'

export async function POST(req: Request) {
  try {
    const { amount, currency = 'usd' } = await req.json()
    if (!process.env.STRIPE_SECRET_KEY) {
      return NextResponse.json({ error: 'Stripe not configured' }, { status: 500 })
    }
    const res = await fetch('https://api.stripe.com/v1/payment_intents', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.STRIPE_SECRET_KEY}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        amount: String(amount),
        currency,
        'automatic_payment_methods[enabled]': 'true',
        description: 'Auto Spa booking',
      }),
    })
    if (!res.ok) {
      const msg = await res.text()
      return NextResponse.json({ error: 'Stripe error', detail: msg }, { status: 500 })
    }
    const json = await res.json()
    return NextResponse.json({ clientSecret: json.client_secret })
  } catch (e) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }
}


