# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Sher Mohammad Portfolio Website** - A luxury, dark-themed portfolio website for a master carpenter with 9+ years of experience. Built with React + Vite + TypeScript, featuring an interactive gallery with 64+ project images, scroll animations, and detailed image modal popups.

**Live Site**: [Deployed on Cloudflare Pages]
**Client**: Sher Mohammad - Master Carpenter in Delhi NCR

## Tech Stack

- **React 18** with TypeScript
- **Vite** - Build tool and dev server
- **CSS** - Custom luxury dark theme with gold accents
- **Framer Motion** & **react-intersection-observer** - Scroll animations
- **No external UI libraries** - All components custom-built

## Development Setup

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation
```bash
npm install
```

### Development Server
```bash
npm run dev
# Runs at http://localhost:5173/
```

### Build for Production
```bash
npm run build
# Output: dist/
```

### Preview Production Build
```bash
npm run preview
```

## Project Structure

```
portfolio-website/
├── src/
│   ├── components/
│   │   ├── ui/                      # Shared UI components
│   │   │   ├── Navigation.tsx       # Sticky header nav
│   │   │   ├── Navigation.css
│   │   │   ├── Footer.tsx           # Site footer
│   │   │   ├── Footer.css
│   │   │   ├── SectionTitle.tsx     # Reusable section headers
│   │   │   ├── ScrollReveal.tsx     # Scroll animation wrapper
│   │   │   ├── LazyImage.tsx        # Lazy-loaded image component
│   │   │   └── ImageModal.tsx       # Image detail popup modal
│   │   │   └── ImageModal.css
│   │   └── sections/                # Page sections
│   │       ├── Hero.tsx             # Landing hero section
│   │       ├── Hero.css
│   │       ├── About.tsx            # About/bio section
│   │       ├── About.css
│   │       ├── Services.tsx         # Services offered
│   │       ├── Services.css
│   │       ├── Gallery.tsx          # Image gallery with filters
│   │       ├── Gallery.css
│   │       ├── Testimonials.tsx     # Client reviews
│   │       ├── Testimonials.css
│   │       ├── Process.tsx          # Work process timeline
│   │       ├── Process.css
│   │       ├── Contact.tsx          # Contact info & WhatsApp
│   │       └── Contact.css
│   ├── data/
│   │   └── portfolioData.ts         # Type definitions for image data
│   ├── App.tsx                      # Main app component
│   ├── App.css                      # App-specific styles
│   ├── main.tsx                     # App entry point
│   └── index.css                    # Global styles + CSS variables
├── public/
│   ├── images/                      # Portfolio images (65 files)
│   │   ├── WhatsApp Image*.jpeg    # 64 project photos
│   │   └── face photo for website.png
│   └── image_analysis_results.json  # AI analysis data for images
├── index.html                        # HTML template with SEO meta tags
├── package.json
├── tsconfig.json
├── vite.config.ts
└── CLAUDE.md
```

## Design System

### Colors
- **Backgrounds**: `#0D0D0D` (darkest), `#1A1A1A` (dark), `#2D2D2D` (medium)
- **Accents**: `#D4AF37` (gold primary), `#C5A028` (gold secondary)
- **Text**: `#F5F0E8` (primary), `#C4B5A0` (secondary), `#8B8070` (muted)

### Typography
- **Headings**: Playfair Display (serif) - luxury, traditional feel
- **Body**: Cormorant Garamond (serif) - warm, readable
- **UI Elements**: Montserrat (sans-serif) - clean, modern

### Component Patterns

#### Section Title
```tsx
<SectionTitle
  title="Section Title"
  subtitle="Optional subtitle"
  alignment="center"
  goldAccent={true}
/>
```

#### Scroll Animation
```tsx
<ScrollReveal delay={200} direction="up">
  <div>Content animates in on scroll</div>
</ScrollReveal>
```

#### Lazy Image
```tsx
<LazyImage
  src="/images/photo.jpg"
  alt="Description"
/>
```

## Key Features

### Gallery System
- **64+ images** with lazy loading
- **Category filters**: All, Furniture, Kitchen, Wardrobes, Details
- **Quality-based sorting**: Images sorted by AI quality rating
- **Modal popup**: Click any image for detailed view
- **Data source**: `public/image_analysis_results.json`

### Image Modal
The `ImageModal` component displays:
- Full-size image with quality badge
- AI-generated description
- Materials, techniques, and craftsmanship details
- Keywords and categorization
- Close via X button, backdrop click, or Escape key

### Animations
- **Scroll-triggered fade-ins** using intersection observer
- **Parallax effects** on hero section
- **Hover effects** on gallery items
- **Smooth transitions** throughout (0.4s cubic-bezier)

### Responsive Design
- **Mobile-first** approach
- **Breakpoints**: 640px, 768px, 1024px, 1280px
- **Grid layouts** adapt from 1 to 4 columns
- **Navigation** collapses to hamburger menu on mobile

## Deployment

### Cloudflare Pages (Wrangler CLI)
```bash
# Build the project
npm run build

# Deploy using Wrangler
npx wrangler pages deploy dist
```

### Manual Deployment
1. Build: `npm run build`
2. Upload `dist/` folder to hosting provider
3. Ensure SPA routing is configured for client-side routing

## Adding New Images

1. Add image file to `public/images/`
2. Run AI analysis (separate project) to generate metadata
3. Update `public/image_analysis_results.json` with new entry
4. Rebuild and deploy

## Common Tasks

### Update Contact Info
Edit `src/components/sections/Contact.tsx`:
- Phone number
- Email address
- Location
- Working hours
- WhatsApp link

### Update Services
Edit `src/components/sections/Services.tsx`:
- Add/remove service cards
- Update descriptions and features

### Modify Color Scheme
Edit `src/index.css` CSS variables in `:root`:
- `--gold-primary`, `--gold-secondary`
- `--charcoal-*` colors
- `--text-*` colors

### Add New Section
1. Create component in `src/components/sections/`
2. Add corresponding CSS file
3. Import and add to `App.tsx`
4. Add nav link in `Navigation.tsx`

## Performance Notes

- **Lazy loading**: All images use native `loading="lazy"`
- **Code splitting**: Vite automatic chunking
- **Tree shaking**: Unused code eliminated
- **Optimized assets**: Images served from CDN in production
- **CSS-in-JS avoided**: Plain CSS for better performance

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Accessibility

- Semantic HTML5 elements
- ARIA labels on interactive elements
- Keyboard navigation support (Escape to close modal)
- Focus indicators on focus-visible
- Reduced motion support via `prefers-reduced-motion`

## Troubleshooting

### Images not loading
- Check `public/images/` folder exists with images
- Verify `image_analysis_results.json` is in `public/`
- Check browser console for 404 errors
- Ensure filenames match between JSON and actual files

### Build errors
- Delete `node_modules` and `package-lock.json`
- Run `npm install`
- Check TypeScript errors in terminal

### Wrangler deployment fails
- Ensure you're logged in: `npx wrangler login`
- Check build output exists: `ls dist/`
- Verify account permissions in Cloudflare dashboard

## Future Enhancements

- [ ] Image lightbox with navigation (previous/next)
- [ ] Contact form backend integration
- [ ] Blog/Case studies section
- [ ] Multilingual support (Hindi/English)
- [ ] Admin CMS for easy content updates
- [ ] Image optimization service integration
- [ ] Progressive Web App (PWA) features
