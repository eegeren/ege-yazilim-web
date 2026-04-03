import { ArrowRight, CirclePlay, Gift, Smartphone } from "lucide-react";

import { AnimatedSection } from "./ui/animated-section";
import { ButtonLink } from "./ui/button-link";
import { Container } from "./ui/container";
import { DashboardPreview } from "./ui/dashboard-preview";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,#0a1628_0%,#0f1f3d_45%,#0d1a2e_100%)] pb-0 pt-16 sm:pt-20 lg:pt-24">
      {/* Background glow accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-emerald-500/8 blur-[120px]" />
        <div className="absolute -left-24 top-1/3 h-64 w-64 rounded-full bg-blue-600/10 blur-[80px]" />
        <div className="absolute -right-24 top-1/4 h-64 w-64 rounded-full bg-emerald-600/8 blur-[80px]" />
      </div>

      <Container className="relative">
        {/* Centered hero text */}
        <AnimatedSection className="mx-auto max-w-4xl text-center">
          <div className="flex flex-wrap items-center justify-center gap-2">
            <div className="inline-flex rounded-full border border-white/12 bg-white/6 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-emerald-300 backdrop-blur">
              Mağaza Operasyonları İçin Tek Panel
            </div>
            <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-300">
              <Gift className="size-3" />
              Ücretsiz Kurulum Desteği
            </div>
          </div>

          <h1 className="mt-7 text-balance text-[2.8rem] font-bold tracking-[-0.06em] text-white sm:text-[4rem] lg:text-[5.2rem] lg:leading-[1.02]">
            İşinizi Yöneten{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
              Teknoloji
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-[17px] leading-8 text-white/62 sm:text-[19px]">
            Satış, stok, mal kabul, transfer ve kasa yönetimini tek sistemde toplayın.
            PC, tablet ve el terminalinde çalışır — ücretsiz kurulum desteğiyle aynı gün başlayın.
          </p>

          <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <ButtonLink href="/demo" className="gap-2 px-7 py-3.5 text-base">
              Deneyimi Başlat
              <CirclePlay className="size-5" />
            </ButtonLink>
            <ButtonLink
              href="/pricing"
              variant="outline-dark"
              className="gap-2 px-7 py-3.5 text-base"
            >
              Fiyatları İncele
              <ArrowRight className="size-5" />
            </ButtonLink>
          </div>

          {/* Mini stats row */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            <div className="flex items-center gap-2 text-sm text-white/50">
              <Gift className="size-4 text-emerald-400" />
              <span>Ücretsiz kurulum desteği</span>
            </div>
            <div className="hidden h-4 w-px bg-white/15 sm:block" />
            <div className="flex items-center gap-2 text-sm text-white/50">
              <Smartphone className="size-4 text-emerald-400" />
              <span>PC, tablet ve el terminali uyumu</span>
            </div>
            <div className="hidden h-4 w-px bg-white/15 sm:block" />
            <div className="flex items-center gap-2 text-sm text-white/50">
              <span className="size-2 rounded-full bg-emerald-400" />
              <span>Taahhüt gerektirmez</span>
            </div>
          </div>
        </AnimatedSection>

        {/* Dashboard preview — floats out of section */}
        <AnimatedSection delay={0.14} className="relative mx-auto mt-12 max-w-5xl">
          <div className="rounded-t-[28px] border border-white/10 bg-white/4 p-2 pb-0 shadow-[0_40px_100px_rgba(0,0,0,0.5)] backdrop-blur-sm sm:rounded-t-[34px] sm:p-3 sm:pb-0">
            <div className="rounded-t-[22px] bg-[#0f172a] p-1 sm:rounded-t-[28px]">
              {/* Window chrome */}
              <div className="flex items-center gap-1.5 px-3 py-2.5">
                <div className="size-2.5 rounded-full bg-red-400/70" />
                <div className="size-2.5 rounded-full bg-amber-400/70" />
                <div className="size-2.5 rounded-full bg-emerald-400/70" />
                <div className="mx-2 flex-1 rounded-md bg-white/6 px-3 py-1 text-[10px] text-white/30">
                  app.magazaerp.com
                </div>
              </div>
              <DashboardPreview className="rounded-t-[18px] sm:rounded-t-[22px]" />
            </div>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
