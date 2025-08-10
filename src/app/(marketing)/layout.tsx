"use client"
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { LoadingScreen } from '@/components/loading-screen'
import { AnimatePresence } from 'framer-motion'

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AnimatePresence>
        <LoadingScreen />
      </AnimatePresence>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 pt-20">{children}</main>
        <div className="container py-10">
          <Footer />
        </div>
      </div>
    </>
  )
}


