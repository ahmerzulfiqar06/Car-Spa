import { NextResponse } from 'next/server'

export const runtime = 'edge'

export async function POST(req: Request) {
  try {
    const { price, service } = await req.json()
    if (!process.env.STRIPE_SECRET_KEY) {
      return NextResponse.json({ error: 'Stripe not configured' }, { status: 500 })
    }
    // Create a Checkout Session via Stripe API (fetch, edge compatible)
    const res = await fetch('https://api.stripe.com/v1/checkout/sessions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.STRIPE_SECRET_KEY}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        mode: 'payment',
        'line_items[0][price_data][currency]': 'usd',
        'line_items[0][price_data][product_data][name]': `Auto Spa — ${service}`,
        'line_items[0][price_data][unit_amount]': String(price),
        'line_items[0][quantity]': '1',
        success_url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://car-spa.pages.dev'}/?paid=true`,
        cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://car-spa.pages.dev'}/checkout`,
      }),
    })
    const json = await res.json()
    if (!res.ok) return NextResponse.json({ error: 'Stripe error', detail: json }, { status: 500 })
    return NextResponse.json(json)
  } catch (e) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }
}


