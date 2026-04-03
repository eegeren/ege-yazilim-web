import { Check } from "lucide-react";
import Link from "next/link";

import type { AppPlan } from "@/lib/data";

type PlanCardProps = {
  plan: AppPlan;
  href: string;
};

export function PlanCard({ plan, href }: PlanCardProps) {
  return (
    <article
      className={`relative flex h-full flex-col overflow-hidden rounded-[32px] border p-6 ${
        plan.highlight
          ? "border-blue-200 bg-[linear-gradient(180deg,#0f172a_0%,#111c34_100%)] text-white shadow-[0_30px_80px_rgba(15,23,42,0.16)]"
          : "surface-card surface-card-hover text-slate-950"
      }`}
    >
      {plan.highlight ? (
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-r from-blue-500/18 via-cyan-400/12 to-transparent" />
      ) : null}
      <div className="relative">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-2xl font-semibold tracking-[-0.05em]">{plan.title}</p>
            <p className={`mt-3 text-sm leading-7 ${plan.highlight ? "text-white/72" : "text-slate-600"}`}>
              {plan.description}
            </p>
          </div>
          {plan.highlight ? (
            <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-100">
              {plan.highlight}
            </span>
          ) : null}
        </div>
        <div className="mt-8">
          <span className="text-[2.7rem] font-semibold tracking-[-0.07em]">{plan.price}</span>
          <span className={`ml-2 text-sm ${plan.highlight ? "text-white/62" : "text-slate-500"}`}>
            {plan.cadence}
          </span>
        </div>
      </div>

      <div className="mt-8 space-y-3">
        {plan.features.map((feature) => (
          <div key={feature} className="flex items-start gap-3">
            <div
              className={`mt-0.5 rounded-full p-1 ${
                plan.highlight ? "bg-white/10 text-blue-200" : "bg-blue-50 text-blue-600"
              }`}
            >
              <Check className="size-3.5" />
            </div>
            <span className={`text-sm leading-6 ${plan.highlight ? "text-white/78" : "text-slate-600"}`}>
              {feature}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-auto pt-8">
        <Link
          href={href}
          className={`inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-semibold tracking-[-0.02em] ${
            plan.highlight
              ? "bg-white text-slate-950 shadow-[0_18px_45px_rgba(255,255,255,0.12)] hover:-translate-y-0.5 hover:bg-slate-100"
              : "border border-[var(--color-line)] bg-white/88 text-[var(--color-ink)] shadow-[0_8px_24px_rgba(15,23,42,0.04)] hover:-translate-y-0.5 hover:border-blue-200 hover:bg-white hover:shadow-[0_18px_35px_rgba(15,23,42,0.08)]"
          }`}
        >
          Devam Et
        </Link>
      </div>
    </article>
  );
}
