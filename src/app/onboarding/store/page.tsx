import type { Metadata } from "next";
import Link from "next/link";

import { FormInput } from "@/components/form-input";
import { OnboardingLayout } from "@/components/onboarding-layout";

export const metadata: Metadata = {
  title: "Onboarding | Mağaza",
};

export default async function OnboardingStorePage(props: PageProps<"/onboarding/store">) {
  const searchParams = await props.searchParams;
  const planId = typeof searchParams.plan === "string" ? searchParams.plan : "yillik";

  return (
    <OnboardingLayout
      currentStepId="store"
      title="Mağaza bilgilerinizi girin"
      description="İlk kurulum için mağaza adı, konum ve iletişim bilgilerini tanımlayın."
      planId={planId}
    >
      <div className="grid gap-4">
        <FormInput label="Mağaza adı" placeholder="Örn. Merkez Mağaza" />
        <FormInput label="Adres" placeholder="Cadde, sokak, no, ilçe" />
        <div className="grid gap-4 sm:grid-cols-2">
          <FormInput label="Şehir" placeholder="İstanbul" />
          <FormInput label="Telefon" placeholder="+90 (5__) ___ __ __" />
        </div>
      </div>

      <Link
        href={`/onboarding/users?plan=${planId}`}
        className="mt-6 inline-flex items-center justify-center rounded-full bg-[linear-gradient(180deg,#2f6ff5_0%,#2563eb_100%)] px-5 py-3 text-sm font-semibold text-white shadow-[0_18px_45px_rgba(37,99,235,0.24)] hover:-translate-y-0.5"
      >
        Devam Et
      </Link>
    </OnboardingLayout>
  );
}
