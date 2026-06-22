"use client";

import { useEffect, useRef, useState } from "react";

export default function NutritionGrid() {
  const [isVisible, setIsVisible] = useState(false);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (gridRef.current) {
      observer.observe(gridRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { value: "45", label: "Calorías", sub: "Súper bajo", delay: "0ms" },
    { value: "10", unit: "g", label: "Proteína", sub: "Colágeno y aminos", delay: "200ms" },
    { value: "0", unit: "g", label: "Carbohidratos", sub: "Keto friendly", delay: "400ms" },
    { value: "0", unit: "g", label: "Grasas", sub: "Desgrasado en frío", delay: "600ms" },
  ];

  return (
    <div 
      ref={gridRef}
      className="bg-white rounded-3xl p-8 md:p-10 shadow-xl shadow-brand-gold/5 border border-brand-gold/10"
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6">
        {stats.map((stat, index) => (
          <div 
            key={index}
            className={`flex flex-col items-center text-center ${index > 0 ? 'md:border-l border-brand-gold/10' : ''} transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: isVisible ? stat.delay : '0ms' }}
          >
            <span className="text-4xl md:text-5xl font-serif text-brand-gold mb-2">
              {stat.value}{stat.unit && <span className="text-xl md:text-2xl">{stat.unit}</span>}
            </span>
            <span className="text-xs uppercase tracking-widest font-bold text-deep-brown/70">{stat.label}</span>
            <span className="text-sm font-light text-deep-brown/50 mt-1">{stat.sub}</span>
          </div>
        ))}
      </div>
      <div className={`mt-8 flex justify-center items-center gap-3 text-xs md:text-sm text-deep-brown/60 italic font-light text-center transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: isVisible ? '800ms' : '0ms' }}>
        <div className="w-1.5 h-1.5 rounded-full bg-brand-gold/40 hidden md:block" />
        Valores promedio por porción (240ml). Alto en Sodio, Potasio y Magnesio naturales.
      </div>
    </div>
  );
}
