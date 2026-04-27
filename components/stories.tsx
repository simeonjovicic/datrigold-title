import Link from "next/link";
import { STORIES } from "@/lib/data";

export function Stories() {
  return (
    <section className="relative py-8 lg:py-10 border-b border-charcoal/10 bg-paper">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex items-center gap-3 mb-5">
          <span className="font-display text-[11px] tracking-[0.45em] text-gold">STORIES</span>
          <span className="h-px flex-1 bg-charcoal/10" />
          <Link href="/news" className="font-display text-[10px] tracking-[0.4em] text-charcoal/50 hover:text-gold">
            ALLE →
          </Link>
        </div>
        <div className="flex gap-4 lg:gap-5 overflow-x-auto pb-2 -mx-2 px-2 scrollbar-hide">
          {STORIES.map((s) => (
            <Story key={s.id} story={s} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Story({ story }: { story: (typeof STORIES)[number] }) {
  const ringClass = story.live
    ? "bg-gradient-to-tr from-blood via-gold to-blood p-[2px] animate-pulse"
    : "bg-gradient-to-tr from-gold-deep via-gold to-gold-bright p-[2px]";
  return (
    <Link href="#" className="group flex flex-col items-center gap-2 shrink-0">
      <div className={`relative rounded-full ${ringClass}`}>
        <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-paper flex items-center justify-center overflow-hidden">
          <StoryArt id={story.id} />
        </div>
        {story.live && (
          <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-blood text-bone font-display text-[9px] tracking-[0.25em]">
            LIVE
          </span>
        )}
      </div>
      <span className="font-display text-[10px] tracking-[0.25em] uppercase text-charcoal/70 group-hover:text-gold transition-colors">
        {story.label}
      </span>
    </Link>
  );
}

function StoryArt({ id }: { id: string }) {
  const colors: Record<string, [string, string]> = {
    kova: ["#3a2a10", "#0a0a0b"],
    morata: ["#4a1820", "#0a0a0b"],
    weighin: ["#2a1d08", "#0a0a0b"],
    facecard: ["#1a0d04", "#0a0a0b"],
    berlin: ["#2a2a30", "#0a0a0b"],
    voss: ["#3a2a10", "#0a0a0b"],
    okada: ["#1a0d04", "#0a0a0b"],
    press: ["#2a2a30", "#0a0a0b"],
    bts: ["#4a1820", "#0a0a0b"],
    tickets: ["#3a2a10", "#0a0a0b"],
  };
  const [a, b] = colors[id] ?? ["#222", "#000"];
  return (
    <svg viewBox="0 0 80 80" className="w-full h-full" aria-hidden>
      <defs>
        <linearGradient id={`s-${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={a} />
          <stop offset="100%" stopColor={b} />
        </linearGradient>
      </defs>
      <rect width="80" height="80" fill={`url(#s-${id})`} />
      <g fill="#000">
        <ellipse cx="40" cy="32" rx="12" ry="14" />
        <path d="M16 56 Q40 42 64 56 L68 90 Q40 100 12 90 Z" />
      </g>
    </svg>
  );
}
