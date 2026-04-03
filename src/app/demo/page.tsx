import type { Metadata } from "next";

import { CTASection } from "@/components/cta-section";
import { DemoWalkthrough } from "@/components/demo-walkthrough";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Demo",
  description: "MağazaERP demo akışını ve rol bazlı ekranları inceleyin.",
};

export default function DemoPage() {
  return (
    <PageShell>
      <DemoWalkthrough />
      <CTASection />
    </PageShell>
  );
}
