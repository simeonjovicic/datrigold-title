import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { PageHeader } from "@/components/page-header";
import { ContactForm } from "@/components/contact-form";

export default function GetInTouchPage() {
  return (
    <main className="relative">
      <Nav />
      <PageHeader
        eyebrow="KONTAKT · ALLGEMEIN"
        title={<span className="block gold-text">KONTAKT AUFNEHMEN.</span>}
        subtitle="Presse, Partnerschaften und geschäftliche Anfragen. Wir antworten innerhalb von zwei Werktagen."
      />
      <section className="relative py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <ContactForm
            cta="NACHRICHT SENDEN"
            fields={[
              { name: "name", label: "Vollständiger Name", placeholder: "Max Mustermann" },
              { name: "email", label: "E-Mail", type: "email", placeholder: "du@email.com" },
              { name: "company", label: "Firma", placeholder: "Freiwillig" },
              { name: "message", label: "Nachricht", textarea: true, placeholder: "Worum geht es?" },
            ]}
          />
          <div className="mt-12 grid sm:grid-cols-2 gap-6 text-sm text-charcoal/60">
            <div>
              <div className="font-display text-[10px] tracking-[0.4em] text-gold">PRESSE</div>
              <p className="mt-2">press@goldtitle.fight</p>
            </div>
            <div>
              <div className="font-display text-[10px] tracking-[0.4em] text-gold">HQ</div>
              <p className="mt-2">Kingdom House · Berlin · DE</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
