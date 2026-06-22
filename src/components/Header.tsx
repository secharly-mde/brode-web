"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/ingredientes", label: "Ingredientes" },
    { href: "/propiedades", label: "Propiedades" },
    { href: "/shop", label: "Comprar" },
  ];

  const headerBgClass = isHomePage 
    ? (isScrolled ? "bg-cream bg-opacity-95 backdrop-blur-sm shadow-sm py-4" : "bg-transparent py-6")
    : "bg-cream bg-opacity-95 backdrop-blur-sm shadow-sm py-4";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBgClass}`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="font-sans text-3xl md:text-4xl font-black tracking-tight text-brand-gold hover:opacity-80 flex items-start"
        >
          BRODE<span className="text-sm font-bold ml-0.5 mt-1">®</span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-sm font-medium tracking-wide uppercase transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-px after:transition-all after:duration-300 hover:after:w-full ${
                  (isScrolled || !isHomePage)
                    ? "text-deep-brown hover:text-brand-gold after:bg-brand-gold" 
                    : "text-cream hover:text-brand-gold after:bg-brand-gold"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <button
          id="mobile-menu-toggle"
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span
            className={`block w-6 h-px transition-all duration-300 ${
              (isScrolled || !isHomePage) ? "bg-deep-brown" : "bg-cream"
            } ${isMenuOpen ? "rotate-45 translate-y-[7px]" : ""}`}
          />
          <span
            className={`block w-6 h-px transition-all duration-300 ${
              (isScrolled || !isHomePage) ? "bg-deep-brown" : "bg-cream"
            } ${isMenuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-px transition-all duration-300 ${
              (isScrolled || !isHomePage) ? "bg-deep-brown" : "bg-cream"
            } ${isMenuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-cream border-b border-brand-gold border-opacity-30 transition-all duration-300 overflow-hidden ${
          isMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center py-8 gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-deep-brown text-base font-medium tracking-wide uppercase hover:text-brand-gold transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
