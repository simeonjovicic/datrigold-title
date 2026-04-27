import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { PageHeader } from "@/components/page-header";
import { ContactForm } from "@/components/contact-form";

const tiers = [
  { tier: "OFFIZIELLER PARTNER", reach: "12M+", price: "Ab €250k", perks: "Logo in der Übertragung, Platzierung am Ring, Gästebetreuung" },
  { tier: "VERANSTALTUNGS-SPONSOR", reach: "4M+", price: "Ab €60k", perks: "Markenplatzierung am Ring, soziale Medien, Einlassbereich" },
  { tier: "UNTERSTÜTZER", reach: "1M+", price: "Ab €15k", perks: "Logo-Wand, Programmheft, Social-Media-Erwähnung" },
];

export default function SponsoringPage() {
  return (
    <main className="relative">
      <Nav />
      <PageHeader
        eyebrow="KONTAKT · MARKE"
        title={<span className="block gold-text">SPONSORING.</span>}
        subtitle="Drei Pakete. Jede Übertragung erreicht ein großes Publikum in Europa und der Golfregion."
      />
      <section className="relative py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid md:grid-cols-3 gap-5">
          {tiers.map((t) => (
            <div key={t.tier} className="gold-border bg-paper-2/70 p-7">
              <div className="font-display text-[10px] tracking-[0.4em] text-gold">{t.tier}</div>
              <div className="mt-3 font-display text-3xl gold-text">{t.price}</div>
              <div className="mt-1 text-[11px] tracking-[0.3em] uppercase text-charcoal/50">Reichweite: {t.reach}</div>
              <p className="mt-5 text-sm text-charcoal/65 leading-relaxed">{t.perks}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 mx-auto max-w-3xl px-6 lg:px-10">
          <ContactForm
            cta="DECK ANFRAGEN"
            fields={[
              { name: "company", label: "Firma", placeholder: "Deine Marke" },
              { name: "name", label: "Kontaktperson", placeholder: "Vollständiger Name" },
              { name: "email", label: "E-Mail", type: "email", placeholder: "du@marke.com" },
              { name: "tier", label: "Interessiertes Paket", placeholder: "Offizieller Partner · Veranstaltungs-Sponsor · Unterstützer" },
              { name: "message", label: "Notizen", textarea: true, placeholder: "Was sind eure Ziele?" },
            ]}
          />
        </div>
      </section>
      <Footer />
    </main>
  );
}
