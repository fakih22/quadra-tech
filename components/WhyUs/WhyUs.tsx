export default function WhyUs() {
  const features = [
    {
      number: '01',
      icon: 'fa-rocket',
      title: 'Pengiriman Cepat',
      description: 'Metodologi agile yang terbukti memungkinkan kami mengirimkan proyek 2x lebih cepat tanpa mengorbankan kualitas.'
    },
    {
      number: '02',
      icon: 'fa-cogs',
      title: 'Dibangun untuk Skala',
      description: 'Arsitektur dirancang untuk tumbuh bersama bisnis Anda, dari MVP startup hingga platform tingkat enterprise.'
    },
    {
      number: '03',
      icon: 'fa-headset',
      title: 'Dukungan 24/7',
      description: 'Tim dukungan khusus siap membantu Anda kapan saja dengan waktu respons rata-rata 15 menit.'
    },
    {
      number: '04',
      icon: 'fa-handshake',
      title: 'Transparansi Penuh',
      description: 'Komunikasi terbuka, laporan progres berkala, dan akses real-time ke dashboard proyek Anda.'
    }
  ];

  const stats = [
    { value: '99.9', suffix: '%', label: 'Uptime Terjamin' },
    { value: '2x', suffix: '', label: 'Pengiriman Lebih Cepat' },
    { value: '40', suffix: '%', label: 'Efisiensi Biaya' },
    { value: '98', suffix: '%', label: 'Kepuasan Klien' }
  ];

  return (
    <section className="py-16 md:py-32 bg-black text-white" id="mengapa-kami">
      <div className="w-full max-w-[1280px] mx-auto px-5 md:px-10">
        <div className="text-center max-w-[640px] mx-auto mb-12 md:mb-16">
          <div className="flex items-center gap-2 justify-center text-xs uppercase tracking-[2px] text-red-600 font-bold mb-4">
            <span className="w-5 h-0.5 bg-red-600"></span>
            Mengapa Quadratech
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight mb-5 text-white">
            Keunggulan Quadratech
          </h2>
          <p className="text-base md:text-[17px] leading-relaxed text-gray-400">
            Kombinasi unik dari penguasaan teknis, wawasan bisnis, dan komitmen tanpa kompromi terhadap keunggulan menjadikan kami mitra ideal untuk transformasi digital Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 mt-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-8 md:p-12 md:px-8 border border-gray-800 relative transition-all duration-300 hover:bg-gray-900 hover:border-gray-700"
            >
              <div className="text-[11px] text-red-600 font-bold tracking-[2px] mb-6">
                {feature.number}
              </div>
              <div className="text-[32px] text-red-600 mb-6">
                <i className={`fas ${feature.icon}`}></i>
              </div>
              <h3 className="text-lg font-bold mb-3">{feature.title}</h3>
              <p className="text-sm leading-relaxed text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 mt-0 border-t border-gray-800">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className={`p-8 md:p-12 md:px-8 text-center ${index < stats.length - 1 ? 'border-r border-gray-800' : ''}`}
            >
              <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight text-red-600">
                {stat.value}{stat.suffix && <span className="text-[28px]">{stat.suffix}</span>}
              </h3>
              <p className="text-sm text-gray-500 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
