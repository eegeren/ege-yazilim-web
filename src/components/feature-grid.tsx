import { features } from "@/lib/data";

import { AnimatedSection } from "./ui/animated-section";
import { Container } from "./ui/container";
import { SectionHeading } from "./ui/section-heading";

export function FeatureGrid() {
  return (
    <section id="ozellikler" className="py-20 sm:py-24">
      <Container>
        <AnimatedSection>
          <SectionHeading
            eyebrow="Özellikler"
            title="Her modül ayrı bir sorunu çözer"
            description="Satış noktasından mal kabul masasına, kasa kapanışından stok raporuna — tüm kritik süreçler tek sistemde, her ekip kendi yetki sınırında."
          />
        </AnimatedSection>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <AnimatedSection key={feature.title} delay={index * 0.05}>
                <article className="surface-card surface-card-hover h-full rounded-[30px] p-6">
                  <div className="inline-flex rounded-2xl bg-blue-50 p-3 text-[var(--color-primary)]">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold tracking-[-0.03em] text-slate-950">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {feature.description}
                  </p>
                </article>
              </AnimatedSection>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
