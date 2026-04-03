import type { Metadata } from "next";
import Link from "next/link";

import { OnboardingLayout } from "@/components/onboarding-layout";
import { UserSetupTable } from "@/components/user-setup-table";
import { onboardingRoleOptions } from "@/lib/data";

export const metadata: Metadata = {
  title: "Onboarding | Kullanıcılar",
};

export default async function OnboardingUsersPage(props: PageProps<"/onboarding/users">) {
  const searchParams = await props.searchParams;
  const planId = typeof searchParams.plan === "string" ? searchParams.plan : "yillik";

  return (
    <OnboardingLayout
      currentStepId="users"
      title="Kullanıcı yapısını hazırlayın"
      description="Admin, operasyon, cashier ve mal kabul erişimlerini örnek satırlarla oluşturun."
      planId={planId}
    >
      <UserSetupTable roles={onboardingRoleOptions} />
      <Link
        href={`/onboarding/products?plan=${planId}`}
        className="mt-6 inline-flex items-center justify-center rounded-full bg-[linear-gradient(180deg,#2f6ff5_0%,#2563eb_100%)] px-5 py-3 text-sm font-semibold text-white shadow-[0_18px_45px_rgba(37,99,235,0.24)] hover:-translate-y-0.5"
      >
        Devam Et
      </Link>
    </OnboardingLayout>
  );
}
