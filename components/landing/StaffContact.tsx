const entrenadores = [
  {
    img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=300&h=300&fit=crop",
    nombre: "Emma Sanchez",
    telefono: "[Teléfono 1]",
    twitter: "@[usuario_twitter]",
    instagram: "[usuario_instagram]",
  },
  {
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop",
    nombre: "Isabella Hall",
    telefono: "[Teléfono 2]",
    twitter: "@[usuario_twitter]",
    instagram: "[usuario_instagram]",
  },
  {
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop",
    nombre: "Logan Powell",
    telefono: "[Teléfono 3]",
    twitter: "@[usuario_twitter]",
    instagram: "[usuario_instagram]",
  },
];

export default function StaffContact() {
  return (
    <section className="py-20 bg-[#f9fffe]">
      <div className="wrap">
        <div className="text-center mb-14">
          <span className="text-[#3CB371] text-xs font-bold uppercase tracking-[0.22em] mb-2 block">
            Contacto directo
          </span>
          <h2 className="font-black text-[#1a1a1a] text-3xl lg:text-[38px]">
            Llama a nuestros entrenadores
          </h2>
          <p className="text-[#666] text-[15px] mt-3">Consúltanos cualquier duda directamente</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {entrenadores.map((e) => (
            <div key={e.nombre} className="bg-white rounded-2xl p-6 shadow-sm border border-[#e8f5ee] text-center">
              <img src={e.img} alt={e.nombre} className="w-24 h-24 rounded-full object-cover mx-auto mb-4 shadow-md" />
              <h3 className="font-black text-[#1a1a1a] text-lg mb-5">{e.nombre}</h3>
              <ul className="space-y-2 text-sm text-[#666] text-left max-w-[200px] mx-auto">
                <li className="flex items-center gap-2">
                  <span className="text-[#3CB371] text-base">📞</span> {e.telefono}
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#3CB371] text-base">🐦</span> {e.twitter}
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#3CB371] text-base">📸</span> {e.instagram}
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
