"use client";

import { useState, FormEvent } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/xpwdjqvz", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        // Fallback to mailto
        const name = formData.get("name") as string;
        const email = formData.get("email") as string;
        const message = formData.get("message") as string;
        window.location.href = `mailto:brode@brode.uy?subject=Consulta de ${name}&body=${encodeURIComponent(
          `De: ${name} (${email})\n\n${message}`
        )}`;
        setStatus("success");
      }
    } catch {
      // Fallback to mailto on network error
      const name = formData.get("name") as string;
      const email = formData.get("email") as string;
      const message = formData.get("message") as string;
      window.location.href = `mailto:brode@brode.uy?subject=Consulta de ${name}&body=${encodeURIComponent(
        `De: ${name} (${email})\n\n${message}`
      )}`;
      setStatus("success");
    }
  }

  if (status === "success") {
    return (
      <div className="card text-center py-12">
        <div className="text-4xl mb-4">✓</div>
        <p className="text-xl font-serif text-deep-brown">
          ¡Gracias por tu mensaje!
        </p>
        <p className="text-sm text-deep-brown text-opacity-60 mt-2">
          Te responderemos lo antes posible.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm text-brand-gold underline underline-offset-4 hover:text-deep-brown transition-colors"
        >
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6"
      id="contact-form"
    >
      <div>
        <label
          htmlFor="contact-name"
          className="block text-sm font-medium text-deep-brown mb-2"
        >
          Nombre
        </label>
        <input
          type="text"
          id="contact-name"
          name="name"
          required
          className="w-full px-4 py-3 bg-off-white border border-brand-gold border-opacity-40 rounded-sm text-deep-brown placeholder-deep-brown placeholder-opacity-30 focus:outline-none focus:border-brand-gold transition-colors duration-300"
          placeholder="Tu nombre"
        />
      </div>
      <div>
        <label
          htmlFor="contact-email"
          className="block text-sm font-medium text-deep-brown mb-2"
        >
          Email
        </label>
        <input
          type="email"
          id="contact-email"
          name="email"
          required
          className="w-full px-4 py-3 bg-off-white border border-brand-gold border-opacity-40 rounded-sm text-deep-brown placeholder-deep-brown placeholder-opacity-30 focus:outline-none focus:border-brand-gold transition-colors duration-300"
          placeholder="tu@email.com"
        />
      </div>
      <div>
        <label
          htmlFor="contact-message"
          className="block text-sm font-medium text-deep-brown mb-2"
        >
          Mensaje
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          className="w-full px-4 py-3 bg-off-white border border-brand-gold border-opacity-40 rounded-sm text-deep-brown placeholder-deep-brown placeholder-opacity-30 focus:outline-none focus:border-brand-gold transition-colors duration-300 resize-none"
          placeholder="¿En qué podemos ayudarte?"
        />
      </div>
      <button
        type="submit"
        id="contact-submit"
        disabled={status === "sending"}
        className="btn-primary w-full disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "sending" ? "Enviando..." : "Enviar mensaje"}
      </button>
    </form>
  );
}
