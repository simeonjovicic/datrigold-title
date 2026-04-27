import { SPONSORS } from "@/lib/data";

export function Sponsors() {
  return (
    <section className="relative py-10 lg:py-12 border-y border-charcoal/10 bg-paper">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex items-center gap-4 mb-8">
          <span className="font-display text-[11px] tracking-[0.45em] text-gold">
            OFFIZIELLE PARTNER
          </span>
          <span className="h-px flex-1 bg-charcoal/15" />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-y-6 gap-x-4">
          {SPONSORS.map((s) => (
            <div key={s} className="group flex items-center justify-center">
              <span className="font-display text-base lg:text-lg tracking-[0.28em] text-charcoal/40 group-hover:text-gold transition-colors text-center">
                {s}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
