# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Sher Mohammad Portfolio Website** - A luxury, dark-themed portfolio website for a master carpenter with 9+ years of experience. Built with React + Vite + TypeScript, featuring an interactive gallery with 64+ project images, scroll animations, and detailed image modal popups.

**Live Site**: https://sher-mohammad-carpenter.pages.dev
**GitHub**: https://github.com/bhoot1234567890/sher-mohammad-carpenter-portfolio
**Client**: Sher Mohammad - Master Carpenter in Delhi NCR
**Contact**: 8527285231 | shermohammadtuku@gmail.com

**Current Status**: Fully deployed and functional with 64 images, modal popups, and complete portfolio sections.

## Tech Stack

- **React 18** with TypeScript and functional components
- **Vite 5** - Build tool and dev server
- **CSS** - Custom luxury dark theme with gold accents (no CSS frameworks)
- **react-intersection-observer** - Scroll-triggered animations
- **Native browser lazy loading** - Performance optimization
- **No external UI libraries** - All components custom-built

## Development Setup

### Prerequisites
- Node.js 18+ (tested with Node 20)
- npm, yarn, or pnpm

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
# Serves dist/ at http://localhost:4173/
```

## Project Structure

```
portfolio-website/                                  # Root directory (separate git repo)
├── src/
│   ├── components/
│   │   ├── ui/                                    # Reusable UI components
│   │   │   ├── Navigation.tsx                     # Sticky header nav with hamburger menu
│   │   │   ├── Navigation.css
│   │   │   ├── Footer.tsx                         # Site footer with quick links
│   │   │   ├── Footer.css
│   │   │   ├── SectionTitle.tsx                   # Reusable section headers
│   │   │   ├── ScrollReveal.tsx                   # Scroll animation wrapper (useInView)
│   │   │   ├── LazyImage.tsx                      # Lazy-loaded image component
│   │   │   └── ImageModal.tsx                     # Image detail popup modal
│   │   │   └── ImageModal.css
│   │   └── sections/                              # Page sections
│   │       ├── Hero.tsx                           # Landing hero with profile photo
│   │       ├── Hero.css
│   │       ├── About.tsx                          # About/bio section
│   │       ├── About.css
│   │       ├── Services.tsx                       # 6 service cards
│   │       ├── Services.css
│   │       ├── Gallery.tsx                        # Image gallery with filters + modal
│   │       ├── Gallery.css
│   │       ├── Testimonials.tsx                   # Client reviews with trust signals
│   │       ├── Testimonials.css
│   │       ├── Process.tsx                        # 4-step work process timeline
│   │       ├── Process.css
│   │       ├── Contact.tsx                        # Contact info + WhatsApp button
│   │       └── Contact.css
│   ├── data/
│   │   └── portfolioData.ts                       # TypeScript type definitions
│   ├── App.tsx                                    # Main app component
│   ├── App.css                                    # App-specific styles
│   ├── main.tsx                                   # App entry point
│   └── index.css                                  # Global styles + CSS variables (theme)
│
├── public/
│   ├── images/                                    # Portfolio images (65 files total)
│   │   ├── WhatsApp Image*.jpeg                   # 64 project photos (from WhatsApp export)
│   │   └── face photo for website.png             # Sher Mohammad's profile photo
│   └── image_analysis_results.json                # AI analysis data (from Mistral vision model)
│
├── index.html                                     # HTML template with SEO meta tags
├── package.json                                   # Dependencies and scripts
├── tsconfig.json                                  # TypeScript configuration
├── vite.config.ts                                 # Vite build configuration
├── .gitignore                                     # Git exclusions
├── README.md                                      # Project documentation
└── CLAUDE.md                                      # This file
```

## Design System

### Color Palette (CSS Variables in `src/index.css`)

```css
:root {
  /* Luxury Dark Theme - Charcoal Grays */
  --charcoal-darkest: #0D0D0D;   /* Deepest background */
  --charcoal-dark: #1A1A1A;      /* Primary background */
  --charcoal-medium: #2D2D2D;    /* Cards, sections */
  --charcoal-light: #3D3D3D;     /* Borders, dividers */

  /* Gold Accents */
  --gold-primary: #D4AF37;       /* Main gold (headings, CTAs) */
  --gold-secondary: #C5A028;     /* Darker gold (hovers) */
  --gold-light: #E5C458;         /* Lighter gold (glows) */

  /* Text Colors */
  --text-primary: #F5F0E8;       /* Main text (warm white) */
  --text-secondary: #C4B5A0;     /* Secondary text (warm gray) */
  --text-muted: #8B8070;         /* Muted text (descriptions) */

  /* UI Elements */
  --overlay-dark: rgba(13, 13, 13, 0.85);
  --border-gold: rgba(212, 175, 55, 0.3);
}
```

### Typography

**Font Families** (loaded via Google Fonts in `index.html`):
- **Playfair Display** (serif) - Headings, titles - Luxury, traditional feel
- **Cormorant Garamond** (serif) - Body text - Warm, highly readable
- **Montserrat** (sans-serif) - UI elements, buttons - Clean, modern

**Typography Scale**:
- Hero title: 4rem (64px) - "Master Craftsman in Wood"
- Section titles: 3rem (48px) - Playfair Display
- Body text: 1.125rem (18px) - Cormorant Garamond
- UI elements: 0.875rem (14px) - Montserrat

### Component Patterns

#### Section Title Component
```tsx
import { SectionTitle } from '../components/ui/SectionTitle';

