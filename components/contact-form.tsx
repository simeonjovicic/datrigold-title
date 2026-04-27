"use client";

import { useState } from "react";

export function ContactForm({
  fields,
  cta,
}: {
  fields: { name: string; label: string; type?: string; textarea?: boolean; placeholder?: string }[];
  cta: string;
}) {
  const [sent, setSent] = useState(false);

  return (
    <form
      className="grid gap-5"
      onSubmit={(event) => {
        event.preventDefault();
        setSent(true);
      }}
    >
      {fields.map((field) => (
        <label key={field.name} className="block">
          <span className="font-display text-[10px] tracking-[0.4em] uppercase text-gold">{field.label}</span>
          {field.textarea ? (
            <textarea
              name={field.name}
              rows={5}
              placeholder={field.placeholder}
              className="mt-2 w-full bg-paper border border-charcoal/20 px-4 py-3 text-charcoal placeholder:text-charcoal/35 focus:outline-none focus:border-gold"
            />
          ) : (
            <input
              type={field.type ?? "text"}
              name={field.name}
              placeholder={field.placeholder}
              className="mt-2 w-full h-12 bg-paper border border-charcoal/20 px-4 text-charcoal placeholder:text-charcoal/35 focus:outline-none focus:border-gold"
            />
          )}
        </label>
      ))}
      <button
        type="submit"
        className="mt-2 inline-flex items-center justify-center gap-3 px-7 h-14 bg-charcoal hover:bg-gold text-bone font-display text-sm tracking-[0.32em] transition-colors"
      >
        {cta}
        <span aria-hidden>→</span>
      </button>

      {sent && (
        <div className="border border-gold/35 bg-gold/10 p-4 text-sm leading-relaxed text-charcoal/75">
          Danke. Deine Anfrage wurde als Demo gespeichert. Eine echte Übermittlung findet in diesem Mockup nicht statt.
        </div>
      )}
    </form>
  );
}
