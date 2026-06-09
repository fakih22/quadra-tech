export default function Clients() {
  return (
    <section className="py-12 md:py-15 border-t border-b border-gray-200 bg-gray-50">
      <div className="w-full max-w-[1280px] mx-auto px-5 md:px-10">
        <p className="text-center text-xs uppercase tracking-[2px] text-gray-500 font-semibold mb-8">
          Dipercaya oleh perusahaan terkemuka di Indonesia
        </p>
        <div className="flex justify-center items-center gap-8 md:gap-16 flex-wrap">
          <div className="text-xl font-extrabold text-gray-300 tracking-tight transition-colors duration-300 hover:text-gray-500">
            <i className="fab fa-google text-[32px]"></i>
          </div>
          <div className="text-xl font-extrabold text-gray-300 tracking-tight transition-colors duration-300 hover:text-gray-500">
            <i className="fab fa-microsoft text-[32px]"></i>
          </div>
          <div className="text-xl font-extrabold text-gray-300 tracking-tight transition-colors duration-300 hover:text-gray-500">
            <i className="fab fa-aws text-[32px]"></i>
          </div>
          <div className="text-xl font-extrabold text-gray-300 tracking-tight transition-colors duration-300 hover:text-gray-500">
            <i className="fab fa-slack text-[32px]"></i>
          </div>
          <div className="text-xl font-extrabold text-gray-300 tracking-tight transition-colors duration-300 hover:text-gray-500">
            <i className="fab fa-shopify text-[32px]"></i>
          </div>
          <div className="text-xl font-extrabold text-gray-300 tracking-tight transition-colors duration-300 hover:text-gray-500">
            <i className="fab fa-stripe text-[32px]"></i>
          </div>
        </div>
      </div>
    </section>
  );
}
