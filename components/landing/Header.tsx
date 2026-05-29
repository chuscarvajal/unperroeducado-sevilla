"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Inicio",    href: "#inicio" },
  { label: "Nosotros",  href: "#nosotros" },
  { label: "Servicios", href: "#servicios" },
  { label: "Galería",   href: "#galería" },
  { label: "Contacto",  href: "#contacto" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
            <circle cx="19" cy="19" r="19" fill="white" fillOpacity="0.15"/>
            <text x="19" y="25" textAnchor="middle" fontSize="20" fill="white">🐕</text>
          </svg>
          <div className="text-white leading-tight">
            <span className="block font-black text-base tracking-widest uppercase">Perro</span>
            <span className="block text-[9px] tracking-[0.22em] uppercase font-light opacity-80">Centro de Adiestramiento</span>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.label} href={l.href}
              className="text-white text-xs font-semibold uppercase tracking-[0.18em] hover:opacity-70 transition-opacity">
              {l.label}
            </a>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-white">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#2b2b2b]/95">
          {links.map((l) => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)}
              className="block px-6 py-3 text-white text-xs uppercase tracking-widest border-b border-white/10 hover:opacity-70">
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
