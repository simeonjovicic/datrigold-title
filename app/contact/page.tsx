import Link from "next/link";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { PageHeader } from "@/components/page-header";

const cards = [
  { href: "/contact/get-in-touch", eyebrow: "ALLGEMEIN", title: "Kontakt aufnehmen", body: "Presse, Partnerschaften und geschäftliche Anfragen." },
  { href: "/contact/fighter-application", eyebrow: "KADER", title: "Kämpfer bewerben", body: "Bilanz einreichen. Für Profis und regionale Titelträger." },
  { href: "/contact/sponsoring", eyebrow: "MARKE", title: "Sponsoring", body: "Offizieller Partner der Liga werden." },
  { href: "/about", eyebrow: "LIGA", title: "Über uns", body: "Mission, Manifest und das Team hinter Gold Title." },
];

export default function ContactPage() {
  return (
    <main className="relative">
      <Nav />
      <PageHeader
        eyebrow="KONTAKT"
        title={
          <>
            <span className="block">SPRICH MIT</span>
            <span className="block gold-text">GOLD TITLE.</span>
          </>
        }
        subtitle="Wähle den passenden Kontaktweg. Wir antworten innerhalb von 48 Stunden."
      />
      <section className="relative py-16 lg:py-24 bg-paper">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid sm:grid-cols-2 gap-5">
          {cards.map((c) => (
            <Link
              key={c.href}
              href={c.href}
              className="group relative paper-card p-8 lg:p-10 hover:border-gold transition-colors"
            >
              <div className="font-display text-[10px] tracking-[0.4em] text-gold">{c.eyebrow}</div>
              <h3 className="mt-3 font-display text-3xl lg:text-4xl text-charcoal leading-tight">{c.title}</h3>
              <p className="mt-4 text-charcoal/65 max-w-md">{c.body}</p>
              <div className="mt-6 flex items-center gap-3 font-display text-[11px] tracking-[0.4em] text-gold">
                WEITER
                <span className="h-px w-12 bg-gold transition-all group-hover:w-20" />
              </div>
            </Link>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
