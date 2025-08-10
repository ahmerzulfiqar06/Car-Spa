"use client"
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { MapSection } from '@/components/map-section'

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(7).optional().or(z.literal('')),
  message: z.string().min(10),
})

type FormValues = z.infer<typeof schema>

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({ resolver: zodResolver(schema) })

  const onSubmit = async (data: FormValues) => {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
    if (res.ok) {
      setSubmitted(true)
      reset()
    } else {
      alert('Something went wrong. Please try again.')
    }
  }

  return (
    <div>
      <div className="container space-y-10 pt-4 pb-16">
        <div>
          <h1 className="text-3xl font-semibold">Contact us</h1>
          <p className="mt-2 text-muted-foreground">
            Have a question or need a custom quote? We’d love to hear from you.
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 md:w-2/3">
          <div>
            <label className="text-sm">Name</label>
            <input className="mt-1 w-full rounded-md border bg-background px-3 py-2" {...register('name')} />
            {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>}
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="text-sm">Email</label>
              <input className="mt-1 w-full rounded-md border bg-background px-3 py-2" {...register('email')} />
              {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
            </div>
            <div>
              <label className="text-sm">Phone</label>
              <input className="mt-1 w-full rounded-md border bg-background px-3 py-2" {...register('phone')} />
              {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>}
            </div>
          </div>
          <div>
            <label className="text-sm">Message</label>
            <textarea rows={6} className="mt-1 w-full rounded-md border bg-background px-3 py-2" {...register('message')} />
            {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>}
          </div>
          <div className="flex items-center gap-3">
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Sending…' : 'Send message'}
            </Button>
            {submitted && <span className="text-sm text-green-600">We received your message. Thank you!</span>}
          </div>
        </form>
      </div>
      <MapSection />
    </div>
  )
}


