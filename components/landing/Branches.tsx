const sedes = [
  {
    img: "https://images.unsplash.com/photo-1589965716319-4a041b58fa8a?w=500&h=300&fit=crop",
    etiqueta: "Sede principal",
    nombre: "[Ciudad 1]",
    direccion: "[Calle], [Número], [Ciudad 1]",
    telefono1: "[Teléfono principal]",
    telefono2: "[Teléfono secundario]",
    email: "[email@negocio.com]",
    social: "/[usuario_red_social]",
  },
  {
    img: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=500&h=300&fit=crop",
    etiqueta: "",
    nombre: "[Ciudad 2]",
    direccion: "[Calle], [Número], [Ciudad 2]",
    telefono1: "[Teléfono principal]",
    telefono2: "[Teléfono secundario]",
    email: "[email@negocio.com]",
    social: "/[usuario_red_social]",
  },
  {
    img: "https://images.unsplash.com/photo-1534351450181-ea9f78427fe8?w=500&h=300&fit=crop",
    etiqueta: "",
    nombre: "[Ciudad 3]",
    direccion: "[Calle], [Número], [Ciudad 3]",
    telefono1: "[Teléfono principal]",
    telefono2: "[Teléfono secundario]",
    email: "[email@negocio.com]",
    social: "/[usuario_red_social]",
  },
];

export default function Branches() {
  return (
    <section className="py-20 bg-white">
      <div className="wrap">
        <div className="text-center mb-14">
          <span className="text-[#3CB371] text-xs font-bold uppercase tracking-[0.22em] mb-2 block">
            Ubicaciones
          </span>
          <h2 className="font-black text-[#1a1a1a] text-3xl lg:text-[38px]">
            Nuestras Sedes
          </h2>
          <p className="text-[#666] text-[15px] mt-3">Encuéntranos cerca de tu casa</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {sedes.map((s) => (
            <div key={s.nombre}
              className="rounded-2xl overflow-hidden border border-[#e8f5ee] shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="relative h-[180px] overflow-hidden">
                <img src={s.img} alt={s.nombre} className="w-full h-full object-cover" />
                {s.etiqueta && (
                  <div className="absolute top-3 left-3 bg-[#3CB371] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-lg">
                    {s.etiqueta}
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="font-black text-[#1a1a1a] text-lg mb-1">{s.nombre}</h3>
                <p className="text-[#777] text-sm mb-4">{s.direccion}</p>
                <ul className="space-y-1.5 text-sm text-[#666]">
                  <li>📞 {s.telefono1}</li>
                  <li>📞 {s.telefono2}</li>
                  <li>✉️ {s.email}</li>
                  <li>📱 {s.social}</li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
