const equipo = [
  { img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop", badge: "", name: "[Nombre del fundador/a]", role: "Fundador/a" },
  { img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop", badge: "", name: "[Nombre del adiestrador/a]", role: "Adiestrador/a Principal" },
];

export default function Team() {
  return (
    <section id="equipo" className="py-20 bg-white">
      <div className="wrap">
        <div className="text-center mb-14">
          <span className="text-[#3CB371] text-xs font-bold uppercase tracking-[0.22em] mb-2 block">
            El equipo
          </span>
          <h2 className="font-black text-[#1a1a1a] text-3xl lg:text-[38px]">
            Los mejores profesionales en acción
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-10 max-w-2xl mx-auto">
          {equipo.map((m) => (
            <div key={m.name} className="group text-center">
              <div className="relative w-full max-w-[260px] mx-auto mb-4 rounded-2xl overflow-hidden aspect-square">
                <img
                  src={m.img}
                  alt={m.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {m.badge && (
                  <div className="absolute top-3 right-3 bg-[#3CB371] text-white text-[10px] font-bold px-2 py-1 rounded-lg">
                    {m.badge}
                  </div>
                )}
              </div>
              <h3 className="font-black text-[#1a1a1a] text-[16px]">{m.name}</h3>
              <p className="text-[#3CB371] text-sm font-semibold mt-0.5">{m.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}