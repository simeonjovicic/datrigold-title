import Link from "next/link";
import { POSTS } from "@/lib/data";

export function InstagramFeed() {
  return (
    <section className="relative py-16 lg:py-24 bg-paper-2/45">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex items-end justify-between gap-6 flex-wrap mb-10">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-gold" />
              <span className="font-display text-[11px] tracking-[0.45em] text-gold">@GOLDTITLE</span>
            </div>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl text-charcoal leading-[0.95]">
              AUS DEM FEED.
            </h2>
          </div>
          <Link
            href="https://instagram.com"
            className="inline-flex items-center gap-3 px-5 h-11 gold-border bg-paper hover:bg-paper-2 text-charcoal font-display text-[11px] tracking-[0.32em] transition-colors"
          >
            FOLGEN · 412K
            <span className="text-gold">→</span>
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 lg:gap-3">
          {POSTS.map((p) => (
            <PostTile key={p.id} post={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PostTile({ post }: { post: (typeof POSTS)[number] }) {
  const grads = [
    "from-gold/20 via-paper-2 to-paper-3",
    "from-blood/15 via-paper-2 to-paper-3",
    "from-charcoal/12 via-paper-2 to-paper-3",
    "from-gold/15 via-paper-2 to-paper-3",
  ];
  const grad = grads[post.id % grads.length];
  return (
    <Link href="#" className="group relative aspect-square overflow-hidden border border-charcoal/15 hover:border-gold transition-colors">
      <div className={`absolute inset-0 bg-gradient-to-br ${grad}`} />
      <PostArt seed={post.id} />
      <div className="absolute inset-0 grain opacity-20" />

      <div className="absolute inset-0 bg-charcoal/82 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-4 text-center">
        <p className="text-bone text-sm leading-snug max-w-[20ch]">{post.caption}</p>
        <div className="mt-4 flex items-center gap-4 font-mono text-xs text-bone/70">
          <span>♥ {post.likes.toLocaleString("de-DE")}</span>
          <span>💬 {post.comments}</span>
        </div>
      </div>

      <div className="absolute top-2 right-2 text-gold-bright/80 text-xs">⌖</div>
    </Link>
  );
}

function PostArt({ seed }: { seed: number }) {
  return (
    <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full opacity-70" preserveAspectRatio="xMidYMid slice" aria-hidden>
      <defs>
        <radialGradient id={`p-${seed}`} cx="50%" cy="40%" r="50%">
          <stop offset="0%" stopColor={seed % 2 === 0 ? "#e3b75a" : "#b63237"} stopOpacity="0.20" />
          <stop offset="100%" stopColor="#fbf8f1" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="200" height="200" fill={`url(#p-${seed})`} />
      <g fill="#24201b" opacity="0.55">
        <ellipse cx="100" cy="85" rx="28" ry="34" />
        <path d="M40 145 Q100 110 160 145 L172 220 Q100 240 28 220 Z" />
      </g>
    </svg>
  );
}
