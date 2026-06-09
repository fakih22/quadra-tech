# 📚 Component Guide - KihZzTech Next.js

Panduan lengkap untuk setiap komponen dalam project.

---

## 🧭 Navbar Component
**Path**: `components/Navbar/Navbar.tsx`

### Fitur:
- Fixed position navbar yang tetap di atas saat scroll
- Shadow effect muncul saat di-scroll
- Mobile menu dengan toggle button
- Smooth scroll ke sections
- CTA button "Mulai Proyek"

### Props: Tidak ada (standalone component)

### State:
```typescript
const [scrolled, setScrolled] = useState(false);
const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
```

### Cara Modifikasi:
```typescript
// Ubah menu items di array nav-links
<li><a href="#custom-section">Custom Menu</a></li>

// Ubah logo text
KihZzTech → Your Company Name
```

---

## 🎯 Hero Component
**Path**: `components/Hero/Hero.tsx`

### Fitur:
- Animated counter menggunakan Intersection Observer
- Auto-increment numbers saat visible
- 2 column layout (content + visual)
- Floating performance card
- Image overlay dengan play button

### State & Refs:
```typescript
const counter1Ref = useRef<HTMLSpanElement>(null); // 250+
const counter2Ref = useRef<HTMLSpanElement>(null); // 120+
const counter3Ref = useRef<HTMLSpanElement>(null); // 8+
```

### Cara Custom Counter:
```typescript
// Di useEffect
animateCounter(counter1Ref.current, 250); // Ubah angka target

// Di JSX
<span ref={counter1Ref}>0</span><span className="text-red-600">+</span>
```

### Cara Ganti Image:
```typescript
<Image 
  src="YOUR_IMAGE_URL" // Ganti dengan URL/path image
  alt="Your Alt Text"
  fill
  className="object-cover opacity-85"
/>
```

---

## 🏢 Clients Component
**Path**: `components/Clients/Clients.tsx`

### Fitur:
- Logo grid dengan spacing optimal
- Hover effect color transition
- Font Awesome brand icons

### Cara Tambah Client Logo:
```typescript
<div className="text-xl font-extrabold text-gray-300...">
  <i className="fab fa-your-brand text-[32px]"></i>
</div>
```

### Custom Logo (bukan icon):
```typescript
// Ganti icon dengan Image component
<Image 
  src="/logos/client-logo.png"
  alt="Client Name"
  width={120}
  height={40}
  className="grayscale hover:grayscale-0"
/>
```

---

## 📖 About Component
**Path**: `components/About/About.tsx`

### Fitur:
- 2 column layout (image + content)
- Feature cards dengan icons
- Accent box dengan years of experience
- Responsive: stack di mobile

### Struktur Feature:
```typescript
const features = [
  {
    icon: 'fa-bolt',
    title: 'Feature Title',
    description: 'Feature description...'
  }
];
```

### Cara Tambah Feature:
```typescript
<div className="flex gap-4 items-start">
  <div className="w-12 h-12 min-w-[48px] bg-red-50...">
    <i className="fas fa-your-icon"></i>
  </div>
  <div>
    <h4>New Feature</h4>
    <p>Description...</p>
  </div>
</div>
```

---

## 🛠️ Services Component
**Path**: `components/Services/Services.tsx`

### Fitur:
- Grid 3 kolom (responsive)
- Hover effects: top border animation, shadow, lift
- Service numbering (01-06)
- Icon dengan color transition

### Data Structure:
```typescript
const services = [
  {
    number: '01',
    icon: 'fa-code',
    title: 'Service Name',
    description: 'Description text...'
  }
];
```

### Cara Tambah Service:
```typescript
// Tambahkan object baru di services array
{
  number: '07',
  icon: 'fa-custom-icon',
  title: 'New Service',
  description: 'Service description'
}
```

### Custom Hover Animation:
```css
// Di Tailwind classes
hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]
hover:-translate-y-1
hover:before:scale-x-100
```

---

## 🌟 WhyUs Component
**Path**: `components/WhyUs/WhyUs.tsx`

