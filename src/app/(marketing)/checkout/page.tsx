"use client"
import { useState } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js'
import { Button } from '@/components/ui/button'
import type { Route } from 'next'
import Link from 'next/link'

type Service = 'wash' | 'detailing' | 'correction' | 'ceramic'

const servicePrices: Record<Service, number> = {
  wash: 2500,
  detailing: 14900,
  correction: 29900,
  ceramic: 69900,
}

export default function CheckoutPage() {
  const [service, setService] = useState<Service>('wash')
  const [loading, setLoading] = useState<'stripe' | 'paypal' | null>(null)

  const amount = servicePrices[service]

  const handleStripe = async () => {
    setLoading('stripe')
    try {
      const res = await fetch('/api/payments/stripe-checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ price: amount, service }),
      })
      const json = await res.json()
      if (json.error) throw new Error(json.error)
      const stripe = await loadStripe('pk_test_12345')
      if (!stripe) throw new Error('Stripe failed to load')
      if (json.url) {
        window.location.href = json.url
      } else if (json.id) {
        // Some environments return the session id rather than url
        const { error } = await stripe.redirectToCheckout({ sessionId: json.id })
        if (error) throw error
      } else {
        alert('Stripe session created. Redirecting...')
      }
    } catch (e) {
      alert('Stripe error. Check configuration.')
    } finally {
      setLoading(null)
    }
  }

  return (
    <div className="container max-w-2xl space-y-8 py-12">
      <div>
        <h1 className="text-3xl font-semibold">Checkout</h1>
        <p className="mt-2 text-muted-foreground">Choose your package and complete payment.</p>
      </div>

      <div className="rounded-xl border p-6">
        <label className="text-sm font-medium">Select service</label>
        <select
          className="mt-2 w-full rounded-md border bg-background px-3 py-2"
          value={service}
          onChange={(e) => setService(e.target.value as Service)}
        >
          <option value="wash">Premium Wash — $25</option>
          <option value="detailing">Detailing — $149</option>
          <option value="correction">Paint Correction — $299</option>
          <option value="ceramic">Ceramic Coating — $699</option>
        </select>
        <div className="mt-4 text-sm text-muted-foreground">Total: ${(amount / 100).toFixed(2)}</div>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <Button onClick={handleStripe} disabled={loading !== null}>
          {loading === 'stripe' ? 'Processing…' : 'Pay with Stripe'}
        </Button>
        <PayPalScriptProvider options={{ clientId: 'test', currency: 'USD' }}>
          <div className="rounded-xl border p-2">
            <PayPalButtons
              style={{ layout: 'horizontal' }}
              createOrder={async () => {
                setLoading('paypal')
                const r = await fetch('/api/payments/paypal', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({ value: (amount / 100).toFixed(2), currency_code: 'USD' }),
                })
                const json = await r.json()
                setLoading(null)
                return json.id
              }}
              onApprove={async (data) => {
                const r = await fetch('/api/payments/paypal/capture', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({ orderId: data.orderID }),
                })
                const json = await r.json()
                if (json.error) alert('PayPal capture failed')
                else alert('PayPal payment captured!')
              }}
            />
          </div>
        </PayPalScriptProvider>
      </div>

      <div>
        <Button asChild variant="outline">
          <Link href={"/" as Route}>Back to home</Link>
        </Button>
      </div>
    </div>
  )
}


