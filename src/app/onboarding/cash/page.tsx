import type { Metadata } from "next";

import { CashSessionCard } from "@/components/cash-session-card";
import { OnboardingLayout } from "@/components/onboarding-layout";

export const metadata: Metadata = {
  title: "Onboarding | Kasa",
};

export default async function OnboardingCashPage(props: PageProps<"/onboarding/cash">) {
  const searchParams = await props.searchParams;
  const planId = typeof searchParams.plan === "string" ? searchParams.plan : "yillik";

  return (
    <OnboardingLayout
      currentStepId="cash"
      title="Kasa kullanımına başlamak için ilk oturumu açın"
      description="Kasa başlangıç oturumunu açtıktan sonra sistem, günlük kullanıma hazır hale gelir."
      planId={planId}
    >
      <CashSessionCard planId={planId} />
    </OnboardingLayout>
  );
}
