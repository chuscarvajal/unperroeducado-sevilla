const resenas = [
  { texto: "Sin duda, Antonio es un adiestrador que demuestra que tiene una habilidad única para atender las necesidades de nuestros perros. Tiene un trato maravilloso humano y 'perruno'.", autor: "Tamara Calahorro" },
  { texto: "La experiencia de educar a tu perro/a con Antonio es toda una fantasía. Al final siempre llego a la misma conclusión, somos l@s dueñ@s l@s que más tenemos que aprender…", autor: "Belén Supervia" },
  { texto: "El mejor educador canino que he descubierto hasta la fecha. Si de verdad quieres cuidar y aprender a conocer a tu peludo es el mejor. Lo recomiendo muchísimo.", autor: "Blancabul" },
  { texto: "Antonio demuestra una dedicación y un amor por los perros que se nota desde el primer momento. Los resultados con nuestra perra fueron increíbles. 100% recomendable.", autor: "Cliente satisfecha" },
];

const Card = ({ texto, autor }: { texto: string; autor: string }) => (
  <div className="w-[340px] shrink-0 bg-white/10 border border-white/15 rounded-2xl p-7 flex flex-col gap-4">
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <span key={i} className="text-yellow-400 text-base">★</span>
      ))}
    </div>
    <p className="text-white/85 text-[14px] leading-[1.75] italic flex-1">"{texto}"</p>
    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/40">— {autor} · Reseña en Google</p>
  </div>
);

export default function Testimonials() {
  return (
    <section id="resenas" className="bg-[#1b3d2a] py-20 lg:py-28 overflow-hidden">
      <div className="wrap mb-12 text-center lg:text-left">
        <span className="text-[#3CB371] text-xs font-bold uppercase tracking-[0.22em] mb-3 block">Testimonios</span>
        <h2 className="font-black text-white leading-tight" style={{ fontSize: "clamp(28px, 4vw, 52px)" }}>
          14 familias.{" "}
          <span className="text-[#3CB371] italic">4.6 estrellas.</span>
        </h2>
      </div>

      {/* Marquee */}
      <div className="relative overflow-hidden">
        <div className="animate-marquee flex gap-5 py-2">
          {[...resenas, ...resenas].map((r, i) => (
            <Card key={i} {...r} />
          ))}
        </div>
      </div>
    </section>
  );
}
