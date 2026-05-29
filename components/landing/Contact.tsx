export default function Contact() {
  return (
    <section id="contacto" className="bg-[#FFF9F4]">
      <div className="relative h-[280px] flex items-center justify-center overflow-hidden">
        <img src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=1920&h=600&fit=crop" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "rgba(45,26,14,0.7)" }} />
        <div className="relative text-center px-4">
          <h2 className="text-white font-black" style={{ fontSize: "clamp(28px, 4.5vw, 52px)", fontFamily: "'Playfair Display', serif" }}>Contáctanos</h2>
          <p className="text-white/75 text-lg mt-2">Estamos en Sevilla — escríbenos cuando quieras</p>
        </div>
      </div>

      <div className="wrap py-14">
        <div className="grid sm:grid-cols-3 gap-8 text-center mb-12">
          {[
            { icon: "📍", label: "Dirección", text: "C. Virgen de Escardiel, 41009 Sevilla" },
            { icon: "📞", label: "Teléfono / WhatsApp", text: "633 68 96 53" },
            { icon: "⭐", label: "Valoración", text: "4.6 ★ · 14 reseñas en Google" },
          ].map(({ icon, label, text }) => (
            <div key={label} className="flex flex-col items-center gap-3">
              <span className="w-12 h-12 rounded-full flex items-center justify-center text-2xl" style={{ background: "rgba(212,82,42,0.12)" }}>{icon}</span>
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#D4522A]">{label}</p>
              <p className="text-[#6B4C3A] text-[14px] leading-snug">{text}</p>
            </div>
          ))}
        </div>

        <div className="text-center mb-10">
          <a href="https://wa.me/34633689653?text=Hola%20Antonio%2C%20quiero%20informaci%C3%B3n%20sobre%20el%20adiestramiento."
            target="_blank" rel="noopener noreferrer"
            className="btn-wa inline-flex text-base px-12 py-5">
            <svg viewBox="0 0 448 512" className="w-5 h-5 fill-white shrink-0"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157z"/></svg>
            Escribir a Antonio — 633 68 96 53
          </a>
        </div>

        <div className="rounded-2xl overflow-hidden shadow-md" style={{ height: 380 }}>
          <iframe src="https://maps.google.com/maps?cid=14576230397960760926&output=embed"
            width="100%" height="380" style={{ border: 0, display: "block" }}
            allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
            title="Mapa Un Perro Educado Sevilla" />
        </div>
      </div>
    </section>
  );
}
