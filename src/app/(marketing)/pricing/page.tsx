export default function PricingPage() {
  const tiers = [
    { name: 'Express Wash', price: '$25', features: ['Exterior foam wash', 'Tire shine', 'Hand dry'] },
    { name: 'Detailing', price: '$149', features: ['Full interior detail', 'Exterior wash', 'Engine bay wipe'] },
    { name: 'Ceramic Coating', price: 'From $699', features: ['Multi-stage prep', '2–5 year coating', 'Aftercare kit'] },
  ]
  return (
    <div className="container space-y-10 pt-4 pb-16">
      <div>
        <h1 className="text-3xl font-semibold">Transparent pricing</h1>
        <p className="mt-2 text-muted-foreground">No surprises. Pick a package that fits your needs.</p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {tiers.map((t) => (
          <div key={t.name} className="rounded-lg border p-6">
            <div className="text-lg font-medium">{t.name}</div>
            <div className="mt-2 text-3xl font-semibold">{t.price}</div>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {t.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}


