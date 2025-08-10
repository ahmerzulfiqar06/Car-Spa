"use client"
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function HomePage() {
  return (
    <>
      <section className="container grid gap-10 py-20 md:grid-cols-2">
        <div className="flex flex-col justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-semibold leading-tight tracking-tight md:text-5xl"
          >
            Premium Car Wash & Detailing
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-muted-foreground"
          >
            Elevate your car’s shine with our meticulous wash, paint correction, and ceramic coating services.
          </motion.p>
          <div className="mt-8 flex gap-3">
            <Button asChild size="lg">
              <Link href="/booking">Book now</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/services">Explore services</Link>
            </Button>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="aspect-video rounded-xl bg-gradient-to-br from-muted to-transparent"
        />
      </section>

      <section className="border-t bg-muted/30 py-16">
        <div className="container grid gap-8 md:grid-cols-3">
          {[
            {
              title: 'Detailing',
              desc: 'Interior and exterior deep clean. Attention to every stitch and seam.',
            },
            {
              title: 'Paint Correction',
              desc: 'Remove swirl marks and restore glossy depth to your paint.',
            },
            {
              title: 'Ceramic Coating',
              desc: 'Long-lasting protection and hydrophobic shine with premium coatings.',
            },
          ].map((s) => (
            <div key={s.title} className="rounded-lg border bg-background p-6">
              <div className="text-lg font-medium">{s.title}</div>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}


