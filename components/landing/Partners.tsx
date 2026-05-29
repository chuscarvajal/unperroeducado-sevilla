export default function Partners() {
  return (
    <section className="py-16 bg-[#f9fffe]">
      <div className="wrap">
        <div className="text-center mb-12">
          <span className="text-[#3CB371] text-xs font-bold uppercase tracking-[0.22em] mb-2 block">
            Colaboradores
          </span>
          <h2 className="font-black text-[#1a1a1a] text-3xl lg:text-[38px]">
            Nuestros socios
          </h2>
          <p className="text-[#666] text-[15px] mt-3">Colaboramos con las mejores marcas del sector</p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {Array.from({ length: 6 }, (_, i) => (
            <div key={i}
              className="w-[150px] h-[64px] bg-white border border-[#e8f5ee] rounded-xl flex items-center justify-center shadow-sm hover:shadow-md transition-shadow duration-200">
              <span className="text-[#3CB371]/40 text-xs font-bold uppercase tracking-widest">Logo {i + 1}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
