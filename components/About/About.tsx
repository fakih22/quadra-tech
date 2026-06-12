'use client';

import ScrollReveal from '../Animations/ScrollReveal';

export default function About() {
  return (
    <ScrollReveal className="py-16 md:py-32 bg-white" direction="none">
      <div className="w-full max-w-[1280px] mx-auto px-5 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
          {/* About Image */}
          <div className="relative">
            <ScrollReveal direction="left" delay={0.2} className="w-full aspect-[5/4] bg-gray-900 overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80&fit=crop" 
                alt="Quadratech Team"
                className="w-full h-full object-cover"
              />
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.4} className="md:absolute relative md:bottom-[-24px] md:right-[-24px] w-full md:w-[200px] bg-red-600 p-8 text-white mt-6 md:mt-0 shadow-xl">
              <h3 className="text-[42px] font-extrabold tracking-tight">8+</h3>
              <p className="text-[13px] opacity-80 mt-1">Tahun Pengalaman</p>
            </ScrollReveal>
          </div>

          {/* About Content */}
          <div>
            <ScrollReveal direction="right" delay={0.2} className="mb-8">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[2px] text-red-600 font-bold mb-4">
                <span className="w-5 h-0.5 bg-red-600"></span>
                Tentang Kami
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight mb-5 text-black">
                Partner Teknologi Terpercaya untuk Bisnis Anda
              </h2>
              <p className="text-base md:text-[17px] leading-relaxed text-gray-600">
                Quadratech adalah perusahaan teknologi yang berfokus pada solusi digital end-to-end. Kami menggabungkan wawasan strategis dengan keunggulan teknis untuk menghadirkan produk perangkat lunak yang skalabel, aman, dan inovatif yang mendorong pertumbuhan bisnis.
              </p>
            </ScrollReveal>

            <div className="flex flex-col gap-6 mt-8">
              <ScrollReveal direction="up" delay={0.3} className="flex gap-4 items-start">
                <div className="w-12 h-12 min-w-[48px] bg-red-50 flex items-center justify-center text-red-600 text-lg flex-shrink-0">
                  <i className="fas fa-bolt"></i>
                </div>
                <div>
                  <h4 className="text-[15px] font-bold mb-1">Inovasi Terdepan</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Kami tidak hanya mengikuti tren—kami mengantisipasinya. Selalu selangkah lebih maju untuk memberikan keunggulan kompetitif bagi klien.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={0.4} className="flex gap-4 items-start">
                <div className="w-12 h-12 min-w-[48px] bg-red-50 flex items-center justify-center text-red-600 text-lg flex-shrink-0">
                  <i className="fas fa-code"></i>
                </div>
                <div>
                  <h4 className="text-[15px] font-bold mb-1">Keunggulan Teknis</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Tim ahli dengan keahlian di framework modern, infrastruktur cloud, dan teknologi terkini.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={0.5} className="flex gap-4 items-start">
                <div className="w-12 h-12 min-w-[48px] bg-red-50 flex items-center justify-center text-red-600 text-lg flex-shrink-0">
                  <i className="fas fa-shield-alt"></i>
                </div>
                <div>
                  <h4 className="text-[15px] font-bold mb-1">Keamanan Utama</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Protokol keamanan tingkat enterprise dengan standar kepatuhan ISO 27001 dan SOC 2.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
