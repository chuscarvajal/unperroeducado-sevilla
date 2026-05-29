import { Star, Zap, Users, Award, Leaf, Play } from "lucide-react";

const razones = [
  { icon: Star,  title: "Servicio de Calidad",      desc: "Entrenadores certificados con años de experiencia en adiestramiento positivo y sin castigos." },
  { icon: Zap,   title: "Atención de Emergencia",   desc: "Servicio de recogida urgente disponible para atender los imprevistos de nuestros clientes." },
  { icon: Users, title: "Expertos en Perros",       desc: "Especialistas en comportamiento canino y bienestar animal, expertos en todas las razas." },
  { icon: Award, title: "Líderes del Sector",       desc: "Reconocidos como uno de los mejores centros de adiestramiento canino de la zona." },
  { icon: Leaf,  title: "Alimentación de Calidad",  desc: "Dietas supervisadas y equilibradas para cada perro durante su estancia en el centro." },
  { icon: Play,  title: "Juego y Adiestramiento",   desc: "Combinamos el aprendizaje con el juego para conseguir resultados duraderos y perros felices." },
];

export default function WhyUs() {
  return (
    <section id="nosotros" className="py-20 bg-white">
      <div className="wrap">
        <div className="text-center mb-14">
          <span className="text-[#3CB371] text-xs font-bold uppercase tracking-[0.22em] mb-2 block">
            Por qué elegirnos
          </span>
          <h2 className="font-black text-[#1a1a1a] text-3xl lg:text-[38px]">
            Seis razones para confiar en nosotros
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {razones.map(({ icon: Icon, title, desc }) => (
            <div key={title}
              className="flex gap-4 items-start p-6 rounded-2xl bg-[#f9fffe] border border-[#e8f5ee] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200">
              <span className="w-10 h-10 rounded-full bg-[#3CB371]/15 flex items-center justify-center shrink-0">
                <Icon size={18} className="text-[#3CB371]" />
              </span>
              <div>
                <h3 className="font-bold text-[#1a1a1a] text-[15px] mb-1">{title}</h3>
                <p className="text-[#777] text-sm leading-[1.7]">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
