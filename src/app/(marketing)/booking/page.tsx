"use client"
import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
// import { format, addDays, isSameDay, isWeekend } from 'date-fns'

// Temporary date utilities until date-fns is available
const format = (date: Date, formatStr: string) => {
  if (formatStr === 'yyyy-MM-dd') {
    return date.toISOString().split('T')[0]
  }
  if (formatStr === 'MMM dd, yyyy') {
    return date.toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' })
  }
  if (formatStr === 'd') {
    return date.getDate().toString()
  }
  return date.toLocaleDateString()
}

const addDays = (date: Date, days: number) => {
  const result = new Date(date)
  result.setDate(result.getDate() + days)
  return result
}

const isSameDay = (date1: Date, date2: Date) => {
  return date1.toDateString() === date2.toDateString()
}

const isWeekend = (date: Date) => {
  const day = date.getDay()
  return day === 0 || day === 6
}
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Calendar, Clock, Car, User, Mail, Phone, CreditCard, CheckCircle } from 'lucide-react'
// import { loadStripe } from '@stripe/stripe-js'
// import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js'

const services = {
  basic: { name: 'Express Wash', price: 29, duration: '30 min' },
  premium: { name: 'Premium Detail', price: 149, duration: '2-3 hours' },
  ultimate: { name: 'Ceramic Coating', price: 599, duration: '4-6 hours' }
}

const timeSlots = [
  '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM',
  '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM',
  '4:00 PM', '5:00 PM'
]

const schema = z.object({
  service: z.enum(['basic', 'premium', 'ultimate']),
  date: z.string().min(1, 'Please select a date'),
  time: z.string().min(1, 'Please select a time'),
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email'),
  phone: z.string().min(10, 'Phone number is required'),
  vehicle: z.string().min(2, 'Vehicle information is required'),
  notes: z.string().optional()
})

type FormData = z.infer<typeof schema>