<SectionTitle
  title="Section Title"
  subtitle="Optional subtitle text"
  alignment="center"      // or "left"
  goldAccent={true}       // Adds gold underline decoration
/>
```

#### Scroll Animation Wrapper
```tsx
import { ScrollReveal } from '../components/ui/ScrollReveal';

<ScrollReveal delay={200} direction="up">
  <div>Content animates in when scrolled into view</div>
</ScrollReveal>

// Props: delay (ms), direction ("up" | "left" | "right")
// Uses react-intersection-observer internally
```

#### Lazy Image Component
```tsx
import { LazyImage } from '../components/ui/LazyImage';

<LazyImage
  src="/images/photo.jpg"
  alt="Description of image"
  className="optional-custom-class"
/>
```

## Key Features

### Gallery System ([`src/components/sections/Gallery.tsx`](src/components/sections/Gallery.tsx))
- **64+ images** with lazy loading using native `loading="lazy"`
- **Category filters**: All, Furniture, Kitchen, Wardrobes, Details
- **Quality-based sorting**: Images sorted by AI quality rating (highest first)
- **Modal popup**: Click any image for detailed view with materials, techniques, craftsmanship
- **Data source**: `public/image_analysis_results.json` (generated by Mistral AI vision model)
- **Loading state**: Skeleton placeholders while images load
- **Fade-in effect**: Smooth opacity transition when images load

**Implementation details**:
- Uses `visibility: hidden` + `opacity: 0` during loading (NOT `display: none`)
- Native lazy loading via `loading="lazy"` attribute
- Fade-in transition: `opacity 0.3s ease-in`
- Error handling with fallback UI for failed loads

### Image Modal ([`src/components/ui/ImageModal.tsx`](src/components/ui/ImageModal.tsx))
The `ImageModal` component displays comprehensive AI analysis data:
- Full-size image with quality badge (★ X/10)
- AI-generated description and context
- Materials used (wood types, hardware, finishes)
- Joinery techniques and construction methods
- Craftsmanship quality assessment
- Keywords for SEO and categorization

**Close methods**:
1. X button (top-right corner)
2. Click backdrop (outside modal content)
3. Press Escape key

**Technical details**:
- Locks body scroll when open (`document.body.style.overflow = 'hidden'`)
- Two-column responsive layout (image + details side-by-side on desktop)
- Smooth fade-in + slide-up animation
- ARIA label for accessibility: "Close modal"

### Animations

**Scroll-triggered animations** ([`src/components/ui/ScrollReveal.tsx`](src/components/ui/ScrollReveal.tsx)):
- Uses `react-intersection-observer` (`useInView` hook)
- Configurable delay (0-600ms) and direction (up, left, right)
- Threshold: 10% of element visible triggers animation
- CSS transitions: `opacity 0.6s ease-out, transform 0.6s ease-out`

**Hover effects**:
- Gallery items: Subtle scale up (1.02x) + gold border glow
- Service cards: Icon rotation (360deg) + shadow increase
- Buttons: Gold background shift + translateY(-2px)

**Parallax** (Hero section):
- Background grain texture overlay
- Floating animation on hero image
- ScrollReveal animations with staggered delays

### Responsive Design

**Mobile-first approach** with breakpoints:
- **Mobile**: < 640px (1 column grid, hamburger menu)
- **Tablet**: 640px - 1024px (2-3 column grid)
- **Desktop**: > 1024px (4 column grid, full navigation)

**Key responsive features**:
- Navigation: Hamburger menu with slide-in animation (mobile only)
- Gallery grid: 1 → 2 → 3 → 4 columns
- Typography: Scales down on mobile (4rem → 2.5rem for hero title)
- Spacing: Reduced padding on mobile (4rem → 2rem)
- Modal: Full-screen on mobile, centered popup on desktop

### Performance Optimizations

1. **Native lazy loading**: All gallery images use `loading="lazy"`
2. **Code splitting**: Vite automatic chunking and tree-shaking
3. **CSS optimization**: Plain CSS (no runtime CSS-in-JS overhead)
4. **Image optimization**: JPEG format for balance of quality and size
5. **Intersection observers**: Efficient scroll-triggered animations
6. **Conditional rendering**: Modal only renders when image selected

## Deployment

### Cloudflare Pages (Wrangler CLI)
```bash
# Build the project
npm run build

