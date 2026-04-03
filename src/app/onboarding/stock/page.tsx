import type { Metadata } from "next";
import Link from "next/link";

import { OnboardingLayout } from "@/components/onboarding-layout";
import { StockTable } from "@/components/stock-table";
import { mockStockRows } from "@/lib/data";

export const metadata: Metadata = {
  title: "Onboarding | Stok",
};

export default async function OnboardingStockPage(props: PageProps<"/onboarding/stock">) {
  const searchParams = await props.searchParams;
  const planId = typeof searchParams.plan === "string" ? searchParams.plan : "yillik";

  return (
    <OnboardingLayout
      currentStepId="stock"
      title="Başlangıç stoklarınızı girin"
      description="İlk stok değerlerinizi ürün bazında tanımlayarak canlı kullanıma hazır bir başlangıç seti oluşturun."
      planId={planId}
    >
      <StockTable initialRows={mockStockRows} />
      <Link
        href={`/onboarding/cash?plan=${planId}`}
        className="mt-6 inline-flex items-center justify-center rounded-full bg-[linear-gradient(180deg,#2f6ff5_0%,#2563eb_100%)] px-5 py-3 text-sm font-semibold text-white shadow-[0_18px_45px_rgba(37,99,235,0.24)] hover:-translate-y-0.5"
      >
        Devam Et
      </Link>
    </OnboardingLayout>
  );
}
