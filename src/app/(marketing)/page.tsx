"use client"
import { HeroSection } from '@/components/hero-section'
import { ServicesSection } from '@/components/sections/services'
import { TestimonialsCarousel } from '@/components/testimonials-carousel'
import { GallerySection } from '@/components/sections/gallery'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <section className="container py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold">Clients love the shine</h2>
          <p className="mt-3 text-muted-foreground">A few words from our happy customers.</p>
        </div>
        <div className="mt-10">
          <TestimonialsCarousel />
        </div>
      </section>
      <GallerySection />
    </>
  )
}


