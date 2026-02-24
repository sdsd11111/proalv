import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Maquinarias de Limpieza en Loja y Cuenca | Comercial Proalv",
  description: "Venta y servicio técnico de maquinaria de limpieza profesional, equipos de mecánica y químicos industriales en Loja y Cuenca. 18 años de experiencia en el Austro.",
  keywords: ["hidrolavadoras loja", "aspiradoras industriales cuenca", "servicio tecnico karcher loja", "equipos mecanica automotriz ecuador", "limpieza de muebles loja", "comercial proalv"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${montserrat.variable} antialiased font-sans`}>
        {children}
      </body>
    </html>
  );
}
