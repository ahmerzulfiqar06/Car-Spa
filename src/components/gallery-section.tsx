"use client"
import { motion } from 'framer-motion'
import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react'
import Link from 'next/link'
import type { Route } from 'next'

const galleryItems = [
  {
    id: 1,
    title: 'BMW M4 - Ceramic Coating',
    before: 'https://images.unsplash.com/photo-1619405399517-d7fce0f13302?w=800&q=80',
    after: 'https://images.unsplash.com/photo-1555215858-9dc80a29024b?w=800&q=80',
    service: 'Ceramic Coating'
  },
  {
    id: 2,
    title: 'Mercedes S-Class - Full Detail',
    before: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80',
    after: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=800&q=80',
    service: 'Premium Detail'
  },
  {
    id: 3,
    title: 'Audi RS7 - Paint Correction',
    before: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80',
    after: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=800&q=80',
    service: 'Paint Correction'
  },
  {
    id: 4,
    title: 'Tesla Model X - Interior Detail',
    before: 'https://images.unsplash.com/photo-1619641805634-b867f535071c?w=800&q=80',
    after: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&q=80',
    service: 'Interior Detail'
  }
]

const showcaseImages = [
  'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&q=80',
  'https://images.unsplash.com/photo-1544829099-b9a0c5303bea?w=800&q=80',
  'https://images.unsplash.com/photo-1580414922060-b8b8dc4b7ad2?w=800&q=80',
  'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80',
  'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80',
  'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&q=80'
]

export function GallerySection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [sliderPosition, setSliderPosition] = useState(50)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const percentage = (x / rect.width) * 100
    setSliderPosition(percentage)
  }

  return (
    <section className="py-24 bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            Our Work
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            See The Transformation
            <span className="block gradient-text">Before & After</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Witness the incredible transformations we achieve with our professional detailing services.
          </p>
        </motion.div>

        {/* Before/After Slider */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <Card className="overflow-hidden">
            <div className="relative">
              <div className="flex gap-4 p-4 border-b">
                {galleryItems.map((item, index) => (
                  <Button
                    key={item.id}
                    variant={activeIndex === index ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setActiveIndex(index)}
                  >
                    {item.title}
                  </Button>
                ))}
              </div>

              <div 
                className="relative h-[500px] overflow-hidden cursor-ew-resize"
                onMouseMove={handleMouseMove}
              >
                {/* After Image */}
                <img
                  src={galleryItems[activeIndex].after}
                  alt="After"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                
                {/* Before Image with Clip */}
                <div 
                  className="absolute inset-0 overflow-hidden"
                  style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                >
                  <img
                    src={galleryItems[activeIndex].before}
                    alt="Before"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>

                {/* Slider Line */}
                <div 
                  className="absolute top-0 bottom-0 w-1 bg-white shadow-xl"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
                    <ChevronLeft className="w-4 h-4 absolute left-1" />
                    <ChevronRight className="w-4 h-4 absolute right-1" />
                  </div>
                </div>

                {/* Labels */}
                <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Before
                </div>
                <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm font-medium">
                  After
                </div>
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-4 py-2 rounded-lg">
                  <p className="text-sm font-medium">{galleryItems[activeIndex].service}</p>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {showcaseImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl aspect-[4/3]"
            >
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white font-medium">Professional Detailing</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 text-center"
        >
          <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
            <Link href={"/gallery" as Route}>
              View Full Gallery
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