### Fitur:
- Dark theme (bg-black)
- 4 feature cards
- 4 statistics di bawah
- Border styling dengan grid

### Data Structure:
```typescript
const features = [
  { number: '01', icon: 'fa-rocket', title: '...', description: '...' }
];

const stats = [
  { value: '99.9', suffix: '%', label: 'Uptime Terjamin' }
];
```

### Custom Colors:
```typescript
// Untuk dark section, gunakan:
bg-black text-white
border-gray-800
text-red-600 // untuk accents
```

---

## 🖼️ Portfolio Component
**Path**: `components/Portfolio/Portfolio.tsx`

### Fitur:
- Masonry-like grid layout
- Large card: 2x2 grid span
- Image hover: scale effect
- Overlay dengan project info (muncul on hover)

### Data Structure:
```typescript
const projects = [
  {
    large: true, // atau false
    tag: 'Category',
    title: 'Project Name',
    description: 'Description',
    image: 'IMAGE_URL'
  }
];
```

### Grid Layout:
```typescript
// Large card (hero project)
className="md:col-span-2 md:row-span-2"

// Normal cards
className="" // default 1x1
```

### Cara Ganti Image:
```typescript
<Image 
  src={project.image} // Dari data array
  alt={project.title}
  fill
  className="object-cover transition-transform duration-500 group-hover:scale-105"
/>
```

---

## 👥 Team Component
**Path**: `components/Team/Team.tsx`

### Fitur:
- 4 kolom grid (responsive)
- Square aspect ratio untuk photos
- Social links (hidden, muncul on hover)
- Transition dari bottom

### Data Structure:
```typescript
const team = [
  {
    name: 'Person Name',
    position: 'Job Title',
    image: 'PHOTO_URL',
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#' // atau dribbble, behance
    }
  }
];
```

### Social Icons:
```typescript
// Auto-generate dari social object keys
<i className={`fab fa-${Object.keys(member.social)[2]}`}></i>
```

### Responsive:
- Desktop: 4 columns
- Tablet: 2 columns
- Mobile: 1 column

---

## 💬 Testimonials Component
**Path**: `components/Testimonials/Testimonials.tsx`

### Fitur:
- 3 kolom grid
- 5-star rating
- Quote symbol besar
- Author avatar & info
- Hover: border color & shadow

### Data Structure:
```typescript
const testimonials = [
  {
    quote: 'Testimonial text...',
    author: 'Name',
    position: 'Title, Company',
    avatar: 'AVATAR_URL'
  }
];
```

### Star Rating:
```typescript
// 5 bintang dengan loop
{[...Array(5)].map((_, i) => (
  <i key={i} className="fas fa-star text-yellow-400"></i>
))}
```

---

## 📞 Contact Component
**Path**: `components/Contact/Contact.tsx`

### Fitur:
- 2 kolom: info cards + form
- 4 info cards dengan icons
- Form lengkap dengan validation
- Status message setelah submit
- Hover effects pada info cards

### Form Fields:
1. Nama Lengkap (required)
2. Email (required)
3. Telepon (required)
4. Perusahaan (optional)
5. Layanan yang Diminati (select, required)
6. Pesan (textarea, required)

### Form Handling:
```typescript
const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  // Show success message
  setFormStatus('Success message...');
  // Clear after 5 seconds
  setTimeout(() => setFormStatus(''), 5000);
};
```

### Cara Connect ke API:
```typescript
const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(Object.fromEntries(formData)),
      headers: { 'Content-Type': 'application/json' }
    });
    
    if (response.ok) {
      setFormStatus('Berhasil!');
    }
  } catch (error) {
    setFormStatus('Error: ' + error.message);
  }
};
```

---

## 🔴 CTA Component
**Path**: `components/CTA/CTA.tsx`

### Fitur:
- Full-width red background
- Centered content
- 2 CTA buttons (primary + ghost)
- Responsive button layout

