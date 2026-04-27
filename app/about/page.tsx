import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { PageHeader } from "@/components/page-header";
import { Legacy } from "@/components/legacy";

export default function AboutPage() {
  return (
    <main className="relative">
      <Nav />
      <PageHeader
        eyebrow="ÜBER UNS"
        title={
          <>
            <span className="block text-charcoal">EINE LIGA</span>
            <span className="block gold-text">FÜR KÄMPFER.</span>
          </>
        }
        subtitle="Ein Gürtel pro Division, regelmäßige Verteidigungen und klare Regeln."
      />
      <Legacy hideHeading />
      <Footer />
    </main>
  );
}
