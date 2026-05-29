"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const preguntas = [
  {
    q: "¿Es seguro que mi perro pase el día en el centro?",
    a: "Absolutamente. Contamos con personal cualificado durante todo el horario, instalaciones seguras y protocolos estrictos para garantizar el bienestar de cada perro.",
  },
  {
    q: "¿Se proporcionan comidas durante el día?",
    a: "Sí, ofrecemos alimentación de calidad adaptada a las necesidades de cada perro. Puedes indicarnos si tu perro tiene alguna dieta especial o restricción alimentaria.",
  },
  {
    q: "¿Cuáles son los cargos adicionales por medicación?",
    a: "La administración de medicamentos está incluida en nuestro servicio sin coste adicional, previa presentación de la prescripción veterinaria correspondiente.",
  },
  {
    q: "¿Es reembolsable la tarifa de inscripción?",
    a: "La tarifa de inscripción es reembolsable en un 100% si cancelas con más de 48 horas de antelación. Consulta nuestras condiciones para más detalles.",
  },
];

export default function FAQ() {
  const [abierto, setAbierto] = useState<number | null>(null);

  return (
    <section className="py-20 bg-white">
      <div className="wrap max-w-3xl">
        <div className="text-center mb-14">
          <span className="text-[#3CB371] text-xs font-bold uppercase tracking-[0.22em] mb-2 block">
            Preguntas frecuentes
          </span>
          <h2 className="font-black text-[#1a1a1a] text-3xl lg:text-[38px]">
            Preguntas Frecuentes
          </h2>
          <p className="text-[#666] text-[15px] mt-3 max-w-xl mx-auto">
            Para consultas generales, encontrarás la respuesta aquí. Para cualquier otra cuestión, contáctanos directamente.
          </p>
          <a href="#contacto" className="btn-outline-green inline-flex mt-6">Contactar</a>
        </div>

        <div className="space-y-3">
          {preguntas.map((p, i) => (
            <div key={i} className="border border-[#e8f5ee] rounded-2xl overflow-hidden">
              <button
                onClick={() => setAbierto(abierto === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-[#f9fffe] transition-colors duration-200"
                aria-expanded={abierto === i}>
                <span className="font-bold text-[#1a1a1a] text-[15px] pr-4">{p.q}</span>
                <ChevronDown
                  size={18}
                  className={`text-[#3CB371] shrink-0 transition-transform duration-200 ${abierto === i ? "rotate-180" : ""}`}
                />
              </button>
              {abierto === i && (
                <div className="px-5 pb-5 text-[#666] text-[15px] leading-[1.8]">
                  {p.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
