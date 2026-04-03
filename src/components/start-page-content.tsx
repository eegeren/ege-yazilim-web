import { ArrowRight } from "lucide-react";

import { appPlans } from "@/lib/data";

import { PlanCard } from "./plan-card";
import { Container } from "./ui/container";

export function StartPageContent() {
  return (
    <div className="pb-20 pt-12 sm:pb-24 sm:pt-16">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex rounded-full border border-blue-100 bg-white/86 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-blue-700 shadow-[0_12px_28px_rgba(15,23,42,0.04)]">
            Başlangıç Akışı
          </div>
          <h1 className="mt-6 text-balance text-[3rem] font-semibold tracking-[-0.07em] text-slate-950 sm:text-[4rem]">
            Sistemi hemen kullanmaya başlayın
          </h1>
          <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
            Size uygun planı seçin, hesap oluşturun ve birkaç kısa adım sonunda mağaza kurulumunu tamamlayın.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {appPlans.map((plan) => (
            <PlanCard key={plan.id} plan={plan} href={`/signup?plan=${plan.id}`} />
          ))}
        </div>

        <div className="mt-8 flex items-center justify-center gap-2 text-sm text-slate-500">
          <span>Kurulum sonrası onboarding akışı otomatik başlar.</span>
          <ArrowRight className="size-4" />
        </div>
      </Container>
    </div>
  );
}
