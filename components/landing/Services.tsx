const servicios = [
  {
    num: "01",
    title: "Sesión individual",
    desc: "Trabajamos juntos tú, tu perro y yo. Aprenderás las herramientas para continuar en casa y reforzar cada avance en el día a día.",
    badge: null,
    link: "https://wa.me/34633689653?text=Hola%20Antonio%2C%20quiero%20informaci%C3%B3n%20sobre%20sesi%C3%B3n%20individual.",
  },
  {
    num: "02",
    title: "Rehabilitación conductual",
    desc: "Ansiedad, miedos, agresividad, reactividad... Trabajamos desde la raíz emocional del comportamiento con paciencia y método positivo.",
    badge: "MÁS PEDIDO",
    link: "https://wa.me/34633689653?text=Hola%20Antonio%2C%20quiero%20informaci%C3%B3n%20sobre%20rehabilitaci%C3%B3n%20conductual.",
  },
  {
    num: "03",
    title: "Educación de cachorros",
    desc: "El momento ideal para empezar. Establecemos hábitos sanos desde el principio y evitamos problemas futuros con bases sólidas.",
    badge: null,
    link: "https://wa.me/34633689653?text=Hola%20Antonio%2C%20quiero%20informaci%C3%B3n%20sobre%20educaci%C3%B3n%20de%20cachorros.",
  },
  {
    num: "04",
    title: "Seguimiento y apoyo",
    desc: "Continúo contigo entre sesiones: resolución de dudas, ajustes del plan y seguimiento del progreso para no perder el hilo.",
    badge: null,
    link: "https://wa.me/34633689653?text=Hola%20Antonio%2C%20quiero%20informaci%C3%B3n%20sobre%20seguimiento.",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="bg-[#1b3d2a]">
      <div className="wrap py-20">
        <div className="mb-14">
          <span className="text-[#3CB371] text-xs font-bold uppercase tracking-[0.22em] mb-3 block">
            Formación
          </span>
          <h2 className="font-black text-white leading-tight" style={{ fontSize: "clamp(26px, 4vw, 44px)" }}>
            Qué puedo hacer <br className="hidden lg:block" />
            <span className="text-[#3CB371] italic">por tu perro</span>
          </h2>
          <p className="text-white/60 text-[15px] mt-4 max-w-lg">
            Cada perro es único. Diseño el programa según su carácter y tus objetivos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden">
          {servicios.map((s) => (
            <div key={s.num} className="bg-[#1b3d2a] p-8 lg:p-10 flex flex-col gap-4 hover:bg-[#243f2d] transition-colors duration-200">
              <div className="flex items-start justify-between gap-4">
                <span className="font-black text-white/20 text-5xl leading-none select-none">{s.num}</span>
                {s.badge && (
                  <span className="text-[10px] font-black uppercase tracking-widest bg-[#3CB371] text-white px-3 py-1.5 rounded-full shrink-0">
                    {s.badge}
                  </span>
                )}
              </div>
              <h3 className="font-black text-white text-xl">{s.title}</h3>
              <p className="text-white/60 text-[14px] leading-[1.8] flex-1">{s.desc}</p>
              <a href={s.link} target="_blank" rel="noopener noreferrer"
                className="text-[#3CB371] text-sm font-bold hover:text-white transition-colors duration-200 mt-2">
                Consultar →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
