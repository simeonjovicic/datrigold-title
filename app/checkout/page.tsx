import { Suspense } from "react";
import { CheckoutClient } from "@/components/checkout-client";
import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";

export default function CheckoutPage() {
  return (
    <main className="relative">
      <Nav />
      <Suspense fallback={<CheckoutFallback />}>
        <CheckoutClient />
      </Suspense>
      <Footer />
    </main>
  );
}

function CheckoutFallback() {
  return (
    <section className="relative bg-paper pt-28 lg:pt-32 pb-16 lg:pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="border border-charcoal/10 bg-bone p-8 text-charcoal/65">
          Checkout wird geladen...
        </div>
      </div>
    </section>
  );
}
