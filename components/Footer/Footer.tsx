import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-16 md:pt-20">
      <div className="w-full max-w-[1280px] mx-auto px-5 md:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-gray-800">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="#" className="flex items-center gap-2 text-[22px] font-extrabold tracking-[-0.5px] text-white no-underline mb-4">
              <div className="w-8 h-8 bg-red-600 flex items-center justify-center text-white font-black text-base">
                Q
              </div>
              Quadratech
            </Link>
            <p className="text-sm text-gray-500 leading-[1.7] mt-4 max-w-[300px]">
              Partner transformasi digital terpercaya di Indonesia. Kami menghadirkan solusi teknologi yang skalabel, aman, dan inovatif untuk era digital.
            </p>
            <div className="flex gap-0 mt-6">
              <a href="#" className="w-10 h-10 flex items-center justify-center text-gray-500 border border-gray-800 text-base transition-all duration-200 hover:bg-red-600 hover:border-red-600 hover:text-white no-underline">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center text-gray-500 border border-gray-800 text-base transition-all duration-200 hover:bg-red-600 hover:border-red-600 hover:text-white no-underline">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center text-gray-500 border border-gray-800 text-base transition-all duration-200 hover:bg-red-600 hover:border-red-600 hover:text-white no-underline">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center text-gray-500 border border-gray-800 text-base transition-all duration-200 hover:bg-red-600 hover:border-red-600 hover:text-white no-underline">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>

          {/* Perusahaan */}
          <div>
            <h4 className="text-[13px] font-bold uppercase tracking-[1px] mb-5 text-white">Perusahaan</h4>
            <ul className="list-none space-y-3">
              <li><a href="#tentang" className="text-sm text-gray-500 transition-colors duration-200 hover:text-red-600 no-underline">Tentang Kami</a></li>
              <li><a href="#tim" className="text-sm text-gray-500 transition-colors duration-200 hover:text-red-600 no-underline">Tim</a></li>
              <li><a href="#" className="text-sm text-gray-500 transition-colors duration-200 hover:text-red-600 no-underline">Karir</a></li>
              <li><a href="#" className="text-sm text-gray-500 transition-colors duration-200 hover:text-red-600 no-underline">Blog</a></li>
              <li><a href="#kontak" className="text-sm text-gray-500 transition-colors duration-200 hover:text-red-600 no-underline">Kontak</a></li>
            </ul>
          </div>

          {/* Layanan */}
          <div>
            <h4 className="text-[13px] font-bold uppercase tracking-[1px] mb-5 text-white">Layanan</h4>
            <ul className="list-none space-y-3">
              <li><a href="#layanan" className="text-sm text-gray-500 transition-colors duration-200 hover:text-red-600 no-underline">Pengembangan Web</a></li>
              <li><a href="#layanan" className="text-sm text-gray-500 transition-colors duration-200 hover:text-red-600 no-underline">Aplikasi Mobile</a></li>
              <li><a href="#layanan" className="text-sm text-gray-500 transition-colors duration-200 hover:text-red-600 no-underline">Desain UI/UX</a></li>
              <li><a href="#layanan" className="text-sm text-gray-500 transition-colors duration-200 hover:text-red-600 no-underline">Desain Database</a></li>
              <li><a href="#layanan" className="text-sm text-gray-500 transition-colors duration-200 hover:text-red-600 no-underline">Konsultasi IT</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-[13px] font-bold uppercase tracking-[1px] mb-5 text-white">Legal</h4>
            <ul className="list-none space-y-3">
              <li><a href="#" className="text-sm text-gray-500 transition-colors duration-200 hover:text-red-600 no-underline">Privacy Policy</a></li>
              <li><a href="#" className="text-sm text-gray-500 transition-colors duration-200 hover:text-red-600 no-underline">Terms of Service</a></li>
              <li><a href="#" className="text-sm text-gray-500 transition-colors duration-200 hover:text-red-600 no-underline">Cookie Policy</a></li>
              <li><a href="#" className="text-sm text-gray-500 transition-colors duration-200 hover:text-red-600 no-underline">Disclaimer</a></li>
            </ul>
          </div>
        </div>

        <div className="py-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-[13px] text-gray-500">
            © 2026 Quadratech. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-[13px] text-gray-500 transition-colors duration-200 hover:text-red-600 no-underline">Privacy</a>
            <a href="#" className="text-[13px] text-gray-500 transition-colors duration-200 hover:text-red-600 no-underline">Terms</a>
            <a href="#" className="text-[13px] text-gray-500 transition-colors duration-200 hover:text-red-600 no-underline">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
