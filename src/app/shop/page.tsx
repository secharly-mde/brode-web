import type { Metadata } from "next";
import Image from "next/image";
import data from "../../../content/shop/index.json";

export const metadata: Metadata = {
  title: "Adquirir | BRODE",
  description:
    "Adquirí tu caldo de huesos BRODE. Entrega directa en Montevideo y zona metropolitana.",
  alternates: {
    canonical: "https://brode.uy/shop",
  },
};

export default function ShopPage() {


  return (
    <div className="bg-cream selection:bg-warm-tan selection:text-deep-brown min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in">
          <h1 className="text-5xl md:text-display-2 font-serif text-deep-brown mb-6">
            {data.heading}
          </h1>
          <p className="text-lg text-deep-brown/70 font-light max-w-2xl mx-auto">
            {data.body}
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 mb-20">
          {/* Res */}
          <div className="group text-center">
            <div className="relative h-[500px] md:h-[600px] w-full mb-8 overflow-hidden bg-stone-grey border border-deep-brown/5 rounded-3xl">
              <Image
                src="/brode-res.png"
                alt="Extracto de Res"
                fill
                className="object-contain p-12 drop-shadow-xl transition-transform duration-1000 ease-out group-hover:scale-105 group-hover:-translate-y-2"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <h3 className="text-3xl font-serif text-deep-brown mb-2">
              Caldo de Res
            </h3>
            <p className="text-sm uppercase tracking-widest text-saddle-brown font-bold mb-6">
              16h Cocción · Pastura
            </p>
            <a
              href="https://wa.link/0b7wwd"
              target="_blank"
              rel="noopener noreferrer"
              className="border-b border-deep-brown pb-1 text-sm font-bold uppercase tracking-widest hover:text-saddle-brown hover:border-saddle-brown transition-colors"
            >
              Agregar al pedido
            </a>
          </div>

          {/* Pollo */}
          <div className="group text-center">
            <div className="relative h-[500px] md:h-[600px] w-full mb-8 overflow-hidden bg-stone-grey border border-deep-brown/5 rounded-3xl">
              <Image
                src="/brode-pollo.png"
                alt="Extracto de Pollo"
                fill
                className="object-contain p-12 drop-shadow-xl transition-transform duration-1000 ease-out group-hover:scale-105 group-hover:-translate-y-2"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <h3 className="text-3xl font-serif text-deep-brown mb-2">
              Caldo de Pollo
            </h3>
            <p className="text-sm uppercase tracking-widest text-saddle-brown font-bold mb-6">
              16h Cocción · Campo
            </p>
            <a
              href="https://wa.link/0b7wwd"
              target="_blank"
              rel="noopener noreferrer"
              className="border-b border-deep-brown pb-1 text-sm font-bold uppercase tracking-widest hover:text-saddle-brown hover:border-saddle-brown transition-colors"
            >
              Agregar al pedido
            </a>
          </div>
        </div>

        {/* Global CTA & Info */}
        <div className="max-w-2xl mx-auto text-center border-t border-deep-brown/10 pt-16">
          <a
            href="https://wa.link/0b7wwd"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full sm:w-auto"
          >
            {data.ctaText}
          </a>
          <p className="mt-8 text-deep-brown/60 text-sm">
            {data.secondaryText}
          </p>
          

        </div>
      </div>
    </div>
  );
}
