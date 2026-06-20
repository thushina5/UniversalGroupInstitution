# Universal Institutions — Premium Education Website

A production-ready, fully responsive marketing website for a premium educational institution, built with **Next.js 15 (App Router)**, **Tailwind CSS**, and **Framer Motion**.

## ✨ Features

- **Animated hero** with glassmorphism floating cards, animated underline & counters
- **Glassmorphism design system** (`.glass`, `.glass-card`) on a clean white background
- **Course cards** — 6 industry-aligned programs with hover motion
- **Placement statistics** with scroll-triggered animated counters
- **Admissions CTA** with a 3-step process panel
- **Student testimonials** carousel (autoplay-ready, keyboard accessible)
- **Faculty section** with hover social reveals
- **Masonry gallery** of campus life
- **Contact form** with client-side validation, loading & success states, plus an `/api/contact` route
- **Recruiter marquee** of hiring partners
- **SEO optimized** — Metadata API, Open Graph, Twitter cards, JSON-LD structured data, `sitemap.xml`, `robots.txt`, PWA manifest
- **Fully responsive** mobile-first layouts with an animated mobile nav

## 🎨 Brand Palette

| Token        | Hex       | Usage              |
| ------------ | --------- | ------------------ |
| Primary      | `#0A2E65` | Navy — headings, surfaces |
| Secondary    | `#FDB913` | Gold — accents, CTAs |
| Background    | `#FFFFFF` | White base         |

Both colors are exposed as a full Tailwind scale (`primary-50…900`, `secondary-50…900`) in `tailwind.config.ts`.

## 🚀 Getting Started

> Requires **Node.js 18.18+** (Node 20+ recommended).

```bash
npm install
npm run dev      # http://localhost:3000
```

### Production build

```bash
npm run build
npm run start
```

## 🗂️ Project Structure

```
app/
  layout.tsx        # Root layout, fonts, SEO metadata + JSON-LD
  page.tsx          # Home page composition
  globals.css       # Tailwind layers + glass/btn utilities
  sitemap.ts        # Dynamic sitemap
  robots.ts         # robots.txt
  manifest.ts       # PWA manifest
  api/contact/route.ts  # Contact form endpoint
components/
  Navbar.tsx  Hero.tsx  Marquee.tsx  Courses.tsx
  Placements.tsx  Admissions.tsx  Testimonials.tsx
  Faculty.tsx  Gallery.tsx  Contact.tsx  Footer.tsx
  motion/Reveal.tsx  motion/Counter.tsx
lib/
  data.ts           # All editable content (courses, faculty, stats, etc.)
tailwind.config.ts  next.config.mjs  tsconfig.json
```

## 🔧 Customization

- **Content:** edit `lib/data.ts` — courses, stats, testimonials, faculty, gallery, recruiters.
- **Colors / fonts:** edit `tailwind.config.ts` and the fonts in `app/layout.tsx`.
- **Images:** demo images load from Unsplash & pravatar (allow-listed in `next.config.mjs`). Swap for `next/image` + local assets for best performance.
- **Contact form:** the form posts to `/api/contact`. Wire the `TODO` in `app/api/contact/route.ts` to your CRM/email provider. Replace the simulated `setTimeout` in `components/Contact.tsx` with a real `fetch("/api/contact")` call.
- **SEO:** update `siteUrl`, social handles, and address in `app/layout.tsx`.

## 📦 Tech Stack

Next.js 15 · React 19 · Tailwind CSS 3 · Framer Motion 11 · lucide-react · TypeScript

---

Built as a senior-grade reference implementation. Replace placeholder copy, imagery and contact integration before going live.
