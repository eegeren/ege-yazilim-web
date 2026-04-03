import { ArrowRight, CheckCircle2 } from "lucide-react";

import { AnimatedSection } from "./ui/animated-section";
import { ButtonLink } from "./ui/button-link";
import { Container } from "./ui/container";

const guarantees = [
  "Demo ücretsiz, kayıt gerekmez",
  "Ücretsiz kurulum desteği dahil",
  "PC, tablet ve el terminali uyumlu",
  "Uzun dönem taahhüt yok",
];

export function CTASection() {
  return (
    <section className="pb-20 pt-10 sm:pb-24">
      <Container>
        <AnimatedSection>
          <div className="relative overflow-hidden rounded-[38px] border border-white/8 bg-[linear-gradient(135deg,#0a1628_0%,#0f1f3d_50%,#0a1628_100%)] px-6 py-12 text-white shadow-[0_24px_70px_rgba(0,0,0,0.4)] sm:px-10 sm:py-14">
            <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-r from-emerald-500/12 via-teal-400/8 to-transparent" />
            <div className="absolute -right-16 bottom-0 size-48 rounded-full bg-emerald-500/8 blur-3xl" />
            <div className="absolute right-8 top-8 size-32 rounded-full bg-teal-400/6 blur-2xl" />
            <div className="relative max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-200">
                Harekete Geçin
              </p>
              <h2 className="mt-5 text-balance text-3xl font-semibold tracking-[-0.06em] sm:text-[3.3rem]">
                Mağazanız bu kadar karmaşık olmak zorunda değil.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-white/72 sm:text-lg sm:leading-8">
                Rol bazlı yetkilendirme, anlık stok takibi ve otomatik kasa akışıyla
                günlük operasyonunuzu kontrol altına alın. Demo hesabıyla hemen
                deneyin — hiçbir şey kurmadan, hiçbir şey ödemeden.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/demo" className="gap-2 bg-white text-slate-950 hover:bg-slate-100">
                  Ücretsiz Demo Gör
                  <ArrowRight className="size-4" />
                </ButtonLink>
                <ButtonLink
                  href="/contact"
                  variant="outline-dark"
                >
                  Fiyat ve Kurulum Sor
                </ButtonLink>
              </div>
              <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
                {guarantees.map((g) => (
                  <div key={g} className="flex items-center gap-2">
                    <CheckCircle2 className="size-4 shrink-0 text-emerald-400" />
                    <span className="text-sm text-white/65">{g}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
