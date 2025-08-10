export default function ServicesPage() {
  const services = [
    { id: 'detailing', title: 'Detailing', desc: 'Full interior & exterior detailing with premium products.' },
    { id: 'coating', title: 'Ceramic Coating', desc: 'Multi-year protection and deep gloss with ceramic coatings.' },
    { id: 'wash', title: 'Premium Wash', desc: 'Safe two-bucket wash with microfiber and pH neutral shampoos.' },
  ]
  return (
    <div className="container space-y-10 pt-4 pb-16">
      <div>
        <h1 className="text-3xl font-semibold">Our services</h1>
        <p className="mt-2 text-muted-foreground">We deliver showroom shine with an obsessive attention to detail.</p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {services.map((s) => (
          <div key={s.id} id={s.id} className="rounded-lg border p-6">
            <div className="text-lg font-medium">{s.title}</div>
            <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}


