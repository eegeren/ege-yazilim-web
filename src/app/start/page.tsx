import type { Metadata } from "next";

import { PageShell } from "@/components/page-shell";
import { StartPageContent } from "@/components/start-page-content";

export const metadata: Metadata = {
  title: "Başlangıç",
  description: "Plan seçin ve MağazaERP onboarding akışını başlatın.",
};

export default function StartPage() {
  return (
    <PageShell>
      <StartPageContent />
    </PageShell>
  );
}
