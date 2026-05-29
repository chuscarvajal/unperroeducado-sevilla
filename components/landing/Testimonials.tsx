const resenas = [
  {
    texto: "Sin duda, Antonio es un adiestrador que demuestra que tiene una habilidad única para atender las necesidades de nuestros perros. Tiene un trato maravilloso humano y 'perruno'.",
    autor: "Tamara Calahorro",
    rol: "Reseña de Google Maps",
  },
  {
    texto: "La experiencia de educar a tu perro/a con Antonio es toda una fantasía. Al final siempre llego a la misma conclusión, somos l@s dueñ@s l@s que más tenemos que aprender…",
    autor: "Belén Supervia",
    rol: "Reseña de Google Maps",
  },
  {
    texto: "El mejor educador canino que he descubierto hasta la fecha. Si de verdad quieres cuidar y aprender a conocer a tu peludo es el mejor. Lo recomiendo muchísimo — es una persona genial, hará lo que sea por ayudaros a mejorar a ambos y a que tengáis una vida plena y feliz juntos.",
    autor: "Blancabul",
    rol: "Reseña de Google Maps",
  },
];

export default function Testimonials() {
  return (
    <section id="resenas" className="py-20 lg:py-28 bg-white">
      <div className="wrap">
        <div className="text-center mb-14">
          <span className="text-[#3CB371] text-xs font-bold uppercase tracking-[0.22em] mb-2 block">
            Lo que dicen nuestros clientes
          </span>
          <h2 className="font-black text-[#1a1a1a] text-3xl lg:text-[38px]">
            4.6 ★ en Google · 14 reseñas
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {resenas.map((r) => (
            <div key={r.autor} className="bg-[#f9fffe] border border-[#e8f5ee] rounded-2xl p-7 flex flex-col gap-4">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>
              <p className="text-[#555] text-[15px] leading-[1.75] flex-1 italic">"{r.texto}"</p>
              <div>
                <p className="font-bold text-[#1a1a1a] text-sm">— {r.autor}</p>
                <p className="text-[#aaa] text-xs mt-0.5">{r.rol}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
