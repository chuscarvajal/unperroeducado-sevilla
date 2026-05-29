const pasos = [
  { icon: "🔍", title: "Entiendo a tu perro", desc: "Primero observo y escucho. Analizo su historia, sus emociones y sus detonantes. Sin juzgar, sin prisas." },
  { icon: "🧠", title: "Diseño el plan", desc: "Creo un programa a medida basado en ciencia del comportamiento. Cada ejercicio tiene un por qué y un para qué concreto." },
  { icon: "🏠", title: "Construimos juntos", desc: "Te enseño a ti también. Quiero que entiendas a tu perro y puedas continuar el trabajo más allá de las sesiones." },
];

export default function FeatureSplit() {
  return (
    <section className="py-20 lg:py-28 bg-[#FFF9F4]">
      <div className="wrap">
        <div className="text-center mb-14">
          <span className="section-tag">Método positivo</span>
          <h2 className="leading-tight" style={{ fontSize: "clamp(28px, 4vw, 46px)" }}>
            Entreno desde <br />
            <em className="text-[#D4522A] not-italic">la comprensión</em>
          </h2>
          <p className="text-[#6B4C3A] mt-4 max-w-xl mx-auto">
            No busco obediencia ciega. Busco un perro que entienda, confíe y elija hacer lo correcto.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {pasos.map((p, i) => (
            <div key={i} className="relative">
              <div className="bg-white border border-[#F0D9CC] rounded-2xl p-7 text-center h-full">
                <span className="text-4xl mb-5 block">{p.icon}</span>
                <h3 className="mb-3 text-lg" style={{ fontFamily: "'Playfair Display', serif" }}>{p.title}</h3>
                <p className="text-[#6B4C3A] text-[15px] leading-[1.75]">{p.desc}</p>
              </div>
              {i < pasos.length - 1 && (
                <div className="hidden md:flex absolute top-1/2 -right-4 z-10 w-8 h-8 bg-[#D4522A] text-white items-center justify-center rounded-full text-sm font-black" style={{ transform: "translateY(-50%)" }}>→</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
