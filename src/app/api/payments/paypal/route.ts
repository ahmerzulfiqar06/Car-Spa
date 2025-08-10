import { NextResponse } from 'next/server'
import paypal from '@paypal/checkout-server-sdk'

function client() {
  const clientId = process.env.PAYPAL_CLIENT_ID
  const clientSecret = process.env.PAYPAL_CLIENT_SECRET
  if (!clientId || !clientSecret) return null
  const env = process.env.NODE_ENV === 'production'
    ? new paypal.core.LiveEnvironment(clientId, clientSecret)
    : new paypal.core.SandboxEnvironment(clientId, clientSecret)
  return new paypal.core.PayPalHttpClient(env)
}

export async function POST(req: Request) {
  const payPal = client()
  if (!payPal) return NextResponse.json({ error: 'PayPal not configured' }, { status: 500 })

  try {
    const { value, currency_code = 'USD' } = await req.json()
    const request = new paypal.orders.OrdersCreateRequest()
    request.headers['prefer'] = 'return=representation'
    request.requestBody({
      intent: 'CAPTURE',
      purchase_units: [
        { amount: { value: String(value), currency_code } },
      ],
    })
    const order = await payPal.execute(request)
    return NextResponse.json(order.result)
  } catch (e) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }
}


