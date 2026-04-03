import { Star } from "lucide-react";

import { testimonials } from "@/lib/data";

import { AnimatedSection } from "./ui/animated-section";
import { Container } from "./ui/container";

export function TestimonialsSection() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <AnimatedSection>
          <div className="mb-12 flex flex-col items-center text-center">
            <div className="inline-flex rounded-full border border-blue-100 bg-white/86 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--color-primary)] shadow-[0_12px_28px_rgba(15,23,42,0.04)]">
              Müşteri Deneyimleri
            </div>
            <h2 className="mt-5 max-w-2xl text-balance text-3xl font-semibold tracking-[-0.06em] text-slate-950 sm:text-[2.7rem]">
              Sistemi kullananlar ne diyor?
            </h2>
            <p className="mt-4 max-w-xl text-[17px] leading-8 text-[var(--color-ink-soft)]">
              Perakende mağazaları, MağazaERP ile operasyonlarını nasıl düzene soktu?
            </p>
          </div>
        </AnimatedSection>

        <div className="grid gap-5 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <AnimatedSection key={item.name} delay={index * 0.08}>
              <article className="surface-card surface-card-hover flex h-full flex-col rounded-[30px] p-6">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <blockquote className="mt-5 flex-1 text-[15px] leading-7 text-slate-700">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
                <div className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-5">
                  <div
                    className={`flex size-10 shrink-0 items-center justify-center rounded-full text-[13px] font-bold text-white ${item.accent}`}
                  >
                    {item.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-950">{item.name}</p>
                    <p className="text-xs text-slate-500">
                      {item.title} · {item.company}
                    </p>
                  </div>
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.2} className="mt-10">
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-8">
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <div className="size-2 rounded-full bg-emerald-500" />
              Kurulum desteğiyle hızlı başlangıç
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <div className="size-2 rounded-full bg-blue-500" />
              Demo hesabıyla ücretsiz deneyin
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <div className="size-2 rounded-full bg-amber-500" />
              Taahhüt gerektirmez
            </div>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
