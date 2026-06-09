'use client';

export default function Team() {
  const team = [
    {
      name: 'Muhammad Fakih',
      position: 'Chief Executive Officer',
      role: 'CEO',
      description: 'Perencanaan strategis | Pengembangan bisnis | Relasi klien',
      image: 'https://api.dicebear.com/7.x/notionists/svg?seed=MuhammadFakih&backgroundColor=3b82f6',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#'
      }
    },
    {
      name: 'Muhammad Zikri',
      position: 'Chief Technology Officer',
      role: 'CTO',
      description: 'Strategi teknologi | Arsitektur sistem | Pengembangan backend',
      image: 'https://api.dicebear.com/7.x/notionists/svg?seed=MuhammadZikri&backgroundColor=8b5cf6',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#'
      }
    },
    {
      name: 'Chairunnisa Hanafi',
      position: 'Project Manager',
      role: 'PM',
      description: 'Perencanaan proyek | Koordinasi tim | Manajemen timeline',
      image: 'https://api.dicebear.com/7.x/notionists/svg?seed=ChairunnisaHanafi&backgroundColor=ec4899',
      social: {
        linkedin: '#',
        twitter: '#',
        dribbble: '#'
      }
    },
    {
      name: 'Sari Dosma Santa Lusi Manullang',
      position: 'UI/UX Designer',
      role: 'Designer',
      description: 'Riset pengguna | Desain antarmuka | Prototyping',
      image: 'https://api.dicebear.com/7.x/notionists/svg?seed=SariDosmaDesigner&backgroundColor=f59e0b',
      social: {
        linkedin: '#',
        twitter: '#',
        behance: '#'
      }
    }
  ];

  return (
    <section className="py-16 md:py-32 bg-gray-50 border-t border-gray-200" id="tim">
      <div className="w-full max-w-[1280px] mx-auto px-5 md:px-10">
        <div className="text-center max-w-[640px] mx-auto mb-12 md:mb-16">
          <div className="flex items-center gap-2 justify-center text-xs uppercase tracking-[2px] text-red-600 font-bold mb-4">
            <span className="w-5 h-0.5 bg-red-600"></span>
            Tim Kami
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight mb-5 text-black">
            Tim QuadraTech
          </h2>
          <p className="text-base md:text-[17px] leading-relaxed text-gray-600">
            Kenali para visioner dan ahli teknis yang mendorong inovasi di Quadratech.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <div 
              key={index}
              className="bg-white border border-gray-200 overflow-hidden transition-all duration-300 group hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] hover:-translate-y-1"
            >
              <div className="w-full aspect-square bg-gray-200 overflow-hidden relative">
                <img 
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 flex gap-0 translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                  <a href={member.social.linkedin} className="flex-1 p-3 bg-black text-white text-center text-sm transition-colors duration-200 hover:bg-red-600 no-underline">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href={member.social.twitter} className="flex-1 p-3 bg-black text-white text-center text-sm transition-colors duration-200 hover:bg-red-600 no-underline">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href={Object.values(member.social)[2]} className="flex-1 p-3 bg-black text-white text-center text-sm transition-colors duration-200 hover:bg-red-600 no-underline">
                    <i className={`fab fa-${Object.keys(member.social)[2]}`}></i>
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-base font-bold tracking-[-0.3px] mb-1">{member.name}</h3>
                <p className="text-[13px] text-red-600 font-semibold mb-2">{member.position}</p>
                <p className="text-xs text-gray-500 leading-relaxed">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
