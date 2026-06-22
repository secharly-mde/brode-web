import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import data from "../../../../content/propiedades/index.json";

export async function generateStaticParams() {
  return data.properties.map((prop) => ({
    slug: prop.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const prop = data.properties.find((p) => p.slug === params.slug);
  if (!prop) return { title: "Propiedad no encontrada" };

  return {
    title: `${prop.title} | Propiedades BRODE`,
    description: prop.description,
    alternates: { canonical: `https://brode.uy/propiedades/${prop.slug}` },
  };
}

export default function PropiedadInnerPage({ params }: { params: { slug: string } }) {
  const propIndex = data.properties.findIndex((p) => p.slug === params.slug);
  const prop = data.properties[propIndex];

  if (!prop) {
    notFound();
  }

  const prev = propIndex > 0 ? data.properties[propIndex - 1] : null;
  const next = propIndex < data.properties.length - 1 ? data.properties[propIndex + 1] : null;

  return (
    <div className="bg-cream selection:bg-brand-gold selection:text-deep-brown min-h-screen">
      
      {/* ─── Hero ─── */}
      <div className="bg-deep-brown pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/propiedades"
            className="text-brand-gold/70 text-xs uppercase tracking-widest font-bold mb-10 inline-flex items-center hover:text-brand-gold transition-colors"
          >
            <span className="mr-2">←</span> Volver a Propiedades
          </Link>

          <div className="mt-8">
            <span className="text-brand-gold/40 font-serif text-6xl font-light block mb-4">
              0{propIndex + 1}
            </span>
            <h1 className="text-5xl md:text-display-2 font-serif text-cream leading-tight mb-8">
              {prop.title}
            </h1>
            <p className="text-2xl text-cream/60 font-light leading-relaxed max-w-2xl">
              {prop.description}
            </p>
          </div>
        </div>
      </div>

      {/* ─── Separator ─── */}
      <div className="w-full h-px bg-deep-brown/10" />

      {/* ─── Article Body ─── */}
      <div className="max-w-3xl mx-auto px-6 py-20">
        <div className="prose prose-lg prose-stone max-w-none text-deep-brown/80 font-light leading-relaxed [&>p]:text-lg [&>p]:leading-[1.9] [&>p]:mb-8 [&>h2]:font-serif [&>h2]:text-deep-brown [&>h2]:text-3xl [&>h2]:mt-16 [&>h2]:mb-6 [&>h3]:font-serif [&>h3]:text-deep-brown [&>h3]:text-2xl [&>h3]:mt-12 [&>h3]:mb-4">
          <p>{prop.content.children[0].children[0].text}</p>
        </div>

        {/* ─── References ─── */}
        {prop.references && prop.references.length > 0 && (
          <div className="border-t border-deep-brown/10 pt-16 mt-8">
            <span className="text-brand-gold text-xs uppercase tracking-widest font-bold mb-8 block">
              Referencias Académicas
            </span>
            <ul className="space-y-4">
              {prop.references.map((ref: { citation: string }, idx: number) => (
                <li
                  key={idx}
                  className="text-sm text-deep-brown/50 italic pl-5 border-l border-brand-gold/30 leading-relaxed"
                >
                  {ref.citation}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* ─── Navigation between properties ─── */}
      <div className="border-t border-deep-brown/10 bg-stone-grey">
        <div className="max-w-4xl mx-auto px-6 py-12 flex items-center justify-between gap-8">
          {prev ? (
            <Link
              href={`/propiedades/${prev.slug}`}
              className="group flex items-center gap-4 text-left max-w-xs hover:-translate-x-1 transition-transform"
            >
              <span className="text-brand-gold text-lg group-hover:text-deep-brown transition-colors">←</span>
              <div>
                <span className="text-xs uppercase tracking-widest text-deep-brown/40 block mb-1">Anterior</span>
                <span className="font-serif text-deep-brown text-lg group-hover:text-brand-gold transition-colors leading-tight">
                  {prev.title}
                </span>
              </div>
            </Link>
          ) : <div />}

          {next ? (
            <Link
              href={`/propiedades/${next.slug}`}
              className="group flex items-center gap-4 text-right max-w-xs hover:translate-x-1 transition-transform"
            >
              <div>
                <span className="text-xs uppercase tracking-widest text-deep-brown/40 block mb-1">Siguiente</span>
                <span className="font-serif text-deep-brown text-lg group-hover:text-brand-gold transition-colors leading-tight">
                  {next.title}
                </span>
              </div>
              <span className="text-brand-gold text-lg group-hover:text-deep-brown transition-colors">→</span>
            </Link>
          ) : <div />}
        </div>
      </div>

      {/* ─── CTA ─── */}
      <div className="bg-deep-brown py-20 px-6 text-center">
        <p className="text-cream/60 text-sm uppercase tracking-widest mb-6">Listo para empezar</p>
        <h2 className="text-3xl md:text-4xl font-serif text-cream mb-10">Adquirí tu BRODE</h2>
        <a
          href="https://wa.link/0b7wwd"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-light"
        >
          Escribinos por WhatsApp
        </a>
      </div>

    </div>
  );
}
