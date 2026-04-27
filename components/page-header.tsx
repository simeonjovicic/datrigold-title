export function PageHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
}) {
  return (
    <section className="relative pt-28 lg:pt-32 pb-14 lg:pb-16 overflow-hidden border-b border-charcoal/10 bg-paper">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(184,138,44,0.10)_0%,transparent_62%)]" />
      <div className="absolute inset-0 grain opacity-20" />
      <div className="absolute inset-x-0 bottom-0 h-px gold-line opacity-30" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex items-center gap-3">
          <span className="h-px w-10 bg-gold" />
          <span className="font-display text-[11px] tracking-[0.45em] text-gold">{eyebrow}</span>
        </div>
        <h1 className="mt-5 font-display text-5xl sm:text-6xl lg:text-8xl leading-[0.9] text-charcoal">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 max-w-2xl text-charcoal/65 text-base lg:text-lg">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
