export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
}: {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: "left" | "center";
}) {
  const center = align === "center";
  return (
    <div className={center ? "text-center mx-auto max-w-3xl" : "max-w-3xl"}>
      <div
        className={`flex items-center gap-3 ${center ? "justify-center" : ""}`}
      >
        <span className="h-px w-10 bg-gold" />
        <span className="font-display text-[11px] tracking-[0.45em] text-gold">
          {eyebrow}
        </span>
        <span className="h-px w-10 bg-gold" />
      </div>
      <h2 className="mt-5 font-display text-4xl sm:text-5xl lg:text-7xl leading-[0.95] text-bone">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-5 text-bone/60 text-base lg:text-lg max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
