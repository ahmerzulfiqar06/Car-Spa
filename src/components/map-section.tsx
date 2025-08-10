import { StudioMap } from '@/components/map'

export function MapSection() {
  return (
    <section className="container pb-16">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h2 className="text-xl font-semibold">Visit our studio</h2>
          <p className="mt-2 text-sm text-muted-foreground">123 Shine St, Toronto, ON</p>
          <p className="text-sm text-muted-foreground">Open Mon–Sat, 9:00–18:00</p>
        </div>
        <StudioMap />
      </div>
    </section>
  )
}


