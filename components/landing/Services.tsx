const servicios = [
  {
    img: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=500&h=340&fit=crop",
    badge: "GRATIS",
    badgeSub: "Evaluación inicial",
    title: "Adiestramiento Básico",
    desc: "Obediencia fundamental: sentado, quieto, tumbado, aquí. Ideal para cachorros y perros sin entrenamiento previo. Incluye evaluación conductual gratuita.",
  },
  {
    img: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=500&h=340&fit=crop",
    title: "Adiestramiento Avanzado",
    desc: "Órdenes complejas, control a distancia y trabajo en entornos con distracciones. Para perros que ya dominan los comandos básicos.",
  },
  {
    img: "https://images.unsplash.com/photo-1561037404-61cd46aa615b?w=500&h=340&fit=crop",
    title: "Adiestramiento de Cachorros",
    desc: "Socialización temprana, hábitos positivos y educación básica adaptada al ritmo natural de aprendizaje del cachorro.",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-20 bg-[#f9fffe]">
      <div className="wrap">
        <div className="text-center mb-14">
          <span className="text-[#3CB371] text-xs font-bold uppercase tracking-[0.22em] mb-2 block">
            Lo que ofrecemos
          </span>
          <h2 className="font-black text-[#1a1a1a] text-3xl lg:text-[38px]">
            Nuestros Servicios
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {servicios.map((s) => (
            <div key={s.title}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-[#e8f5ee]">
              <div className="relative h-[200px] overflow-hidden">
                <img src={s.img} alt={s.title} className="w-full h-full object-cover" />
                {s.badge && (
                  <div className="absolute top-4 left-4 bg-[#3CB371] text-white text-[10px] font-black uppercase tracking-widest px-3 py-2 rounded-lg leading-tight">
                    {s.badge}
                    <br />
                    <span className="font-normal normal-case tracking-normal text-[9px]">{s.badgeSub}</span>
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="font-black text-[#1a1a1a] text-lg mb-2">{s.title}</h3>
                <p className="text-[#777] text-sm leading-[1.8]">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
