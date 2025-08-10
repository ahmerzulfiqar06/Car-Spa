"use client"
import * as Dialog from '@radix-ui/react-dialog'
import Link from 'next/link'
import type { Route } from 'next'

export function MobileNav() {
  return (
    <div className="md:hidden">
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <button aria-label="Open menu" className="inline-flex h-10 w-10 items-center justify-center rounded-md border">
            <svg width="20" height="20" viewBox="0 0 20 20"><path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
          </button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/30" />
          <Dialog.Content className="fixed inset-y-0 right-0 w-72 bg-background p-6 shadow-lg">
            <div className="space-y-5">
              <Link href={"/" as Route} className="block">Home</Link>
              <Link href={"/services" as Route} className="block">Services</Link>
              <Link href={"/pricing" as Route} className="block">Pricing</Link>
              <Link href={"/gallery" as Route} className="block">Gallery</Link>
              <Link href={"/contact" as Route} className="block">Contact</Link>
              <Link href={"/booking" as Route} className="block font-medium">Book now</Link>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  )
}


