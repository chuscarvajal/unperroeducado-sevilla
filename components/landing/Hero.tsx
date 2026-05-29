export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-[88vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1920&h=900&fit=crop&crop=right"
          alt=""
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1b3d2a]/95 via-[#1b3d2a]/75 to-[#1b3d2a]/10" />
      </div>

      <div className="relative wrap py-28 lg:py-0 lg:min-h-[88vh] flex items-center justify-start">
        <div className="max-w-lg lg:max-w-xl text-left">
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6">
            <span className="text-yellow-400 text-sm">★★★★★</span>
            <span className="text-white text-xs font-bold">4.6 · 14 reseñas en Google</span>
          </div>
          <h1
            className="font-black text-white leading-[1.05] mb-6"
            style={{ fontSize: "clamp(36px, 5.5vw, 62px)" }}
          >
            Adiestrador canino en <span className="text-[#3CB371]">Sevilla</span>
          </h1>
          <p className="text-white/70 text-[16px] leading-[1.85] mb-10 max-w-md">
            Antonio, educador canino en Sevilla, trabaja con perros de todas las razas y edades desde la comprensión y el refuerzo positivo. Resultados reales sin castigos.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://wa.me/34633689653?text=Hola%2C%20quiero%20una%20valoraci%C3%B3n%20gratuita%20para%20mi%20perro."
              className="inline-flex items-center gap-2 bg-[#3CB371] text-white font-bold text-sm px-9 py-4 rounded-xl hover:bg-[#2E8B57] active:scale-95 transition-all duration-200 shadow-lg"
              target="_blank" rel="noopener noreferrer"
            >
              Valoración gratuita →
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center gap-2 bg-white/10 border border-white/30 text-white font-bold text-sm px-7 py-4 rounded-xl hover:bg-white/20 active:scale-95 transition-all duration-200"
            >
              Ver servicios
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
