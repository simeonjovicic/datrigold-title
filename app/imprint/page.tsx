import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { PageHeader } from "@/components/page-header";

export default function ImprintPage() {
  return (
    <main className="relative">
      <Nav />
      <PageHeader eyebrow="RECHTLICHES" title={<span className="block text-charcoal">IMPRESSUM</span>} />
      <section className="relative py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-10 text-charcoal/70 leading-relaxed space-y-8 text-sm">
          <div>
            <div className="font-display text-[10px] tracking-[0.4em] text-gold">BETREIBER</div>
            <p className="mt-2">Gold Title League GmbH<br />Kingdom House · Friedrichstraße 100<br />10117 Berlin · Deutschland</p>
          </div>
          <div>
            <div className="font-display text-[10px] tracking-[0.4em] text-gold">KONTAKT</div>
            <p className="mt-2">press@goldtitle.fight · +49 (0) 30 12345678</p>
          </div>
          <div>
            <div className="font-display text-[10px] tracking-[0.4em] text-gold">REGISTRIERUNG</div>
            <p className="mt-2">Amtsgericht Berlin · HRB 000000 B<br />USt-IdNr.: DE000000000</p>
          </div>
          <div>
            <div className="font-display text-[10px] tracking-[0.4em] text-gold">VERANTWORTLICH FÜR INHALTE</div>
            <p className="mt-2">A. Reinhardt, Gründer · gemäß § 18 Abs. 2 MStV</p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
