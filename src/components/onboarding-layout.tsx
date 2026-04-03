import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { appPlans, onboardingHighlights, onboardingSteps } from "@/lib/data";

import { Container } from "./ui/container";
import { StepProgressBar } from "./step-progress-bar";

type OnboardingLayoutProps = {
  title: string;
  description: string;
  currentStepId: string;
  children: ReactNode;
  planId?: string;
};

export function OnboardingLayout({
  title,
  description,
  currentStepId,
  children,
  planId,
}: OnboardingLayoutProps) {
  const activePlan = appPlans.find((plan) => plan.id === planId) ?? appPlans[1];
  const currentIndex = onboardingSteps.findIndex((step) => step.id === currentStepId);
  const previousStepHref =
    currentIndex > 0
      ? `${onboardingSteps[currentIndex - 1].href}?plan=${activePlan.id}`
      : `/onboarding?plan=${activePlan.id}`;

  return (
    <div className="pb-20 pt-10 sm:pb-24 sm:pt-14">
      <Container>
        <div className="grid gap-8 xl:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-5">
            <Link
              href={previousStepHref}
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-slate-950"
            >
              <ArrowLeft className="size-4" />
              Önceki adıma dön
            </Link>
            <div className="surface-card rounded-[34px] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-700">
                Onboarding
              </p>
              <h1 className="mt-4 text-balance text-[2.3rem] font-semibold tracking-[-0.06em] text-slate-950 sm:text-[3rem]">
                {title}
              </h1>
              <p className="mt-4 text-base leading-8 text-slate-600">{description}</p>
            </div>

            <div className="surface-card rounded-[34px] p-6">
              <p className="text-sm font-semibold text-slate-950">Seçili plan</p>
              <div className="mt-4 rounded-[24px] border border-slate-200 bg-slate-50 p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-lg font-semibold tracking-[-0.03em] text-slate-950">
                      {activePlan.title}
                    </p>
                    <p className="mt-1 text-sm text-slate-500">{activePlan.description}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-semibold tracking-[-0.05em] text-slate-950">
                      {activePlan.price}
                    </p>
                    <p className="text-sm text-slate-500">{activePlan.cadence}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="surface-card rounded-[34px] p-6">
              <p className="text-sm font-semibold text-slate-950">Bu akışta sizi ne bekliyor?</p>
              <div className="mt-4 space-y-3">
                {onboardingHighlights.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="flex items-start gap-3 rounded-[22px] border border-slate-200 bg-white px-4 py-4"
                    >
                      <div className="rounded-2xl bg-blue-50 p-2 text-blue-700">
                        <Icon className="size-4" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-950">{item.title}</p>
                        <p className="mt-1 text-sm leading-6 text-slate-500">{item.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="space-y-5">
            <StepProgressBar currentStepId={currentStepId} />
            <div className="surface-card rounded-[34px] p-6 sm:p-8">{children}</div>
          </div>
        </div>
      </Container>
    </div>
  );
}
