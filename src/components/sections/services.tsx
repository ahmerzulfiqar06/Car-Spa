import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const services = [
  {
    id: 'wash',
    title: 'Premium Wash',
    price: 25,
    desc: 'Safe two-bucket wash, foam pre-soak, microfiber hand dry, tire shine.',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1600&auto=format&fit=crop',
    features: ['Foam pre-wash', 'Microfiber hand dry', 'Tire shine'],
  },
  {
    id: 'detailing',
    title: 'Interior/Exterior Detailing',
    price: 149,
    desc: 'Deep clean interior, steam sanitation, exterior decontamination and sealant.',
    image: 'https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&w=1600&auto=format&fit=crop',
    features: ['Steam cleaning', 'Leather conditioning', 'Paint decon + sealant'],
  },
  {
    id: 'ceramic',
    title: 'Ceramic Coating',
    price: 699,
    desc: 'Multi-year protection with hydrophobic gloss. Includes prep & paint enhancement.',
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1600&auto=format&fit=crop',
    features: ['Paint enhancement', '2–5 year coating', 'Aftercare kit'],
  },
]

export function ServicesSection() {
  return (
    <section className="container py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold">Our Signature Services</h2>
        <p className="mt-3 text-muted-foreground">
          Curated packages delivering showroom shine and lasting protection.
        </p>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {services.map((s) => (
          <Card key={s.id} className="overflow-hidden">
            <div className="relative h-40 w-full">
              <Image src={s.image} alt={s.title} fill className="object-cover" unoptimized />
            </div>
            <CardHeader>
              <CardTitle className="flex items-baseline justify-between">
                <span>{s.title}</span>
                <span className="text-xl font-semibold">${s.price}</span>
              </CardTitle>
              <CardDescription>{s.desc}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                {s.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}


