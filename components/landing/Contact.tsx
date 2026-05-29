export default function Contact() {
  const rows = [
    { label: "Teléfono", value: "633 68 96 53", href: "tel:+34633689653" },
    { label: "Ubicación", value: "Sevilla", href: null },
    { label: "Método", value: "Adiestramiento positivo", href: null },
  ];

  return (
    <section id="contacto" className="py-20 lg:py-28" style={{ background: "#8B3A1E" }}>
      <div className="wrap">
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.18em] px-4 py-1.5 rounded-full mb-4"
            style={{ background: "rgba(255,255,255,0.12)", color: "#FFD4A8" }}>
            Contacto
          </span>
          <h2 className="leading-tight text-white" style={{ fontSize: "clamp(28px, 4.5vw, 50px)" }}>
            ¿Empezamos <em className="not-italic" style={{ color: "#FFD4A8" }}>hoy</em>?
          </h2>
          <p className="text-white/70 mt-4 max-w-md mx-auto">
            Cuéntale a Antonio qué le pasa a tu perro. Sin compromiso, sin formularios.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-9 items-start max-w-5xl mx-auto">
          <div>
            <a href="https://wa.me/34633689653?text=Hola%20Antonio%2C%20quiero%20informaci%C3%B3n%20sobre%20adiestramiento%20canino%20en%20Sevilla."
              target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full font-bold text-white rounded-xl transition-all duration-200 active:scale-95"
              style={{ background: "#25D366", padding: "18px 28px", fontSize: "16px", boxShadow: "0 4px 16px rgba(37,211,102,0.35)" }}>
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white shrink-0"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.122.554 4.112 1.523 5.836L.057 23.882l6.21-1.63A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.896 0-3.67-.502-5.207-1.382l-.374-.22-3.684.967.985-3.596-.243-.38A9.961 9.961 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
              WhatsApp a Antonio
            </a>

            <div className="mt-7 space-y-5">
              {rows.map(({ label, value, href }) => (
                <div key={label} className="flex flex-col gap-1 pb-4 border-b border-white/10">
                  <strong className="text-[11.5px] font-bold uppercase tracking-[0.1em] text-white/50">{label}</strong>
                  {href
                    ? <a href={href} className="text-white/85 font-bold hover:text-white transition-colors">{value}</a>
                    : <span className="text-white/85 font-bold">{value}</span>}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden">
            <iframe src="https://maps.google.com/maps?cid=14576230397960760926&output=embed"
              width="100%" height="360" style={{ border: 0, borderRadius: 14, display: "block" }}
              allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              title="Un Perro Educado en Google Maps" />
          </div>
        </div>
      </div>
    </section>
  );
}
