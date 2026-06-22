import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import homeData from "../../content/home/index.json";

export default function Home() {
  return (
    <div className="bg-cream selection:bg-warm-tan selection:text-deep-brown">
      {/* ─── Hero Section (Full Bleed) ─── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image - Full height and width, dark overlay for contrast */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-bg-hd.png"
            alt="BRODE - Nutrición Ancestral"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          {/* Gradient and uniform overlay for better text legibility */}
          <div className="absolute inset-0 bg-deep-brown/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-deep-brown via-deep-brown/40 to-transparent" />
        </div>

        <div className="relative z-20 text-center max-w-5xl mx-auto px-6 mt-20 animate-fade-in">
          <span className="text-warm-tan text-sm uppercase tracking-[0.3em] font-medium mb-6 block drop-shadow-md">Nutrición Funcional</span>
          <h1 className="text-5xl md:text-display-1 font-serif text-cream leading-tight drop-shadow-xl font-medium tracking-tight">
            {homeData.hero.headline}
          </h1>
          <div className="mt-8">
            <p className="text-lg md:text-xl text-cream font-light max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
              Caldo de huesos premium de cocción lenta. Máxima concentración de colágeno, gelatina y aminoácidos esenciales para reparación celular, salud articular y soporte digestivo.
            </p>
            <p className="mt-4 text-warm-tan font-serif text-2xl drop-shadow-md">
              Sin atajos. Sin aditivos.
            </p>
          </div>
          <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="https://wa.link/0b7wwd"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-transparent border border-cream text-cream text-sm font-bold tracking-[0.2em] uppercase hover:bg-cream hover:text-deep-brown transition-all duration-300 rounded-none shadow-lg"
            >
              Adquirir BRODE
            </a>
            <Link
              href="#ciencia"
              className="px-10 py-4 bg-transparent border border-warm-tan text-warm-tan text-sm font-bold tracking-[0.2em] uppercase hover:bg-warm-tan hover:text-deep-brown transition-all duration-300 rounded-none shadow-lg"
            >
              Descubrir la Ciencia
            </Link>
          </div>
        </div>
      </section>

      {/* ─── La Ciencia Section (Editorial Layout) ─── */}
      <section id="ciencia" className="section-padding bg-cream text-deep-brown">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5">
              <span className="text-saddle-brown text-sm uppercase tracking-widest font-bold mb-4 block">Fisiología Aplicada</span>
              <h2 className="text-4xl md:text-h2 font-serif leading-tight">
                {homeData.technical.heading}
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-8">
              <p className="text-xl md:text-2xl text-deep-brown/80 font-serif font-light leading-relaxed">
                {homeData.technical.body1}
              </p>
              <div className="w-24 h-px bg-saddle-brown/30" />
              <p className="text-lg text-deep-brown/70 leading-relaxed">
                {homeData.technical.body2}
              </p>
              
              {/* Nutritional Profile Grid */}
              <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-saddle-brown/10 pt-10">
                <div className="flex flex-col">
                  <span className="text-4xl font-serif text-saddle-brown mb-1">45</span>
                  <span className="text-xs uppercase tracking-widest font-bold text-deep-brown/70">Calorías</span>
                  <span className="text-sm font-light text-deep-brown/50 mt-1">Súper bajo</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-4xl font-serif text-saddle-brown mb-1">10<span className="text-2xl">g</span></span>
                  <span className="text-xs uppercase tracking-widest font-bold text-deep-brown/70">Proteína</span>
                  <span className="text-sm font-light text-deep-brown/50 mt-1">Colágeno y aminos</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-4xl font-serif text-saddle-brown mb-1">0<span className="text-2xl">g</span></span>
                  <span className="text-xs uppercase tracking-widest font-bold text-deep-brown/70">Carbohidratos</span>
                  <span className="text-sm font-light text-deep-brown/50 mt-1">Keto friendly</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-4xl font-serif text-saddle-brown mb-1">0<span className="text-2xl">g</span></span>
                  <span className="text-xs uppercase tracking-widest font-bold text-deep-brown/70">Grasas</span>
                  <span className="text-sm font-light text-deep-brown/50 mt-1">Desgrasado en frío</span>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-3 text-sm text-deep-brown/60 italic font-light">
                <div className="w-1.5 h-1.5 rounded-full bg-saddle-brown/40" />
                Valores promedio por porción (240ml). Rico en Sodio, Potasio y Magnesio naturales.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Image Break (Full width) ─── */}
      <div className="w-full h-[60vh] relative">
        <Image
          src="/divider-bg-hd.png"
          alt="Ingredientes BRODE"
          fill
          className="object-cover"
        />
      </div>

      {/* ─── Productos Section (Editorial Grid) ─── */}
      <section className="section-padding bg-stone-grey">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div>
              <span className="text-saddle-brown text-sm uppercase tracking-widest font-bold mb-4 block">Nuestra Colección</span>
              <h2 className="text-4xl md:text-h2 font-serif text-deep-brown">
                {homeData.productos.heading}
              </h2>
            </div>
            <a
              href="https://wa.link/0b7wwd"
              target="_blank"
              rel="noopener noreferrer"
              className="text-saddle-brown text-sm font-bold tracking-widest uppercase hover:text-deep-brown transition-colors group flex items-center gap-2"
            >
              Ver tienda completa 
              <span className="group-hover:translate-x-2 transition-transform">→</span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            {homeData.productos.items.map((product, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative h-[600px] w-full mb-8 overflow-hidden bg-stone-grey border border-deep-brown/5 rounded-3xl">
                  <Image
                    src={index === 0 ? "/brode-res.png" : "/brode-pollo.png"}
                    alt={product.name}
                    fill
                    className="object-contain p-12 drop-shadow-xl transition-transform duration-1000 ease-out group-hover:scale-105 group-hover:-translate-y-2"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {/* Subtle vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-brown/10 to-transparent pointer-events-none" />
                </div>
                <div className="flex justify-between items-start gap-6">
                  <div>
                    <h3 className="text-2xl font-serif text-deep-brown mb-3">
                      {product.name}
                    </h3>
                    <p className="text-sm font-bold tracking-widest text-saddle-brown uppercase mb-4">
                      {product.details}
                    </p>
                    <p className="text-deep-brown/70 leading-relaxed max-w-md">
                      {product.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Por qué BRODE Section (High Contrast) ─── */}
      <section className="section-padding bg-deep-brown text-cream">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-warm-tan text-sm uppercase tracking-widest font-bold mb-4 block">Beneficios Clínicos</span>
            <h2 className="text-4xl md:text-h2 font-serif">
              {homeData.porQue.heading}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
            {homeData.porQue.features.map((feature, index) => (
              <div key={index} className="relative">
                <div className="text-6xl font-serif text-warm-tan/10 absolute -top-10 -left-4 z-0">
                  0{index + 1}
                </div>
                <div className="relative z-10">
                  <h3 className="text-xl font-serif text-warm-tan mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-cream/70 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Ritual Section (Text Focus) ─── */}
      <section className="py-32 px-6 bg-cream">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-display-2 font-serif text-deep-brown mb-10">
            {homeData.ritual.heading}
          </h2>
          <p className="text-xl md:text-2xl text-deep-brown/80 font-light leading-relaxed mb-14 font-serif">
            &quot;{homeData.ritual.body}&quot;
          </p>
          <a
            href="https://wa.link/0b7wwd"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Comenzar mi ritual
          </a>
        </div>
      </section>

      {/* ─── Contacto Section ─── */}
      <section id="contacto" className="section-padding bg-stone-grey border-t border-deep-brown/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            {/* Left: Contact Info */}
            <div>
              <h2 className="text-4xl md:text-h2 font-serif text-deep-brown mb-8">
                {homeData.contacto.heading}
              </h2>
              <p className="text-deep-brown/70 text-lg mb-12 max-w-md">
                Consultas sobre protocolos de nutrición, pedidos mayoristas o dudas sobre nuestros extractos.
              </p>
              <div className="space-y-6">
                <a
                  href="mailto:brode@brode.uy"
                  className="block text-xl font-serif text-deep-brown hover:text-saddle-brown transition-colors"
                >
                  brode@brode.uy
                </a>
                <a
                  href="https://wa.link/0b7wwd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-xl font-serif text-deep-brown hover:text-saddle-brown transition-colors"
                >
                  +598 92 60 88 88
                </a>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="bg-cream p-10 md:p-12 shadow-2xl shadow-deep-brown/5">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
