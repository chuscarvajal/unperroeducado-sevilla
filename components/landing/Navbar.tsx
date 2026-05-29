"use client";
import { useState, useEffect } from "react";
import { Menu, X, PawPrint } from "lucide-react";

const links = [
  { label: "Inicio",    href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Reseñas",   href: "#resenas" },
  { label: "Contacto",  href: "#contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-md" : "bg-transparent"}`}>
      <div className="wrap flex items-center justify-between h-16 md:h-20">
        <a href="#" className="flex items-center gap-2">
          <span className="w-9 h-9 bg-[#3CB371] rounded-full flex items-center justify-center shrink-0">
            <PawPrint size={16} className="text-white" />
          </span>
          <div className="leading-tight">
            <span className={`block font-black text-[15px] tracking-tight transition-colors ${scrolled ? "text-[#1a1a1a]" : "text-white"}`}>
              Un Perro Educado
            </span>
            <span className={`block text-[9px] tracking-widest uppercase transition-colors ${scrolled ? "text-[#666]" : "text-white/70"}`}>
              Educador Canino · Sevilla
            </span>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.label} href={l.href}
              className={`text-xs font-bold uppercase tracking-[0.15em] hover:text-[#3CB371] transition-colors ${scrolled ? "text-[#444]" : "text-white"}`}>
              {l.label}
            </a>
          ))}
          <a href="https://wa.me/34633689653?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20el%20adiestramiento%20canino."
            className="btn-green !text-xs !px-5 !py-2" target="_blank" rel="noopener noreferrer">
            Consulta gratis
          </a>
        </nav>

        <button onClick={() => setOpen(!open)} aria-label="Menú"
          className={`md:hidden transition-colors ${scrolled ? "text-[#333]" : "text-white"}`}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white shadow-lg border-t border-gray-100">
          {links.map((l) => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)}
              className="block px-6 py-4 text-sm font-bold text-[#333] uppercase tracking-widest border-b border-gray-100 hover:text-[#3CB371] hover:bg-[#f0faf5] transition-colors">
              {l.label}
            </a>
          ))}
          <div className="px-6 py-4">
            <a href="https://wa.me/34633689653?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20el%20adiestramiento%20canino."
              className="btn-green w-full" target="_blank" rel="noopener noreferrer">
              Consulta gratis
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
