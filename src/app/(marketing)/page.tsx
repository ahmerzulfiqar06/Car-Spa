import { HeroSection } from '@/components/hero-section'
import { ServicesSection } from '@/components/services-section'
import { TestimonialsSection } from '@/components/testimonials-section'
import { GallerySection } from '@/components/gallery-section'
import { CTASection } from '@/components/cta-section'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <GallerySection />
      <TestimonialsSection />
      <CTASection />
    </>
  )
}