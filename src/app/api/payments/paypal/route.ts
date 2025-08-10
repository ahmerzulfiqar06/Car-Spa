import { NextResponse } from 'next/server'

export const runtime = 'edge'

async function getAccessToken() {
  const clientId = process.env.PAYPAL_CLIENT_ID
  const clientSecret = process.env.PAYPAL_CLIENT_SECRET
  if (!clientId || !clientSecret) return null
  const base = process.env.NODE_ENV === 'production' ? 'https://api.paypal.com' : 'https://api-m.sandbox.paypal.com'
  const res = await fetch(base + '/v1/oauth2/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + btoa(`${clientId}:${clientSecret}`)
    },
    body: 'grant_type=client_credentials',
  })
  if (!res.ok) return null
  const json = await res.json()
  return json.access_token as string
}

export async function POST(req: Request) {
  try {
    const token = await getAccessToken()
    if (!token) return NextResponse.json({ error: 'PayPal not configured' }, { status: 500 })
    const { value, currency_code = 'USD' } = await req.json()
    const base = process.env.NODE_ENV === 'production' ? 'https://api.paypal.com' : 'https://api-m.sandbox.paypal.com'
    const res = await fetch(base + '/v2/checkout/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
        'PayPal-Request-Id': crypto.randomUUID(),
      },
      body: JSON.stringify({
        intent: 'CAPTURE',
        purchase_units: [{ amount: { value: String(value), currency_code } }],
      }),
    })
    const json = await res.json()
    if (!res.ok) return NextResponse.json({ error: 'PayPal error', detail: json }, { status: 500 })
    return NextResponse.json(json)
  } catch (e) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }
}


