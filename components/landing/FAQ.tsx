"use client";
import { useState } from "react";

const preguntas = [
  { q: "¿Con qué razas y edades trabajas?", a: "Con todas. No existen razas 'difíciles', solo perros que necesitan la metodología correcta. Trabajo desde cachorros de 8 semanas hasta perros adultos." },
  { q: "¿Cuántas sesiones necesita mi perro?", a: "Depende del objetivo y del punto de partida de cada perro. Tras la valoración inicial te doy un plan orientativo. Los objetivos básicos suelen lograrse en 4-8 sesiones." },
  { q: "¿Usas castigos o correcciones?", a: "No. Mi metodología es 100% positiva. El perro aprende porque quiere, no porque tiene miedo. Esto genera cambios más duraderos y una mejor relación con su familia." },
  { q: "¿Puedo asistir a las sesiones?", a: "Sí, y lo recomiendo. La implicación del dueño es clave para el éxito. Te enseño cómo reforzar en casa lo trabajado en cada sesión." },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="py-20 bg-[#FFF9F4]">
      <div className="wrap max-w-3xl">
        <div className="text-center mb-14">
          <span className="section-tag">Preguntas</span>
          <h2 className="leading-tight" style={{ fontSize: "clamp(26px, 3.5vw, 42px)" }}>
            Lo que más <em className="text-[#D4522A] not-italic">preguntan</em>
          </h2>
          <p className="text-[#6B4C3A] mt-4 max-w-lg mx-auto">Para cualquier otra duda, escríbeme directamente.</p>
          <a href="https://wa.me/34633689653?text=Hola%20Antonio%2C%20tengo%20una%20pregunta." target="_blank" rel="noopener noreferrer"
            className="btn-outline inline-flex mt-5">Contactar</a>
        </div>
        <div className="space-y-3">
          {preguntas.map((p, i) => (
            <div key={i} className="border border-[#F0D9CC] rounded-2xl overflow-hidden bg-white">
              <button onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-[#FFF4EE] transition-colors"
                aria-expanded={open === i}>
                <span className="font-bold text-[#2D1A0E] text-[15px] pr-4">{p.q}</span>
                <span className={`text-[#D4522A] text-lg shrink-0 transition-transform duration-200 ${open === i ? "rotate-45" : ""}`}>+</span>
              </button>
              {open === i && (
                <div className="px-5 pb-5 text-[#6B4C3A] text-[15px] leading-[1.8] border-t border-[#F0D9CC]">
                  <div className="pt-4">{p.a}</div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
