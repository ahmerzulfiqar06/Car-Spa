import Image from 'next/image'
import { BeforeAfter } from '@/components/before-after'

const images = [
  'https://images.unsplash.com/photo-1550355291-bbee04a92027?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1541447271487-09612b3f49cf?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1485460535560-d2f84f8b6030?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=1600&auto=format&fit=crop',
]

export function GallerySection() {
  return (
    <section className="container py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold">Recent work</h2>
        <p className="mt-3 text-muted-foreground">A quick peek at details and coatings.</p>
      </div>
      <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-6">
        {images.map((src) => (
          <div key={src} className="relative aspect-video overflow-hidden rounded-xl">
            <Image src={src} alt="Car detail" fill className="object-cover" unoptimized />
          </div>
        ))}
      </div>
      <div className="mt-10">
        <h3 className="text-xl font-semibold">Before / After</h3>
        <p className="text-sm text-muted-foreground">Slide to reveal the transformation.</p>
        <div className="mt-4">
          <BeforeAfter
            before="https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1600&auto=format&fit=crop"
            after="https://images.unsplash.com/photo-1550355291-bbee04a92027?q=80&w=1600&auto=format&fit=crop"
          />
        </div>
      </div>
    </section>
  )
}


