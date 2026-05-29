export default function About() {
  return (
    <section id="nosotros" className="py-20 lg:py-28 bg-white">
      <div className="wrap">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Imagen */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?w=700&h=560&fit=crop&crop=center"
              alt="Antonio — educador canino en Sevilla"
              className="w-full h-[420px] lg:h-[500px] object-cover rounded-3xl shadow-xl"
            />
            {/* Badge */}
            <div className="absolute bottom-6 left-6 bg-white rounded-2xl px-5 py-3 shadow-lg flex items-center gap-3">
              <span className="text-2xl">⭐</span>
              <div>
                <p className="font-black text-[#1a1a1a] text-sm leading-tight">4.6 ★ en Google</p>
                <p className="text-[#888] text-xs">14 reseñas verificadas</p>
              </div>
            </div>
          </div>

          {/* Texto */}
          <div>
            <span className="text-[#3CB371] text-xs font-bold uppercase tracking-[0.22em] mb-3 block">
              Quién soy
            </span>
            <h2 className="font-black text-[#1a1a1a] text-3xl lg:text-[38px] leading-tight mb-6">
              Antonio, educador canino en <span className="text-[#3CB371]">Sevilla</span>
            </h2>
            <p className="text-[#666] text-[15px] leading-[1.85] mb-5">
              Soy Antonio, educador canino en Sevilla. Trabajo con perros de todas las razas y edades desde la comprensión del animal y el refuerzo positivo. No existen perros "difíciles" — existen perros que necesitan la metodología correcta y dueños que quieren aprender.
            </p>
            <p className="text-[#666] text-[15px] leading-[1.85] mb-8">
              Mi trabajo no termina con el perro: enseño a los dueños cómo mantener lo aprendido en casa. El cambio real llega cuando toda la familia entiende al perro y sabe cómo comunicarse con él.
            </p>

            <ul className="space-y-4">
              {[
                { icon: "✅", text: "Metodología positiva — sin castigos ni correcciones" },
                { icon: "✅", text: "Sesiones individuales adaptadas a cada perro y situación" },
                { icon: "✅", text: "Formación para los dueños incluida en cada sesión" },
              ].map(({ icon, text }) => (
                <li key={text} className="flex items-start gap-3 text-[15px] text-[#444]">
                  <span className="text-[#3CB371] font-bold shrink-0">{icon}</span>
                  {text}
                </li>
              ))}
            </ul>

            <a href="https://wa.me/34633689653?text=Hola%20Antonio%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20adiestramiento."
              className="inline-flex items-center gap-2 mt-8 bg-[#3CB371] text-white font-bold text-sm px-8 py-4 rounded-xl hover:bg-[#2E8B57] active:scale-95 transition-all duration-200 shadow-lg"
              target="_blank" rel="noopener noreferrer">
              Hablar con Antonio →
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
