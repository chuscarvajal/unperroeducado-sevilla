import { Phone, MapPin, Clock, PawPrint } from "lucide-react";

const servicios = ["Adiestramiento Básico", "Control de Conducta", "Cachorros", "Clases a Domicilio", "Socialización"];
const accesos = ["Inicio", "Servicios", "Reseñas", "FAQ", "Contacto"];

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white">
      <div className="wrap py-14 grid grid-cols-2 md:grid-cols-4 gap-8">

        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-8 h-8 bg-[#3CB371] rounded-full flex items-center justify-center">
              <PawPrint size={14} className="text-white" />
            </span>
            <span className="font-black text-sm">Un Perro Educado</span>
          </div>
          <p className="text-white/40 text-xs leading-relaxed mb-2">Educador Canino · Sevilla</p>
          <p className="text-white/40 text-xs leading-relaxed">Antonio · Adiestramiento positivo para perros de todas las razas.</p>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-5 text-white/90">Servicios</h4>
          <ul className="space-y-2">
            {servicios.map((l) => (
              <li key={l}>
                <a href="#servicios" className="text-white/45 text-xs hover:text-white transition-colors">{l}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-5 text-white/90">Accesos Rápidos</h4>
          <ul className="space-y-2">
            {accesos.map((l) => (
              <li key={l}>
                <a href="#" className="text-white/45 text-xs hover:text-white transition-colors">{l}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-5 text-white/90">Contacto</h4>
          <ul className="space-y-3 text-white/45 text-xs">
            <li className="flex items-start gap-2">
              <Phone size={12} className="mt-0.5 shrink-0 text-[#3CB371]" />
              <a href="tel:+34633689653" className="hover:text-white transition-colors">633 68 96 53</a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={12} className="mt-0.5 shrink-0 text-[#3CB371]" />
              <span>C. Virgen de Escardiel, 41009 Sevilla</span>
            </li>
            <li className="flex items-start gap-2">
              <Clock size={12} className="mt-0.5 shrink-0 text-[#3CB371]" />
              <span>L/X/J/V 9–14 y 17–20 · M 9–14</span>
            </li>
          </ul>
        </div>

      </div>

      <div className="border-t border-white/10">
        <div className="wrap py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-white/30">
          <p>© {new Date().getFullYear()} Un Perro Educado. Todos los derechos reservados.</p>
          <a href="#" className="hover:text-white/60 transition-colors">Política de Privacidad</a>
        </div>
      </div>
    </footer>
  );
}
