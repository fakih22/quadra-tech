import Link from 'next/link';
import ScrollReveal from '../Animations/ScrollReveal';

export default function CTA() {
  return (
    <ScrollReveal className="bg-red-600 py-16 md:py-25 relative overflow-hidden" direction="none">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
      
      <div className="w-full max-w-[800px] mx-auto text-center px-5 md:px-10 relative z-10">
        <ScrollReveal direction="up" delay={0.1}>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-5 leading-tight">
            Siap Transformasi Bisnis Anda?
          </h2>
        </ScrollReveal>
        
        <ScrollReveal direction="up" delay={0.2}>
          <p className="text-base md:text-[17px] text-white/90 mb-10 leading-relaxed font-medium">
            Jadwalkan konsultasi gratis dengan para ahli kami. Tanpa komitmen, hanya wawasan tentang bagaimana teknologi dapat mempercepat pertumbuhan Anda.
          </p>
        </ScrollReveal>
        
        <ScrollReveal direction="up" delay={0.3} className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="#kontak" className="bg-white text-black py-4 px-9 text-[15px] font-bold cursor-pointer transition-all duration-300 inline-flex items-center justify-center gap-2.5 hover:bg-gray-100 hover:shadow-[0_10px_20px_rgba(0,0,0,0.2)] hover:-translate-y-1 no-underline rounded-lg group">
            Hubungi Kami Sekarang <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
          </Link>
          <Link href="#portofolio" className="bg-transparent text-white py-[15px] px-[35px] text-[15px] font-semibold border-2 border-white/40 cursor-pointer transition-all duration-300 inline-flex items-center justify-center gap-2.5 hover:border-white hover:bg-white/10 hover:-translate-y-1 no-underline rounded-lg">
            Lihat Portofolio
          </Link>
        </ScrollReveal>
      </div>
    </ScrollReveal>
  );
}
