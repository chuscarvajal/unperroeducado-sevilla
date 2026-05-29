import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Adiestrador Canino en Sevilla | Un Perro Educado",
  description: "Educador canino en Sevilla — Antonio. Sesiones individuales, rehabilitación conductual y cachorros. 4.6 ★ en Google.",
  openGraph: {
    title: "Adiestrador Canino en Sevilla | Un Perro Educado",
    description: "Educador canino en Sevilla con Antonio. 4.6 ★ en Google. Consulta sin compromiso.",
    url: "https://unperroeducado-sevilla.vercel.app",
    type: "website",
    images: [{ url: "https://unperroeducado-sevilla.vercel.app/images/programa-cachorro.webp", width: 1200, height: 800 }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
