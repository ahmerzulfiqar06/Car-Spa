"use client"
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Check, Star, Zap, Car, Shield, Clock, Phone, Mail } from 'lucide-react'
import Link from 'next/link'
import type { Route } from 'next'

const pricingTiers = [
  {
    id: 'express',
    name: 'Express Wash',
    price: '$29',
    originalPrice: null,
    duration: '30 mins',
    description: 'Perfect for regular maintenance and quick touch-ups.',
    popular: false,
    features: [
      'Premium foam wash',
      'Wheel & tire cleaning',
      'Hand dry with microfiber',
      'Interior vacuum',
      'Dashboard wipe down',
      'Basic tire shine',
    ],
    notIncluded: [
      'Wax/sealant application',
      'Interior detailing',
      'Engine bay cleaning',
    ],
    icon: Zap,
    color: 'from-green-500 to-emerald-600',
    savings: null
  },
  {
    id: 'premium',
    name: 'Premium Detail',
    price: '$149',
    originalPrice: '$199',
    duration: '2-3 hours',
    description: 'Our most popular comprehensive detailing package.',
    popular: true,
    features: [
      'Everything in Express Wash',
      'Two-bucket wash method',
      'Clay bar treatment',
      'Paint polish & wax',
      'Complete interior detail',
      'Leather conditioning',
      'Engine bay cleaning',
      'Tire & wheel polish',
      'Glass cleaning (inside & out)',
    ],
    notIncluded: [
      'Paint correction',
      'Ceramic coating',
    ],
    icon: Car,
    color: 'from-blue-500 to-purple-600',
    savings: '$50'
  },
  {
    id: 'ceramic',
    name: 'Ceramic Coating',
    price: '$599',
    originalPrice: '$799',
    duration: '4-6 hours',
    description: 'Ultimate protection with 2-5 year durability.',
    popular: false,
    features: [
      'Everything in Premium Detail',
      'Multi-stage paint correction',
      'Surface decontamination',
      'Professional ceramic coating',
      '2-5 year protection warranty',
      'Hydrophobic finish',
      'Enhanced gloss & depth',
      'UV protection',
      'Maintenance kit included',
      'Annual touch-up service',
    ],
    notIncluded: [],
    icon: Shield,
    color: 'from-purple-500 to-pink-600',
    savings: '$200'
  }
]

const addOnServices = [
  {
    name: 'Paint Correction',
    description: 'Remove swirl marks and scratches',
    price: '$199',
    duration: '2-3 hours'
  },
  {
    name: 'Interior Protection',
    description: 'Fabric & leather protection coating',
    price: '$89',
    duration: '1 hour'
  },
  {
    name: 'Headlight Restoration',
    description: 'Restore clarity to foggy headlights',
    price: '$79',
    duration: '45 mins'
  },
  {
    name: 'Engine Bay Detail',
    description: 'Deep clean and dress engine components',
    price: '$99',
    duration: '1 hour'
  }
]

export default function PricingPage() {
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
              Transparent <span className="gradient-text">Pricing</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              No hidden fees, no surprises. Choose the perfect package for your vehicle's needs 
              with confidence in our upfront, competitive pricing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-100">
              Limited Time Offer
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Service Packages</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional detailing packages designed to fit every budget and requirement.
            </p>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-3">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={tier.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <Card className={`h-full ${tier.popular ? 'ring-2 ring-blue-500 scale-105' : ''} hover:shadow-xl transition-all duration-300`}>
                  {tier.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1">
                        <Star className="w-3 h-3 mr-1" />
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  
                  {tier.savings && (
                    <div className="absolute -top-3 -right-3">
                      <Badge className="bg-green-500 text-white">
                        Save {tier.savings}
                      </Badge>
                    </div>
                  )}

                  <CardHeader className="text-center pb-4">
                    <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${tier.color} flex items-center justify-center mb-4`}>
                      <tier.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl">{tier.name}</CardTitle>
                    <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>{tier.duration}</span>
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center justify-center gap-2">
                        {tier.originalPrice && (
                          <span className="text-lg text-muted-foreground line-through">
                            {tier.originalPrice}
                          </span>
                        )}
                        <span className="text-4xl font-bold text-primary">{tier.price}</span>
                      </div>
                    </div>
                    <CardDescription className="text-center">
                      {tier.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <div className="space-y-3">
                      <h4 className="font-semibold text-green-700">What's Included:</h4>
                      {tier.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {tier.notIncluded.length > 0 && (
                      <div className="space-y-3 pt-4 border-t">
                        <h4 className="font-semibold text-gray-500">Available as Add-on:</h4>
                        {tier.notIncluded.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <div className="w-5 h-5 rounded-full border-2 border-gray-300 flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    )}
                    
                    <Button 
                      asChild 
                      className={`w-full bg-gradient-to-r ${tier.color} hover:opacity-90 transition-opacity`}
                      size="lg"
                    >
                      <Link href={"/booking?service=" + tier.id as Route}>
                        Book {tier.name}
                      </Link>
                    </Button>

                    <p className="text-xs text-center text-muted-foreground">
                      All packages include satisfaction guarantee
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-on Services */}
      <section className="py-24 bg-gray-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Add-on Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Enhance any package with our specialized services for complete vehicle care.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {addOnServices.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">{service.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-lg text-primary">{service.price}</span>
                      <span className="text-xs text-muted-foreground">{service.duration}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Pricing FAQs</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Common questions about our services and pricing.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
            {[
              {
                question: "Are there any hidden fees?",
                answer: "No hidden fees ever. The price you see is the price you pay, including all materials and labor."
              },
              {
                question: "Do you offer discounts for multiple services?",
                answer: "Yes! Package deals save you money, and we offer loyalty discounts for regular customers."
              },
              {
                question: "What's included in the warranty?",
                answer: "All services come with a satisfaction guarantee. Ceramic coatings include 2-5 year protection warranty."
              },
              {
                question: "Can I customize a package?",
                answer: "Absolutely! We can create custom packages combining different services to meet your specific needs."
              }
            ].map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-3">{faq.question}</h3>
                    <p className="text-muted-foreground text-sm">{faq.answer}</p>
                  </CardContent>
                </Card>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Book Your Service?</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Get started today with our online booking system or contact us for a custom quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href={"/booking" as Route}>Book Now</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
                <Link href={"/contact" as Route}>
                  <Phone className="w-4 h-4 mr-2" />
                  Get Custom Quote
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}