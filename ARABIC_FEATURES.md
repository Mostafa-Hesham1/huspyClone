# Huspy Clone - Bilingual Real Estate Website

## 🌍 Complete Arabic Language Support

This is a fully bilingual (English/Arabic) real estate website clone with professional RTL (Right-to-Left) support.

## ✨ Features

### 🔤 Language System
- **Language Toggle Button** in navigation (AR/EN)
- **Complete RTL Layout** when Arabic is selected
- **Professional Arabic Typography** using Cairo font
- **Automatic Direction Change** (LTR ↔ RTL)
- **All Content Translated** including:
  - Navigation menu
  - Hero section with video background
  - Value propositions
  - Features
  - Property listings
  - Blog posts
  - Testimonials
  - Contact sections
  - Footer

### 🎥 Video Background
- **Local Video File**: Uses `/src/assets/videos/building.mp4`
- **Auto-play, Looping, Muted** for optimal UX
- **Responsive & Optimized** video playback

### 🎨 Design Features
- **Modern UI** with TailwindCSS
- **Smooth Animations** and transitions
- **Responsive Grid Layouts**
- **Professional Color Scheme**
- **Hover Effects** on cards and buttons

## 📂 Project Structure

```
src/
├── assets/
│   ├── videos/
│   │   └── building.mp4        # Hero background video
│   ├── images/                 # Image assets
│   └── icons/                  # Icon assets
├── components/
│   ├── Navigation.tsx          # ✓ Bilingual
│   ├── Hero.tsx                # ✓ Bilingual + RTL
│   ├── ValueProposition.tsx    # ✓ Bilingual
│   ├── Features.tsx            # ✓ Bilingual
│   ├── Partners.tsx            # ✓ Bilingual
│   ├── CTASection.tsx          # ✓ Bilingual
│   ├── Properties.tsx          # ✓ Bilingual + Arabic property names
│   ├── PropertyCard.tsx        # Property display card
│   ├── ListProperty.tsx        # ✓ Bilingual
│   ├── Blog.tsx                # ✓ Bilingual + Arabic blog posts
│   ├── Testimonials.tsx        # ✓ Bilingual + Arabic testimonials
│   ├── Contact.tsx             # ✓ Bilingual
│   └── TestimonialBubble.tsx   # Testimonial component
├── contexts/
│   └── LanguageContext.tsx     # Language management system
├── App.tsx                     # ✓ Main app with bilingual footer
├── index.css                   # ✓ RTL support + Arabic font
└── vite-env.d.ts              # ✓ Video file type declarations
```

## 🚀 How to Run

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🌐 Language Switching

Click the **AR/EN** button in the navigation bar to toggle between:
- **English (EN)** - Left-to-Right layout
- **Arabic (AR)** - Right-to-Left layout

## 🎯 Arabic Features

### Complete Translation Coverage:
1. **Navigation**
   - الرهون العقارية (Mortgages)
   - شراء (Buy)
   - قائمة الممتلكات الخاصة بك (List your Property)

2. **Hero Section**
   - شراء المنزل، أصبح بسيطاً (Home buying, made simple)
   - All testimonials in Arabic
   - Call-to-action cards in Arabic

3. **Property Listings**
   - أوريز بيوند (Orise Beyond)
   - جاردينيا باي (Gardenia Bay)
   - تيرا هايتس (Terra Heights)
   - نوايف ويست هايتس (Nawayef West Heights)
   - Arabic prices and locations

4. **Blog Posts**
   - الحياة في Huspy (Life at Huspy)
   - Arabic blog titles and excerpts

5. **Testimonials**
   - داريها، ماكسيم، كاران، ألكسندر
   - Complete testimonial translations

6. **Footer**
   - All links and sections translated
   - شراء المنزل أصبح بسيطاً (tagline)

## 🎨 RTL Layout Adjustments

When Arabic is selected:
- ✅ Text direction changes to RTL
- ✅ Navigation items reflow
- ✅ Hero content repositions (left ↔ right)
- ✅ Testimonial bubbles swap sides
- ✅ Gradients flip direction
- ✅ All spacing and padding adapts
- ✅ Cards and buttons align correctly

## 🔧 Technical Implementation

### Language Context (`LanguageContext.tsx`)
- React Context API for global state
- Translation function `t(key)`
- Language toggle function
- Automatic DOM attribute updates (`dir`, `lang`)

### Cairo Font for Arabic
- Professional Arabic typography
- Imported from Google Fonts
- Applied automatically when Arabic is selected

### Type Safety
- Full TypeScript support
- Type declarations for video imports
- Strongly typed translation keys

## 📱 Responsive Design

- Mobile-first approach
- Grid layouts that adapt to screen size
- Optimized for all devices
- Touch-friendly interface

## 🎥 Video Asset

The hero section uses a local video file located at:
```
src/assets/videos/building.mp4
```

This video plays automatically in the background with:
- Looping playback
- Muted audio
- Object-fit cover
- Smooth scaling effect

## 🌟 Key Components

### Navigation
- Fixed position with language toggle
- Smooth transitions
- Shadow effect on scroll

### Hero
- Full-width video background
- Overlay gradient
- Testimonial bubbles
- CTA cards

### Properties
- 4-column grid layout
- Property cards with images
- Hover effects
- Arabic property names

### Blog
- 4-column article grid
- Category tags
- Excerpts
- "Keep reading" buttons

### Testimonials
- Customer reviews
- 5-star ratings
- Carousel layout
- Arabic names and reviews

## 📄 License

This is a demo project for educational purposes.

## 🤝 Contributing

Feel free to fork and improve this project!

---

**Built with ❤️ using React, TypeScript, TailwindCSS, and Vite**
