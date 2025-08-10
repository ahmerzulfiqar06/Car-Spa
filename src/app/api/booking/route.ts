import { NextResponse } from 'next/server'
import { z } from 'zod'
import nodemailer from 'nodemailer'

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

    const smtpHost = process.env.SMTP_HOST
    const smtpUser = process.env.SMTP_USER
    const smtpPass = process.env.SMTP_PASS
    const toEmail = process.env.BOOKING_TO_EMAIL || process.env.CONTACT_TO_EMAIL

    if (!smtpHost || !smtpUser || !smtpPass || !toEmail) {
      return NextResponse.json({ error: 'Email is not configured' }, { status: 500 })
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: Number(process.env.SMTP_PORT || 587),
      secure: false,
      auth: { user: smtpUser, pass: smtpPass },
    })

    const info = await transporter.sendMail({
      from: `Auto Spa <${smtpUser}>`,
      to: toEmail,
      subject: `New booking: ${data.service} — ${data.name}`,
      replyTo: data.email,
      text: `Service: ${data.service}\nVehicle: ${data.vehicle}\nDate: ${data.date}\nNotes: ${data.notes || '-'}\n\nCustomer: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}`,
    })

    return NextResponse.json({ ok: true, id: info.messageId })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }
}


