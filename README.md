<div align="center">

<br>

<img src="https://img.shields.io/badge/React-19-61DAFB?style=flat&logo=react&logoColor=white" alt="React 19" />
<img src="https://img.shields.io/badge/TypeScript-6-3178C6?style=flat&logo=typescript&logoColor=white" alt="TypeScript" />
<img src="https://img.shields.io/badge/TailwindCSS-4-06B6D4?style=flat&logo=tailwindcss&logoColor=white" alt="TailwindCSS" />
<img src="https://img.shields.io/badge/Framer_Motion-12-FF0080?style=flat&logo=framer&logoColor=white" alt="Framer Motion" />
<img src="https://img.shields.io/badge/Vite-8-646CFF?style=flat&logo=vite&logoColor=white" alt="Vite" />

<br>
<br>

# Arabico Coffee & Eatery

**A cinematic, award-worthy website for a premium cafe in Janakpuri, Delhi.**

Experience the art of coffee — from the first scroll to the last sip.

<br>

[Live Preview](#getting-started) · [Features](#features) · [Tech Stack](#tech-stack) · [Architecture](#architecture)

<br>

---

</div>

<br>

## The Vision

This isn't a template. It's a **digital experience** designed to make visitors feel the warmth, sophistication, and luxury of Arabico before they ever walk through the door.

**Design philosophy:** Apple's restraint × Starbucks Reserve's warmth × Aesop's editorial elegance × Blue Tokai's craft authenticity.

Every pixel, every animation, every transition is intentional.

<br>

## Features

### Design

- **Cinematic Hero** — Full-viewport parallax with scroll-linked opacity, film grain texture overlay, and staggered blur-reveal typography
- **Glassmorphism System** — Two-tier glass effects (`glass` / `glass-light`) with inner glow, warm-toned backdrop blur, and gold-accent borders
- **Editorial Typography** — Three-font system: Playfair Display (display), Space Grotesk (UI), Inter (body) with precise tracking and leading scales
- **Warm Color Architecture** — 10-shade brand scale built on coffee tones, gold accent system, espresso-dark surfaces, cream highlights
- **4-Tier Shadow System** — `card`, `card-hover` (with gold glow), `glow`, `deep` — all warm-toned, never cold

### Motion

- **Lenis Smooth Scrolling** — Buttery 60fps scroll with exponential easing
- **Parallax Imagery** — Scroll-linked `useTransform` on hero and CTA backgrounds
- **Blur-Reveal Animations** — Text and cards animate in with simultaneous `y`, `opacity`, and `filter: blur()` transitions
- **Spring-Based Interactions** — Buttons use `stiffness: 400, damping: 20` for tactile feedback
- **Staggered Entrances** — Cards reveal with 80ms stagger and expo easing `[0.16, 1, 0.3, 1]`
- **Layout Animations** — Navbar active indicator uses `layoutId` with spring physics
- **Infinite Marquee** — CSS-driven ticker with pause-on-hover and gradient fade edges
- **Reduced Motion** — Full `prefers-reduced-motion` support baked into CSS

### Pages

| Page | Highlights |
|------|-----------|
| **Home** | Parallax hero, animated stats with number counting, signature items grid, bento gallery, testimonial cards, cinematic CTA |
| **About** | Editorial two-column layouts, staggered image grid, animated value cards, parallax hero |
| **Menu** | Category filter pills, live search, 22 items across 7 categories, animated card grid with tag system |
| **Gallery** | Masonry layout (CSS columns), keyboard-navigable lightbox (Esc/Arrow), hover captions, lazy loading |
| **Reviews** | Rating summary card, 8 testimonials with source badges, star ratings, avatar system |
| **Contact** | Contact info cards, WhatsApp/Call CTAs, styled form with validation, dark-themed Google Maps embed |

### UX Details

- Sticky navbar transitions from transparent to glassmorphism on scroll
- Full-screen mobile menu with staggered blur-reveal links
- Active page indicators with spring-animated underline
- Scroll-to-top on route change
- Page transition crossfades via `AnimatePresence`
- Gold underline-reveal on link hover (CSS `background-size` animation)
- Custom scrollbar (4px, gold-tinted)
- Warm `::selection` highlight

<br>

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 19 + TypeScript 6 |
| Styling | TailwindCSS 4 (CSS-first config via `@theme`) |
| Animation | Framer Motion 12 |
| Scrolling | Lenis |
| Routing | React Router DOM 7 |
| Icons | Lucide React |
| Build | Vite 8 |
| Utilities | clsx + tailwind-merge |

<br>

## Architecture

```
src/
├── components/
│   ├── home/           # Hero, Stats, FeaturedItems, GalleryPreview,
│   │                   # Testimonials, MarqueeDivider, CTA
│   ├── layout/         # Navbar, Footer
│   └── ui/             # Button, SectionHeading, Marquee
├── pages/              # Home, About, Menu, Gallery, Reviews, Contact
├── data/               # menu.ts, reviews.ts, gallery.ts
├── hooks/              # useLenis, useScrollReveal
├── lib/                # motion.ts (variants), utils.ts (cn)
└── index.css           # @theme tokens, glass utilities, film grain
```

**Design tokens** live in `index.css` via Tailwind's `@theme` directive — colors, fonts, easings, and shadows are all defined once and consumed everywhere via utility classes.

**Motion variants** are centralized in `lib/motion.ts` — `fadeUp`, `slideInLeft`, `staggerContainer`, etc. — so every animation shares the same easing curve and rhythm.

<br>

## Getting Started

```bash
# Clone
git clone https://github.com/nishantxraghav/Arabico.git
cd Arabico

# Install
npm install

# Dev server
npm run dev

# Production build
npm run build
```

Open **http://localhost:5173** and scroll.

<br>

## Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `surface-primary` | `#0c0a09` | Page background |
| `surface-elevated` | `#1c1917` | Cards, elevated surfaces |
| `accent-gold` | `#c9a96e` | Primary accent, CTAs, highlights |
| `accent-copper` | `#b87333` | Selection, secondary accent |
| `accent-cream` | `#f5f0e8` | Headings, primary text |
| `accent-espresso` | `#1a0f0a` | Text on gold buttons |

<br>

## Typography Scale

| Role | Font | Weight | Tracking |
|------|------|--------|----------|
| Display (h1) | Playfair Display | 500 | -0.02em |
| Section labels | Space Grotesk | 500 | 0.35em |
| Body | Inter | 300–400 | 0.02em |
| UI / Buttons | Space Grotesk | 500 | 0.15–0.2em |
| Prices | Space Grotesk | 400 | tabular-nums |

<br>

## Performance

- **Build time:** ~360ms
- **CSS:** ~65KB (10.5KB gzipped)
- **JS:** ~490KB (151KB gzipped)
- All images lazy-loaded below the fold
- Font loading via `display=swap` with preconnect
- CSS-only marquee animation (no JS runtime cost)
- Code-split by route via React Router

<br>

---

<div align="center">

**Arabico Coffee & Eatery**
<br>
5B/11A C Block Janakpuri Road, Delhi 110058
<br>
Open Daily · Until 1 AM
<br>
<br>
+91 88825 48738

<br>
<br>

<sub>Built with care. Designed with intention.</sub>

</div>
