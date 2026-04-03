import type { Metadata } from "next";

import { ContactPageContent } from "@/components/contact-page-content";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "İletişim",
  description: "Demo, teklif ve kurulum talepleriniz için MağazaERP ile iletişime geçin.",
};

export default function ContactPage() {
  return (
    <PageShell>
      <ContactPageContent />
    </PageShell>
  );
}
