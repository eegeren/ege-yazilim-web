import { Check, Dot } from "lucide-react";

import { demoFlowSteps } from "@/lib/data";

import { AnimatedSection } from "./ui/animated-section";
import { ButtonLink } from "./ui/button-link";
import { Container } from "./ui/container";
import { DashboardPreview } from "./ui/dashboard-preview";
import { SectionHeading } from "./ui/section-heading";

export function DemoWalkthrough() {
  const overviewCards = [
    {
      title: "Giriş akışı",
      items: ["Karşılama ekranı", "Yetki bazlı yönlendirme", "Temiz başlangıç deneyimi"],
    },
    {
      title: "Operasyon akışı",
      items: ["Ürün ve fiyat düzeni", "Stok görünürlüğü", "Transfer ve kabul takibi"],
    },
    {
      title: "Satış akışı",
      items: ["Hızlı POS deneyimi", "Ödeme akışı", "Fiş ve kasa görünümü"],
    },
    {
      title: "Kontrol akışı",
      items: ["Özet raporlar", "Kullanıcı yapısı", "Günlük operasyon görünümü"],
    },
  ];

  return (
    <div className="pb-20 pt-12 sm:pb-24 sm:pt-16">
      <Container>
        <AnimatedSection>
          <SectionHeading
            eyebrow="Demo"
            title="Demo Akışını İnceleyin"
            description="Sistemin giriş ekranından satış, kabul, ürün yönetimi ve genel kontrol görünümüne kadar nasıl ilerlediğini adım adım görün."
          >
            <div className="flex gap-3">
              <ButtonLink href="/contact">Demo Talep Et</ButtonLink>
              <ButtonLink href="/pricing" variant="secondary">
                Fiyatları Gör
              </ButtonLink>
            </div>
          </SectionHeading>
        </AnimatedSection>

        <div className="mt-12 grid gap-10 xl:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-4">
            {demoFlowSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <AnimatedSection key={step.title} delay={index * 0.06}>
                  <article className="rounded-[28px] border border-white/70 bg-white/90 p-6 shadow-[var(--shadow-card)]">
                    <div className="flex items-start gap-4">
                      <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-[var(--color-primary)]">
                        <Icon className="size-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-slate-400">
                          <span>Adım {index + 1}</span>
                          <Dot className="size-4" />
                          <span>Ürün akışı</span>
                        </div>
                        <h3 className="mt-3 text-xl font-semibold tracking-[-0.03em] text-slate-950">
                          {step.title}
                        </h3>
                        <p className="mt-3 text-sm leading-7 text-slate-600">
                          {step.description}
                        </p>
                        <p className="mt-3 text-sm font-medium text-slate-700">
                          {step.detail}
                        </p>
                      </div>
                    </div>
                  </article>
                </AnimatedSection>
              );
            })}
          </div>

          <div className="space-y-5">
            <AnimatedSection delay={0.08}>
              <DashboardPreview variant="workflow" />
            </AnimatedSection>

            <AnimatedSection delay={0.12}>
              <div className="rounded-[30px] border border-white/70 bg-white/90 p-6 shadow-[var(--shadow-card)]">
                <div>
                  <p className="text-sm font-semibold text-slate-950">Ekran Özeti</p>
                  <div className="mt-4 grid gap-3 lg:grid-cols-2">
                    {overviewCards.map((card) => (
                      <div
                        key={card.title}
                        className="rounded-2xl border border-slate-200 bg-white p-4"
                      >
                        <p className="text-sm font-semibold text-slate-950">{card.title}</p>
                        <div className="mt-3 space-y-2">
                          {card.items.map((item) => (
                            <div key={item} className="flex items-center gap-2 text-sm text-slate-600">
                              <Check className="size-4 text-[var(--color-primary)]" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="mt-4 text-sm text-slate-500">
                    Demo sayfası, ürünün ekran yapısını ve işlem sırasını tanıtmak için hazırlanmıştır.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </Container>
    </div>
  );
}
