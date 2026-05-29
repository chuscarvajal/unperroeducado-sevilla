export default function WhyChooseUs() {
  return (
    <section className="relative py-16 lg:py-24 bg-[#f0faf5] overflow-hidden">
      {/* Watermark background */}
      <div className="absolute inset-y-0 left-0 w-1/2 flex items-center justify-center pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1561037404-61cd46aa615b?w=700&h=700&fit=crop"
          alt=""
          className="w-full h-full object-cover opacity-[0.08]"
        />
      </div>

      <div className="relative wrap">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Izquierda: texto */}
          <div>
            <h2 className="font-black text-[#3CB371] text-2xl lg:text-[36px] leading-tight mb-5">
              Campos de Entrenamiento al Aire Libre
            </h2>
            <p className="text-[#555] text-[15px] leading-[1.85]">
              Disponemos de amplias instalaciones al aire libre donde tu perro puede desarrollar todo su potencial. Espacios seguros y adaptados para cada etapa del adiestramiento, desde la socialización básica hasta el trabajo avanzado en libertad.
            </p>
          </div>

          {/* Derecha: 3 imágenes — 1 grande + 2 pequeñas apiladas */}
          <div className="grid grid-cols-[1.15fr_1fr] gap-3 lg:gap-4 h-[380px] lg:h-[420px]">
            {/* Imagen grande a la izquierda */}
            <img
              src="https://images.unsplash.com/photo-1568393691622-c7ba131d63b4?w=400&h=700&fit=crop"
              alt="Perro entrenando al aire libre"
              className="w-full h-full object-cover rounded-2xl"
            />
            {/* 2 imágenes pequeñas apiladas a la derecha */}
            <div className="flex flex-col gap-3 lg:gap-4 h-full">
              <img
                src="/images/campos-pastor.webp"
                alt="Pastor alemán en campo de entrenamiento al aire libre"
                className="flex-1 w-full object-cover rounded-2xl"
              />
              <img
                src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=400&h=300&fit=crop"
                alt="Perros corriendo en campo de entrenamiento"
                className="flex-1 w-full object-cover rounded-2xl"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}