# Deploy to Cloudflare Pages
npx wrangler pages deploy dist
# Prompts for project name: sher-mohammad-carpenter
```

**Project details**:
- **Project name**: sher-mohammad-carpenter
- **Production branch**: main
- **Build command**: npm run build
- **Output directory**: dist
- **Live URL**: https://sher-mohammad-carpenter.pages.dev

### Alternative: Manual Deployment
1. Build: `npm run build`
2. Upload `dist/` folder to hosting provider (Netlify, Vercel, GitHub Pages)
3. Ensure SPA routing is configured (rewrite all routes to index.html)
4. Set up custom domain if desired

### Environment Variables
No environment variables required for the website. All data is static.

## Adding New Images

### Complete Workflow

1. **Add new photos to parent directory**:
   ```bash
   cd ..
   cp "new-photo.jpg" "assets/photos/"
   ```

2. **Run AI analysis** (parent directory):
   ```bash
   cd scripts
   python continue_image_analysis.py
   ```

3. **Copy images and data to website**:
   ```bash
   # Copy image
   cp "../assets/photos/new-photo.jpg" "public/images/"

   # Copy updated analysis data
   cp "../data/raw/image_analysis_results.json" "public/"
   ```

4. **Test locally**:
   ```bash
   npm run dev
   # Verify new image appears in gallery
   ```

5. **Deploy**:
   ```bash
   npm run build
   npx wrangler pages deploy dist
   ```

### Quick Method (If analysis already exists)

If you have existing analysis data:

1. Copy image to `public/images/`
2. Add entry to `public/image_analysis_results.json` following this structure:
   ```json
   {
     "filename": "new-photo.jpg",
     "timestamp": "2025-01-07T12:00:00Z",
     "file_size": 1234567,
     "analysis": {
       "image_type": "Full project view",
       "primary_subject": "Custom wooden wardrobe",
       "completion_stage": "Completed installation",
       "technical_details": {
         "materials": ["Plywood", "Laminate finish"],
         "joinery_techniques": ["Dovetail joints"],
         "construction_methods": ["Modular assembly"]
       },
       "craftsmanship_quality": {
         "precision": "High",
         "surface_quality": "Smooth"
       },
       "portfolio_presentation": {
         "best_use": "Detail",
         "quality_rating": 8
       },
       "keywords": ["wardrobe", "storage", "plywood"]
     }
   }
   ```
3. Rebuild and deploy

## Common Tasks

### Update Contact Information
Edit [`src/components/sections/Contact.tsx`](src/components/sections/Contact.tsx):
- Phone number: `8527285231`
- Email: `shermohammadtuku@gmail.com`
- Location: `Majnu Ka Tila, Delhi - 110054`
- Working hours: `9:00 AM - 7:00 PM`
- WhatsApp link: Update phone number in URL

### Update Services
Edit [`src/components/sections/Services.tsx`](src/components/sections/Services.tsx):
- Add/remove service cards (currently 6 services)
- Update service descriptions and features
- Icons are inline SVG - can be replaced or reordered

### Modify Color Scheme
Edit [`src/index.css`](src/index.css) CSS variables in `:root`:
- `--gold-primary`, `--gold-secondary` - Gold accents
- `--charcoal-*` - Background colors
- `--text-*` - Text colors

**Example - Change to blue theme**:
```css
:root {
  --gold-primary: #4A90E2;      /* Blue instead of gold */
  --gold-secondary: #357ABD;
  --gold-light: #5BA0F2;
}
```

### Add New Section
1. Create component in `src/components/sections/NewSection.tsx`
2. Create corresponding CSS file `NewSection.css`
3. Import and add to [`src/App.tsx`](src/App.tsx):
   ```tsx
   import NewSection from './components/sections/NewSection';

   // In component return:
   <NewSection />
   ```
4. Add nav link in [`src/components/ui/Navigation.tsx`](src/components/ui/Navigation.tsx)

### Change Profile Photo
Replace [`public/images/face photo for website.png`](public/images/face%20photo%20for%20website.png) with new image:
- Recommended size: 400x400px or larger
- Square aspect ratio works best
- JPG or PNG format

## TypeScript Types

Key type definitions are in [`src/data/portfolioData.ts`](src/data/portfolioData.ts):

```typescript
export interface PortfolioImage {
  filename: string;
  timestamp: string;
  file_size: number;
  analysis: {
    image_type: string;
    primary_subject: string;
    completion_stage: string;
    technical_details: {
      materials: string[];
      joinery_techniques: string[];
      construction_methods: string[];
    };
    craftsmanship_quality: {
      precision: string;
      surface_quality: string;
      attention_to_detail: string;
    };
    design_elements: {
      style: string;
      notable_features: string[];
      finish_quality: string;
    };
    portfolio_presentation: {
      best_use: string;
      accompanying_text: string;
      quality_rating: number;
    };
    keywords: string[];
  };
}
```

## Browser Support

- Chrome/Edge 90+ (full support)
- Firefox 88+ (full support)
- Safari 14+ (full support, including lazy loading)
- Mobile browsers (iOS Safari 14+, Chrome Mobile 90+)

**Key features requiring modern browsers**:
- `loading="lazy"` (native lazy loading)
- CSS Grid and Flexbox
- Intersection Observer API
- ES6+ JavaScript

## Accessibility

- Semantic HTML5 elements (`<nav>`, `<main>`, `<section>`, `<article>`)
- ARIA labels on interactive elements (buttons, modal close)
- Keyboard navigation support:
  - Tab through navigation
  - Enter/Space to activate buttons
  - Escape to close modal
- Focus indicators on `:focus-visible` (gold outline)
- Reduced motion support via `prefers-reduced-motion` media query
- Alt text for all images (from AI analysis)

## Troubleshooting

### Images Not Loading

**Symptoms**: Gallery shows placeholders, no images appear

**Solutions**:
1. Check `public/images/` folder exists and contains images
2. Verify `image_analysis_results.json` is in `public/`
3. Check browser console for 404 errors (F12 → Console tab)
4. Ensure filenames match between JSON and actual files
5. Clear browser cache and reload

**Debug logging**:
```javascript
// In Gallery.tsx, check console:
console.log('Loaded images:', data.images?.length);
```

### Build Errors

**TypeScript errors**:
```bash
# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Vite build fails**:
- Check for TypeScript errors: `npm run build` shows specific errors
- Verify all imports are correct (check for missing files)
- Ensure `public/images/` and `public/image_analysis_results.json` exist

