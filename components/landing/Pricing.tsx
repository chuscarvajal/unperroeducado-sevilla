const planes = [
  {
    nombre: "Adiestramiento Básico",
    precio: "XX",
    periodo: "Por sesión",
    caracteristicas: [
      "Sesión de 60 minutos",
      "5€ por perro adicional",
      "Horario 9:00 a 19:00",
      "Primera sesión gratuita",
      "15 min de refuerzo",
    ],
    popular: false,
  },
  {
    nombre: "Curso Intensivo",
    precio: "XXX",
    periodo: "Por mes",
    caracteristicas: [
      "Acceso ilimitado al centro",
      "3 sesiones semanales",
      "Horario 9:00 a 19:00",
      "Aseo y baño incluido",
      "Sesiones de juego y adiestramiento",
    ],
    popular: true,
  },
  {
    nombre: "Clases a Domicilio",
    precio: "XX",
    periodo: "Por hora",
    caracteristicas: [
      "Desplazamiento a tu hogar",
      "Cargo mínimo XX€",
      "Entrenador certificado",
      "XX€ extra por km adicional",
      "30% dto. para 2+ perros",
    ],
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section className="py-20 bg-[#f0faf5]">
      <div className="wrap">
        <div className="text-center mb-14">
          <span className="text-[#3CB371] text-xs font-bold uppercase tracking-[0.22em] mb-2 block">
            Tarifas
          </span>
          <h2 className="font-black text-[#1a1a1a] text-3xl lg:text-[38px]">
            Precios y Planes
          </h2>
          <p className="text-[#666] text-[15px] mt-3">El mejor servicio a un precio razonable</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          {planes.map((p) => (
            <div key={p.nombre}
              className={`rounded-2xl p-8 border transition-transform duration-200 ${
                p.popular
                  ? "bg-[#3CB371] border-[#3CB371] shadow-2xl shadow-[#3CB371]/30 md:scale-105"
                  : "bg-white border-[#e8f5ee] shadow-sm"
              }`}>
              {p.popular && (
                <div className="text-white/80 text-xs font-bold uppercase tracking-widest mb-4">⭐ Popular</div>
              )}
              <h3 className={`font-black text-xl mb-1 ${p.popular ? "text-white" : "text-[#1a1a1a]"}`}>
                {p.nombre}
              </h3>
              <div className={`text-4xl font-black my-4 ${p.popular ? "text-white" : "text-[#3CB371]"}`}>
                {p.precio}€{" "}
                <span className={`text-sm font-normal ${p.popular ? "text-white/70" : "text-[#999]"}`}>
                  {p.periodo}
                </span>
              </div>
              <ul className="space-y-3 mb-8">
                {p.caracteristicas.map((c) => (
                  <li key={c} className={`flex items-center gap-2 text-sm ${p.popular ? "text-white/90" : "text-[#666]"}`}>
                    <span className={p.popular ? "text-white" : "text-[#3CB371]"}>✓</span> {c}
                  </li>
                ))}
              </ul>
              <a href="#contacto"
                className={`block text-center font-bold text-sm py-3 rounded-xl transition-all duration-200 ${
                  p.popular
                    ? "bg-white text-[#3CB371] hover:bg-gray-50"
                    : "bg-[#3CB371] text-white hover:bg-[#2E8B57]"
                }`}>
                Reservar ahora
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
