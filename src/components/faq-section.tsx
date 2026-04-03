import { faqItems } from "@/lib/data";

import { AnimatedSection } from "./ui/animated-section";
import { Container } from "./ui/container";
import { SectionHeading } from "./ui/section-heading";

export function FAQSection() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <AnimatedSection>
          <SectionHeading
            eyebrow="SSS"
            title="Satın alma öncesi en sık sorulan sorular"
            description="Teknik kullanım, cihaz uyumu ve kurulum süreci hakkında karar vermeyi hızlandıran kısa cevaplar."
          />
        </AnimatedSection>
        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          {faqItems.map((item, index) => (
            <AnimatedSection key={item.question} delay={index * 0.05}>
              <article className="rounded-[28px] border border-white/70 bg-white/90 p-6 shadow-[var(--shadow-card)]">
                <h3 className="text-lg font-semibold tracking-[-0.03em] text-slate-950">
                  {item.question}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.answer}</p>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
