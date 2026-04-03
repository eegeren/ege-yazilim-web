import { onboardingSteps } from "@/lib/data";

type StepProgressBarProps = {
  currentStepId: string;
};

export function StepProgressBar({ currentStepId }: StepProgressBarProps) {
  const currentIndex = onboardingSteps.findIndex((step) => step.id === currentStepId);
  const progress = currentIndex >= 0 ? ((currentIndex + 1) / onboardingSteps.length) * 100 : 0;

  return (
    <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-[0_12px_28px_rgba(15,23,42,0.04)]">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold text-slate-950">Kurulum ilerlemesi</p>
          <p className="mt-1 text-sm text-slate-500">
            {currentIndex + 1}. adım / {onboardingSteps.length}
          </p>
        </div>
        <div className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
          %{Math.round(progress)}
        </div>
      </div>
      <div className="mt-4 h-2 rounded-full bg-slate-100">
        <div
          className="h-2 rounded-full bg-[linear-gradient(90deg,#2563eb_0%,#38bdf8_100%)]"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="mt-4 grid gap-2 sm:grid-cols-5">
        {onboardingSteps.map((step, index) => {
          const active = currentIndex >= index;

          return (
            <div
              key={step.id}
              className={`rounded-2xl border px-3 py-3 text-center text-xs font-semibold ${
                active
                  ? "border-blue-200 bg-blue-50 text-blue-700"
                  : "border-slate-200 bg-slate-50 text-slate-400"
              }`}
            >
              {step.shortTitle}
            </div>
          );
        })}
      </div>
    </div>
  );
}