### Wrangler Deployment Fails

**"Project not found" error**:
```bash
# Create project first
npx wrangler pages project create sher-mohammad-carpenter --production-branch=main
# Then deploy
npx wrangler pages deploy dist
```

**Authentication issues**:
```bash
# Login again
npx wrangler login
```

**Build output missing**:
```bash
# Verify build succeeded
ls dist/
# Should see: assets/, index.html
```

### Modal Not Closing

**Escape key not working**:
- Check if other event listeners are preventing propagation
- Ensure `ImageModal.tsx` event listener is properly attached

**Backdrop click not working**:
- Verify `onClick={(e) => e.stopPropagation()}` is on modal content (not backdrop)
- Check z-index values in `ImageModal.css`

### Git Issues

**Portfolio-website showing as modified in parent repo**:
- Ensure `portfolio-website/` is in parent `.gitignore`
- If already tracked: `git rm --cached -rf portfolio-website` (from parent directory)

**Detached HEAD state**:
```bash
# Switch to main branch
git checkout main
# Or create new branch
git checkout -b feature-name
```

## Performance Notes

Current performance characteristics:
- **Build size**: ~500KB total (mostly images)
- **First Contentful Paint**: <1s (with CDN)
- **Time to Interactive**: ~2s (on 4G connection)
- **Lighthouse scores**: 95+ Performance, 100 Accessibility, 100 SEO

