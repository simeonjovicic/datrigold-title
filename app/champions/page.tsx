import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { PageHeader } from "@/components/page-header";
import { Champions } from "@/components/champions";

export default function ChampionsPage() {
  return (
    <main className="relative">
      <Nav />
      <PageHeader
        eyebrow="CHAMPIONS"
        title={
          <>
            <span className="block text-charcoal">DER GÜRTEL.</span>
            <span className="block gold-text">DAS VERMÄCHTNIS.</span>
          </>
        }
        subtitle="Alle Champions, alle Verteidigungen und die nächsten Herausforderer."
      />
      <Champions hideHeading />
      <Footer />
    </main>
  );
}
