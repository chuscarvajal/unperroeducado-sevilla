export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1920&h=1080&fit=crop&crop=right"
          alt=""
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(45,26,14,0.92) 0%, rgba(45,26,14,0.7) 55%, rgba(45,26,14,0.15) 100%)" }} />
      </div>

      <div className="relative wrap py-32 lg:py-0 lg:min-h-screen flex items-center">
        <div className="max-w-xl">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6">
            <span className="text-yellow-400 text-sm">★★★★★</span>
            <span className="text-white/90 text-xs font-bold">4.6 en Google · 14 reseñas</span>
          </div>

          <h1 className="text-white font-black leading-[1.05] mb-6" style={{ fontSize: "clamp(40px, 6vw, 80px)", fontFamily: "'Playfair Display', serif" }}>
            Adiestradora<br />canina en <em className="text-[#D4522A] not-italic">Sevilla</em>
          </h1>

          <p className="text-white/75 text-lg leading-[1.8] mb-10 max-w-md">
            Antonio, educador canino en Sevilla. Sesiones individuales, rehabilitación conductual y cachorros con metodología positiva. Sin castigos, con resultados reales.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="https://wa.me/34633689653?text=Hola%20Antonio%2C%20quiero%20informaci%C3%B3n%20sobre%20el%20adiestramiento."
              target="_blank" rel="noopener noreferrer"
              className="btn-wa">
              <svg viewBox="0 0 448 512" className="w-4 h-4 fill-white shrink-0"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157z"/></svg>
              Escribir a Antonio
            </a>
            <a href="tel:+34633689653"
              className="inline-flex items-center gap-2 font-bold text-sm text-white border border-white/40 px-8 py-4 rounded-full hover:bg-white/10 transition-all duration-200">
              📞 633 68 96 53
            </a>
          </div>

          <div className="flex flex-wrap gap-4 mt-10">
            {[
              { v: "4.6 ★", l: "Google" },
              { v: "14", l: "Reseñas" },
              { v: "Sevilla", l: "España" },
            ].map(b => (
              <div key={b.l} className="text-center">
                <p className="text-white font-black text-xl leading-none">{b.v}</p>
                <p className="text-white/50 text-xs uppercase tracking-widest mt-0.5">{b.l}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
