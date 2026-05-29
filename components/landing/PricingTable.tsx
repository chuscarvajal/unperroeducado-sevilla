const filas = [
  { tamanio: "Mini",    p1: "XX€", p2: "XX€", p3: "XX€" },
  { tamanio: "Pequeño", p1: "XX€", p2: "XX€", p3: "XX€" },
  { tamanio: "Mediano", p1: "XX€", p2: "XX€", p3: "XX€" },
  { tamanio: "Grande",  p1: "XX€", p2: "XX€", p3: "XX€" },
];

export default function PricingTable() {
  return (
    <section className="py-20 bg-white">
      <div className="wrap max-w-4xl">
        <div className="text-center mb-14">
          <span className="text-[#3CB371] text-xs font-bold uppercase tracking-[0.22em] mb-2 block">
            Pensión
          </span>
          <h2 className="font-black text-[#1a1a1a] text-3xl lg:text-[38px]">
            Precios de Guardería
          </h2>
          <p className="text-[#666] text-[15px] mt-3">Precio por perro, por día natural</p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-[#e8f5ee] shadow-sm">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr>
                <th className="text-left p-4 font-bold text-[#1a1a1a] bg-[#f0faf5] rounded-tl-2xl w-1/4">
                  Tamaño
                </th>
                <th className="p-4 font-bold text-[#1a1a1a] bg-[#f0faf5] text-center">
                  1 Perro
                </th>
                <th className="p-4 font-bold text-white bg-[#3CB371] text-center">
                  <span className="block text-[10px] font-normal opacity-80 mb-0.5">Popular</span>
                  2 Perros
                </th>
                <th className="p-4 font-bold text-[#1a1a1a] bg-[#f0faf5] text-center rounded-tr-2xl">
                  3+ Perros
                </th>
              </tr>
            </thead>
            <tbody>
              {filas.map((f, i) => (
                <tr key={f.tamanio} className={i % 2 === 0 ? "bg-white" : "bg-[#fafffe]"}>
                  <td className="p-4 font-semibold text-[#1a1a1a] border-t border-[#e8f5ee]">{f.tamanio}</td>
                  <td className="p-4 text-center text-[#444] border-t border-[#e8f5ee]">{f.p1}</td>
                  <td className="p-4 text-center font-bold text-[#3CB371] bg-[#f0faf5] border-t border-[#e0f0e8]">{f.p2}</td>
                  <td className="p-4 text-center text-[#444] border-t border-[#e8f5ee]">{f.p3}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
