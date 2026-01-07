# Sher Mohammad | Master Carpenter Portfolio

A luxury, dark-themed portfolio website showcasing the exceptional carpentry work of Sher Mohammad, a master craftsman with 9+ years of experience in Delhi NCR.

## ✨ Live Website

**[https://sher-mohammad-carpenter.pages.dev](https://sher-mohammad-carpenter.pages.dev)**

## 🎨 Features

- **64+ Portfolio Images** with AI-generated detailed descriptions
- **Interactive Gallery** with category filters (Furniture, Kitchen, Wardrobes, Details)
- **Image Modal Popups** - Click any image to view full details
- **Luxury Dark Theme** with gold accents and warm traditional design
- **Fully Responsive** - Works beautifully on all devices
- **Smooth Animations** - Scroll-triggered fade-ins and transitions
- **Direct WhatsApp Contact** - Easy client communication
- **SEO Optimized** - Proper meta tags and descriptions

## 🛠️ Tech Stack

- **React 19** with TypeScript
- **Vite** - Fast build tool and dev server
- **Custom CSS** - Luxury dark theme with gold accents
- **react-intersection-observer** - Scroll animations

## 📁 Project Structure

```
sher-mohammad-carpenter-portfolio/
├── public/
│   ├── images/                      # Portfolio images (64+ photos)
│   └── image_analysis_results.json  # AI analysis data
├── src/
│   ├── components/
│   │   ├── sections/                # Page sections
│   │   │   ├── Hero.tsx            # Landing hero
│   │   │   ├── About.tsx           # About/bio
│   │   │   ├── Services.tsx        # Services offered
│   │   │   ├── Gallery.tsx         # Image gallery
│   │   │   ├── Testimonials.tsx    # Client reviews
│   │   │   ├── Process.tsx         # Work process
│   │   │   └── Contact.tsx         # Contact info
│   │   └── ui/                      # Shared components
│   │       ├── Navigation.tsx
│   │       ├── Footer.tsx
│   │       ├── ImageModal.tsx      # Image detail popup
│   │       └── LazyImage.tsx       # Lazy-loaded images
│   └── data/portfolioData.ts       # Type definitions
└── CLAUDE.md                        # Developer documentation
```

## 🚀 Quick Start

### Installation

```bash
npm install
```

### Development

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

## 📸 Adding New Images to Gallery

1. **Add image file** to `public/images/`
2. **Run AI analysis** to generate metadata (separate project using Mistral AI)
3. **Update** `public/image_analysis_results.json` with new entry:
   ```json
   {
     "filename": "your-image.jpg",
     "timestamp": "2024-01-07T12:00:00Z",
     "file_size": 123456,
     "analysis": {
       "image_type": "Full project view",
       "primary_subject": "Description of what's shown",
       "completion_stage": "Completed",
       "technical_details": {
         "materials": ["wood", "metal"],
         "joinery_techniques": ["mortise and tenon"],
         "construction_methods": ["hand assembly"]
       },
       "craftsmanship_quality": {
         "precision": "High - details",
         "surface_quality": "High - details",
         "attention_to_detail": "High - details"
       },
       "design_elements": {
         "style": "Modern",
         "functional_features": ["feature1"],
         "aesthetic_features": ["feature1"]
       },
       "portfolio_presentation": {
         "best_use": "Hero image",
         "accompanying_text": "2-3 sentence description",
         "quality_rating": 9
       }
     },
     "keywords": ["keyword1", "keyword2"]
   }
   ```
4. **Rebuild and deploy**:
   ```bash
   npm run build
   npx wrangler pages deploy dist --project-name=sher-mohammad-carpenter
   ```

## 🎨 Customization

### Update Contact Information

Edit `src/components/sections/Contact.tsx`:
- Phone number
- Email address
- Location
- Working hours

### Update Services

Edit `src/components/sections/Services.tsx` to modify service cards.

### Modify Colors

Edit `src/index.css` CSS variables:
```css
:root {
  --gold-primary: #D4AF37;
  --charcoal-darkest: #0D0D0D;
  /* etc. */
}
```

## 🌐 Deployment

### Cloudflare Pages (Wrangler CLI)

```bash
# Build
npm run build

# Deploy
npx wrangler pages deploy dist --project-name=sher-mohammad-carpenter
```

## 👤 Client Information

**Sher Mohammad**
Master Carpenter in Wood
📍 Majnu Ka Tila, Delhi - 110054
📞 +91 8527285231
✉️ shermohammadtuku@gmail.com

**Specializations**: Wood work, modular kitchens, wardrobes, beds, wood flooring, TV units, doors, windows, PVC panels, furniture repair

## 📄 License

This portfolio website was created for Sher Mohammad. All rights reserved.

---

Built with ❤️ using React + Vite + TypeScript
