# KihZzTech - Next.js Company Profile

Website company profile yang telah dikonversi dari HTML ke Next.js dengan TypeScript dan Tailwind CSS.

## 📁 Struktur Project

```
quadra-tech/
├── app/
│   ├── layout.tsx          # Root layout dengan metadata & font
│   ├── page.tsx            # Halaman utama yang menggabungkan semua komponen
│   ├── globals.css         # Global styles & Tailwind imports
│   └── favicon.ico
│
├── components/
│   ├── Navbar/
│   │   └── Navbar.tsx      # Navigation bar dengan mobile menu
│   ├── Hero/
│   │   └── Hero.tsx        # Hero section dengan counter animation
│   ├── Clients/
│   │   └── Clients.tsx     # Logo klien
│   ├── About/
│   │   └── About.tsx       # Tentang perusahaan
│   ├── Services/
│   │   └── Services.tsx    # Grid layanan (6 services)
│   ├── WhyUs/
│   │   └── WhyUs.tsx       # Keunggulan perusahaan dengan stats
│   ├── Portfolio/
│   │   └── Portfolio.tsx   # Portfolio proyek dengan image gallery
│   ├── Team/
│   │   └── Team.tsx        # Tim dengan social links
│   ├── Testimonials/
│   │   └── Testimonials.tsx # Testimoni klien
│   ├── CTA/
│   │   └── CTA.tsx         # Call-to-action section
│   ├── Contact/
│   │   └── Contact.tsx     # Form kontak & info
│   ├── Footer/
│   │   └── Footer.tsx      # Footer dengan links
│   └── BackToTop/
│       └── BackToTop.tsx   # Tombol scroll to top
│
├── public/                  # Static assets
├── next.config.ts          # Next.js config (image domains)
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies

```

## 🚀 Cara Menjalankan

### 1. Install Dependencies
```bash
npm install
```

### 2. Jalankan Development Server
```bash
npm run dev
```

Server akan berjalan di: **http://localhost:3000**

### 3. Build untuk Production
```bash
npm run build
npm start
```

## ✨ Fitur yang Diimplementasikan

### ✅ Komponen Utama
- **Navbar** - Fixed navigation dengan mobile menu responsive
- **Hero** - Section hero dengan animated counter dan CTA buttons
- **Clients** - Logo klien dengan hover effects
- **About** - Tentang perusahaan dengan feature cards
- **Services** - 6 layanan dalam grid layout dengan hover animations
- **Why Us** - 4 keunggulan dengan statistik performa
- **Portfolio** - Gallery proyek dengan image overlay
- **Team** - 4 anggota tim dengan social media links
- **Testimonials** - 3 testimoni klien dengan rating bintang
- **CTA** - Call-to-action section dengan background merah
- **Contact** - Form kontak lengkap dengan info kontak
- **Footer** - Footer dengan multiple columns dan links
- **Back to Top** - Tombol floating untuk scroll ke atas

### ✅ Teknologi & Styling
- ✅ **Next.js 16** dengan App Router
- ✅ **TypeScript** untuk type safety
- ✅ **Tailwind CSS 4** untuk styling
- ✅ **Font Awesome 6.4** untuk icons
- ✅ **Google Fonts (Inter)** untuk typography
- ✅ **Next/Image** untuk optimized images
- ✅ **Responsive Design** - Mobile, Tablet, Desktop
- ✅ **Smooth Animations** - Hover effects, transitions
- ✅ **Client Components** untuk interactivity
- ✅ **SEO Optimized** dengan metadata

### ✅ Interaktivitas
- Animated counter di Hero section
- Mobile menu toggle
- Smooth scroll navigation
- Back to top button (muncul saat scroll)
- Hover effects pada cards & buttons
- Form handling dengan status message
- Image hover zoom effects
- Social media link hover effects

## 🎨 Design System

### Warna
- **Primary**: `#DC2626` (Red-600)
- **Black**: `#000000`
- **White**: `#FFFFFF`
- **Gray-50**: `#FAFAFA`
- **Gray-200**: `#E5E5E5`
- **Gray-600**: `#666666`
- **Gray-800**: `#222222`

### Typography
- **Font Family**: Inter (Google Fonts)
- **Font Weights**: 300, 400, 500, 600, 700, 800, 900

### Breakpoints (Tailwind)
- **sm**: 640px
- **md**: 768px
- **lg**: 1024px
- **xl**: 1280px

## 📝 Perbedaan dari HTML Original

### Peningkatan
1. **TypeScript** - Type safety untuk maintenance yang lebih baik
2. **Component-based** - Modular dan reusable components
3. **Next/Image** - Automatic image optimization
4. **Better Performance** - Next.js optimizations (SSR, code splitting)
5. **Modern Stack** - Latest Next.js 16 dengan Turbopack
6. **SEO Friendly** - Built-in metadata dan semantic HTML

### Styling
- Converted dari vanilla CSS ke **Tailwind CSS classes**
- Maintained semua visual design dan animations
- Responsive breakpoints disesuaikan dengan Tailwind

### Struktur
- Separated concerns dengan component-based architecture
- Easier to maintain dan scale
- Clear folder structure

## 🔧 Konfigurasi Penting

### next.config.ts
```typescript
images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'images.unsplash.com',
    },
  ],
}
```

### app/layout.tsx
- Font: Inter dari Google Fonts
- Font Awesome 6.4 CDN
- Metadata untuk SEO
- Smooth scroll behavior

## 🌐 External Resources

### Images
- **Unsplash** - https://images.unsplash.com
  - Hero image
  - About image
  - Portfolio images
  - Team photos
  - Testimonial avatars

### Icons
- **Font Awesome 6.4** - CDN
  - Social media icons
  - Service icons
  - Feature icons
  - Navigation icons

## 📱 Responsive Design

### Mobile (< 768px)
- Single column layout
- Mobile menu toggle
- Stacked buttons
- Simplified grid layouts

### Tablet (768px - 1024px)
- 2 column grids
- Adjusted padding & spacing
- Optimized image sizes

### Desktop (> 1024px)
- Full multi-column layouts
- Maximum 1280px container width
- Optimal spacing & typography

## 🚀 Next Steps

### Untuk Production:
1. Replace semua placeholder images dengan images asli
2. Update content (text, phone numbers, emails)
3. Implement real form submission (API endpoint)
4. Add analytics (Google Analytics, etc.)
5. Add error boundaries
6. Implement loading states
7. Add sitemap & robots.txt
8. Setup domain & deployment (Vercel recommended)

### Optional Enhancements:
- Add animations library (Framer Motion)
- Implement blog section
- Add language switcher (i18n)
- Add dark mode toggle
- Implement search functionality
- Add admin dashboard untuk content management

## 📄 License

© 2026 KihZzTech. All rights reserved.

---

## 🎯 Summary

Project ini adalah konversi lengkap dari HTML static menjadi modern Next.js application dengan:
- ✅ Semua section dan fitur dari HTML original
- ✅ TypeScript untuk type safety
- ✅ Tailwind CSS untuk styling
- ✅ Component-based architecture
- ✅ Fully responsive
- ✅ Optimized performance
- ✅ SEO friendly
- ✅ Production ready

**Status**: ✅ Ready to run - `npm run dev`
