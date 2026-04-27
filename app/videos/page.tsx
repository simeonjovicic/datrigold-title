import Link from "next/link";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { PageHeader } from "@/components/page-header";

const videos = [
  { title: "GT XI · Offizieller Trailer", duration: "1:42", category: "TRAILER" },
  { title: "Hinter dem Gürtel · Folge 03", duration: "8:11", category: "DOKU" },
  { title: "Morata · Interview vor dem Kampf", duration: "3:24", category: "INTERVIEW" },
  { title: "Top 10 Knockouts 2025", duration: "12:08", category: "HIGHLIGHTS" },
  { title: "Kova × Akande · Duell", duration: "2:55", category: "PRESSE" },
  { title: "Der Weg zum Ring · Ausgabe X", duration: "5:41", category: "DOKU" },
];

export default function VideosPage() {
  return (
    <main className="relative">
      <Nav />
      <PageHeader
        eyebrow="VIDEOS"
        title={
          <>
            <span className="block text-charcoal">VIDEOS</span>
            <span className="block gold-text">AUS DEM RING.</span>
          </>
        }
        subtitle="Trailer, Fighter-Dokus, Analysen und Backstage-Material."
      />
      <section className="relative py-16 lg:py-24 bg-paper">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {videos.map((v) => (
            <Link
              key={v.title}
              href="#"
              className="group relative aspect-video overflow-hidden border border-charcoal/10 hover:border-gold/40 transition-colors"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-paper via-paper-2 to-paper-3" />
              <svg viewBox="0 0 400 225" className="absolute inset-0 w-full h-full opacity-50" aria-hidden>
                <radialGradient id={`v-${v.title}`} cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#d4a857" stopOpacity="0.22" />
                  <stop offset="100%" stopColor="#fbf8f1" stopOpacity="0" />
                </radialGradient>
                <rect width="400" height="225" fill={`url(#v-${v.title})`} />
                <g fill="#24201b" opacity="0.50">
                  <ellipse cx="160" cy="100" rx="36" ry="42" />
                  <path d="M100 150 Q160 120 220 150 L235 230 Q160 250 85 230 Z" />
                </g>
              </svg>
              <div className="absolute inset-0 grain opacity-20" />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/76 via-transparent to-transparent" />

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-paper/95 backdrop-blur-sm gold-border flex items-center justify-center transition-colors hover:bg-paper-2">
                  <span className="ml-1 text-gold text-xl">▶</span>
                </div>
              </div>

              <div className="absolute inset-x-0 bottom-0 p-4">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-display text-[9px] tracking-[0.4em] text-gold">{v.category}</span>
                  <span className="font-mono text-[10px] tracking-widest text-bone/70">{v.duration}</span>
                </div>
                <h3 className="font-display text-base lg:text-lg text-bone leading-tight">{v.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
