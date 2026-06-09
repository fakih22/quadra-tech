import Link from 'next/link';

export default function CTA() {
  return (
    <section className="bg-red-600 py-16 md:py-25">
      <div className="w-full max-w-[800px] mx-auto text-center px-5 md:px-10">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-5 leading-tight">
          Siap Transformasi Bisnis Anda?
        </h2>
        <p className="text-base md:text-[17px] text-white/80 mb-10 leading-relaxed">
          Jadwalkan konsultasi gratis dengan para ahli kami. Tanpa komitmen, hanya wawasan tentang bagaimana teknologi dapat mempercepat pertumbuhan Anda.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="#kontak" className="bg-white text-black py-4 px-9 text-[15px] font-bold cursor-pointer transition-all duration-200 inline-flex items-center justify-center gap-2.5 hover:bg-gray-100 hover:-translate-y-0.5 no-underline">
            Hubungi Kami Sekarang <i className="fas fa-arrow-right"></i>
          </Link>
          <Link href="#portofolio" className="bg-transparent text-white py-[15px] px-[35px] text-[15px] font-semibold border-2 border-white/40 cursor-pointer transition-all duration-200 inline-flex items-center justify-center gap-2.5 hover:border-white hover:bg-white/10 no-underline">
            Lihat Portofolio
          </Link>
        </div>
      </div>
    </section>
  );
}
