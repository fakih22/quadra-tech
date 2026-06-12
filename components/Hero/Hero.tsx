'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';

import ScrollReveal from '../Animations/ScrollReveal';

export default function Hero() {
  const counter1Ref = useRef<HTMLSpanElement>(null);
  const counter2Ref = useRef<HTMLSpanElement>(null);
  const counter3Ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const animateCounter = (element: HTMLSpanElement | null, target: number) => {
      if (!element) return;
      
      let current = 0;
      const increment = target / 50;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          element.textContent = target.toString();
          clearInterval(timer);
        } else {
          element.textContent = Math.floor(current).toString();
        }
      }, 30);
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(counter1Ref.current, 250);
          animateCounter(counter2Ref.current, 120);
          animateCounter(counter3Ref.current, 8);
        }
      });
    }, { threshold: 0.5 });

    const statsSection = document.querySelector('.hero-stats');
    if (statsSection) {
      observer.observe(statsSection);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <ScrollReveal className="min-h-screen flex items-center relative overflow-hidden bg-black" direction="none">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://plus.unsplash.com/premium_photo-1681487178876-a1156952ec60?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="Quadratech Tech"
          className="w-full h-full object-cover opacity-60"
        />
        {/* Gradient Overlay for premium feel */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-transparent to-transparent"></div>
      </div>

      <div className="w-full max-w-[1280px] mx-auto px-5 md:px-10 pt-24 md:pt-32 pb-12 md:pb-20 relative z-[1]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
          {/* Hero Content */}
          <div className="relative z-[2]">
            <ScrollReveal delay={0.1} direction="up" className="inline-flex items-center gap-2 bg-red-600/10 border border-red-500/30 py-2 px-4 text-[13px] font-semibold text-red-500 mb-8 backdrop-blur-sm rounded-full">
              <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></div>
              Solusi Teknologi Terpercaya di Indonesia
            </ScrollReveal>
            
            <ScrollReveal delay={0.2} direction="up">
              <h1 className="text-[40px] md:text-[64px] font-extrabold leading-tight md:leading-[1.05] tracking-tight mb-6 text-white">
                Membangun Infrastruktur <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">Digital</span> Masa Depan
              </h1>
            </ScrollReveal>
            
            <ScrollReveal delay={0.3} direction="up">
              <p className="text-base md:text-lg leading-relaxed text-gray-300 mb-10 max-w-[480px]">
                Kami merancang dan mengembangkan solusi teknologi enterprise yang skalabel, aman, dan inovatif untuk mempercepat pertumbuhan bisnis Anda.
              </p>
            </ScrollReveal>
            
            <ScrollReveal delay={0.4} direction="up" className="flex flex-col sm:flex-row gap-4 items-start sm:items-center mb-14">
              <Link href="#kontak" className="bg-red-600 text-white py-4 px-9 text-[15px] font-semibold cursor-pointer transition-all duration-300 inline-flex items-center gap-2.5 hover:bg-red-700 hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(220,38,38,0.3)] rounded-lg no-underline">
                Konsultasi Gratis <i className="fas fa-arrow-right"></i>
              </Link>
              <Link href="#layanan" className="bg-white/5 backdrop-blur-md text-white py-[15px] px-[35px] text-[15px] font-semibold border border-white/20 cursor-pointer transition-all duration-300 inline-flex items-center gap-2.5 hover:bg-white/10 hover:border-white/40 hover:-translate-y-1 rounded-lg no-underline">
                Lihat Layanan
              </Link>
            </ScrollReveal>
            
            <ScrollReveal delay={0.5} direction="up" className="hero-stats flex flex-col sm:flex-row gap-8 sm:gap-12 pt-8 border-t border-white/10">
              <div>
                <h3 className="text-3xl md:text-4xl font-extrabold text-white">
                  <span ref={counter1Ref}>0</span><span className="text-red-500">+</span>
                </h3>
                <p className="text-[13px] text-gray-400 mt-1 font-medium tracking-wide">Proyek Selesai</p>
              </div>
              <div>
                <h3 className="text-3xl md:text-4xl font-extrabold text-white">
                  <span ref={counter2Ref}>0</span><span className="text-red-500">+</span>
                </h3>
                <p className="text-[13px] text-gray-400 mt-1 font-medium tracking-wide">Klien Puas</p>
              </div>
              <div>
                <h3 className="text-3xl md:text-4xl font-extrabold text-white">
                  <span ref={counter3Ref}>0</span><span className="text-red-500">+</span>
                </h3>
                <p className="text-[13px] text-gray-400 mt-1 font-medium tracking-wide">Tahun Pengalaman</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
