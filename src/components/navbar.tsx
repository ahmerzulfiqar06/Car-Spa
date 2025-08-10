"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import type { Route } from 'next'

const nav = [
  { href: '/' as Route, label: 'Home' },
  { href: '/services' as Route, label: 'Services' },
  { href: '/pricing' as Route, label: 'Pricing' },
  { href: '/gallery' as Route, label: 'Gallery' },
  { href: '/contact' as Route, label: 'Contact' },
]

export function Navbar() {
  const pathname = usePathname()
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b bg-background/80 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight">
          Auto Spa
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'text-sm text-muted-foreground transition-colors hover:text-foreground',
                pathname === item.href && 'text-foreground'
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild size="sm">
            <Link href={"/booking" as Route}>Book now</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}


