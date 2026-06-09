'use client';

import { useState, useEffect } from 'react';

interface Service {
  number: string;
  icon: string;
  title: string;
  description: string;
  fullDescription: string;
  features: string[];
  benefits: string[];
  technologies: string[];
}

export default function Services() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  // Block body scroll when modal is open
  useEffect(() => {
    if (selectedService) {
      // Save current scroll position
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
    } else {
      // Restore scroll position
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    }

    return () => {
      // Cleanup on unmount
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
    };
  }, [selectedService]);

  const services: Service[] = [
    {
      number: '01',
      icon: 'fa-code',
      title: 'Pengembangan Web',
      description: 'Aplikasi web enterprise, progressive web apps, dan solusi kustom yang dibangun dengan framework modern dan arsitektur yang skalabel.',
      fullDescription: 'Kami menciptakan aplikasi web yang powerful dan scalable dengan menggunakan teknologi terkini. Dari website corporate hingga aplikasi web enterprise yang kompleks, kami memastikan setiap solusi dibangun dengan standar kualitas tertinggi, performa optimal, dan keamanan yang terjamin.',
      features: [
        'Progressive Web Apps (PWA) untuk pengalaman seperti aplikasi native',
        'Single Page Applications (SPA) dengan loading cepat',
        'E-commerce platform dengan sistem pembayaran terintegrasi',
        'Content Management System (CMS) yang mudah dikelola',
        'Aplikasi web real-time dengan teknologi WebSocket',
        'Responsive design untuk semua perangkat'
      ],
      benefits: [
        'Waktu loading 3x lebih cepat dengan optimasi performa',
        'SEO-friendly untuk meningkatkan visibilitas online',
        'Skalabilitas tinggi untuk pertumbuhan bisnis',
        'Maintenance mudah dengan dokumentasi lengkap',
        'Keamanan enterprise-grade dengan enkripsi SSL/TLS'
      ],
      technologies: ['React', 'Next.js', 'Vue.js', 'Node.js', 'TypeScript', 'TailwindCSS']
    },
    {
      number: '02',
      icon: 'fa-mobile-alt',
      title: 'Pengembangan Aplikasi Mobile',
      description: 'Aplikasi native iOS dan Android, solusi cross-platform dengan pengalaman pengguna yang menarik dan mengkonversi.',
      fullDescription: 'Transformasikan ide Anda menjadi aplikasi mobile yang user-friendly dan engaging. Kami mengembangkan aplikasi mobile native maupun cross-platform yang tidak hanya indah secara visual, tetapi juga memberikan performa maksimal dan pengalaman pengguna yang luar biasa.',
      features: [
        'Aplikasi native iOS (Swift) dan Android (Kotlin)',
        'Cross-platform development dengan React Native dan Flutter',
        'Integrasi dengan API dan backend services',
        'Push notifications dan real-time updates',
        'In-app purchases dan payment gateway',
        'Offline functionality dengan local storage',
        'Biometric authentication (Face ID, Touch ID)',
        'GPS dan location-based services'
      ],
      benefits: [
        'Time-to-market lebih cepat dengan cross-platform',
        'Konsistensi UI/UX di semua platform',
        'Biaya pengembangan lebih efisien',
        'Update dan maintenance yang mudah',
        'Performa native dengan teknologi hybrid modern'
      ],
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'Redux']
    },
    {
      number: '03',
      icon: 'fa-palette',
      title: 'Desain UI/UX',
      description: 'Riset pengguna, desain antarmuka, prototyping, dan optimasi pengalaman yang mengutamakan pengguna Anda.',
      fullDescription: 'Desain adalah jembatan antara teknologi dan pengguna. Tim desainer kami menciptakan interface yang tidak hanya cantik, tetapi juga intuitif dan meningkatkan konversi. Setiap elemen dirancang berdasarkan research mendalam dan best practices industri.',
      features: [
        'User research dan persona development',
        'Information architecture dan user flow mapping',
        'Wireframing dan prototyping interaktif',
        'Visual design dengan brand identity kuat',
        'Usability testing dan iterasi desain',
        'Design system dan component library',
        'Accessibility compliance (WCAG)',
        'Micro-interactions dan animasi UI'
      ],
      benefits: [
        'Meningkatkan conversion rate hingga 200%',
        'Mengurangi bounce rate dengan UX yang optimal',
        'Brand consistency di semua touchpoint',
        'Kepuasan pengguna yang lebih tinggi',
        'Mengurangi biaya development dengan prototype yang jelas'
      ],
      technologies: ['Figma', 'Adobe XD', 'Sketch', 'InVision', 'Principle', 'Framer']
    },
    {
      number: '04',
      icon: 'fa-database',
      title: 'Desain & Manajemen Database',
      description: 'Arsitektur database skalabel, optimasi, migrasi, dan manajemen untuk operasi berkinerja tinggi.',
      fullDescription: 'Database adalah jantung dari setiap aplikasi. Kami merancang dan mengelola infrastruktur database yang robust, scalable, dan secure. Dari desain schema hingga optimasi query, kami memastikan data Anda dikelola dengan efisien dan aman.',
      features: [
        'Database schema design dan normalisasi',
        'Query optimization untuk performa maksimal',
        'Backup dan disaster recovery planning',
        'Database migration dan modernisasi',
        'Data warehouse dan business intelligence',
        'Database security dan encryption',
        'Replication dan high availability setup',
        'Performance monitoring dan tuning'
      ],
      benefits: [
        'Query response time 10x lebih cepat',
        'Zero data loss dengan backup strategy yang solid',
        'Skalabilitas horizontal dan vertikal',
        'Biaya infrastruktur lebih efisien',
        'Compliance dengan regulasi data privacy'
      ],
      technologies: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Elasticsearch', 'Amazon RDS']
    },
    {
      number: '05',
      icon: 'fa-project-diagram',
      title: 'Analisis Sistem',
      description: 'Analisis bisnis komprehensif, studi kelayakan teknis, dan perencanaan arsitektur sistem strategis.',
      fullDescription: 'Sebelum membangun, kita harus memahami. Tim analis kami melakukan kajian mendalam terhadap proses bisnis, kebutuhan teknis, dan ekspektasi stakeholder untuk merancang solusi yang tepat sasaran dan memberikan ROI maksimal.',
      features: [
        'Business process analysis dan mapping',
        'Requirements gathering dan dokumentasi',
        'Gap analysis dan solusi rekomendasi',
        'Feasibility study (teknis, ekonomis, operasional)',
        'System architecture design',
        'Risk assessment dan mitigation planning',
        'Stakeholder interviews dan workshops',
        'Data flow diagram dan use case modeling'
      ],
      benefits: [
        'Menghindari costly mistakes di tahap development',
        'Alignment antara teknologi dan business goals',
        'Dokumentasi lengkap untuk development team',
        'Clear roadmap dan timeline yang realistis',
        'ROI yang terukur dan predictable'
      ],
      technologies: ['UML', 'BPMN', 'Lucidchart', 'Miro', 'Confluence', 'Jira']
    },
    {
      number: '06',
      icon: 'fa-laptop-code',
      title: 'Pengembangan Perangkat Lunak',
      description: 'Solusi perangkat lunak kustom yang disesuaikan dengan proses bisnis dan kebutuhan operasional unik Anda.',
      fullDescription: 'Software adalah enabler untuk transformasi bisnis. Kami mengembangkan solusi perangkat lunak custom yang perfectly fit dengan workflow, kultur, dan visi perusahaan Anda. Dari konsep hingga deployment, kami adalah partner Anda dalam digitalisasi.',
      features: [
        'Custom software development dari scratch',
        'Legacy system modernization',
        'Software integration dan automation',
        'Agile development dengan sprint planning',
        'Code review dan quality assurance',
        'Continuous Integration/Continuous Deployment (CI/CD)',
        'Technical documentation dan training',
        'Post-launch support dan maintenance'
      ],
      benefits: [
        'Solusi yang 100% sesuai kebutuhan bisnis',
        'Competitive advantage dengan fitur unik',
        'Automasi proses manual untuk efisiensi',
        'Ownership penuh atas source code',
        'Flexibilitas untuk scaling dan customization'
      ],
      technologies: ['Python', 'Java', 'C#', '.NET', 'Go', 'Rust', 'Docker', 'Kubernetes']
    },
    {
      number: '07',
      icon: 'fa-network-wired',
      title: 'Pengembangan Sistem Informasi',
      description: 'Enterprise resource planning, sistem business intelligence, dan platform informasi terintegrasi.',
      fullDescription: 'Sistem informasi yang terintegrasi adalah kunci untuk decision-making yang cepat dan akurat. Kami membangun ekosistem digital yang menghubungkan berbagai aspek bisnis Anda dalam satu platform yang cohesive dan intelligent.',
      features: [
        'Enterprise Resource Planning (ERP) systems',
        'Customer Relationship Management (CRM)',
        'Human Resource Information System (HRIS)',
        'Supply Chain Management (SCM)',
        'Business Intelligence dan analytics dashboard',
        'Document management system',
        'Workflow automation dan approval system',
        'Reporting dan data visualization'
      ],
      benefits: [
        'Real-time visibility ke semua aspek bisnis',
        'Data-driven decision making',
        'Eliminasi data silos dan duplikasi',
        'Produktivitas meningkat hingga 40%',
        'Compliance dan audit trail yang lengkap'
      ],
      technologies: ['SAP', 'Odoo', 'Salesforce', 'Power BI', 'Tableau', 'Apache Kafka']
    },
    {
      number: '08',
      icon: 'fa-plug',
      title: 'Integrasi API',
      description: 'Integrasi pihak ketiga yang mulus, RESTful dan GraphQL APIs, serta arsitektur microservices.',
      fullDescription: 'Di era digital, tidak ada sistem yang berdiri sendiri. Kami menghubungkan aplikasi Anda dengan ekosistem digital yang lebih luas melalui API integration yang reliable dan secure. Dari payment gateway hingga cloud services, kami buat semuanya terhubung dengan mulus.',
      features: [
        'RESTful API development dan documentation',
        'GraphQL API untuk query yang flexible',
        'Third-party API integration (payment, shipping, social media)',
        'Microservices architecture',
        'API gateway dan load balancing',
        'OAuth 2.0 dan JWT authentication',
        'API rate limiting dan throttling',
        'Webhook implementation'
      ],
      benefits: [
        'Ekstensibilitas sistem tanpa batas',
        'Integrasi dengan tools favorit Anda',
        'Faster time-to-market dengan reusable APIs',
        'Decoupled architecture untuk flexibility',
        'Secure data exchange antar sistem'
      ],
      technologies: ['REST', 'GraphQL', 'gRPC', 'Kong', 'Apigee', 'Postman', 'Swagger']
    },
    {
      number: '09',
      icon: 'fa-lightbulb',
      title: 'Konsultasi IT',
      description: 'Konsultasi teknologi strategis, roadmap transformasi digital, dan uji tuntas teknis.',
      fullDescription: 'Teknologi bergerak cepat, dan keputusan yang salah bisa sangat mahal. Tim konsultan kami yang berpengalaman siap membantu Anda membuat keputusan teknologi yang tepat, merencanakan roadmap digital, dan mengeksekusi transformasi dengan sukses.',
      features: [
        'Technology stack evaluation dan rekomendasi',
        'Digital transformation roadmap',
        'IT infrastructure assessment',
        'Cloud migration strategy',
        'Security audit dan penetration testing',
        'Technical due diligence untuk M&A',
        'Tech team building dan hiring strategy',
        'DevOps dan automation consulting'
      ],
      benefits: [
        'Menghindari investasi teknologi yang salah',
        'Clear direction untuk digital transformation',
        'Expert guidance dari praktisi berpengalaman',
        'Risk mitigation untuk project besar',
        'Accelerated innovation dengan best practices'
      ],
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Terraform', 'Ansible', 'Jenkins']
    }
  ];

  return (
    <>
      <section className="py-16 md:py-32 bg-gray-50 border-t border-b border-gray-200" id="layanan">
        <div className="w-full max-w-[1280px] mx-auto px-5 md:px-10">
          <div className="text-center max-w-[640px] mx-auto mb-12 md:mb-16">
            <div className="flex items-center gap-2 justify-center text-xs uppercase tracking-[2px] text-red-600 font-bold mb-4">
              <span className="w-5 h-0.5 bg-red-600"></span>
              Layanan Kami
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight mb-5 text-black">
              Solusi Teknologi Komprehensif
            </h2>
            <p className="text-base md:text-[17px] leading-relaxed text-gray-600">
              Layanan end-to-end dari konsultasi hingga deployment, memastikan bisnis Anda tetap unggul dalam lanskap digital.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white border border-gray-200 p-8 md:p-12 md:px-9 transition-all duration-300 relative overflow-hidden group hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] hover:-translate-y-1 hover:z-[2] before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-[3px] before:bg-red-600 before:scale-x-0 before:origin-left before:transition-transform before:duration-300 hover:before:scale-x-100 cursor-pointer"
                onClick={() => setSelectedService(service)}
              >
                <span className="text-[64px] font-black text-gray-100 absolute top-5 right-6 tracking-tight leading-none">
                  {service.number}
                </span>
                
                <div className="w-14 h-14 bg-black flex items-center justify-center text-white text-[22px] mb-7 transition-colors duration-300 group-hover:bg-red-600">
                  <i className={`fas ${service.icon}`}></i>
                </div>
                
                <h3 className="text-xl font-bold mb-3 tracking-tight">{service.title}</h3>
                <p className="text-sm leading-relaxed text-gray-600 mb-6">{service.description}</p>
                
                <button className="text-[13px] font-semibold text-red-600 inline-flex items-center gap-2 transition-[gap] duration-200 group-hover:gap-3 bg-transparent border-none cursor-pointer p-0">
                  Pelajari Lebih Lanjut <i className="fas fa-arrow-right"></i>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal Pop-up */}
      {selectedService && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9999] flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setSelectedService(null)}
        >
          <div 
            className="bg-white max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-none relative animate-slideUp shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="sticky top-0 bg-black text-white p-8 md:p-10 z-10">
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-all duration-200 text-2xl border-none bg-transparent cursor-pointer"
                aria-label="Close"
              >
                <i className="fas fa-times"></i>
              </button>
              
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-red-600 flex items-center justify-center text-white text-3xl md:text-4xl flex-shrink-0">
                  <i className={`fas ${selectedService.icon}`}></i>
                </div>
                <div className="flex-1">
                  <div className="text-red-500 text-sm font-bold uppercase tracking-[2px] mb-2">
                    Layanan {selectedService.number}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">
                    {selectedService.title}
                  </h3>
                  <p className="text-gray-300 text-sm md:text-base">
                    {selectedService.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 md:p-10 space-y-8">
              {/* Full Description */}
              <div>
                <h4 className="text-xl font-bold mb-4 text-black">Tentang Layanan Ini</h4>
                <p className="text-gray-700 leading-relaxed text-base">
                  {selectedService.fullDescription}
                </p>
              </div>

              {/* Features */}
              <div>
                <h4 className="text-xl font-bold mb-4 text-black flex items-center gap-2">
                  <i className="fas fa-check-circle text-red-600"></i>
                  Fitur Unggulan
                </h4>
                <div className="grid md:grid-cols-2 gap-3">
                  {selectedService.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3 group">
                      <i className="fas fa-chevron-right text-red-600 text-xs mt-1.5 group-hover:translate-x-1 transition-transform"></i>
                      <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div className="bg-gray-50 p-6 md:p-8 border-l-4 border-red-600">
                <h4 className="text-xl font-bold mb-4 text-black flex items-center gap-2">
                  <i className="fas fa-star text-red-600"></i>
                  Manfaat untuk Bisnis Anda
                </h4>
                <ul className="space-y-3">
                  {selectedService.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <i className="fas fa-check text-white text-xs"></i>
                      </div>
                      <span className="text-gray-700 text-sm leading-relaxed">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="text-xl font-bold mb-4 text-black flex items-center gap-2">
                  <i className="fas fa-cogs text-red-600"></i>
                  Teknologi yang Kami Gunakan
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedService.technologies.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="px-4 py-2 bg-black text-white text-sm font-semibold hover:bg-red-600 transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="border-t border-gray-200 pt-8 flex flex-col sm:flex-row gap-4">
                <a 
                  href="#kontak"
                  className="flex-1 bg-red-600 text-white py-4 px-8 font-bold text-center hover:bg-black transition-colors duration-200 no-underline"
                  onClick={() => setSelectedService(null)}
                >
                  <i className="fas fa-paper-plane mr-2"></i>
                  Mulai Konsultasi Gratis
                </a>
                <a 
                  href="#portfolio"
                  className="flex-1 bg-black text-white py-4 px-8 font-bold text-center hover:bg-red-600 transition-colors duration-200 no-underline"
                  onClick={() => setSelectedService(null)}
                >
                  <i className="fas fa-folder-open mr-2"></i>
                  Lihat Portfolio
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Add animations to global CSS */}
      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }

        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
      `}</style>
    </>
  );
}
