export default function GalleryPage() {
  const items = Array.from({ length: 9 }).map((_, i) => ({ id: i + 1 }))
  return (
    <div className="container space-y-10 pt-4 pb-16">
      <div>
        <h1 className="text-3xl font-semibold">Gallery</h1>
        <p className="mt-2 text-muted-foreground">A few highlights from recent details and coatings.</p>
      </div>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-6">
        {items.map((i) => (
          <div key={i.id} className="aspect-video rounded-lg bg-muted" />
        ))}
      </div>
    </div>
  )
}


