const items = [
  { emoji: "🐾", text: "Educación positiva" },
  { emoji: "💛", text: "Sin castigos ni coerción" },
  { emoji: "📍", text: "Sevilla" },
  { emoji: "⭐", text: "4.6 · 14 reseñas Google" },
  { emoji: "🏅", text: "Educador canino certificado" },
  { emoji: "🐕", text: "Todas las razas y edades" },
];

const Pill = ({ emoji, text }: { emoji: string; text: string }) => (
  <span className="inline-flex items-center gap-2 text-white/80 text-sm font-medium whitespace-nowrap px-8">
    <span>{emoji}</span>
    <span>{text}</span>
    <span className="text-white/30 ml-6">·</span>
  </span>
);

export default function TrustBar() {
  const doubled = [...items, ...items];
  return (
    <div className="bg-[#2D1A0E] py-3.5 overflow-hidden border-b border-white/5">
      <div className="animate-trust">
        {doubled.map((item, i) => (
          <Pill key={i} {...item} />
        ))}
      </div>
    </div>
  );
}
