import ScrollReveal from '../Animations/ScrollReveal';

export default function Clients() {
  return (
    <ScrollReveal className="py-12 md:py-15 border-t border-b border-gray-200 bg-gray-50 overflow-hidden" direction="none">
      <div className="w-full max-w-[1280px] mx-auto px-5 md:px-10 relative z-10">
        <ScrollReveal direction="up" delay={0.1} className="text-center text-xs uppercase tracking-[2px] text-gray-500 font-semibold mb-8">
          Dipercaya oleh perusahaan terkemuka di Indonesia
        </ScrollReveal>
        <div className="flex justify-center items-center gap-8 md:gap-16 flex-wrap">
          <ScrollReveal direction="up" delay={0.2} className="text-xl font-extrabold text-gray-300 tracking-tight transition-all duration-300 hover:text-red-600 hover:scale-125 hover:-translate-y-2 cursor-pointer">
            <i className="fab fa-google text-[32px]"></i>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.3} className="text-xl font-extrabold text-gray-300 tracking-tight transition-all duration-300 hover:text-blue-600 hover:scale-125 hover:-translate-y-2 cursor-pointer">
            <i className="fab fa-microsoft text-[32px]"></i>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.4} className="text-xl font-extrabold text-gray-300 tracking-tight transition-all duration-300 hover:text-orange-500 hover:scale-125 hover:-translate-y-2 cursor-pointer">
            <i className="fab fa-aws text-[32px]"></i>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.5} className="text-xl font-extrabold text-gray-300 tracking-tight transition-all duration-300 hover:text-purple-600 hover:scale-125 hover:-translate-y-2 cursor-pointer">
            <i className="fab fa-slack text-[32px]"></i>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.6} className="text-xl font-extrabold text-gray-300 tracking-tight transition-all duration-300 hover:text-green-500 hover:scale-125 hover:-translate-y-2 cursor-pointer">
            <i className="fab fa-shopify text-[32px]"></i>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.7} className="text-xl font-extrabold text-gray-300 tracking-tight transition-all duration-300 hover:text-indigo-600 hover:scale-125 hover:-translate-y-2 cursor-pointer">
            <i className="fab fa-stripe text-[32px]"></i>
          </ScrollReveal>
        </div>
      </div>
    </ScrollReveal>
  );
}
