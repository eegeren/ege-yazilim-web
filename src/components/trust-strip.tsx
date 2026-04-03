import { trustItems } from "@/lib/data";

import { AnimatedSection } from "./ui/animated-section";
import { Container } from "./ui/container";

export function TrustStrip() {
  return (
    <section className="py-6 sm:py-8">
      <Container>
        <AnimatedSection className="rounded-[32px] border border-white/70 bg-white/80 p-4 shadow-[var(--shadow-card)] backdrop-blur sm:p-5">
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {trustItems.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-[24px] border border-slate-100 bg-slate-50/70 px-4 py-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="rounded-2xl bg-blue-50 p-2 text-[var(--color-primary)]">
                      <Icon className="size-4" />
                    </div>
                    <p className="text-sm font-semibold text-slate-950">{item.title}</p>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
                </div>
              );
            })}
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
