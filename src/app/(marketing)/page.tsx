"use client"
import { HeroSection } from '@/components/hero-section'
import { ServicesSection } from '@/components/sections/services'
import { TestimonialsSection } from '@/components/sections/testimonials'
import { GallerySection } from '@/components/sections/gallery'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <TestimonialsSection />
      <GallerySection />
    </>
  )
}


