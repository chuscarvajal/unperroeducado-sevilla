"use client";
import { useState } from "react";

const paquetes = [
  { key: "basico",    label: "Básico",       sub: "Obediencia",  precio: 60 },
  { key: "conducta",  label: "Conducta",     sub: "Comportamiento", precio: 80 },
  { key: "domicilio", label: "Domicilio",    sub: "En tu casa",  precio: 90 },
];

export default function Calculator() {
  const [pkg, setPkg]         = useState("basico");
  const [sesiones, setSesiones] = useState(3);
  const [evalExtra, setEval]  = useState(false);

  const paquete = paquetes.find(p => p.key === pkg)!;
  const subtotal = paquete.precio * sesiones;
  const extras   = evalExtra ? 35 : 0;
  const total    = subtotal + extras;

  const waMsg = encodeURIComponent(
    `Hola Antonio, quiero consultar disponibilidad para ${paquete.label} (${sesiones} sesión${sesiones !== 1 ? "es" : ""}), total estimado ${total}€.`
  );

  return (
    <section id="calculadora" className="py-20 bg-[#f0faf5]">
      <div className="wrap">
        <div className="text-center mb-14">
          <span className="text-[#3CB371] text-xs font-bold uppercase tracking-[0.22em] mb-2 block">
            Presupuesto orientativo
          </span>
          <h2 className="font-black text-[#1a1a1a] text-3xl lg:text-[38px]">
            Calculadora de Sesiones
          </h2>
          <p className="text-[#666] text-[15px] mt-3 max-w-md mx-auto">
            Configura tu plan y obtén un coste estimado sin compromiso.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">

          {/* Controles */}
          <div className="bg-white rounded-2xl border border-[#e8f5ee] p-8 space-y-7 shadow-sm">

            {/* Tipo de servicio */}
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#3CB371] mb-3">1. Tipo de servicio</p>
              <div className="grid grid-cols-3 gap-3">
                {paquetes.map(p => (
                  <button key={p.key} onClick={() => setPkg(p.key)}
                    className={`rounded-xl p-3 text-center border-2 transition-all ${pkg === p.key ? "border-[#3CB371] bg-[#f0faf5]" : "border-[#e8f5ee] hover:border-[#3CB371]/40"}`}>
                    <p className="font-bold text-[#1a1a1a] text-sm">{p.label}</p>
                    <p className="text-[#888] text-[11px] mt-0.5">{p.sub}</p>
                    <p className="text-[#3CB371] font-black text-sm mt-1">{p.precio}€/ses.</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Nº sesiones */}
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#3CB371] mb-3">
                2. Número de sesiones —{" "}
                <span className="text-[#1a1a1a] normal-case tracking-normal font-black">{sesiones}</span>
              </p>
              <input type="range" min={1} max={10} value={sesiones}
                onChange={e => setSesiones(Number(e.target.value))}
                className="w-full accent-[#3CB371]" />
              <div className="flex justify-between text-[11px] text-[#aaa] mt-1">
                <span>1 sesión</span><span>10 sesiones</span>
              </div>
            </div>

            {/* Extras */}
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#3CB371] mb-3">3. Extras</p>
              <button onClick={() => setEval(v => !v)}
                className={`w-full flex items-center justify-between p-4 rounded-xl border-2 transition-all ${evalExtra ? "border-[#3CB371] bg-[#f0faf5]" : "border-[#e8f5ee] hover:border-[#3CB371]/40"}`}>
                <div className="text-left">
                  <p className="font-bold text-[#1a1a1a] text-sm">Valoración inicial</p>
                  <p className="text-[#888] text-[12px]">Diagnóstico completo antes de empezar</p>
                </div>
                <span className="font-black text-[#3CB371]">+35€</span>
              </button>
            </div>
          </div>

          {/* Resumen */}
          <div className="bg-[#1b3d2a] text-white rounded-2xl p-8 shadow-xl flex flex-col justify-between">
            <div>
              <h3 className="font-black text-lg mb-6">Resumen del Plan</h3>
              <ul className="space-y-3 text-sm">
                {[
                  ["Servicio",       paquete.label],
                  ["Precio/sesión",  `${paquete.precio}€`],
                  ["Sesiones",       `${sesiones}`],
                  ["Subtotal",       `${subtotal}€`],
                  ["Extras",         evalExtra ? "+35€ (valoración)" : "—"],
                ].map(([k, v]) => (
                  <li key={k} className="flex justify-between border-b border-white/10 pb-3">
                    <span className="text-white/60">{k}</span>
                    <span className="font-bold">{v}</span>
                  </li>
                ))}
              </ul>
              <div className="flex justify-between items-center mt-5 pt-4 border-t border-white/20">
                <span className="font-black text-lg">Total estimado</span>
                <span className="font-black text-3xl text-[#3CB371]">{total}€</span>
              </div>
            </div>
            <a href={`https://wa.me/34633689653?text=${waMsg}`}
              target="_blank" rel="noopener noreferrer"
              className="mt-8 block text-center bg-[#3CB371] text-white font-bold text-sm px-8 py-4 rounded-xl hover:bg-[#2E8B57] active:scale-95 transition-all duration-200">
              Consultar con Antonio →
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
