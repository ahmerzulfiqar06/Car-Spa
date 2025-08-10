"use client"
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Car, Shield, Sparkles, Clock, CheckCircle, Star, Droplets, Zap } from 'lucide-react'
import Link from 'next/link'
import type { Route } from 'next'

const services = [
  {
    id: 'express',
    icon: Zap,
    title: 'Express Wash',
    price: '$29',
    duration: '30 min',
    description: 'Quick and efficient wash for busy schedules. Perfect for regular maintenance.',
    features: [
      'Premium foam wash',
      'Wheel & tire cleaning',
      'Hand dry with microfiber',
      'Interior vacuum',
      'Dashboard wipe down'
    ],
    popular: false,
    color: 'from-green-500 to-emerald-600'
  },
  {
    id: 'premium',
    icon: Car,
    title: 'Premium Detail',
    price: '$149',
    duration: '2-3 hours',
    description: 'Comprehensive interior and exterior detailing for the ultimate clean.',
    features: [
      'Two-bucket wash method',
      'Clay bar treatment',
      'Paint polish & wax',
      'Complete interior detail',
      'Engine bay cleaning',
      'Tire & wheel polish',
      'Glass cleaning inside & out'
    ],
    popular: true,
    color: 'from-blue-500 to-purple-600'
  },
  {
    id: 'ceramic',
    icon: Shield,
    title: 'Ceramic Coating',
    price: '$599',
    duration: '4-6 hours',
    description: 'Long-lasting protection with unmatched gloss and hydrophobic properties.',
    features: [
      'Multi-stage paint correction',
      'Surface decontamination',
      'Professional ceramic coating',
      '2-5 year protection',
      'Hydrophobic finish',
      'Enhanced gloss & depth',
      'Maintenance kit included'
    ],
    popular: false,
    color: 'from-purple-500 to-pink-600'
  }
]

const additionalServices = [
  {
    title: 'Paint Correction',
    description: 'Remove swirl marks, scratches, and oxidation',
    icon: Sparkles,
    price: 'From $199'
  },
  {
    title: 'Interior Protection',
    description: 'Fabric & leather protection treatments',
    icon: Shield,
    price: 'From $89'
  },
  {
    title: 'Headlight Restoration',
    description: 'Restore clarity to foggy headlights',
    icon: Droplets,
    price: 'From $79'
  },
  {
    title: 'Engine Detailing',
    description: 'Deep clean and protect your engine bay',
    icon: Car,
    price: 'From $99'
  }
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Professional Car <span className="gradient-text">Detailing Services</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              From quick washes to premium ceramic coatings, we offer comprehensive car care solutions 
              that protect your investment and keep your vehicle looking its absolute best.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose from our expertly crafted service packages designed to meet every need and budget.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <Card className={`h-full ${service.popular ? 'ring-2 ring-blue-500' : ''} hover:shadow-xl transition-shadow duration-300`}>
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1">
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  
                  <CardHeader className="text-center pb-4">
                    <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                    <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {service.duration}
                      </span>
                    </div>
                    <div className="text-3xl font-bold text-primary">{service.price}</div>
                    <CardDescription className="text-center">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Button 
                      asChild 
                      className={`w-full bg-gradient-to-r ${service.color} hover:opacity-90 transition-opacity`}
                    >
                      <Link href={"/booking?service=" + service.id as Route}>
                        Book {service.title}
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-24 bg-gray-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Additional Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Specialized treatments to address specific needs and enhance your vehicle's appearance.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {additionalServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 mx-auto rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center mb-4">
                      <service.icon className="w-6 h-6 text-gray-600" />
                    </div>
                    <h3 className="font-semibold mb-2">{service.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{service.description}</p>
                    <p className="font-semibold text-primary">{service.price}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every service follows our meticulous process to ensure exceptional results.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                step: '01',
                title: 'Inspection & Assessment',
                description: 'Thorough evaluation of your vehicle\'s condition and specific needs.'
              },
              {
                step: '02',
                title: 'Professional Treatment',
                description: 'Expert application of premium products and proven techniques.'
              },
              {
                step: '03',
                title: 'Quality Assurance',
                description: 'Final inspection and touch-ups to ensure perfect results.'
              }
            ].map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center mb-6">
                  <span className="text-2xl font-bold text-white">{process.step}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{process.title}</h3>
                <p className="text-muted-foreground">{process.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Vehicle?</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Book your service today and experience the difference professional detailing makes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href={"/booking" as Route}>Book Service</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
                <Link href={"/contact" as Route}>Get Quote</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}