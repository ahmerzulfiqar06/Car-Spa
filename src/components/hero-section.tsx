"use client"
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import type { Route } from 'next'
import { Sparkles, Shield, Clock, Award } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 animate-float">
        <div className="w-20 h-20 bg-blue-400 rounded-full blur-3xl opacity-30"></div>
      </div>
      <div className="absolute bottom-20 right-10 animate-float" style={{ animationDelay: '2s' }}>
        <div className="w-32 h-32 bg-purple-400 rounded-full blur-3xl opacity-30"></div>
      </div>
      <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '4s' }}>
        <div className="w-24 h-24 bg-pink-400 rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="container relative z-10 px-4 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6"
          >
            <Sparkles className="w-4 h-4" />
            Premium Car Care Since 2010
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight"
          >
            <span className="block">Precision Detailing</span>
            <span className="block gradient-text">Extraordinary Results</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed px-4 sm:px-0"
          >
            Experience automotive perfection with our award-winning detailing services. 
            From precision paint correction to premium ceramic protection, we deliver results that exceed expectations.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start px-4 sm:px-0"
          >
            <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8">
              <Link href={"/booking" as Route}>
                Book Now - 20% Off First Visit
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-2">
              <Link href={"/services" as Route}>
                View Services
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-sm sm:max-w-lg mx-auto lg:mx-0"
          >
            <div className="text-center lg:text-left">
              <div className="flex items-center gap-2 justify-center lg:justify-start mb-1">
                <Shield className="w-5 h-5 text-blue-600" />
                <span className="font-semibold">100%</span>
              </div>
              <p className="text-sm text-muted-foreground">Satisfaction</p>
            </div>
            <div className="text-center lg:text-left">
              <div className="flex items-center gap-2 justify-center lg:justify-start mb-1">
                <Clock className="w-5 h-5 text-blue-600" />
                <span className="font-semibold">2-4 hrs</span>
              </div>
              <p className="text-sm text-muted-foreground">Service Time</p>
            </div>
            <div className="text-center lg:text-left">
              <div className="flex items-center gap-2 justify-center lg:justify-start mb-1">
                <Award className="w-5 h-5 text-blue-600" />
                <span className="font-semibold">5 Star</span>
              </div>
              <p className="text-sm text-muted-foreground">Rated Service</p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative order-first lg:order-last"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <div className="aspect-[4/3] relative">
              {/* Real car image */}
              <img
                src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&h=600&fit=crop&q=80"
                alt="Luxury car detailing showcase"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              
              {/* Stats overlay */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-md rounded-xl p-4 text-white">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>Available Today</span>
                  </div>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg key={i} className="w-4 h-4 fill-yellow-400" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <span className="ml-1 text-xs">2,500+ Happy Customers</span>
                  </div>
                </div>
              </div>
              
              {/* Animated shine effect */}
              <div className="absolute inset-0 shimmer"></div>
            </div>
          </div>

          {/* Floating badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-3 flex items-center gap-2"
          >
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">Available Today</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-3"
          >
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
            <p className="text-xs text-muted-foreground mt-1">2,500+ Happy Customers</p>
          </motion.div>
        </motion.div>
        </div>
      </div>
    </section>
  )
}
