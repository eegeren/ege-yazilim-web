import { painPoints } from "@/lib/data";

import { AnimatedSection } from "./ui/animated-section";
import { Container } from "./ui/container";

export function ProblemSection() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <AnimatedSection>
          <div className="mb-12 max-w-2xl">
            <div className="inline-flex rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-orange-700">
              Tanıdık geliyorsa...
            </div>
            <h2 className="mt-5 text-balance text-3xl font-semibold tracking-[-0.06em] text-slate-950 sm:text-[2.7rem]">
              Bunları her gün yaşıyor musunuz?
            </h2>
            <p className="mt-4 text-[17px] leading-8 text-[var(--color-ink-soft)]">
              Çoğu perakende mağazası bu sorunlarla başa çıkmak için yıllarca zaman kaybeder.
              Oysa hepsinin tek bir köklü çözümü var.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid gap-5 md:grid-cols-3">
          {painPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <AnimatedSection key={point.title} delay={index * 0.08}>
                <article className="flex h-full flex-col rounded-[30px] border border-orange-100 bg-gradient-to-b from-orange-50/80 to-white p-6 shadow-[0_16px_48px_rgba(234,88,12,0.06)]">
                  <div className="flex items-start justify-between gap-4">
                    <div className="rounded-2xl border border-orange-200 bg-white p-3 text-orange-500 shadow-[0_8px_20px_rgba(234,88,12,0.08)]">
                      <Icon className="size-5" />
                    </div>
                    <span className="rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-orange-600">
                      {point.tag}
                    </span>
                  </div>
                  <h3 className="mt-5 text-[1.15rem] font-semibold tracking-[-0.03em] text-slate-950">
                    {point.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{point.description}</p>
                </article>
              </AnimatedSection>
            );
          })}
        </div>

        <AnimatedSection delay={0.2} className="mt-8">
          <div className="flex items-center gap-4 rounded-[28px] border border-blue-100 bg-gradient-to-r from-blue-50 to-cyan-50 px-6 py-5 shadow-[var(--shadow-card)]">
            <div className="size-2 shrink-0 rounded-full bg-blue-500" />
            <p className="text-sm leading-7 text-slate-700 sm:text-base">
              <span className="font-semibold text-slate-950">MağazaERP</span>, bu sorunların tamamını tek bir sistemle çözmek için tasarlandı.
              Rol bazlı yetkilendirme, anlık stok takibi ve otomatik kasa akışıyla günlük operasyonunuzu kontrol altına alın.
            </p>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