export default function BookingPage() {
  const searchParams = useSearchParams()
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [selectedTime, setSelectedTime] = useState('')
  const [paymentMethod, setPaymentMethod] = useState<'stripe' | 'paypal'>('stripe')
  const [isProcessing, setIsProcessing] = useState(false)
  const [bookingComplete, setBookingComplete] = useState(false)
  
  const defaultService = (searchParams.get('service') || 'premium') as keyof typeof services

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      service: defaultService
    }
  })

  const selectedService = watch('service')

  useEffect(() => {
    if (selectedDate) {
      setValue('date', format(selectedDate, 'yyyy-MM-dd'))
    }
  }, [selectedDate, setValue])

  useEffect(() => {
    if (selectedTime) {
      setValue('time', selectedTime)
    }
  }, [selectedTime, setValue])

  const handleStripePayment = async (data: FormData) => {
    setIsProcessing(true)
    
    try {
      // Call your API to create payment intent
      const response = await fetch('/api/payments/stripe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: services[data.service].price * 100, // Convert to cents
          currency: 'usd'
        })
      })
      
      const { clientSecret } = await response.json()
      
      // In production, you would redirect to Stripe Checkout or use Elements
      console.log('Stripe payment intent created:', clientSecret)
      
      // Simulate successful booking
      setTimeout(() => {
        setBookingComplete(true)
        setIsProcessing(false)
      }, 2000)
    } catch (error) {
      console.error('Payment error:', error)
      setIsProcessing(false)
    }
  }

  const onSubmit = async (data: FormData) => {
    if (paymentMethod === 'stripe') {
      await handleStripePayment(data)
    }
  }

  // Generate calendar days
  const calendarDays = Array.from({ length: 30 }, (_, i) => addDays(new Date(), i))

  if (bookingComplete) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold mb-2">Booking Confirmed!</h1>
          <p className="text-muted-foreground mb-6">
            We've sent a confirmation email with all the details.
          </p>
          <Button asChild>
            <a href="/">Return Home</a>
          </Button>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Book Your Service
          </h1>
          <p className="text-lg text-muted-foreground">
            Select your service, pick a date and time, and we'll take care of the rest.
          </p>
        </motion.div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Service Selection */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-2 space-y-6"
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Car className="w-5 h-5" />
                    Select Service
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    {Object.entries(services).map(([key, service]) => (
                      <label
                        key={key}
                        className={`relative flex items-center justify-between p-4 rounded-lg border-2 cursor-pointer transition-all ${
                          selectedService === key
                            ? 'border-blue-500 bg-blue-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <input
                          type="radio"
                          value={key}
                          {...register('service')}
                          className="sr-only"
                        />
                        <div>
                          <div className="font-semibold">{service.name}</div>
                          <div className="text-sm text-muted-foreground">{service.duration}</div>
                        </div>
                        <div className="text-2xl font-bold">${service.price}</div>
                      </label>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Date & Time Selection */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    Select Date & Time
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {/* Calendar */}
                    <div>
                      <Label>Select Date</Label>
                      <div className="grid grid-cols-7 gap-2 mt-2">
                        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                          <div key={day} className="text-center text-sm font-medium text-muted-foreground">
                            {day}
                          </div>
                        ))}
                        {calendarDays.map((date) => (
                          <Button
                            key={date.toISOString()}
                            type="button"
                            variant={selectedDate && isSameDay(date, selectedDate) ? 'default' : 'outline'}
                            size="sm"
                            className={`h-10 ${isWeekend(date) ? 'opacity-50' : ''}`}
                            disabled={isWeekend(date)}
                            onClick={() => setSelectedDate(date)}
                          >
                            {format(date, 'd')}
                          </Button>
                        ))}
                      </div>
                      {errors.date && (
                        <p className="text-sm text-red-500 mt-2">{errors.date.message}</p>
                      )}
                    </div>

                    {/* Time Slots */}
                    <div>
                      <Label className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        Select Time
                      </Label>
                      <div className="grid grid-cols-5 gap-2 mt-2">
                        {timeSlots.map((time) => (
                          <Button
                            key={time}
                            type="button"
                            variant={selectedTime === time ? 'default' : 'outline'}
                            size="sm"
                            onClick={() => setSelectedTime(time)}
                          >
                            {time}
                          </Button>
                        ))}
                      </div>
                      {errors.time && (
                        <p className="text-sm text-red-500 mt-2">{errors.time.message}</p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Customer Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="w-5 h-5" />
                    Your Information
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          {...register('name')}
                          placeholder="John Doe"
                        />
                        {errors.name && (
                          <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>
                        )}
                      </div>
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          {...register('email')}
                          placeholder="john@example.com"
                        />
                        {errors.email && (
                          <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
                        )}
                      </div>
                    </div>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <Label htmlFor="phone">Phone</Label>
                        <Input
                          id="phone"
                          {...register('phone')}
                          placeholder="(123) 456-7890"
                        />
                        {errors.phone && (
                          <p className="text-sm text-red-500 mt-1">{errors.phone.message}</p>
                        )}
                      </div>
                      <div>
                        <Label htmlFor="vehicle">Vehicle</Label>
                        <Input
                          id="vehicle"
                          {...register('vehicle')}
                          placeholder="Make, Model, Year"
                        />
                        {errors.vehicle && (
                          <p className="text-sm text-red-500 mt-1">{errors.vehicle.message}</p>
                        )}
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="notes">Special Requests (Optional)</Label>
                      <textarea
                        id="notes"
                        {...register('notes')}
                        className="w-full min-h-[100px] rounded-md border border-input bg-background px-3 py-2 text-sm"
                        placeholder="Any special requests or notes..."
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Booking Summary & Payment */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle>Booking Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Service:</span>
                      <span className="font-medium">
                        {services[selectedService].name}
                      </span>
                    </div>
                    {selectedDate && (
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Date:</span>
                        <span className="font-medium">
                          {format(selectedDate, 'MMM dd, yyyy')}
                        </span>
                      </div>
                    )}
                    {selectedTime && (
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Time:</span>
                        <span className="font-medium">{selectedTime}</span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Duration:</span>
                      <span className="font-medium">
                        {services[selectedService].duration}
                      </span>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex justify-between text-lg font-semibold">
                      <span>Total:</span>
                      <span>${services[selectedService].price}</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label>Payment Method</Label>
                    <div className="grid gap-2">
                      <Button
                        type="button"
                        variant={paymentMethod === 'stripe' ? 'default' : 'outline'}
                        onClick={() => setPaymentMethod('stripe')}
                        className="justify-start"
                      >
                        <CreditCard className="mr-2 w-4 h-4" />
                        Credit/Debit Card
                      </Button>
                      <Button
                        type="button"
                        variant={paymentMethod === 'paypal' ? 'default' : 'outline'}
                        onClick={() => setPaymentMethod('paypal')}
                        className="justify-start"
                      >
                        PayPal
                      </Button>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    disabled={isProcessing}
                  >
                    {isProcessing ? 'Processing...' : `Pay $${services[selectedService].price}`}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    Your payment information is secure and encrypted.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </form>
      </div>
    </div>
  )
}