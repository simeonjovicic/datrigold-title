import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { PageHeader } from "@/components/page-header";
import { Tickets } from "@/components/tickets";

export default function TicketsPage() {
  return (
    <main className="relative">
      <Nav />
      <PageHeader
        eyebrow="TICKETS"
        title={
          <>
            <span className="block text-charcoal">SICHERE DIR</span>
            <span className="block gold-text">DEINEN PLATZ.</span>
          </>
        }
        subtitle="Drei Kategorien. Ein Abend. Frühere GT-Veranstaltungen waren schnell ausverkauft."
      />
      <Tickets hideHeading />
      <Footer />
    </main>
  );
}
