export default function About() {
  return (
    <section id="nosotros" className="py-20 lg:py-28 bg-[#FFF9F4]">
      <div className="wrap">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Izquierda: texto */}
          <div className="lg:pt-4">
            <span className="section-tag">El educador</span>
            <h2 className="leading-tight mb-6" style={{ fontSize: "clamp(30px, 4vw, 48px)" }}>
              Hola, soy <em className="text-[#D4522A] not-italic">Antonio</em>
            </h2>
            <p className="text-[#6B4C3A] leading-[1.85] mb-5">
              Soy educador canino en Sevilla. Mi enfoque parte de entender cómo piensa y siente tu perro — desde ahí construimos una relación sólida, no solo comandos. Priorizo la conexión y la empatía porque creo que un perro que confía aprende mejor y más rápido.
            </p>
            <p className="text-[#6B4C3A] leading-[1.85] mb-8">
              Trabajo sin castigos ni herramientas coercitivas. Mi trabajo no termina con el perro: te enseño a ti también para que puedas continuar en casa. El cambio real viene cuando toda la familia entiende al animal.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {["🐾 Educación positiva", "⭐ 4.6 estrellas", "💛 Sin coerción"].map(t => (
                <span key={t} className="text-sm font-semibold text-[#8B3A1E] border border-[#F0D9CC] rounded-full px-4 py-1.5 bg-white">
                  {t}
                </span>
              ))}
            </div>

            <a href="https://wa.me/34633689653?text=Hola%20Antonio%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20adiestramiento."
              target="_blank" rel="noopener noreferrer"
              className="btn-wa">
              <svg viewBox="0 0 448 512" className="w-4 h-4 fill-white shrink-0"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157z"/></svg>
              Hablar con Antonio
            </a>
          </div>

          {/* Derecha: foto + reseña */}
          <div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?w=700&h=560&fit=crop"
                alt="Antonio — educador canino en Sevilla"
                className="w-full h-[400px] lg:h-[460px] object-cover"
              />
              <div className="absolute bottom-4 right-4 bg-[#D4522A] text-white text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full">
                Sevilla · ES
              </div>
            </div>

            <blockquote className="mt-6 border-l-4 border-[#D4522A] pl-5">
              <p className="text-[#6B4C3A] text-[16px] leading-[1.75] italic">
                "Sin duda, Antonio es un adiestrador que demuestra una habilidad única para atender las necesidades de nuestros perros. Tiene un trato maravilloso humano y 'perruno'."
              </p>
              <footer className="mt-3 text-xs text-[#B08060] font-bold uppercase tracking-wider">
                — Tamara C., reseña Google
              </footer>
            </blockquote>
          </div>

        </div>
      </div>
    </section>
  );
}
