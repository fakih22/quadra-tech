'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';

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
    <section className="min-h-screen flex items-center relative overflow-hidden" id="beranda">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://plus.unsplash.com/premium_photo-1681487178876-a1156952ec60?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="Quadratech Office"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay - Lebih Transparan */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/98 via-white/40 to-transparent"></div>
      </div>

      <div className="w-full max-w-[1280px] mx-auto px-5 md:px-10 pt-24 md:pt-32 pb-12 md:pb-20 relative z-[1]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
          {/* Hero Content */}
          <div className="relative z-[2]">
            <div className="inline-flex items-center gap-2 bg-red-50 border border-red-200 py-2 px-4 text-[13px] font-semibold text-red-600 mb-8">
              <div className="w-1.5 h-1.5 bg-red-600 rounded-full animate-pulse"></div>
              Solusi Teknologi Terpercaya di Indonesia
            </div>
            
            <h1 className="text-[40px] md:text-[64px] font-extrabold leading-tight md:leading-[1.05] tracking-tight mb-6 text-black">
              Membangun Infrastruktur <span className="text-red-600">Digital</span> Masa Depan
            </h1>
            
            <p className="text-base md:text-lg leading-relaxed text-gray-600 mb-10 max-w-[480px]">
              Kami merancang dan mengembangkan solusi teknologi enterprise yang skalabel, aman, dan inovatif untuk mempercepat pertumbuhan bisnis Anda.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center mb-14">
              <Link href="#kontak" className="bg-red-600 text-white py-4 px-9 text-[15px] font-semibold cursor-pointer transition-all duration-200 inline-flex items-center gap-2.5 hover:bg-red-700 hover:-translate-y-0.5 no-underline">
                Konsultasi Gratis <i className="fas fa-arrow-right"></i>
              </Link>
              <Link href="#layanan" className="bg-transparent text-black py-[15px] px-[35px] text-[15px] font-semibold border-2 border-black cursor-pointer transition-all duration-200 inline-flex items-center gap-2.5 hover:bg-black hover:text-white no-underline">
                Lihat Layanan
              </Link>
            </div>
            
            <div className="hero-stats flex flex-col sm:flex-row gap-8 sm:gap-12 pt-8 border-t border-gray-200">
              <div>
                <h3 className="text-3xl md:text-4xl font-extrabold text-black">
                  <span ref={counter1Ref}>0</span><span className="text-red-600">+</span>
                </h3>
                <p className="text-[13px] text-gray-500 mt-1 font-medium">Proyek Selesai</p>
              </div>
              <div>
                <h3 className="text-3xl md:text-4xl font-extrabold text-black">
                  <span ref={counter2Ref}>0</span><span className="text-red-600">+</span>
                </h3>
                <p className="text-[13px] text-gray-500 mt-1 font-medium">Klien Puas</p>
              </div>
              <div>
                <h3 className="text-3xl md:text-4xl font-extrabold text-black">
                  <span ref={counter3Ref}>0</span><span className="text-red-600">+</span>
                </h3>
                <p className="text-[13px] text-gray-500 mt-1 font-medium">Tahun Pengalaman</p>
              </div>
            </div>
          </div>

          {/* Hero Visual - Removed */}
          <div className="relative hidden md:block">
            {/* Space for background image visibility */}
          </div>
        </div>
      </div>
    </section>
  );
}
