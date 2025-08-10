"use client"
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(7),
  service: z.enum(['wash', 'detailing', 'correction', 'ceramic']),
  vehicle: z.string().min(2),
  date: z.string().min(4),
  notes: z.string().optional().or(z.literal('')),
})

type FormValues = z.infer<typeof schema>

export default function BookingPage() {
  const [submitted, setSubmitted] = useState(false)
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormValues>({ resolver: zodResolver(schema) })

  const onSubmit = async (data: FormValues) => {
    const res = await fetch('/api/booking', {
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
    <div className="container space-y-10 pt-4 pb-16">
      <div>
        <h1 className="text-3xl font-semibold">Book your service</h1>
        <p className="mt-2 text-muted-foreground">Choose a service and we’ll confirm availability shortly.</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 md:w-2/3">
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="text-sm">Full name</label>
            <input className="mt-1 w-full rounded-md border bg-background px-3 py-2" {...register('name')} />
            {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>}
          </div>
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
          <div>
            <label className="text-sm">Vehicle</label>
            <input className="mt-1 w-full rounded-md border bg-background px-3 py-2" placeholder="e.g. BMW 3 Series" {...register('vehicle')} />
            {errors.vehicle && <p className="mt-1 text-xs text-red-500">{errors.vehicle.message}</p>}
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="text-sm">Service</label>
            <select className="mt-1 w-full rounded-md border bg-background px-3 py-2" {...register('service')}>
              <option value="wash">Premium Wash</option>
              <option value="detailing">Detailing</option>
              <option value="correction">Paint Correction</option>
              <option value="ceramic">Ceramic Coating</option>
            </select>
            {errors.service && <p className="mt-1 text-xs text-red-500">{errors.service.message}</p>}
          </div>
          <div>
            <label className="text-sm">Preferred date</label>
            <input type="date" className="mt-1 w-full rounded-md border bg-background px-3 py-2" {...register('date')} />
            {errors.date && <p className="mt-1 text-xs text-red-500">{errors.date.message}</p>}
          </div>
        </div>
        <div>
          <label className="text-sm">Notes</label>
          <textarea rows={4} className="mt-1 w-full rounded-md border bg-background px-3 py-2" {...register('notes')} />
        </div>
        <div className="flex items-center gap-3">
          <Button type="submit" disabled={isSubmitting}>{isSubmitting ? 'Submitting…' : 'Submit booking'}</Button>
          {submitted && <span className="text-sm text-green-600">We received your request. We’ll reply shortly.</span>}
        </div>
      </form>
    </div>
  )
}


