export function ContactForm({
  fields,
  cta,
}: {
  fields: { name: string; label: string; type?: string; textarea?: boolean; placeholder?: string }[];
  cta: string;
}) {
  return (
    <form className="grid gap-5">
      {fields.map((f) => (
        <label key={f.name} className="block">
          <span className="font-display text-[10px] tracking-[0.4em] uppercase text-gold">{f.label}</span>
          {f.textarea ? (
            <textarea
              name={f.name}
              rows={5}
              placeholder={f.placeholder}
              className="mt-2 w-full bg-paper border border-charcoal/20 px-4 py-3 text-charcoal placeholder:text-charcoal/35 focus:outline-none focus:border-gold"
            />
          ) : (
            <input
              type={f.type ?? "text"}
              name={f.name}
              placeholder={f.placeholder}
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
    </form>
  );
}
