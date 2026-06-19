import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "BRODE | Caldo de Huesos — Ritual diario de nutrición profunda",
    template: "%s | BRODE",
  },
  description:
    "BRODE es caldo de huesos de cocción lenta, hecho con ingredientes reales. Sin aditivos. Listo para tomar. Montevideo, Uruguay.",
  metadataBase: new URL("https://brode.uy"),
  openGraph: {
    title: "BRODE | Caldo de Huesos — Ritual diario de nutrición profunda",
    description:
      "BRODE es caldo de huesos de cocción lenta, hecho con ingredientes reales. Sin aditivos. Listo para tomar. Montevideo, Uruguay.",
    url: "https://brode.uy",
    siteName: "BRODE",
    locale: "es_UY",
    type: "website",
    images: [
      {
        url: "/hero-bg.jpg",
        width: 1200,
        height: 630,
        alt: "BRODE - Caldo de Huesos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
