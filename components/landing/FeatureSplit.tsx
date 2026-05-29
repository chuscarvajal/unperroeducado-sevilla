export default function FeatureSplit() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="wrap">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Izquierda: grid 3 imágenes */}
          <div className="grid grid-cols-2 gap-3 lg:gap-4">
            {/* Columna izquierda: 2 imágenes pequeñas apiladas */}
            <div className="flex flex-col gap-3 lg:gap-4">
              <img
                src="/images/programa-cachorro.webp"
                alt="Adiestrador con cachorro labrador en sesión positiva"
                className="w-full h-[160px] lg:h-[195px] object-cover rounded-2xl"
              />
              <img
                src="/images/programa-agility.webp"
                alt="Border collie saltando obstáculo de agility"
                className="w-full h-[160px] lg:h-[195px] object-cover rounded-2xl"
              />
            </div>
            {/* Columna derecha: 1 imagen grande */}
            <img
              src="/images/programa-grande.webp"
              alt="Adiestrador con border collie en sesión de obediencia"
              className="w-full h-[335px] lg:h-[410px] object-cover rounded-2xl"
            />
          </div>

          {/* Derecha: texto */}
          <div>
            <h2 className="font-black text-[#3CB371] text-2xl lg:text-[36px] leading-tight mb-5">
              Programas de Adiestramiento
            </h2>
            <p className="text-[#666] text-[15px] leading-[1.85]">
              Desde la obediencia básica hasta el agility avanzado y el trabajo de comportamiento. Nuestros programas están diseñados para cada etapa de vida de tu perro, con métodos positivos y resultados reales.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
