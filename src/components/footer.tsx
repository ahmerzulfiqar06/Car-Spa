import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t py-10">
      <div className="container grid gap-6 md:grid-cols-3">
        <div>
          <div className="text-lg font-semibold">Auto Spa</div>
          <p className="mt-2 text-sm text-muted-foreground">
            Premium car wash & detailing studio. Shine redefined.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <div className="text-sm font-medium">Quick Links</div>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/pricing">Pricing</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <div className="text-sm font-medium">Services</div>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li><Link href="/services#detailing">Detailing</Link></li>
              <li><Link href="/services#coating">Ceramic Coating</Link></li>
              <li><Link href="/services#wash">Premium Wash</Link></li>
            </ul>
          </div>
        </div>
        <div className="text-sm text-muted-foreground md:text-right">
          © {new Date().getFullYear()} Auto Spa. All rights reserved.
        </div>
      </div>
    </footer>
  )
}


