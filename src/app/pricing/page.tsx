import type { Metadata } from "next";

import { CTASection } from "@/components/cta-section";
import { PageShell } from "@/components/page-shell";
import { PricingPageContent } from "@/components/pricing-page-content";

export const metadata: Metadata = {
  title: "Fiyatlandırma",
  description: "MağazaERP fiyat planlarını ve kurulum desteği kapsamını inceleyin.",
};

export default function PricingPage() {
  return (
    <PageShell>
      <PricingPageContent />
      <CTASection />
    </PageShell>
  );
}
