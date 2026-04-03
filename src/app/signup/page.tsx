import type { Metadata } from "next";

import { SignupForm } from "@/components/signup-form";
import { PageShell } from "@/components/page-shell";
import { Container } from "@/components/ui/container";
import { appPlans } from "@/lib/data";

export const metadata: Metadata = {
  title: "Kayıt Ol",
  description: "Mock kayıt akışı ile hesabınızı oluşturun.",
};

export default async function SignupPage(props: PageProps<"/signup">) {
  const searchParams = await props.searchParams;
  const planId = typeof searchParams.plan === "string" ? searchParams.plan : "yillik";
  const plan = appPlans.find((item) => item.id === planId) ?? appPlans[1];

  return (
    <PageShell>
      <div className="pb-20 pt-12 sm:pb-24 sm:pt-16">
        <Container>
          <SignupForm plan={plan} />
        </Container>
      </div>
    </PageShell>
  );
}
