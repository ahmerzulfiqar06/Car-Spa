import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-20">{children}</main>
      <div className="container py-10">
        <Footer />
      </div>
    </div>
  )
}


