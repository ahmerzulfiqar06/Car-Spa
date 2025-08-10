"use client"
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Check, Sparkles, Shield, Zap, Droplets, Star, Clock } from 'lucide-react'
import Link from 'next/link'
import type { Route } from 'next'

const services = [
  {
    id: 'basic',
    name: 'Express Wash',
    price: 29,
    duration: '30 min',
    popular: false,
    icon: Droplets,
    image: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=800&q=80',
    features: [
      'Exterior foam wash',
      'Wheel & tire cleaning',
      'Window cleaning',
      'Hand dry with microfiber',
      'Tire shine application',
      'Air freshener'
    ],
    description: 'Quick and efficient exterior cleaning for regular maintenance.'
  },
  {
    id: 'premium',
    name: 'Premium Detail',
    price: 149,
    duration: '2-3 hours',
    popular: true,
    icon: Sparkles,
    image: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=800&q=80',
    features: [
      'Full interior deep clean',
      'Leather conditioning',
      'Engine bay detailing',
      'Clay bar treatment',
      'Paint sealant application',
      'Headlight restoration',
      'Odor elimination',
      'Dashboard protection'
    ],
    description: 'Complete interior and exterior detailing for a showroom finish.'
  },
  {
    id: 'ultimate',
    name: 'Ceramic Coating',
    price: 599,
    duration: '4-6 hours',
    popular: false,
    icon: Shield,
    image: 'https://images.unsplash.com/photo-1625231334168-35067f8853ed?w=800&q=80',
    features: [
      'Paint correction (2-stage)',
      'Premium ceramic coating',
      '5-year protection warranty',
      'Hydrophobic coating',
      'UV protection',
      'Chemical resistance',
      'Enhanced gloss finish',
      'Maintenance kit included',
      'Follow-up inspection'
    ],
    description: 'Ultimate paint protection with long-lasting ceramic coating.'
  }
]

export function ServicesSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">
            <Star className="w-4 h-4" />
            Our Services
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Choose Your Perfect
            <span className="block gradient-text">Car Care Package</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From quick washes to premium ceramic coating, we offer comprehensive car care solutions tailored to your needs.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className={`relative h-full flex flex-col overflow-hidden ${
                service.popular ? 'border-blue-500 shadow-xl' : ''
              }`}>
                {service.popular && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                      MOST POPULAR
                    </span>
                  </div>
                )}

                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-4 left-4 text-white z-20">
                    <service.icon className="w-8 h-8 mb-2" />
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="w-4 h-4" />
                      {service.duration}
                    </div>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-2xl">{service.name}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">${service.price}</span>
                    <span className="text-muted-foreground ml-2">per vehicle</span>
                  </div>
                </CardHeader>

                <CardContent className="flex-1">
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter className="pt-6">
                  <Button 
                    asChild 
                    className={`w-full ${
                      service.popular 
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white' 
                        : ''
                    }`}
                    variant={service.popular ? 'default' : 'outline'}
                  >
                    <Link href={`/booking?service=${service.id}` as Route}>
                      Book Now
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground mb-4">
            Need a custom package? We offer tailored solutions for fleet vehicles and special requests.
          </p>
          <Button variant="outline" asChild>
            <Link href={"/contact" as Route}>
              Contact for Custom Quote
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
