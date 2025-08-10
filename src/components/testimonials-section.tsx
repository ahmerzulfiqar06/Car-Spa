"use client"
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Star, Quote } from 'lucide-react'
import { useEffect, useState } from 'react'

const testimonials = [
  {
    id: 1,
    name: 'Michael Chen',
    role: 'Tesla Model S Owner',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
    rating: 5,
    text: 'The ceramic coating service was absolutely worth it. My car looks better than when I bought it new. The attention to detail is incredible!',
    service: 'Ceramic Coating'
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    role: 'BMW X5 Owner',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80',
    rating: 5,
    text: 'I\'ve been coming here for 2 years now. The premium detailing service is exceptional. They treat my car like it\'s their own.',
    service: 'Premium Detail'
  },
  {
    id: 3,
    name: 'David Park',
    role: 'Mercedes C-Class Owner',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80',
    rating: 5,
    text: 'Quick, professional, and the results speak for themselves. The express wash is perfect for my busy schedule.',
    service: 'Express Wash'
  },
  {
    id: 4,
    name: 'Emma Wilson',
    role: 'Audi Q7 Owner',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80',
    rating: 5,
    text: 'The paint correction service removed years of swirl marks. My car looks absolutely stunning now. Highly recommend!',
    service: 'Paint Correction'
  },
  {
    id: 5,
    name: 'James Martinez',
    role: 'Porsche 911 Owner',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80',
    rating: 5,
    text: 'Best detailing service in the city. The ceramic coating has kept my car looking pristine for over a year now.',
    service: 'Ceramic Coating'
  }
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-100 text-yellow-700 text-sm font-medium mb-4">
            <Star className="w-4 h-4 fill-current" />
            Customer Reviews
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Our Customers
            <span className="block gradient-text">Say About Us</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust us with their vehicles.
          </p>
        </motion.div>

        <div className="relative">
          <div className="flex gap-6 transition-transform duration-500 ease-in-out"
               style={{ transform: `translateX(-${currentIndex * 33.333}%)` }}>
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <motion.div
                key={`${testimonial.id}-${index}`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
                className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0"
              >
                <Card className="h-full relative overflow-hidden">
                  <div className="absolute top-4 right-4 text-blue-100">
                    <Quote className="w-12 h-12" />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div>
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        <div className="flex gap-0.5 mt-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-4">"{testimonial.text}"</p>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-medium">
                      {testimonial.service}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex 
                    ? 'w-8 bg-blue-600' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white"
        >
          <h3 className="text-2xl font-bold mb-2">Join 2,500+ Happy Customers</h3>
          <p className="mb-4">Experience the difference with our premium car care services</p>
          <div className="flex items-center justify-center gap-8">
            <div>
              <div className="text-3xl font-bold">4.9/5</div>
              <div className="text-sm opacity-90">Average Rating</div>
            </div>
            <div className="w-px h-12 bg-white/30" />
            <div>
              <div className="text-3xl font-bold">2,500+</div>
              <div className="text-sm opacity-90">Happy Customers</div>
            </div>
            <div className="w-px h-12 bg-white/30" />
            <div>
              <div className="text-3xl font-bold">99%</div>
              <div className="text-sm opacity-90">Satisfaction Rate</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