### Button Styles:
```typescript
// White solid button
className="bg-white text-black...hover:bg-gray-100"

// Ghost/outline button
className="bg-transparent text-white border-2 border-white/40...hover:border-white"
```

---

## 🦶 Footer Component
**Path**: `components/Footer/Footer.tsx`

### Fitur:
- 5 kolom grid (brand + 4 link columns)
- Social media links
- Footer bottom dengan copyright
- Responsive: stack di mobile

### Struktur:
1. **Brand Column** (2x width)
   - Logo
   - Description
   - Social icons
   
2. **Perusahaan** - Company links
3. **Layanan** - Services links
4. **Legal** - Legal links
5. **Footer Bottom** - Copyright & legal links

### Cara Modifikasi Links:
```typescript
<ul className="list-none space-y-3">
  <li>
    <a href="#your-link">Your Link Text</a>
  </li>
</ul>
```

---

## ⬆️ BackToTop Component
**Path**: `components/BackToTop/BackToTop.tsx`

### Fitur:
- Fixed position di bottom-right
- Muncul setelah scroll 300px
- Smooth scroll ke top
- Transition fade in/out

### Logic:
```typescript
useEffect(() => {
  const handleScroll = () => {
    setVisible(window.scrollY > 300); // Threshold
  };
  
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);
```

### Custom Position:
```typescript
// Ubah posisi
className="fixed bottom-8 right-8..." // Default
className="fixed bottom-16 left-8..." // Custom
```

---

## 🎨 Global Styling Tips

### Consistent Spacing:
```typescript
// Section padding
className="py-[120px]" // Desktop
className="py-20" // Mobile alternative

// Container width
className="max-w-[1280px] mx-auto px-10"
```

### Color Palette:
```typescript
// Primary Red
bg-red-600, text-red-600, border-red-600

// Blacks & Grays
bg-black, bg-gray-50, bg-gray-900
text-gray-500, text-gray-600, text-gray-800

// Borders
border-gray-200, border-gray-800
```

### Typography Scale:
```typescript
// Headings
text-4xl md:text-5xl font-extrabold // Main titles
text-2xl font-bold                   // Section titles
text-lg font-semibold                // Card titles

// Body
text-[17px] leading-[1.7]           // Descriptions
text-sm                              // Small text
text-xs                              // Labels
```

### Hover Effects Pattern:
```typescript
transition-all duration-300
hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]
hover:-translate-y-1
hover:border-red-600
group-hover:scale-105
```

---

## 📱 Responsive Patterns

### Grid Responsive:
```typescript
// 3 column → 2 → 1
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"

// 4 column → 2 → 1
className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
```

### Hide/Show Elements:
```typescript
// Hide di mobile
className="hidden md:block"

// Show hanya di mobile
className="block md:hidden"
```

### Stack Buttons:
```typescript
className="flex flex-col sm:flex-row gap-4"
```

---

## 🚀 Performance Tips

### Image Optimization:
```typescript
<Image
  src="..."
  alt="..."
  fill // atau width & height
  className="object-cover"
  priority // untuk above-the-fold images
  quality={85} // default 75
/>
```

### Lazy Load Sections:
```typescript
// Tambahkan dynamic import untuk heavy components
const HeavyComponent = dynamic(() => import('./Heavy'), {
  loading: () => <LoadingSpinner />
});
```

### Code Splitting:
```typescript
// Automatic di Next.js untuk setiap page
// Manual untuk components:
import dynamic from 'next/dynamic';
const Modal = dynamic(() => import('./Modal'));
```

---

## 🔧 Maintenance Checklist

### Weekly:
- [ ] Check broken images
- [ ] Test form submissions
- [ ] Verify external links
- [ ] Review console errors

### Monthly:
- [ ] Update dependencies
- [ ] Check performance metrics
- [ ] Review analytics
- [ ] Update content

### Before Deploy:
- [ ] Run `npm run build`
- [ ] Test production build locally
- [ ] Check all pages load correctly
- [ ] Verify mobile responsiveness
- [ ] Test form functionality
- [ ] Check SEO meta tags

---

**Happy coding! 🎉**
