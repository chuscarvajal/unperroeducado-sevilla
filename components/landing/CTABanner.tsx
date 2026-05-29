export default function CTABanner() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1920&h=700&fit=crop" alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "rgba(45,26,14,0.85)" }} />
      </div>
      <div className="relative wrap text-center">
        <h2 className="text-white font-black leading-tight mb-5 max-w-3xl mx-auto" style={{ fontSize: "clamp(28px, 4.5vw, 52px)", fontFamily: "'Playfair Display', serif" }}>
          Me esfuerzo por ayudar a tu perro como ningún otro.
        </h2>
        <p className="text-white/75 text-lg leading-[1.8] mb-10 max-w-xl mx-auto">
          Educación canina profesional, paciencia y dedicación para que tu perro y tú tengáis la vida que os merecéis.
        </p>
        <a href="https://wa.me/34633689653?text=Hola%20Antonio%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20adiestramiento."
          target="_blank" rel="noopener noreferrer"
          className="btn-wa inline-flex">
          <svg viewBox="0 0 448 512" className="w-5 h-5 fill-white shrink-0"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157z"/></svg>
          Hablar con Antonio
        </a>
      </div>
    </section>
  );
}
