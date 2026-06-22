'use client';

import { FormEvent, useState } from 'react';
import ScrollReveal from '../Animations/ScrollReveal';

export default function Contact() {
  const [formStatus, setFormStatus] = useState<string>('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('Terima kasih! Pesan Anda telah terkirim. Tim kami akan menghubungi Anda dalam 24 jam.');
    setTimeout(() => setFormStatus(''), 5000);
  };

  return (
    <ScrollReveal className="py-16 md:py-32 bg-gray-50 border-t border-gray-200" id="kontak" direction="none">
      <div className="w-full max-w-[1280px] mx-auto px-5 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
          {/* Contact Info */}
          <div>
            <ScrollReveal direction="left" delay={0.1} className="mb-8">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[2px] text-red-600 font-bold mb-4">
                <span className="w-5 h-0.5 bg-red-600"></span>
                Hubungi Kami
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight mb-5 text-black">
                Mari Diskusikan Proyek Anda
              </h2>
              <p className="text-base md:text-[17px] leading-relaxed text-gray-600">
                Kami siap membantu Anda mengubah ide menjadi solusi teknologi yang berdampak. Hubungi kami untuk konsultasi gratis.
              </p>
            </ScrollReveal>

            <div className="flex flex-col gap-6 mt-8">
              <ScrollReveal direction="left" delay={0.2} className="flex gap-5 items-start p-6 bg-white border border-gray-200 transition-all duration-300 hover:border-red-600 hover:shadow-lg hover:-translate-y-1 group">
                <div className="w-12 h-12 min-w-[48px] bg-black flex items-center justify-center text-white text-lg transition-colors duration-300 group-hover:bg-red-600 rounded-lg">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div>
                  <h4 className="text-[15px] font-bold mb-1.5 tracking-[-0.2px] group-hover:text-red-600 transition-colors">Kantor Pusat</h4>
                  <p className="text-sm text-gray-600 leading-[1.6]">
                    Jl. Sudirman No. 123, Lantai 15<br />Distrik Bisnis, Jakarta Pusat
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="left" delay={0.3} className="flex gap-5 items-start p-6 bg-white border border-gray-200 transition-all duration-300 hover:border-red-600 hover:shadow-lg hover:-translate-y-1 group">
                <div className="w-12 h-12 min-w-[48px] bg-black flex items-center justify-center text-white text-lg transition-colors duration-300 group-hover:bg-red-600 rounded-lg">
                  <i className="fas fa-phone"></i>
                </div>
                <div>
                  <h4 className="text-[15px] font-bold mb-1.5 tracking-[-0.2px] group-hover:text-red-600 transition-colors">Telepon</h4>
                  <p className="text-sm text-gray-600 leading-[1.6]">
                    +62 21 1234 5678<br />+62 812 3456 7890 (WhatsApps)
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="left" delay={0.4} className="flex gap-5 items-start p-6 bg-white border border-gray-200 transition-all duration-300 hover:border-red-600 hover:shadow-lg hover:-translate-y-1 group">
                <div className="w-12 h-12 min-w-[48px] bg-black flex items-center justify-center text-white text-lg transition-colors duration-300 group-hover:bg-red-600 rounded-lg">
                  <i className="fas fa-envelope"></i>
                </div>
                <div>
                  <h4 className="text-[15px] font-bold mb-1.5 tracking-[-0.2px] group-hover:text-red-600 transition-colors">Email</h4>
                  <p className="text-sm text-gray-600 leading-[1.6]">
                    hello@quadratech.com<br />me@quadratech.com
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="left" delay={0.5} className="flex gap-5 items-start p-6 bg-white border border-gray-200 transition-all duration-300 hover:border-red-600 hover:shadow-lg hover:-translate-y-1 group">
                <div className="w-12 h-12 min-w-[48px] bg-black flex items-center justify-center text-white text-lg transition-colors duration-300 group-hover:bg-red-600 rounded-lg">
                  <i className="fas fa-clock"></i>
                </div>
                <div>
                  <h4 className="text-[15px] font-bold mb-1.5 tracking-[-0.2px] group-hover:text-red-600 transition-colors">Jam Operasional</h4>
                  <p className="text-sm text-gray-600 leading-[1.6]">
                    Senin - Jumat: 09:00 - 18:00<br />Sabtu: 09:00 - 13:00
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>

          {/* Contact Form */}
          <ScrollReveal direction="right" delay={0.3}>
            <div className="bg-white border border-gray-200 p-10 md:p-12 shadow-xl rounded-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-600 to-red-400"></div>
              <h3 className="text-2xl font-bold tracking-[-0.5px] mb-2 mt-2">Kirim Pesan</h3>
              <p className="text-sm text-gray-500 mb-8">
                Isi formulir di bawah ini dan tim kami akan menghubungi Anda dalam 24 jam.
              </p>

              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-[13px] font-semibold text-gray-700 mb-2 tracking-[-0.2px]">
                      Nama Lengkap *
                    </label>
                    <input 
                      type="text" 
                      placeholder="Masukkan nama Anda"
                      required
                      className="w-full p-3.5 px-4 text-sm border border-gray-200 bg-gray-50 text-black outline-none transition-all duration-300 focus:border-red-600 focus:bg-white focus:shadow-[0_0_0_4px_rgba(220,38,38,0.1)] rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-[13px] font-semibold text-gray-700 mb-2 tracking-[-0.2px]">
                      Email *
                    </label>
                    <input 
                      type="email" 
                      placeholder="email@perusahaan.com"
                      required
                      className="w-full p-3.5 px-4 text-sm border border-gray-200 bg-gray-50 text-black outline-none transition-all duration-300 focus:border-red-600 focus:bg-white focus:shadow-[0_0_0_4px_rgba(220,38,38,0.1)] rounded-lg"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-[13px] font-semibold text-gray-700 mb-2 tracking-[-0.2px]">
                      Telepon *
                    </label>
                    <input 
                      type="tel" 
                      placeholder="+62 812 3456 7890"
                      required
                      className="w-full p-3.5 px-4 text-sm border border-gray-200 bg-gray-50 text-black outline-none transition-all duration-300 focus:border-red-600 focus:bg-white focus:shadow-[0_0_0_4px_rgba(220,38,38,0.1)] rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-[13px] font-semibold text-gray-700 mb-2 tracking-[-0.2px]">
                      Perusahaan
                    </label>
                    <input 
                      type="text" 
                      placeholder="Nama perusahaan"
                      className="w-full p-3.5 px-4 text-sm border border-gray-200 bg-gray-50 text-black outline-none transition-all duration-300 focus:border-red-600 focus:bg-white focus:shadow-[0_0_0_4px_rgba(220,38,38,0.1)] rounded-lg"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-[13px] font-semibold text-gray-700 mb-2 tracking-[-0.2px]">
                    Layanan yang Diminati *
                  </label>
                  <select 
                    required
                    className="w-full p-3.5 px-4 text-sm border border-gray-200 bg-gray-50 text-black outline-none transition-all duration-300 focus:border-red-600 focus:bg-white focus:shadow-[0_0_0_4px_rgba(220,38,38,0.1)] rounded-lg cursor-pointer"
                  >
                    <option value="">Pilih layanan</option>
                    <option value="web">Pengembangan Web</option>
                    <option value="mobile">Aplikasi Mobile</option>
                    <option value="uiux">Desain UI/UX</option>
                    <option value="database">Desain Database</option>
                    <option value="software">Pengembangan Software</option>
                    <option value="consulting">Konsultasi IT</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label className="block text-[13px] font-semibold text-gray-700 mb-2 tracking-[-0.2px]">
                    Pesan *
                  </label>
                  <textarea 
                    placeholder="Ceritakan tentang proyek Anda..."
                    required
                    className="w-full p-3.5 px-4 text-sm border border-gray-200 bg-gray-50 text-black outline-none transition-all duration-300 focus:border-red-600 focus:bg-white focus:shadow-[0_0_0_4px_rgba(220,38,38,0.1)] rounded-lg h-[120px] resize-y"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-red-600 text-white p-4 text-[15px] font-bold border-none cursor-pointer transition-all duration-300 tracking-[-0.2px] hover:bg-red-700 hover:shadow-[0_10px_20px_rgba(220,38,38,0.3)] hover:-translate-y-1 rounded-lg flex justify-center items-center gap-2"
                >
                  Kirim Pesan <i className="fas fa-paper-plane"></i>
                </button>

                {formStatus && (
                  <div className="mt-4 p-4 bg-green-50 border border-green-200 text-green-700 text-sm rounded-lg flex items-start gap-3">
                    <i className="fas fa-check-circle mt-0.5"></i>
                    <p>{formStatus}</p>
                  </div>
                )}
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </ScrollReveal>
  );
}
