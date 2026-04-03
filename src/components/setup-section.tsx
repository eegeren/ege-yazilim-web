import { setupSteps } from "@/lib/data";

import { AnimatedSection } from "./ui/animated-section";
import { Container } from "./ui/container";
import { SectionHeading } from "./ui/section-heading";

export function SetupSection() {
  return (
    <section id="kurulum" className="py-20 sm:py-24">
      <Container>
        <AnimatedSection>
          <SectionHeading
            eyebrow="Kurulum"
            title="Kurulum sürecini sade, anlaşılır ve kontrollü ilerletin"
            description="Paket seçimiyle başlayan süreç; ödeme, onboarding, cihaz kullanımı ve ekip eğitimiyle net bir devreye alma akışına dönüşür."
          />
        </AnimatedSection>

        <div className="mt-12 grid gap-5 lg:grid-cols-2 xl:grid-cols-5">
          {setupSteps.map((step, index) => (
            <AnimatedSection key={step.step} delay={index * 0.06}>
              <article className="surface-card surface-card-hover flex h-full flex-col rounded-[28px] p-6">
                <div className="font-mono text-sm text-[var(--color-primary)]">{step.step}</div>
                <h3 className="mt-4 text-xl font-semibold tracking-[-0.03em] text-slate-950">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{step.description}</p>
              </article>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.16} className="mt-8">
          <div className="rounded-[30px] border border-blue-100 bg-gradient-to-r from-blue-50 to-cyan-50 p-6 shadow-[var(--shadow-card)] sm:p-8">
            <p className="max-w-3xl text-sm leading-7 text-slate-700 sm:text-base">
              <span className="font-semibold text-slate-950">Ortalama kurulum süresi 1 iş günü.</span>{" "}
              Kasa bilgisayarlarında tarayıcı üzerinden, el terminallerinde PWA olarak kullanım başlar.
              Tüm ekip eğitimi ve ilk yapılandırma desteği kurulum paketine dahildir —
              siz sadece mağazanızı açık tutun, gerisini biz hallederiz.
            </p>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
