import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Adiestrador Canino en Sevilla | Un Perro Educado",
  description: "Adiestramiento canino en Sevilla con Antonio. Educación canina con metodología positiva. 4.6 ★ en Google. C. Virgen de Escardiel, 41009 Sevilla.",
  openGraph: {
    title: "Adiestrador Canino en Sevilla | Un Perro Educado",
    description: "Adiestramiento canino en Sevilla con Antonio. 4.6 ★ en Google. Consulta sin compromiso.",
    url: "https://unperroeducado-sevilla.vercel.app",
    type: "website",
    images: [{ url: "https://unperroeducado-sevilla.vercel.app/images/programa-cachorro.webp", width: 1200, height: 800 }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700;800;900&family=Nunito+Sans:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
