"use client"
import useEmblaCarousel from 'embla-carousel-react'
import { useEffect } from 'react'

const testimonials = [
  { quote: 'Flawless finish and amazing attention to detail. Worth every penny!', name: 'Ava P.' },
  { quote: 'The ceramic coating is next level. My car beads water like crazy!', name: 'Daniel W.' },
  { quote: 'Booked online and the team delivered. Super smooth experience.', name: 'Noah C.' },
]

export function TestimonialsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' })

  useEffect(() => {
    if (!emblaApi) return
    const interval = setInterval(() => emblaApi.scrollNext(), 4000)
    return () => clearInterval(interval)
  }, [emblaApi])

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex">
        {testimonials.map((t, i) => (
          <div key={i} className="min-w-0 shrink-0 grow-0 basis-full p-4 md:basis-1/2 lg:basis-1/3">
            <div className="rounded-xl border bg-background p-6 shadow-sm h-full">
              <p className="text-sm leading-relaxed">“{t.quote}”</p>
              <div className="mt-4 text-sm font-medium">{t.name}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}


