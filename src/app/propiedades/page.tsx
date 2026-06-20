import type { Metadata } from "next";

import Image from "next/image";
import Link from "next/link";
import data from "../../../content/propiedades/index.json";

export const metadata: Metadata = {
  title: "Propiedades del Caldo de Huesos | BRODE",
  description:
    "Descubrí la ciencia y las propiedades clínicas del caldo de huesos: colágeno, barrera intestinal, recuperación articular y densidad mineral.",
  alternates: {
    canonical: "https://brode.uy/propiedades",
  },
};

// SVG icons matching each property by slug
const icons: Record<string, JSX.Element> = {
  colageno: (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
      <path d="M32 4C32 4 20 16 20 32C20 44.15 25.37 52 32 52C38.63 52 44 44.15 44 32C44 16 32 4 32 4Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M20 32C20 32 26 26 32 32C38 38 44 32 44 32" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M32 52V60M26 58L32 60L38 58" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  microbioma: (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
      <circle cx="32" cy="32" r="14" stroke="currentColor" strokeWidth="2.5"/>
      <circle cx="32" cy="32" r="6" stroke="currentColor" strokeWidth="2"/>
      <path d="M18 32C18 32 14 28 10 32M46 32C46 32 50 28 54 32" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M32 18C32 18 28 14 32 10M32 46C32 46 28 50 32 54" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="19.5" cy="19.5" r="2.5" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="44.5" cy="44.5" r="2.5" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  ),
  articulaciones: (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
      <path d="M12 52L24 32L32 40L40 20L52 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="24" cy="32" r="4" stroke="currentColor" strokeWidth="2"/>
      <circle cx="40" cy="20" r="4" stroke="currentColor" strokeWidth="2"/>
      <path d="M20 56C20 56 14 50 14 44C14 40.69 16.69 38 20 38" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  "sistema-nervioso": (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
      <path d="M32 8C27 8 22 12 22 18C22 22 24 25 27 27L27 48C27 50.21 29.24 52 32 52C34.76 52 37 50.21 37 48L37 27C40 25 42 22 42 18C42 12 37 8 32 8Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M27 34C23 36 18 35 16 31M37 34C41 36 46 35 48 31" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M27 42C23 44 18 43 16 39M37 42C41 44 46 43 48 39" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  "densidad-mineral": (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
      <path d="M22 10C18 14 16 20 18 28L22 32L18 36C16 44 18 50 22 54" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M42 10C46 14 48 20 46 28L42 32L46 36C48 44 46 50 42 54" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M22 24H42M22 32H42M22 40H42" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  performance: (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
      <path d="M32 8L36.5 22H52L40 30.5L44.5 44L32 36L19.5 44L24 30.5L12 22H27.5L32 8Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M32 44V56M24 54L32 56L40 54" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
};

export default function PropiedadesPage() {
  return (
    <div className="bg-cream selection:bg-warm-tan selection:text-deep-brown">
      {/* ─── Hero Section ─── */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 px-6 bg-deep-brown overflow-hidden">
        {/* Subtle texture overlay */}
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-warm-tan via-transparent to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <span className="text-warm-tan text-sm uppercase tracking-widest font-bold mb-6 block">
                Investigación y Evidencia
              </span>
              <h1 className="text-5xl md:text-display-2 font-serif text-cream leading-tight mb-8">
                {data.heading}
              </h1>
              <p className="text-xl text-cream/70 font-light leading-relaxed max-w-lg mb-10">
                {data.intro}
              </p>
              <Link href="/investigacion" className="btn-light inline-block">
                Leer el artículo completo
              </Link>
            </div>
            
            {/* Hero Image */}
            <div className="hidden lg:block animate-fade-in">
              <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden shadow-2xl border border-cream/10">
                <Image
                  src="/science-broth.png"
                  alt="Investigación científica y colágeno"
                  fill
                  className="object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-brown via-transparent to-transparent opacity-60"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Properties Grid (Icon Cards) ─── */}
      <section className="section-padding bg-stone-grey px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.properties.map((prop, index) => (
              <Link
                href={`/propiedades/${prop.slug}`}
                key={index}
                className="group block bg-cream rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 p-10 relative"
              >
                {/* Icon */}
                <div className="text-saddle-brown mb-6 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                  {icons[prop.slug] || (
                    <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12">
                      <circle cx="32" cy="32" r="20" stroke="currentColor" strokeWidth="2.5" />
                    </svg>
                  )}
                </div>

                {/* Number */}
                <span className="absolute top-8 right-8 text-saddle-brown font-serif text-5xl font-light opacity-10 group-hover:opacity-20 transition-opacity">
                  0{index + 1}
                </span>

                <h3 className="text-2xl font-serif text-deep-brown mb-4 group-hover:text-saddle-brown transition-colors leading-tight">
                  {prop.title}
                </h3>
                <p className="text-deep-brown/70 leading-relaxed font-light line-clamp-3 text-sm">
                  {prop.description}
                </p>
                <div className="mt-8 flex items-center text-saddle-brown text-xs font-bold uppercase tracking-widest group-hover:translate-x-2 transition-transform duration-300">
                  Leer más <span className="ml-2">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA Section (Dark) ─── */}
      <section className="relative py-40 px-6 overflow-hidden bg-deep-brown">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-warm-tan via-transparent to-transparent pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <span className="text-warm-tan text-sm uppercase tracking-widest font-bold mb-6 block">
            Nutrición Ancestral
          </span>
          <h2 className="text-4xl md:text-display-2 font-serif text-cream mb-8 leading-tight">
            Eleva tu Biología.
          </h2>
          <p className="text-xl text-cream/70 font-light mb-12 leading-relaxed">
            Incorpora el extracto más denso de colágeno a tu rutina diaria.
          </p>
          <a
            href="https://wa.link/0b7wwd"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 bg-transparent border border-cream text-cream text-sm font-bold tracking-[0.2em] uppercase hover:bg-cream hover:text-deep-brown transition-all duration-300 rounded-none shadow-lg inline-block"
          >
            Adquirir BRODE
          </a>
        </div>
      </section>
    </div>
  );
}
