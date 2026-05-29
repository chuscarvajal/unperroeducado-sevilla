import Image from "next/image";
import { Calendar } from "lucide-react";

const posts = [
  { title: "Mordisqueo, Dentición en Cachorros y Mordeduras", img: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=520&q=80", date: "25 de noviembre, 2019" },
  { title: "Cómo Adiestrar a Tu Perro con el Transportín",    img: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=520&q=80", date: "25 de noviembre, 2019" },
  { title: "Un Perro Cansado es un Buen Perro",               img: "https://images.unsplash.com/photo-1534351450181-ea9f78427fe8?w=520&q=80", date: "25 de noviembre, 2019" },
  { title: "Guía Básica de Higiene para Tu Perro",            img: "https://images.unsplash.com/photo-1601758125946-6ec2ef64daf8?w=520&q=80", date: "25 de noviembre, 2019" },
  { title: "Cómo la Correa Puede Interferir en el Paseo",     img: "https://images.unsplash.com/photo-1583511655826-05700d52f4d9?w=520&q=80", date: "25 de noviembre, 2019" },
  { title: "¿Por Qué Algunos Perros No Salen a Pasear?",      img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=520&q=80", date: "25 de noviembre, 2019" },
  { title: "¿Cuál es la Mejor Comida para tu Perro?",         img: "https://images.unsplash.com/photo-1585559700398-1385b3a8aeb6?w=520&q=80", date: "25 de noviembre, 2019" },
  { title: "Los Peligros de los Collares para Perros",        img: "https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?w=520&q=80", date: "25 de noviembre, 2019" },
];

export default function LatestNews() {
  return (
    <section id="galería" className="py-16 lg:py-24 bg-white border-t border-[#e0e0e0]">
      <div className="container">
        <h2 className="section-title">Últimas Noticias</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
          {posts.map((p) => (
            <a key={p.title} href="#"
              className="relative group overflow-hidden aspect-[4/3] block">
              <Image src={p.img} alt={p.title} fill
                className="object-cover group-hover:scale-105 transition-transform duration-500" />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              {/* Text */}
              <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
                <div className="flex items-center gap-1 text-white/60 text-[10px] mb-1">
                  <Calendar size={10} /> {p.date}
                </div>
                <h3 className="text-white text-xs md:text-sm font-bold leading-snug line-clamp-2">
                  {p.title}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
