<div align="center">

# 🏠 Huspy Clone - Premium Real Estate Platform

<p align="center">
  <strong>A pixel-perfect, enterprise-grade real estate website with complete bilingual support</strong>
</p>

[![Live Demo](https://img.shields.io/badge/demo-live-success?style=for-the-badge&logo=github)](https://mostafa-hesham1.github.io/huspyClone/)
[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4.2-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-3.4.1-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

<p align="center">
  <a href="#-live-demo">Live Demo</a> •
  <a href="#-features">Features</a> •
  <a href="#-tech-stack">Tech Stack</a> •
  <a href="#-getting-started">Getting Started</a> •
  <a href="#-project-structure">Structure</a> •
  <a href="#-deployment">Deployment</a>
</p>

<img src="https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge" alt="License">
<img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=for-the-badge" alt="PRs Welcome">

</div>

---

## 🌐 Live Demo

Experience the full-featured application in action:

**🔗 [https://mostafa-hesham1.github.io/huspyClone/](https://mostafa-hesham1.github.io/huspyClone/)**

> Toggle between English and Arabic using the language switcher in the navigation bar to experience the complete RTL transformation.

---

## ✨ Features

### 🌍 **Internationalization (i18n)**
- **Bilingual Support**: Seamless English/Arabic language switching
- **RTL Layout**: Complete Right-to-Left layout transformation for Arabic
- **Dynamic Typography**: Cairo font for Arabic, Georgia/System fonts for English
- **100+ Translations**: Every UI element professionally translated
- **Context-Based State Management**: React Context API for global language state

### 🎨 **Modern UI/UX**
- **Pixel-Perfect Design**: Faithfully recreated from original Huspy.com
- **Smooth Animations**: CSS transitions and hover effects throughout
- **Video Background**: Auto-playing hero section with optimized video
- **Interactive Cards**: Hover states, transforms, and shadow effects
- **Gradient Overlays**: Dynamic gradients that flip with language direction

### 📱 **Responsive Design**
- **Mobile-First Approach**: Optimized for all screen sizes
- **Breakpoint Strategy**: Tailored layouts for mobile, tablet, and desktop
- **Touch-Friendly**: Proper spacing and tap targets for mobile devices
- **Cross-Browser Compatible**: Tested on Chrome, Firefox, Safari, and Edge

### �️ **Technical Excellence**
- **TypeScript**: Full type safety and IntelliSense support
- **Component Architecture**: Modular, reusable React components
- **Performance Optimized**: Code splitting and lazy loading ready
- **Clean Code**: ESLint configured for code quality
- **Git Workflow**: Professional commit history and branching

---

## 🛠️ Tech Stack

<table>
<tr>
<td align="center" width="150">
<img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png" width="48" height="48" alt="React" />
<br><strong>React 18</strong>
</td>
<td align="center" width="150">
<img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png" width="48" height="48" alt="TypeScript" />
<br><strong>TypeScript</strong>
</td>
<td align="center" width="150">
<img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png" width="48" height="48" alt="Vite" />
<br><strong>Vite</strong>
</td>
<td align="center" width="150">
<img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" width="48" height="48" alt="Tailwind CSS" />
<br><strong>Tailwind CSS</strong>
</td>
</tr>
</table>

### **Core Technologies**
- **React 18.3.1** - Latest React with Hooks and Concurrent Features
- **TypeScript 5.5.3** - Static typing and enhanced developer experience
- **Vite 5.4.2** - Lightning-fast build tool and dev server
- **TailwindCSS 3.4.1** - Utility-first CSS framework

### **Additional Libraries**
- **Lucide React** - Beautiful, consistent icon system
- **PostCSS & Autoprefixer** - CSS processing and browser compatibility
- **ESLint** - Code quality and consistency enforcement

---

## 🚀 Getting Started

### **Prerequisites**
- Node.js 18.x or higher
- npm or yarn package manager
- Git

### **Installation**

1. **Clone the repository**
```bash
git clone https://github.com/Mostafa-Hesham1/huspyClone.git
cd huspyClone
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

4. **Open in browser**
```
http://localhost:5173
```

### **Available Scripts**

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production (outputs to `/dist`) |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint for code quality checks |
| `npm run typecheck` | Run TypeScript type checking |
| `npm run deploy` | Deploy to GitHub Pages |

---

## 📂 Project Structure

```
huspyClone/
├── src/
│   ├── assets/
│   │   ├── images/          # GIF images (map, house, key)
│   │   └── videos/          # Hero background video
│   ├── components/
│   │   ├── Navigation.tsx   # Top navigation with language toggle
│   │   ├── Hero.tsx         # Hero section with video background
│   │   ├── ValueProposition.tsx
│   │   ├── Features.tsx     # Three feature cards
│   │   ├── Partners.tsx     # Partner logos section
│   │   ├── CTASection.tsx   # Call-to-action section
│   │   ├── Properties.tsx   # Property listings grid
│   │   ├── PropertyCard.tsx # Individual property card
│   │   ├── ListProperty.tsx # List property CTA
│   │   ├── Blog.tsx         # Blog posts grid
│   │   ├── Testimonials.tsx # Customer testimonials
│   │   ├── TestimonialBubble.tsx
│   │   └── Contact.tsx      # Contact section
│   ├── contexts/
│   │   └── LanguageContext.tsx  # Global language state
│   ├── locales/
│   │   └── translations.ts  # All translations (EN/AR)
│   ├── App.tsx              # Main app component
│   ├── main.tsx             # App entry point
│   ├── index.css            # Global styles + RTL support
│   └── vite-env.d.ts        # TypeScript declarations
├── public/                  # Static assets
├── dist/                    # Production build (generated)
├── index.html               # HTML template
├── vite.config.ts           # Vite configuration
├── tailwind.config.js       # Tailwind configuration
├── tsconfig.json            # TypeScript configuration
├── postcss.config.js        # PostCSS configuration
├── eslint.config.js         # ESLint configuration
├── package.json             # Dependencies and scripts
└── README.md                # This file
```

---

## 🎯 Key Components

### **Navigation** (`Navigation.tsx`)
- Sticky header with blur effect
- Language toggle button (AR/EN)
- Responsive mobile menu

### **Hero** (`Hero.tsx`)
- Full-width video background (building.mp4)
- Dynamic title positioning (flips for RTL)
- CTA cards with L-shaped video cut
- Gradient overlays that adapt to language direction

### **Features** (`Features.tsx`)
- Three animated feature cards
- Local GIF animations (map, house, key)
- Step-by-step mortgage process visualization

### **Properties** (`Properties.tsx`)
- 4-column responsive grid
- Property cards with hover effects
- Arabic property names and locations
- Price formatting for different locales

### **Blog** (`Blog.tsx`)
- 4-column article grid
- Bilingual blog posts
- Category tags and excerpts
- "Keep reading" CTAs

### **Language Context** (`LanguageContext.tsx`)
- Global state management for language
- Translation helper function `t(key)`
- Automatic DOM attribute updates (dir, lang)
- Persistent language preference

---

## 🌐 Internationalization

### **Supported Languages**
- 🇬🇧 **English (EN)** - Default, LTR layout
- 🇸🇦 **Arabic (AR)** - Full RTL support with Cairo font

### **How It Works**
1. Click the **AR/EN** button in the navigation
2. Language state updates via React Context
3. All text content switches via translation keys
4. Layout automatically flips to RTL for Arabic
5. Fonts, gradients, and positions adapt accordingly

### **Translation Coverage**
- ✅ Navigation menu
- ✅ Hero section & CTAs
- ✅ All section headings and descriptions
- ✅ Property listings (names, locations, prices)
- ✅ Blog posts (titles, excerpts, tags)
- ✅ Testimonials (names, reviews)
- ✅ Footer links and legal text

---

## 🚀 Deployment

### **GitHub Pages** (Current)

The site is automatically deployed to GitHub Pages:

1. **Build and deploy:**
```bash
npm run deploy
```

2. **Access at:**
```
https://mostafa-hesham1.github.io/huspyClone/
```

### **Other Deployment Options**

<details>
<summary><strong>Vercel</strong></summary>

```bash
npm install -g vercel
vercel
```
</details>

<details>
<summary><strong>Netlify</strong></summary>

```bash
npm run build
# Drag and drop 'dist' folder to Netlify
```
</details>

<details>
<summary><strong>Custom Server</strong></summary>

```bash
npm run build
# Upload 'dist' folder to your server
```
</details>

---

## 🎨 Customization

### **Changing Colors**
Edit `tailwind.config.js` to customize the color palette:
```js
theme: {
  extend: {
    colors: {
      primary: '#your-color',
      secondary: '#your-color',
    }
  }
}
```

### **Adding Translations**
Add new translation keys in `src/contexts/LanguageContext.tsx`:
```typescript
const translations = {
  en: {
    'your.key': 'Your English Text',
  },
  ar: {
    'your.key': 'النص العربي الخاص بك',
  }
};
```

### **Modifying Sections**
All components are in `src/components/` - edit any component to customize its content and styling.

---

## 📈 Performance

- ⚡ **Fast Load Times** - Vite's optimized bundling
- 🎯 **Code Splitting** - Automatic chunk splitting
- 🖼️ **Image Optimization** - Compressed assets
- 📦 **Tree Shaking** - Unused code eliminated
- 💾 **Caching Strategy** - Efficient browser caching

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Mostafa Hesham**

- GitHub: [@Mostafa-Hesham1](https://github.com/Mostafa-Hesham1)
- Project Link: [https://github.com/Mostafa-Hesham1/huspyClone](https://github.com/Mostafa-Hesham1/huspyClone)

---

## 🙏 Acknowledgments

- Original design inspiration from [Huspy.com](https://www.huspy.com)
- Icons by [Lucide](https://lucide.dev)
- Fonts from [Google Fonts](https://fonts.google.com)

---

<div align="center">

### ⭐ Star this repository if you find it helpful!

**Built with ❤️ using React, TypeScript, and TailwindCSS**

[🔝 Back to Top](#-huspy-clone---premium-real-estate-platform)

</div>
