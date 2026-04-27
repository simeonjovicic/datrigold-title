import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { PageHeader } from "@/components/page-header";
import { ContactForm } from "@/components/contact-form";

export default function FighterApplicationPage() {
  return (
    <main className="relative">
      <Nav />
      <PageHeader
        eyebrow="KONTAKT · KADER"
        title={<span className="block gold-text">KÄMPFER-BEWERBUNG.</span>}
        subtitle="Reiche deine Bilanz ein. Geprüft werden Profis und regionale Titelträger."
      />
      <section className="relative py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <ContactForm
            cta="BEWERBUNG SENDEN"
            fields={[
              { name: "name", label: "Kämpfername", placeholder: "Vollständiger Name" },
              { name: "nickname", label: "Ringname", placeholder: "Freiwillig" },
              { name: "discipline", label: "Disziplin", placeholder: "Boxen · MMA · Muay Thai · Kickboxen" },
              { name: "weight", label: "Gewichtsklasse", placeholder: "z. B. Weltergewicht 77 kg" },
              { name: "record", label: "Profibilanz", placeholder: "S-N-U" },
              { name: "manager", label: "Manager-E-Mail", type: "email", placeholder: "Freiwillig" },
              { name: "video", label: "Highlight-Video URL", placeholder: "https://" },
              { name: "bio", label: "Kurzbiografie", textarea: true, placeholder: "Karriere-Highlights..." },
            ]}
          />
        </div>
      </section>
      <Footer />
    </main>
  );
}
