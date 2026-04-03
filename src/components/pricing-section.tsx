import { Check } from "lucide-react";

import { pricingPlans } from "@/lib/data";

import { AnimatedSection } from "./ui/animated-section";
import { ButtonLink } from "./ui/button-link";
import { Container } from "./ui/container";
import { SectionHeading } from "./ui/section-heading";

type PricingSectionProps = {
  compact?: boolean;
};

export function PricingSection({ compact = false }: PricingSectionProps) {
  const planIds = ["aylik", "yillik", "kurulum"];

  return (
    <section className="py-20 sm:py-24">
      <Container>
        <AnimatedSection>
          <SectionHeading
            eyebrow="Fiyatlandırma"
            title="Abonelik ve kurulum seçeneklerini net biçimde karşılaştırın"
            description="Aylık veya yıllık kullanım seçeneklerine ek olarak, ilk geçiş süreci için kurulum desteği planı sunabilirsiniz."
            align={compact ? "left" : "center"}
          />
        </AnimatedSection>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <AnimatedSection key={plan.title} delay={index * 0.07}>
              <article
                className={`group relative flex h-full flex-col overflow-hidden rounded-[32px] border p-6 ${
                  plan.featured
                    ? "border-blue-200 bg-[linear-gradient(180deg,#0f172a_0%,#111c34_100%)] text-white shadow-[0_30px_80px_rgba(15,23,42,0.16)]"
                    : "surface-card surface-card-hover text-slate-950"
                }`}
              >
                {plan.featured ? (
                  <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-r from-blue-500/18 via-cyan-400/12 to-transparent" />
                ) : null}
                <div className="flex items-center justify-between">
                  <div className="relative">
                    <h3 className="text-2xl font-semibold tracking-[-0.04em]">
                      {plan.title}
                    </h3>
                    <p
                      className={`mt-2 text-sm leading-6 ${
                        plan.featured ? "text-white/72" : "text-slate-600"
                      }`}
                    >
                      {plan.description}
                    </p>
                  </div>
                  {plan.featured ? (
                    <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-blue-100">
                      Önerilen
                    </span>
                  ) : null}
                </div>
                <div className="relative mt-8">
                  <span className="text-[2.7rem] font-semibold tracking-[-0.07em]">
                    {plan.price}
                  </span>
                  <span
                    className={`ml-2 text-sm ${
                      plan.featured ? "text-white/62" : "text-slate-500"
                    }`}
                  >
                    {plan.cadence}
                  </span>
                </div>
                <div className="mt-8 space-y-3">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <div
                        className={`mt-0.5 rounded-full p-1 ${
                          plan.featured ? "bg-white/10 text-blue-200" : "bg-blue-50 text-blue-600"
                        }`}
                      >
                        <Check className="size-3.5" />
                      </div>
                      <span
                        className={`text-sm leading-6 ${
                          plan.featured ? "text-white/78" : "text-slate-600"
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
                    variant={plan.featured ? "primary" : "secondary"}
                    className={plan.featured ? "w-full bg-white text-slate-950 hover:bg-slate-100" : "w-full"}
                  >
                    {plan.cta}
                  </ButtonLink>
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
