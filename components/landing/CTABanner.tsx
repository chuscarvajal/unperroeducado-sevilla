export default function CTABanner() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Imagen de fondo con overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1920&h=700&fit=crop"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#2E8B57]/85" />
      </div>

      <div className="relative wrap text-center">
        <h2 className="font-black text-white text-3xl lg:text-[48px] leading-tight mb-5 max-w-3xl mx-auto">
          Nos esforzamos por cuidar a tu perro como ningún otro.
        </h2>
        <p className="text-white/80 text-[16px] leading-[1.8] mb-10 max-w-xl mx-auto">
          Adiestramiento profesional, cariño y dedicación para que tu perro sea feliz, obediente y esté bien educado.
        </p>
        <a href="#contacto"
          className="inline-block bg-white text-[#2E8B57] font-black text-sm px-10 py-4 rounded-xl hover:bg-gray-50 active:scale-95 transition-all duration-200 shadow-xl">
          Solicitar información
        </a>
      </div>
    </section>
  );
}
