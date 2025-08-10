## Auto Spa — Car Wash & Detailing

Professional, minimal, and modern marketing site for a car wash/auto detailing studio.

### Tech
- Next.js (App Router, TypeScript)
- Tailwind CSS, shadcn-style UI primitives
- Framer Motion
- Nodemailer (contact/booking emails)
- Stripe + PayPal (server endpoints scaffolded)
- Mapbox (via react-map-gl)

### Setup
1. Install dependencies:
   ```bash
   npm install
   ```
2. Create `.env.local`:
   ```bash
   NEXT_PUBLIC_MAPBOX_TOKEN=your_mapbox_token

   SMTP_HOST=smtp.yourhost.com
   SMTP_PORT=587
   SMTP_USER=your_user
   SMTP_PASS=your_pass
   CONTACT_TO_EMAIL=admin@example.com
   BOOKING_TO_EMAIL=bookings@example.com

   STRIPE_SECRET_KEY=sk_live_or_test

   PAYPAL_CLIENT_ID=your_paypal_client_id
   PAYPAL_CLIENT_SECRET=your_paypal_client_secret
   ```
3. Run the dev server:
   ```bash
   npm run dev
   ```

### Pages
- `/` Hero + services overview
- `/services` Services grid
- `/pricing` Packages
- `/gallery` Portfolio grid
- `/booking` Booking form (emails admin)
- `/contact` Contact form (emails admin) + Mapbox section

### Notes
- UI is intentionally minimal and clean for portfolio showcase. Replace placeholder content and add imagery.
- Payments endpoints are basic scaffolds; connect from the UI when packages are finalized.