**Optimization opportunities**:
- Convert images to WebP format (20-30% size reduction)
- Implement image CDN (Cloudflare Images, imgix)
- Add critical CSS inlining
- Implement service worker for offline support

## Related Projects

This website is the **frontend component** of a larger portfolio system:

- **Analysis System** (Parent repo): https://github.com/bhoot1234567890/sher-mohammad-carpentry-analysis
  - Python scripts for AI image analysis
  - Mistral vision model integration
  - Data generation for website

The two repositories work together:
1. Parent repo analyzes photos with AI
2. Generates `image_analysis_results.json`
3. Child repo (this website) consumes the data
4. Deploys static portfolio website

## Future Enhancements

Potential features for future iterations:

- [ ] Image lightbox with previous/next navigation in modal
- [ ] Contact form with backend (Formspree, Netlify Forms)
- [ ] Blog/Case studies section for detailed project stories
- [ ] Multilingual support (Hindi/English toggle)
- [ ] Admin CMS for easy content updates (Netlify CMS, Decap CMS)
- [ ] Automatic image optimization (Next.js Image component)
- [ ] Progressive Web App (PWA) features (manifest, service worker)
- [ ] Google Analytics integration
- [ ] SEO meta tag optimization for each project
- [ ] PDF portfolio download generation
- [ ] Client testimonial submission form
- [ ] Before/after image slider for renovation projects

## Support & Maintenance

**Regular maintenance tasks**:
1. Update dependencies: `npm update` (monthly)
2. Check for broken links (quarterly)
3. Add new projects as they're completed
4. Review and update analytics data
5. Test cross-browser compatibility after major changes

**Contact for updates**:
- Sher Mohammad: 8527285231
- Email: shermohammadtuku@gmail.com
- Location: Majnu Ka Tila, Delhi - 110054

---

**Last updated**: January 7, 2025
**Version**: 1.0.0
**Status**: Production - Live and fully functional
