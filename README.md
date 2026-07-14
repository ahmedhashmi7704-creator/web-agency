# Northlane Digital

A fully responsive, multi-page agency website built with React (Vite) and React Router.

## What's included

- **9 top-level routes**: Home, Work, Agency, 5 service-pillar pages, Blog
- **15 sub-service routes**, e.g. `/digital-growth/seo`, `/tech-ux/ux-design` — all driven by a single dynamic route + data file (`src/data/services.js`) instead of 15 near-duplicate files
- Sticky header with a full-screen mega-menu (desktop + mobile), matching the structure of modern agency sites: category → sub-service reveal
- Slide-in contact panel with chip-style multi-select fields (project type, budget, referral source)
- Canvas-based particle hero background (no external animation library required)
- Scrolling capability marquee
- Fully responsive down to small mobile, keyboard-focusable nav, `prefers-reduced-motion` respected

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview
```

## Rebranding

Everything brand-specific lives in a few places, so you can swap it out quickly:

- **Name/logo**: `src/components/Header.jsx` and `src/components/Footer.jsx` (`site-logo` markup)
- **Colors**: `src/styles/tokens.css` — the `--brass`, `--signal`, `--ink` custom properties
- **Fonts**: `index.html` (Google Fonts `<link>`) and `--font-display` / `--font-body` in `tokens.css`
- **Copy**: `src/pages/Home.jsx`, `src/pages/Agency.jsx`, and `src/data/services.js`
- **Case studies**: `src/data/work.js`

## Project structure

```
src/
  components/   Header, Footer, ContactModal, Marquee, HeroField, PageHero
  data/         services.js (5 pillars x 3 sub-services), work.js (case studies)
  pages/        Home, Work, Agency, CategoryPage, ServicePage, Blog, NotFound
  styles/       tokens.css (design tokens), layout.css (all layout/components)
```
