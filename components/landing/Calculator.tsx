"use client";
import { useState } from "react";

const paquetes = [
  { key: "individual",  label: "Sesión individual",   sub: "Obediencia",     precio: 60 },
  { key: "conducta",    label: "Rehabilitación",       sub: "Conductual",     precio: 80 },
  { key: "cachorro",    label: "Cachorros",            sub: "Socialización",  precio: 55 },
  { key: "seguim",      label: "Seguimiento",          sub: "Entre sesiones", precio: 40 },
];

export default function Calculator() {
  const [pkg, setPkg]       = useState("individual");
  const [ses, setSes]       = useState(1);
  const [evalExtra, setEval] = useState(false);

  const p = paquetes.find(x => x.key === pkg)!;
  const subtotal = p.precio * ses;
  const extras   = evalExtra ? 35 : 0;
  const total    = subtotal + extras;

  const waMsg = encodeURIComponent(`Hola Antonio, quiero consultar disponibilidad para ${p.label} (${ses} sesión${ses !== 1 ? "es" : ""})${evalExtra ? ", con valoración inicial" : ""}. Total estimado: ${total}€.`);

  return (
    <section id="calculadora" className="py-20 lg:py-28 bg-[#FFF9F4]">
      <div className="wrap max-w-3xl">
        <div className="text-center mb-12">
          <span className="section-tag">Presupuesto</span>
          <h2 className="leading-tight" style={{ fontSize: "clamp(28px, 4vw, 46px)" }}>
            Calcula tu <em className="text-[#D4522A] not-italic">inversión</em>
          </h2>
          <p className="text-[#6B4C3A] mt-4 max-w-md mx-auto">Elige el servicio y las sesiones para ver una estimación. Antonio confirma el precio tras conocer tu caso.</p>
        </div>

        <div className="bg-white border border-[#F0D9CC] rounded-2xl overflow-hidden shadow-sm">
          <div className="p-7 border-b border-[#F0D9CC]">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#D4522A] mb-4">Servicio</p>
            <div className="grid grid-cols-2 gap-3">
              {paquetes.map(q => (
                <button key={q.key} onClick={() => setPkg(q.key)}
                  className={`p-4 rounded-xl border-2 text-left transition-all ${pkg === q.key ? "border-[#D4522A] bg-[#FFF4EE]" : "border-[#F0D9CC] hover:border-[#D4522A]/40"}`}>
                  <p className="font-bold text-[#2D1A0E] text-sm">{q.label}</p>
                  <p className="text-[#D4522A] font-black text-sm mt-0.5">{q.precio}€ / ses.</p>
                </button>
              ))}
            </div>
          </div>

          <div className="p-7 border-b border-[#F0D9CC]">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#D4522A] mb-4">
              Sesiones — <span className="text-[#2D1A0E]">{ses}</span>
            </p>
            <input type="range" min={1} max={10} value={ses} onChange={e => setSes(+e.target.value)}
              className="w-full accent-[#D4522A]" />
            <div className="flex justify-between text-xs text-[#B08060] mt-1"><span>1</span><span>10</span></div>
          </div>

          <div className="p-7 border-b border-[#F0D9CC]">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#D4522A] mb-4">Extras</p>
            <button onClick={() => setEval(v => !v)}
              className={`w-full flex items-center justify-between p-4 rounded-xl border-2 transition-all ${evalExtra ? "border-[#D4522A] bg-[#FFF4EE]" : "border-[#F0D9CC] hover:border-[#D4522A]/40"}`}>
              <div className="text-left">
                <p className="font-bold text-[#2D1A0E] text-sm">Valoración inicial</p>
                <p className="text-[#B08060] text-xs">Diagnóstico completo antes de empezar</p>
              </div>
              <span className="font-black text-[#D4522A]">+35€</span>
            </button>
          </div>

          <div className="p-7">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#D4522A] mb-4">Tu estimación</p>
            <div className="space-y-2 mb-5">
              {[["Servicio", p.label], ["Precio/sesión", `${p.precio}€`], ["× sesiones", `${ses}`]].map(([k,v]) => (
                <div key={k} className="flex justify-between text-sm text-[#6B4C3A] border-b border-[#F0D9CC] pb-2">
                  <span>{k}</span><span className="font-bold">{v}</span>
                </div>
              ))}
              <div className="flex justify-between items-center pt-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#D4522A]">Total estimado</span>
                <span className="font-black text-3xl text-[#D4522A]">{total} €</span>
              </div>
            </div>
            <p className="text-xs text-[#B08060] mb-5 italic">* Orientativo. Antonio confirma el precio tras valorar tu caso.</p>
            <a href={`https://wa.me/34633689653?text=${waMsg}`} target="_blank" rel="noopener noreferrer"
              className="btn-wa w-full justify-center">
              <svg viewBox="0 0 448 512" className="w-5 h-5 fill-white shrink-0"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157z"/></svg>
              Pedir presupuesto a Antonio
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
