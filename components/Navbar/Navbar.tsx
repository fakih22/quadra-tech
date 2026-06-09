'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-[1000] bg-white/97 border-b border-gray-200 transition-all duration-300 ${scrolled ? 'shadow-[0_1px_20px_rgba(0,0,0,0.08)]' : ''}`}>
        <div className="max-w-[1280px] mx-auto px-10 flex items-center justify-between h-[72px]">
          <Link href="#" className="flex items-center gap-2 text-[22px] font-extrabold tracking-[-0.5px] text-black no-underline">
            <div className="w-8 h-8 bg-red-600 flex items-center justify-center text-white font-black text-base">
              Q
            </div>
            Quadratech
          </Link>

          <ul className="hidden md:flex items-center gap-9 list-none">
            <li><Link href="#beranda" className="text-gray-600 text-sm font-medium transition-colors duration-200 tracking-[-0.2px] hover:text-black no-underline">Beranda</Link></li>
            <li><Link href="#tentang" className="text-gray-600 text-sm font-medium transition-colors duration-200 tracking-[-0.2px] hover:text-black no-underline">Tentang</Link></li>
            <li><Link href="#layanan" className="text-gray-600 text-sm font-medium transition-colors duration-200 tracking-[-0.2px] hover:text-black no-underline">Layanan</Link></li>
            <li><Link href="#portofolio" className="text-gray-600 text-sm font-medium transition-colors duration-200 tracking-[-0.2px] hover:text-black no-underline">Portofolio</Link></li>
            <li><Link href="#tim" className="text-gray-600 text-sm font-medium transition-colors duration-200 tracking-[-0.2px] hover:text-black no-underline">Tim</Link></li>
            <li><Link href="#kontak" className="text-gray-600 text-sm font-medium transition-colors duration-200 tracking-[-0.2px] hover:text-black no-underline">Kontak</Link></li>
            <li>
              <Link href="#kontak" className="bg-black text-white py-2.5 px-6 text-sm font-semibold border-none cursor-pointer transition-colors duration-200 inline-block no-underline hover:bg-red-600">
                Mulai Proyek
              </Link>
            </li>
          </ul>

          <button className="md:hidden bg-transparent border-none text-2xl cursor-pointer" onClick={toggleMobileMenu}>
            <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed top-[72px] left-0 w-full bg-white border-b border-gray-200 px-10 py-6 z-[999] shadow-[0_20px_60px_rgba(0,0,0,0.1)] ${mobileMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <Link href="#beranda" onClick={closeMobileMenu} className="block py-3 text-base font-semibold text-black border-b border-gray-100 no-underline">Beranda</Link>
        <Link href="#tentang" onClick={closeMobileMenu} className="block py-3 text-base font-semibold text-black border-b border-gray-100 no-underline">Tentang</Link>
        <Link href="#layanan" onClick={closeMobileMenu} className="block py-3 text-base font-semibold text-black border-b border-gray-100 no-underline">Layanan</Link>
        <Link href="#portofolio" onClick={closeMobileMenu} className="block py-3 text-base font-semibold text-black border-b border-gray-100 no-underline">Portofolio</Link>
        <Link href="#tim" onClick={closeMobileMenu} className="block py-3 text-base font-semibold text-black border-b border-gray-100 no-underline">Tim</Link>
        <Link href="#testimoni" onClick={closeMobileMenu} className="block py-3 text-base font-semibold text-black border-b border-gray-100 no-underline">Testimoni</Link>
        <Link href="#kontak" onClick={closeMobileMenu} className="block py-3 text-base font-semibold text-black no-underline">Kontak</Link>
      </div>
    </>
  );
}
