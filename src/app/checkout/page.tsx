import type { Metadata } from "next";

import { CheckoutCard } from "@/components/checkout-card";
import { PageShell } from "@/components/page-shell";
import { Container } from "@/components/ui/container";
import { appPlans } from "@/lib/data";

export const metadata: Metadata = {
  title: "Checkout",
  description: "Seçilen plan için mock ödeme akışı.",
};

export default async function CheckoutPage(props: PageProps<"/checkout">) {
  const searchParams = await props.searchParams;
  const planId = typeof searchParams.plan === "string" ? searchParams.plan : "yillik";
  const plan = appPlans.find((item) => item.id === planId) ?? appPlans[1];

  return (
    <PageShell>
      <div className="pb-20 pt-12 sm:pb-24 sm:pt-16">
        <Container>
          <div className="mb-8 max-w-2xl">
            <div className="inline-flex rounded-full border border-blue-100 bg-white/86 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-blue-700 shadow-[0_12px_28px_rgba(15,23,42,0.04)]">
              Ödeme
            </div>
            <h1 className="mt-6 text-balance text-[2.8rem] font-semibold tracking-[-0.07em] text-slate-950 sm:text-[3.5rem]">
              Seçiminizi tamamlayın
            </h1>
            <p className="mt-4 text-base leading-8 text-slate-600">
              Mock ödeme ekranı ile kurulum akışına geçmeden önce plan seçiminizi onaylayın.
            </p>
          </div>
          <CheckoutCard plan={plan} />
        </Container>
      </div>
    </PageShell>
  );
}
