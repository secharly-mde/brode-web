import type { Metadata } from "next";
import Image from "next/image";
import data from "../../../content/ingredientes/index.json";

export const metadata: Metadata = {
  title: "Ingredientes",
  description:
    "Ingredientes reales del caldo de huesos BRODE. Nada que no reconozcas. Nada que no puedas pronunciar.",
  alternates: {
    canonical: "https://brode.uy/ingredientes",
  },
};

export default function IngredientesPage() {
  return (
    <div className="bg-cream selection:bg-brand-gold selection:text-deep-brown">
      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-24 px-6 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-display-2 font-serif text-deep-brown mb-8">
            {data.heading}
          </h1>
          <p className="text-xl md:text-2xl text-deep-brown/70 font-serif font-light italic">
            &quot;{data.intro}&quot;
          </p>
        </div>
      </section>

      {/* Ingredients Grid */}
      <section className="bg-stone-grey section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-serif text-deep-brown">
                {data.ingredientsTitle}
              </h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {data.ingredientsList?.map((item: Record<string, string>, idx: number) => (
                <div key={idx} className="bg-cream rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                  <div className="relative h-64 w-full img-zoom-hover">
                    <Image
                      src={item.image || "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?q=80&w=2070&auto=format&fit=crop"}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-serif text-deep-brown mb-2">{item.name}</h3>
                    <p className="text-sm text-deep-brown/80 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Time Section - Full Width */}
            {data.timeSection && (
              <div className="mt-16 bg-deep-brown text-cream rounded-2xl p-10 md:p-16 text-center shadow-xl">
                <div className="max-w-3xl mx-auto">
                  <span className="text-brand-gold text-sm font-bold tracking-widest uppercase mb-4 block">
                    Concepto Fundamental
                  </span>
                  <h3 className="text-3xl md:text-4xl font-serif text-brand-gold mb-6">
                    {data.timeSection.title}
                  </h3>
                  <p className="text-lg md:text-xl text-cream/90 leading-relaxed font-light">
                    {data.timeSection.description}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
