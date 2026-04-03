"use client";

import { useState } from "react";
import { Check } from "lucide-react";

import { comparisonRows, pricingPlans } from "@/lib/data";

import { AnimatedSection } from "./ui/animated-section";
import { ButtonLink } from "./ui/button-link";
import { Container } from "./ui/container";
import { SectionHeading } from "./ui/section-heading";

export function PricingPageContent() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");
  const planIds = ["aylik", "yillik", "kurulum"];

  return (
    <div className="pb-20 pt-12 sm:pb-24 sm:pt-16">
      <Container>
        <AnimatedSection>
          <SectionHeading
            eyebrow="Fiyatlandırma"
            title="Mağaza yapınıza uygun planı seçin"
            description="Aylık ve yıllık abonelik seçeneklerini karşılaştırın. Kurulum ve veri aktarım desteği ek hizmet olarak sunulur."
            align="center"
          />
        </AnimatedSection>

        <AnimatedSection delay={0.08} className="mt-8 flex justify-center">
          <div className="inline-flex rounded-full border border-white/70 bg-white/92 p-1 shadow-[var(--shadow-card)]">
            <button
              type="button"
              onClick={() => setBilling("monthly")}
              className={`rounded-full px-5 py-2 text-sm font-semibold ${
                billing === "monthly"
                  ? "bg-slate-950 text-white"
                  : "text-slate-600 hover:text-slate-950"
              }`}
            >
              Aylık
            </button>
            <button
              type="button"
              onClick={() => setBilling("yearly")}
              className={`rounded-full px-5 py-2 text-sm font-semibold ${
                billing === "yearly"
                  ? "bg-slate-950 text-white"
                  : "text-slate-600 hover:text-slate-950"
              }`}
            >
              Yıllık
            </button>
          </div>
        </AnimatedSection>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {pricingPlans.map((plan, index) => {
            const displayPrice =
              billing === "yearly" && plan.title === "Aylık"
                ? "₺XXXX"
                : billing === "monthly" && plan.title === "Yıllık"
                  ? "₺XXX"
                  : plan.price;

            const displayCadence =
              plan.title === "Kurulum Desteği"
                ? "tek sefer"
                : billing === "yearly"
                  ? "/yıl"
                  : "/ay";

            const title =
              plan.title === "Aylık"
                ? "Başlangıç"
                : plan.title === "Yıllık"
                  ? "Pro"
                  : "Kurulum Desteği";

            return (
              <AnimatedSection key={plan.title} delay={index * 0.06}>
                <article
                  className={`relative flex h-full flex-col overflow-hidden rounded-[32px] border p-6 ${
                    title === "Pro"
                      ? "border-blue-200 bg-[linear-gradient(180deg,#0f172a_0%,#111c34_100%)] text-white shadow-[0_30px_80px_rgba(15,23,42,0.16)]"
                      : "surface-card surface-card-hover text-slate-950"
                  }`}
                >
                  {title === "Pro" ? (
                    <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-r from-blue-500/18 via-cyan-400/12 to-transparent" />
                  ) : null}
                  <div>
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="text-2xl font-semibold tracking-[-0.04em]">{title}</h3>
                      {title === "Pro" ? (
                        <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-blue-100">
                          En çok tercih edilen
                        </span>
                      ) : null}
                    </div>
                    <p
                      className={`mt-3 text-sm leading-6 ${
                        title === "Pro" ? "text-white/72" : "text-slate-600"
                      }`}
                    >
                      {plan.description}
                    </p>
                  </div>

                  <div className="mt-8">
                    <span className="text-[2.7rem] font-semibold tracking-[-0.07em]">
                      {displayPrice}
                    </span>
                    <span
                      className={`ml-2 text-sm ${
                        title === "Pro" ? "text-white/62" : "text-slate-500"
                      }`}
                    >
                      {displayCadence}
                    </span>
                  </div>

                  <div className="mt-8 space-y-3">
                    {plan.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3">
                        <div
                          className={`mt-0.5 rounded-full p-1 ${
                            title === "Pro"
                              ? "bg-white/10 text-blue-200"
                              : "bg-blue-50 text-blue-600"
                          }`}
                        >
                          <Check className="size-3.5" />
                        </div>
                        <span
                          className={`text-sm leading-6 ${
                            title === "Pro" ? "text-white/78" : "text-slate-600"
                          }`}
                        >
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto pt-8">
                    <ButtonLink
                      href={`/signup?plan=${planIds[index]}`}
                      className={title === "Pro" ? "w-full bg-white text-slate-950 hover:bg-slate-100" : "w-full"}
                      variant={title === "Pro" ? "primary" : "secondary"}
                    >
                      {title === "Kurulum Desteği" ? "Destek Talep Et" : "Planı Seç"}
                    </ButtonLink>
                  </div>
                </article>
              </AnimatedSection>
            );
          })}
        </div>

        <AnimatedSection delay={0.14} className="mt-14">
          <div className="surface-card overflow-hidden rounded-[32px]">
            <div className="border-b border-slate-200 px-6 py-5">
              <h3 className="text-xl font-semibold tracking-[-0.03em] text-slate-950">
                Plan Karşılaştırması
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="bg-slate-50 text-left text-sm text-slate-500">
                    <th className="px-6 py-4 font-medium">Kapsam</th>
                    <th className="px-6 py-4 font-medium">Başlangıç</th>
                    <th className="px-6 py-4 font-medium">Pro</th>
                    <th className="px-6 py-4 font-medium">Kurulum Desteği</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row) => (
                    <tr key={row.label} className="border-t border-slate-200 text-sm">
                      <td className="px-6 py-4 font-medium text-slate-950">{row.label}</td>
                      <td className="px-6 py-4 text-slate-600">{row.starter}</td>
                      <td className="px-6 py-4 text-slate-600">{row.pro}</td>
                      <td className="px-6 py-4 text-slate-600">{row.setup}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </AnimatedSection>
      </Container>
    </div>
  );
}
