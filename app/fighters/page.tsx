import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { PageHeader } from "@/components/page-header";
import { Fighters } from "@/components/fighters";

export default function FightersPage() {
  return (
    <main className="relative">
      <Nav />
      <PageHeader
        eyebrow="KADER"
        title={
          <>
            <span className="block text-charcoal">KÄMPFER, DIE</span>
            <span className="block gold-text">SICH IHREN NAMEN VERDIENEN.</span>
          </>
        }
        subtitle="Ausgewählt nach Leistung, Bilanz und sportlicher Relevanz."
      />
      <Fighters all />
      <Footer />
    </main>
  );
}
