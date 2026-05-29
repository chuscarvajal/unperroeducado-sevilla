"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Inicio",      href: "#inicio" },
  { label: "Servicios",   href: "#servicios" },
  { label: "Nosotros",    href: "#nosotros" },
  { label: "Reseñas",     href: "#resenas" },
  { label: "Contacto",    href: "#contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#2D1A0E] shadow-lg" : "bg-[#2D1A0E]/95"}`}>
      <div className="wrap flex items-center justify-between h-16 md:h-20">

        <a href="#inicio" className="flex items-center gap-2.5">
          <span className="text-xl">🐾</span>
          <div className="leading-tight">
            <span className="block font-bold text-[15px] tracking-tight text-white" style={{ fontFamily: "'Playfair Display', serif" }}>Un Perro Educado</span>
            <span className="block text-[9px] tracking-widest uppercase text-white/50">Educador Canino · Sevilla</span>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-7">
          {links.map(l => (
            <a key={l.label} href={l.href}
              className="text-xs font-bold uppercase tracking-[0.15em] text-white/70 hover:text-white transition-colors">
              {l.label}
            </a>
          ))}
          <a href="https://wa.me/34633689653?text=Hola%20Antonio%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20adiestramiento."
            target="_blank" rel="noopener noreferrer"
            className="btn-primary !text-xs !px-5 !py-2.5">
            Consulta gratis
          </a>
        </nav>

        <button onClick={() => setOpen(!open)} className="md:hidden text-white" aria-label="Menú">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#2D1A0E] border-t border-white/10">
          {links.map(l => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)}
              className="block px-6 py-4 text-sm font-bold text-white/70 uppercase tracking-widest border-b border-white/10 hover:text-white hover:bg-white/5">
              {l.label}
            </a>
          ))}
          <div className="px-6 py-4">
            <a href="https://wa.me/34633689653?text=Hola%20Antonio%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20adiestramiento."
              target="_blank" rel="noopener noreferrer"
              className="btn-primary w-full justify-center">Consulta gratis</a>
          </div>
        </div>
      )}
    </header>
  );
}
