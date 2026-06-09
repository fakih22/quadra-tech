'use client';

export default function Portfolio() {
  const projects = [
    {
      large: true,
      tag: 'Platform Web',
      title: 'Platform Banking Digital',
      description: 'Sistem perbankan enterprise yang melayani 500K+ pengguna aktif',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80&fit=crop'
    },
    {
      large: false,
      tag: 'Dashboard',
      title: 'Dashboard Analytics',
      description: 'Platform analitik real-time untuk monitoring transaksi',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80&fit=crop'
    },
    {
      large: false,
      tag: 'Aplikasi Mobile',
      title: 'Platform E-Commerce',
      description: 'Platform belanja dengan 1M+ pengguna aktif',
      image: 'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=600&q=80&fit=crop'
    },
    {
      large: false,
      tag: 'Solusi AI',
      title: 'Sistem Prediksi AI',
      description: 'Machine learning untuk prediksi permintaan pasar',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80&fit=crop'
    },
    {
      large: false,
      tag: 'Cloud',
      title: 'Migrasi Cloud',
      description: 'Migrasi infrastruktur ke lingkungan multi-cloud',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80&fit=crop'
    },
    {
      large: false,
      tag: 'IoT',
      title: 'Sistem Smart Factory',
      description: 'Sistem IoT untuk monitoring produksi manufaktur',
      image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=600&q=80&fit=crop'
    }
  ];

  return (
    <section className="py-16 md:py-32 bg-white" id="portofolio">
      <div className="w-full max-w-[1280px] mx-auto px-5 md:px-10">
        <div className="text-center max-w-[640px] mx-auto mb-12 md:mb-16">
          <div className="flex items-center gap-2 justify-center text-xs uppercase tracking-[2px] text-red-600 font-bold mb-4">
            <span className="w-5 h-0.5 bg-red-600"></span>
            Portofolio
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight mb-5 text-black">
            Proyek yang Kami Banggakan
          </h2>
          <p className="text-base md:text-[17px] leading-relaxed text-gray-600">
            Dari startup hingga enterprise, kami telah membantu ratusan perusahaan mewujudkan visi digital mereka.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`relative overflow-hidden cursor-pointer border border-gray-200 group ${project.large ? 'md:col-span-2 md:row-span-2' : ''}`}
            >
              <div className={`w-full ${project.large ? 'h-full min-h-[400px]' : 'aspect-[16/10]'} bg-gray-900 overflow-hidden relative`}>
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/95 to-transparent translate-y-5 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="text-[11px] text-red-600 font-bold uppercase tracking-[1px] mb-2">
                    {project.tag}
                  </div>
                  <h3 className="text-white text-lg font-bold tracking-tight">{project.title}</h3>
                  <p className="text-white/60 text-[13px] mt-1.5">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
