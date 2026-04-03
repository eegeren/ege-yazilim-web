import type { Metadata } from "next";
import Link from "next/link";

import { OnboardingLayout } from "@/components/onboarding-layout";
import { ProductMockTable } from "@/components/product-mock-table";
import { mockProducts } from "@/lib/data";

export const metadata: Metadata = {
  title: "Onboarding | Ürünler",
};

export default async function OnboardingProductsPage(props: PageProps<"/onboarding/products">) {
  const searchParams = await props.searchParams;
  const planId = typeof searchParams.plan === "string" ? searchParams.plan : "yillik";

  return (
    <OnboardingLayout
      currentStepId="products"
      title="Ürünlerinizi ekleyerek başlayın"
      description="İlk ürün listenizi örnek kayıtlarla oluşturun. Bu ekran, gerçek akışın nasıl görüneceğini gösterir."
      planId={planId}
    >
      <ProductMockTable initialProducts={mockProducts} />
      <Link
        href={`/onboarding/stock?plan=${planId}`}
        className="mt-6 inline-flex items-center justify-center rounded-full bg-[linear-gradient(180deg,#2f6ff5_0%,#2563eb_100%)] px-5 py-3 text-sm font-semibold text-white shadow-[0_18px_45px_rgba(37,99,235,0.24)] hover:-translate-y-0.5"
      >
        Devam Et
      </Link>
    </OnboardingLayout>
  );
}
