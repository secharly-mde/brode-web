import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-deep-brown text-off-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {/* Brand Column */}
          <div>
            <Link
              href="/"
              className="font-serif text-2xl font-semibold tracking-tight text-off-white"
            >
              BRODE<sup className="text-xs font-normal align-super">®</sup>
            </Link>
            <p className="mt-4 text-sm text-warm-tan leading-relaxed max-w-xs">
              El ritual diario de nutrición profunda.
            </p>
          </div>

          {/* Links Column */}
          <div>
            <h4 className="text-xs font-sans font-semibold uppercase tracking-widest text-warm-tan mb-6">
              Navegación
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/ingredientes", label: "Ingredientes" },
                { href: "/propiedades", label: "Propiedades" },
                { href: "/shop", label: "Comprar" },
                { href: "/#contacto", label: "Contacto" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-off-white text-opacity-70 hover:text-opacity-100 transition-opacity duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-xs font-sans font-semibold uppercase tracking-widest text-warm-tan mb-6">
              Contacto
            </h4>
            <ul className="space-y-3 text-sm text-off-white text-opacity-70">
              <li>
                <a
                  href="mailto:brode@brode.uy"
                  className="hover:text-opacity-100 transition-opacity duration-300"
                >
                  brode@brode.uy
                </a>
              </li>
              <li>
                <a
                  href="https://wa.link/0b7wwd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-opacity-100 transition-opacity duration-300"
                >
                  +598 92 60 88 88
                </a>
              </li>
            </ul>
            {/* Social Icons */}
            <div className="flex items-center gap-5 mt-6">
              <a
                href="https://www.instagram.com/brode.uy/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-off-white text-opacity-70 hover:text-opacity-100 transition-opacity duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/Brode-101266901766764"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-off-white text-opacity-70 hover:text-opacity-100 transition-opacity duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-off-white border-opacity-10 text-center">
          <p className="text-xs text-off-white text-opacity-50">
            ©2026 BRODE®. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
