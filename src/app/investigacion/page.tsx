import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Investigación y Evidencia | BRODE",
  description: "La ciencia detrás del caldo de huesos, colágeno y los aminoácidos esenciales.",
};

export default function InvestigacionPage() {
  return (
    <div className="bg-cream selection:bg-brand-gold selection:text-deep-brown min-h-screen">
      <div className="max-w-4xl mx-auto px-6 pt-32 pb-24">
        <Link href="/propiedades" className="text-brand-gold text-sm uppercase tracking-widest font-bold mb-12 inline-flex items-center hover:-translate-x-2 transition-transform">
          <span className="mr-2">←</span> Volver a Propiedades
        </Link>
        
        <h1 className="text-5xl md:text-display-2 font-serif text-deep-brown mb-8 leading-tight">
          Investigación clínica y evidencia científica
        </h1>
        
        <p className="text-2xl text-deep-brown/70 font-light leading-relaxed mb-16">
          La nutrición ancestral respaldada por la ciencia moderna. Exploramos la evidencia clínica detrás del colágeno, la glicina y los beneficios estructurales de la extracción prolongada.
        </p>

        <div className="prose prose-lg prose-stone max-w-none text-deep-brown/80 font-light leading-relaxed [&>p]:text-lg [&>p]:leading-[1.9] [&>p]:mb-8 [&>h2]:font-serif [&>h2]:text-deep-brown [&>h2]:text-3xl [&>h2]:mt-16 [&>h2]:mb-6 [&>h3]:font-serif [&>h3]:text-deep-brown [&>h3]:text-2xl [&>h3]:mt-12 [&>h3]:mb-4">
          
          <h2>1. La matriz del colágeno: más allá de la estética</h2>
          <p>
            El colágeno es la proteína más abundante en el cuerpo humano, representando alrededor del 30% del contenido proteico total. La matriz extracelular (MEC), compuesta mayoritariamente por colágeno tipo I, II y III, es esencial para la integridad estructural de la piel, huesos, tendones y cartílagos.
          </p>
          <p>
            Estudios clínicos han demostrado que la suplementación oral con péptidos de colágeno ricos en prolina e hidroxiprolina estimula la expresión de ARNm de colágeno tipo I y II en los condrocitos, promoviendo la síntesis de macromoléculas en la matriz extracelular del cartílago. Esto se traduce clínicamente en una mejora significativa en la movilidad y reducción del dolor en pacientes con osteoartritis y desgaste articular inducido por el deporte.
          </p>

          <h2>2. Glicina: el neurotransmisor inhibidor y el factor de longevidad</h2>
          <p>
            La glicina, el aminoácido más abundante en el colágeno, juega un papel dual crítico. A nivel del sistema nervioso central, actúa como un potente neurotransmisor inhibidor a través del receptor de glicina (GlyR). La ingesta de glicina antes de dormir ha demostrado cruzar la barrera hematoencefálica, disminuir la temperatura corporal central mediante vasodilatación periférica y mejorar sustancialmente tanto la latencia como la arquitectura del sueño (incremento del sueño de ondas lentas).
          </p>
          <p>
            En el contexto metabólico y de longevidad, la glicina es un cofactor indispensable para la síntesis de glutatión (GSH), el principal antioxidante endógeno celular. La deficiencia relativa de glicina exacerba el estrés oxidativo tisular y la disfunción mitocondrial asociados al envejecimiento. Modelos de restricción de metionina y suplementación con glicina han mostrado extensiones significativas en la expectativa de vida de mamíferos.
          </p>

          <h2>3. L-Glutamina y reparación del microbioma</h2>
          <p>
            La mucosa intestinal requiere de una renovación celular constante, demandando un alto flujo de energía metabólica. La L-Glutamina, altamente biodisponible en el caldo de cocción prolongada, es el sustrato energético principal de los enterocitos (células epiteliales del intestino) y los colonocitos.
          </p>
          <p>
            La hiperpermeabilidad intestinal (conocida como síndrome de &quot;Leaky Gut&quot;) se asocia a endotoxemia metabólica e inflamación sistémica de bajo grado. La evidencia demuestra que la L-Glutamina regula la expresión y distribución de las proteínas de las uniones estrechas (tight junctions) como la claudina-1 y la ocludina, restaurando la función de barrera intestinal y mitigando la translocación de lipopolisacáridos (LPS) bacterianos al torrente sanguíneo.
          </p>

          <h2>4. Extracción prolongada vs. suplementación aislada</h2>
          <p>
            El caldo de huesos requiere un proceso de hidrólisis térmica lenta (más de 16 horas en el caso de BRODE) asistida por un pH ligeramente ácido. Este proceso, a diferencia de los colágenos hidrolizados industrialmente, permite la extracción no solo de aminoácidos estructurales, sino también de una matriz sinérgica de Glicosaminoglicanos (GAGs) como el ácido hialurónico, condroitín sulfato y minerales bio-iónicos (magnesio, calcio, fósforo) directamente de la médula y el tejido esponjoso.
          </p>

          <hr className="my-16 border-deep-brown/10" />

          <h2>Referencias destacadas</h2>
          <ul className="space-y-6 text-base">
            <li className="pl-6 border-l border-brand-gold/30 italic">
              <strong>Clark, K. L., et al. (2008).</strong> &quot;24-Week study on the use of collagen hydrolysate as a dietary supplement in athletes with activity-related joint pain.&quot; Current Medical Research and Opinion.
            </li>
            <li className="pl-6 border-l border-brand-gold/30 italic">
              <strong>Bannai, M., & Kawai, N. (2012).</strong> &quot;New therapeutic strategy for amino acid medicine: glycine improves the quality of sleep.&quot; Journal of Pharmacological Sciences.
            </li>
            <li className="pl-6 border-l border-brand-gold/30 italic">
              <strong>Rao, R., & Samak, G. (2012).</strong> &quot;Role of Glutamine in Protection of Intestinal Epithelial Tight Junctions.&quot; Journal of Epithelial Biology and Pharmacology.
            </li>
            <li className="pl-6 border-l border-brand-gold/30 italic">
              <strong>McCarty, M. F., et al. (2014).</strong> &quot;The cardiometabolic benefits of glycine: Is glycine an &apos;antidote&apos; to dietary fructose?&quot; Medical Hypotheses.
            </li>
            <li className="pl-6 border-l border-brand-gold/30 italic">
              <strong>Sekhar, R. V., et al. (2011).</strong> &quot;Deficient synthesis of glutathione underlies oxidative stress in aging and can be corrected by dietary supplementation with cysteine and glycine.&quot; The American Journal of Clinical Nutrition.
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
}
