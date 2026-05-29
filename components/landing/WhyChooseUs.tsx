export default function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="wrap">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col gap-3">
              <img src="/images/programa-cachorro.webp" alt="Cachorro en sesión con Antonio" className="w-full h-[180px] object-cover rounded-xl" />
              <img src="/images/programa-agility.webp" alt="Sesión individual con Antonio Sevilla" className="w-full h-[180px] object-cover rounded-xl" />
            </div>
            <img src="/images/programa-grande.webp" alt="Educación canina en Sevilla" className="w-full h-[375px] object-cover rounded-xl" />
          </div>

          <div>
            <span className="section-tag">Por qué elegirme</span>
            <h2 className="leading-tight mb-5" style={{ fontSize: "clamp(26px, 3.5vw, 40px)" }}>
              Mi forma de <em className="text-[#D4522A] not-italic">trabajar</em>
            </h2>
            <p className="text-[#6B4C3A] leading-[1.85] mb-6">
              Cada sesión es única porque cada perro es único. No existen soluciones genéricas — diseño cada plan desde cero tras conocer al animal y a su familia.
            </p>
            <ul className="space-y-3">
              {["Metodología 100% positiva sin castigos", "Sesiones individuales adaptadas a cada caso", "Seguimiento entre sesiones incluido", "Formo a los dueños, no solo al perro"].map(t => (
                <li key={t} className="flex items-center gap-3 text-[#6B4C3A] text-[15px]">
                  <span className="w-5 h-5 rounded-full bg-[#D4522A] flex items-center justify-center text-white text-xs shrink-0">✓</span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
