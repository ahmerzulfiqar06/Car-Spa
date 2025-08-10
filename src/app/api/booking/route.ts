import { NextResponse } from 'next/server'
import { z } from 'zod'

export const runtime = 'edge'

const schema = z.object({
  name: z.string(),
  email: z.string().email(),
  phone: z.string(),
  service: z.enum(['wash', 'detailing', 'correction', 'ceramic']),
  vehicle: z.string(),
  date: z.string(),
  notes: z.string().optional(),
})

export async function POST(req: Request) {
  try {
    const json = await req.json()
    const data = schema.parse(json)

    const toEmail = process.env.BOOKING_TO_EMAIL || process.env.CONTACT_TO_EMAIL
    const resendApiKey = process.env.RESEND_API_KEY
    const fromAddress = process.env.RESEND_FROM || 'Auto Spa <onboarding@resend.dev>'

    if (!toEmail || !resendApiKey) {
      return NextResponse.json({ error: 'Email is not configured' }, { status: 500 })
    }

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromAddress,
        to: [toEmail],
        subject: `New booking: ${data.service} — ${data.name}`,
        reply_to: data.email,
        text: `Service: ${data.service}\nVehicle: ${data.vehicle}\nDate: ${data.date}\nNotes: ${data.notes || '-'}\n\nCustomer: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}`,
      }),
    })

    if (!res.ok) {
      const msg = await res.text()
      return NextResponse.json({ error: 'Email failed', detail: msg }, { status: 500 })
    }

    const body = await res.json()
    return NextResponse.json({ ok: true, id: body.id })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }
}


