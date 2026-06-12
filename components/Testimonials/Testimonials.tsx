'use client';

import ScrollReveal from '../Animations/ScrollReveal';

export default function Testimonials() {
  const testimonials = [
    {
      quote: 'Quadratech berhasil mentransformasi sistem legacy kami menjadi platform modern yang meningkatkan produktivitas tim hingga 60%. Sangat profesional dan komunikatif sepanjang proyek.',
      author: 'Budi Santoso',
      position: 'VP of Technology, PT Maju Sejahtera',
      avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&q=80&fit=crop'
    },
    {
      quote: 'Aplikasi mobile yang dikembangkan Quadratech mendapat rating 4.8 di App Store. Tim mereka benar-benar memahami kebutuhan pengguna dan memberikan solusi yang tepat.',
      author: 'Siti Nurhaliza',
      position: 'CEO, Digital Nusantara',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&q=80&fit=crop'
    },
    {
      quote: 'Migrasi cloud yang dilakukan Quadratech berjalan mulus tanpa downtime. Biaya operasional kami turun 40% dan performa sistem meningkat drastis. Sangat direkomendasikan!',
      author: 'Andi Wijaya',
      position: 'CIO, Indonesia Tech Group',
      avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&q=80&fit=crop'
    }
  ];

  return (
    <ScrollReveal className="py-16 md:py-32 bg-white border-t border-gray-200" id="testimoni" direction="none">
      <div className="w-full max-w-[1280px] mx-auto px-5 md:px-10">
        <ScrollReveal direction="up" delay={0.1} className="text-center max-w-[640px] mx-auto mb-12 md:mb-16">
          <div className="flex items-center gap-2 justify-center text-xs uppercase tracking-[2px] text-red-600 font-bold mb-4">
            <span className="w-5 h-0.5 bg-red-600"></span>
            Testimoni Klien
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight mb-5 text-black">
            Apa Kata Klien Kami
          </h2>
          <p className="text-base md:text-[17px] leading-relaxed text-gray-600">
            Kepuasan klien adalah prioritas utama kami. Berikut testimoni dari klien yang telah mempercayakan proyek mereka kepada Quadratech.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal 
              key={index}
              direction="up"
              delay={0.1 * (index % 3 + 1)}
            >
              <div 
                className="bg-white border border-gray-200 p-10 relative transition-all duration-500 hover:shadow-[0_30px_60px_rgba(0,0,0,0.1)] hover:border-red-600 hover:-translate-y-2 rounded-xl group cursor-pointer h-full"
              >
                <div className="text-5xl text-red-600/30 font-black leading-[1] mb-4 font-serif absolute top-6 right-6 transition-transform duration-500 group-hover:scale-125 group-hover:text-red-600/50">&quot;</div>
                
                <div className="flex gap-0.5 mb-4 relative z-10">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="fas fa-star text-yellow-400 text-sm transform transition-transform duration-300 group-hover:scale-110" style={{ transitionDelay: `${i * 50}ms` }}></i>
                  ))}
                </div>
                
                <p className="text-[15px] leading-[1.7] text-gray-600 mb-7 italic relative z-10 group-hover:text-gray-900 transition-colors duration-300">
                  {testimonial.quote}
                </p>
                
                <div className="flex items-center gap-4 pt-5 border-t border-gray-200 relative z-10">
                  <div className="w-12 h-12 bg-gray-200 overflow-hidden relative rounded-full ring-2 ring-transparent group-hover:ring-red-600 transition-all duration-300">
                    <img 
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold group-hover:text-red-600 transition-colors duration-300">{testimonial.author}</h4>
                    <p className="text-xs text-gray-500 mt-0.5">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}
