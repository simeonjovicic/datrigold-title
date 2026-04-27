import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";
import { NEWS } from "@/lib/data";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return NEWS.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const article = NEWS.find((item) => item.slug === slug);

  if (!article) return {};

  return {
    title: `${article.title} · Gold Title`,
    description: article.excerpt,
  };
}

export default async function NewsArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = NEWS.find((item) => item.slug === slug);

  if (!article) notFound();

  const related = NEWS.filter((item) => item.slug !== article.slug).slice(0, 2);

  return (
    <main className="relative">
      <Nav />

      <article className="relative bg-paper pt-28 lg:pt-32">
        <header className="mx-auto max-w-7xl px-6 lg:px-10">
          <Link
            href="/news"
            className="inline-flex h-12 items-center gap-3 border border-charcoal/15 bg-charcoal px-5 font-display text-[12px] tracking-[0.28em] text-bone transition-colors hover:bg-blood"
          >
            ← ZURÜCK ZU AKTUELLES
          </Link>

          <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,0.78fr)_minmax(18rem,0.22fr)] lg:items-end">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <span className="clip-tag bg-charcoal px-3 py-1 font-display text-[10px] tracking-[0.3em] text-bone">
                  {article.tag}
                </span>
                <span className="text-[11px] uppercase tracking-[0.28em] text-charcoal/50">{article.date}</span>
                <span className="text-[11px] uppercase tracking-[0.28em] text-charcoal/50">{article.readTime}</span>
              </div>

              <h1 className="mt-5 max-w-5xl font-display text-5xl leading-[0.94] text-charcoal sm:text-6xl lg:text-8xl">
                {article.title}
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-charcoal/68">
                {article.deck}
              </p>
            </div>

            <aside className="border border-charcoal/10 bg-bone p-5">
              <div className="font-display text-[10px] tracking-[0.35em] text-gold">AUTOR</div>
              <div className="mt-2 text-lg font-semibold text-charcoal">{article.author}</div>
              <div className="mt-4 border-t border-charcoal/10 pt-4 text-sm leading-relaxed text-charcoal/60">
                Einordnung, Kontext und sportliche Bewertung aus der Gold-Title-Redaktion.
              </div>
            </aside>
          </div>
        </header>

        <div className="mx-auto mt-10 max-w-7xl px-6 lg:px-10">
          <div className="relative aspect-[16/7] overflow-hidden border border-charcoal/12 bg-paper-2">
            <div className="absolute inset-0 bg-gradient-to-br from-paper via-paper-2 to-paper-3" />
            <ArticleArt seed={NEWS.findIndex((item) => item.slug === article.slug)} tag={article.tag} />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/72 via-charcoal/5 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5">
              <div className="font-display text-[10px] tracking-[0.35em] text-gold-bright">GOLD TITLE REDAKTION</div>
              <div className="mt-2 max-w-2xl text-bone/80">{article.excerpt}</div>
            </div>
          </div>
        </div>

        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 lg:grid-cols-[minmax(0,0.68fr)_minmax(18rem,0.32fr)] lg:px-10 lg:py-16">
          <div className="max-w-3xl">
            <div className="space-y-6 text-lg leading-relaxed text-charcoal/72">
              {article.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <aside className="space-y-6">
            <div className="border border-charcoal/10 bg-bone p-5">
              <div className="font-display text-[10px] tracking-[0.35em] text-gold">KERNPUNKTE</div>
              <ul className="mt-4 space-y-3">
                {article.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3 text-sm leading-relaxed text-charcoal/70">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 bg-gold" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border border-charcoal/10 bg-paper-2/70 p-5">
              <div className="font-display text-[10px] tracking-[0.35em] text-gold">WEITERE MELDUNGEN</div>
              <div className="mt-4 space-y-4">
                {related.map((item) => (
                  <Link key={item.slug} href={`/news/${item.slug}`} className="block border-b border-charcoal/10 pb-4 last:border-b-0 last:pb-0">
                    <div className="text-[10px] uppercase tracking-[0.28em] text-charcoal/45">{item.tag} · {item.date}</div>
                    <div className="mt-1 font-display text-xl leading-tight text-charcoal hover:text-gold">{item.title}</div>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </article>

      <Footer />
    </main>
  );
}

function ArticleArt({ seed, tag }: { seed: number; tag: string }) {
  const color = tag === "HAUPTKAMPF" ? "#a43d35" : tag === "INTERVIEW" ? "#9b7a32" : "#3f474d";
  const lineColor = tag === "RANGLISTE" ? "#3f474d" : "#a43d35";

  return (
    <svg viewBox="0 0 1200 520" className="absolute inset-0 h-full w-full opacity-80" preserveAspectRatio="xMidYMid slice" aria-hidden>
      <defs>
        <radialGradient id={`article-${seed}`} cx="50%" cy="45%" r="55%">
          <stop offset="0%" stopColor={color} stopOpacity="0.24" />
          <stop offset="100%" stopColor="#f8f6f0" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="1200" height="520" fill={`url(#article-${seed})`} />
      <g fill="#24201b" opacity="0.42">
        <ellipse cx="465" cy="210" rx="62" ry="74" />
        <path d="M350 300 Q465 230 580 300 L625 560 Q465 610 305 560 Z" />
        <ellipse cx="735" cy="210" rx="62" ry="74" />
        <path d="M620 300 Q735 230 850 300 L895 560 Q735 610 575 560 Z" />
      </g>
      <g stroke={lineColor} strokeOpacity="0.22" strokeWidth="3">
        <line x1="0" y1="430" x2="1200" y2="430" />
        <line x1="0" y1="470" x2="1200" y2="470" />
      </g>
    </svg>
  );
}
