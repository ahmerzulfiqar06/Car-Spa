export function TestimonialsSection() {
  const items = [
    {
      quote:
        'My car has never looked this good. The ceramic coating is unreal and water just slides off!',
      name: 'Jacob M.',
    },
    {
      quote:
        'Detailing perfection. They got every nook and cranny – feels like a brand new car.',
      name: 'Sara K.',
    },
    {
      quote:
        'Super professional, quick turnaround, and amazing results. Highly recommend!',
      name: 'Liam R.',
    },
  ]
  return (
    <section className="container py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold">Clients love the shine</h2>
        <p className="mt-3 text-muted-foreground">A few words from our happy customers.</p>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {items.map((t, i) => (
          <div key={i} className="rounded-xl border bg-background p-6 shadow-sm">
            <p className="text-sm leading-relaxed">“{t.quote}”</p>
            <div className="mt-4 text-sm font-medium">{t.name}</div>
          </div>
        ))}
      </div>
    </section>
  )
}


