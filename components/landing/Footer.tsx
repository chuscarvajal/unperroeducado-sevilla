const servicios = ["Sesión individual", "Rehabilitación conductual", "Educación de cachorros", "Seguimiento y apoyo"];
const links = ["Inicio", "Servicios", "Nosotros", "Reseñas", "Contacto", "FAQ"];

export default function Footer() {
  return (
    <footer style={{ background: "#2D1A0E" }} className="text-white">
      <div className="wrap py-14 grid grid-cols-2 md:grid-cols-4 gap-8">

        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="text-xl">🐾</span>
            <span className="font-bold text-base" style={{ fontFamily: "'Playfair Display', serif" }}>Un Perro Educado</span>
          </div>
          <p className="text-white/40 text-sm leading-relaxed mb-1">Educador Canino · Sevilla</p>
          <p className="text-white/40 text-sm leading-relaxed">Antonio · Adiestramiento positivo para perros de todas las razas.</p>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-5 text-white/80">Servicios</h4>
          <ul className="space-y-2">
            {servicios.map(s => <li key={s}><a href="#servicios" className="text-white/40 text-xs hover:text-white transition-colors">{s}</a></li>)}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-5 text-white/80">Navegación</h4>
          <ul className="space-y-2">
            {links.map(l => <li key={l}><a href="#" className="text-white/40 text-xs hover:text-white transition-colors">{l}</a></li>)}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-5 text-white/80">Contacto</h4>
          <ul className="space-y-3 text-white/40 text-xs">
            <li><a href="https://wa.me/34633689653" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">📞 633 68 96 53</a></li>
            <li>📍 C. Virgen de Escardiel<br />41009 Sevilla</li>
            <li>🕐 L/X/J/V 9–14 y 17–20 · M 9–14</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="wrap py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-white/25">
          <p>© {new Date().getFullYear()} Un Perro Educado · Antonio · Sevilla</p>
          <a href="#" className="hover:text-white/60 transition-colors">Política de Privacidad</a>
        </div>
      </div>
    </footer>
  );
}
