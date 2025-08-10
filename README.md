# Auto Spa — Premium Car Detailing Studio

A professional, modern, and fully responsive marketing website for a premium car wash and detailing business. Built with cutting-edge technologies and designed to attract and convert clients.

## 🚗 Features

- **Premium Design**: Professional UI with gradient animations and modern aesthetics
- **Mobile-First**: Fully responsive design optimized for all devices
- **Interactive Gallery**: Before/after sliders and filterable image gallery
- **Booking System**: Complete booking flow with service selection and payment integration
- **Customer Testimonials**: Professional testimonial sections with ratings
- **Contact Integration**: Contact forms with email notifications
- **Loading Animations**: Smooth loading screens and micro-interactions
- **SEO Optimized**: Meta tags, favicon, and proper semantic structure

## 🛠 Tech Stack

### Frontend
- **Next.js 14** (App Router, TypeScript)
- **Tailwind CSS** + **shadcn/ui** components
- **Framer Motion** for animations
- **React Hook Form** + **Zod** validation

### Backend & APIs
- **Resend** for email notifications (edge-compatible)
- **Stripe** & **PayPal** payment integration (scaffolded)
- **Mapbox** for location services

### Deployment
- **Cloudflare Pages** optimized
- **Edge Runtime** compatible
- **@cloudflare/next-on-pages** for deployment

## 🚀 Quick Start

### Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Create `.env.local`:**
   ```bash
   NEXT_PUBLIC_MAPBOX_TOKEN=your_mapbox_token
   RESEND_API_KEY=your_resend_api_key
   RESEND_FROM="Auto Spa <onboarding@resend.dev>"
   CONTACT_TO_EMAIL=admin@autospa.com
   BOOKING_TO_EMAIL=bookings@autospa.com
   STRIPE_SECRET_KEY=sk_test_your_stripe_key
   PAYPAL_CLIENT_ID=your_paypal_client_id
   PAYPAL_CLIENT_SECRET=your_paypal_client_secret
   ```

3. **Run development server:**
   ```bash
   npm run dev
   ```

### Cloudflare Pages Deployment

1. **Push to GitHub** and connect to Cloudflare Pages
2. **Framework preset:** Next.js
3. **Build command:** `npx @cloudflare/next-on-pages@latest`
4. **Build output:** `.vercel/output/static`
5. **Environment variables:** Add all from `.env.local`
6. **Compatibility flags:** `nodejs_compat` (set in dashboard)

### Preview Pages Build Locally
```bash
npm run build
npm run pages:build
npm run pages:preview
```

## 📄 Pages Overview

| Page | Description | Features |
|------|-------------|----------|
| **/** | Hero + Services Overview | Loading animation, stats, CTA buttons |
| **/services** | Detailed Service Packages | Service cards, process flow, pricing |
| **/pricing** | Transparent Pricing Tables | Package comparison, add-ons, FAQs |
| **/gallery** | Portfolio Showcase | Filterable gallery, testimonials, stats |
| **/booking** | Complete Booking Flow | Calendar, time slots, payment integration |
| **/contact** | Contact & Location | Contact form, Mapbox integration |

## 🎨 Design System

### Colors
- **Primary:** Blue to Purple gradient (`from-blue-600 to-purple-600`)
- **Accent:** Green for success states
- **Neutral:** Gray scale for text and backgrounds

### Components
- **Cards:** Modern glass-morphism design
- **Buttons:** Gradient backgrounds with hover effects
- **Forms:** Clean inputs with validation states
- **Gallery:** Interactive image grids with overlays

## 🔧 Development Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run typecheck    # TypeScript type checking
npm run pages:build  # Build for Cloudflare Pages
npm run pages:deploy # Deploy to Cloudflare Pages
```

## 📱 Mobile Optimization

- **Responsive Typography:** Scales from mobile to desktop
- **Touch-Friendly:** Optimized button sizes and spacing
- **Mobile Navigation:** Hamburger menu with smooth animations
- **Image Optimization:** Proper aspect ratios and loading states
- **Performance:** Optimized for mobile networks

## 🎯 Business Features

### Service Packages
- **Express Wash** ($29) - Quick 30-minute service
- **Premium Detail** ($149) - Comprehensive 2-3 hour service
- **Ceramic Coating** ($599) - Ultimate protection package

### Professional Gallery
- Real car detailing photos (no stock images)
- Before/after transformations
- Service category filtering
- Customer testimonials with ratings

### Booking System
- Interactive calendar with available dates
- Time slot selection
- Service package selection
- Payment processing ready (Stripe/PayPal)
- Email confirmations

## 🌟 Portfolio Quality

This website is designed as a **professional portfolio piece** that demonstrates:

- **Modern web development** practices
- **Premium UI/UX** design
- **Business-focused** functionality
- **Mobile-first** responsive design
- **Performance optimization**
- **Professional branding**

## 📧 Contact Integration

- **Contact Form:** Sends emails via Resend API
- **Booking Notifications:** Automated email alerts
- **Admin Dashboard:** Ready for future expansion
- **Customer Communications:** Professional email templates

## 🔮 Future Enhancements

- User authentication system
- Customer dashboard
- Subscription/membership plans
- Admin panel for managing bookings
- Payment history and invoicing
- SMS notifications
- Loyalty program integration

---

**Built with ❤️ for professional car detailing businesses**