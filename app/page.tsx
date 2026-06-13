import Navbar from '@/components/Navbar/Navbar';
import Hero from '@/components/Hero/Hero';
import Clients from '@/components/Clients/Clients';
import About from '@/components/About/About';
import Services from '@/components/Services/Services';
import WhyUs from '@/components/WhyUs/WhyUs';
import Portfolio from '@/components/Portfolio/Portfolio';
import Team from '@/components/Team/Team';
import Testimonials from '@/components/Testimonials/Testimonials';
import CTA from '@/components/CTA/CTA';
import Contact from '@/components/Contact/Contact';
import Footer from '@/components/Footer/Footer';
import BackToTop from '@/components/BackToTop/BackToTop';

export default function Home() {
  return (
    <main className="overflow-x-hidden w-full relative">
      <Navbar />
      <section id="beranda"><Hero /></section>
      <Clients />
      <section id="tentang"><About /></section>
      <section id="layanan"><Services /></section>
      <WhyUs />
      <section id="portofolio"><Portfolio /></section>
      <section id="tim"><Team /></section>
      <Testimonials />
      <CTA />
      <section id="kontak"><Contact /></section>
      <Footer />
      <BackToTop />
    </main>
  );
}
