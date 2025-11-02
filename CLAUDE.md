# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 14 professional portfolio landing page for **Jayashri Krishnan** - an award-winning entrepreneur, business consultant, and trainer. The site showcases her three businesses (D'Organica Garden Shoppee, Jaishuk Expertise LLP, Skanda Expertise LLP), services, achievements, and training programs. Built with TypeScript, React, Tailwind CSS, and Framer Motion for smooth animations.

## Development Commands

- **Development server**: `npm run dev` (opens at http://localhost:3000)
- **Build**: `npm run build`
- **Production server**: `npm start`
- **Lint**: `npm run lint`

## Architecture

### Core Structure

The application follows a section-based landing page architecture where the main page (`src/app/page.tsx`) imports and renders multiple section components in sequence:

1. Header (sticky navigation)
2. Hero
3. FeatureScroll
4. FeatureHighlight
5. BentoGrid
6. Benefits
7. Features
8. Testimonials
9. Pricing
10. FAQ
11. CTA (Call to Action)
12. Footer

### Key Directories

- **`src/app/`**: Next.js App Router structure (layout, page, sitemap, OG image route)
- **`src/components/sections/`**: Landing page sections (hero, features, pricing, etc.)
- **`src/components/ui/`**: Reusable UI components from shadcn/ui (button, card, accordion, etc.)
- **`src/lib/`**: Utilities and configuration
  - `config.tsx`: Central site configuration (content, links, features, pricing, testimonials, FAQs)
  - `utils.ts`: Utility functions (cn, constructMetadata)
  - `fonts.ts`: Next.js font configuration (Inter, JetBrains Mono)
  - `animation.ts`: Framer Motion easing functions

### Configuration System

**All site content is centralized in `src/lib/config.tsx`**. This includes:
- Site metadata (name, description, keywords, URLs)
- Social links
- Feature lists
- Pricing tiers
- Testimonials
- FAQ content
- Footer menu items

When updating content, modify `siteConfig` in this file rather than individual components.

### Styling

- Uses Tailwind CSS with custom theme configuration in `tailwind.config.ts`
- HSL-based color system with CSS variables for theming
- Dark mode support via `next-themes` (class-based)
- Custom animations: marquee, border-beam, accordion, ripple
- shadcn/ui configuration in `components.json` with path aliases (`@/components`, `@/lib/utils`)

### Animations

- Framer Motion is used throughout for scroll animations, transitions, and interactions
- Custom easing functions defined in `src/lib/animation.ts`
- Header has scroll-based show/hide behavior with border effects
- `BLUR_FADE_DELAY` constant (0.15s) used for staggered animations

### Theme System

- Light mode is the default (`defaultTheme: "light"` in layout.tsx)
- System theme detection is disabled (`enableSystem: false`)
- Theme toggle component available globally
- Tailwind indicator shows current breakpoint in development

## SEO Implementation

The site includes comprehensive SEO optimization:

- **Structured Data (JSON-LD)**: Schema.org Person markup in layout.tsx with awards, organizations, and expertise
- **Meta Tags**: Complete OpenGraph and Twitter Card metadata
- **Keywords**: 30+ targeted keywords covering organic gardening, entrepreneurship, business consulting
- **Sitemap**: Dynamic sitemap.xml with all major sections
- **Robots.txt**: Configured for search engine crawling
- **OG Image**: Custom branded Open Graph image with stats (2000+ clients, 200+ projects, Top 150 SME)
- **Google Verification**: Placeholder in utils.ts for Google Search Console verification

## Brand Identity

**Colors (No Gradients - Flat Only):**
- Primary: Emerald Green `#0F766E` (HSL: 176 77% 26%)
- Accent: Warm Terracotta `#E07A5F` (HSL: 13 68% 63%)
- Background: Warm Cream `#FFFEF9` (HSL: 50 100% 98.8%)
- Text: Charcoal `#1F2937` (HSL: 215 28% 17%)

**Design Principles:**
- Clean, simple, professional
- No gradients (flat colors only)
- Generous white space
- High contrast for readability

## Important Notes

- The project uses Next.js App Router (not Pages Router)
- Components use both client and server components appropriately
- Path aliases are configured: `@/` maps to `src/`
- The site is mobile-responsive with a mobile drawer for navigation
- All placeholder images (Device-1.png, etc.) need to be replaced with actual photos
- Logo needs to be customized in `src/components/icons.tsx`
