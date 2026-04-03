import { Monitor, Smartphone, ScanLine, CheckCircle2 } from "lucide-react";

import { AnimatedSection } from "./ui/animated-section";
import { Container } from "./ui/container";

const devices = [
  {
    icon: Monitor,
    title: "Masaüstü & Laptop",
    subtitle: "Kasa ve ofis bilgisayarları",
    description:
      "Tarayıcısı olan her PC'de çalışır. Ek yazılım kurmaya, IT desteği beklemeye gerek yok.",
    useCases: ["Admin paneli", "Operasyon ekranı", "POS satış"],
    accent: "border-blue-200 bg-blue-50/60",
    iconBg: "bg-blue-100 text-blue-600",
    dotColor: "bg-blue-500",
  },
  {
    icon: Smartphone,
    title: "Tablet & Mobil",
    subtitle: "iOS ve Android cihazlar",
    description:
      "Dokunmatik ekrana optimize edilmiş arayüz. PWA olarak ana ekrana eklenebilir, offline dayanıklı.",
    useCases: ["Mal kabul", "Stok sayım", "Transfer onayı"],
    accent: "border-emerald-200 bg-emerald-50/60",
    iconBg: "bg-emerald-100 text-emerald-600",
    dotColor: "bg-emerald-500",
  },
  {
    icon: ScanLine,
    title: "El Terminali",
    subtitle: "Barkodlu saha cihazları",
    description:
      "Barkod tarayıcılı el terminallerinde saha çalışanlarına özel sade ekranlarla verimli kullanım.",
    useCases: ["Barkod okuma", "Stok girişi", "Ürün doğrulama"],
    accent: "border-amber-200 bg-amber-50/60",
    iconBg: "bg-amber-100 text-amber-600",
    dotColor: "bg-amber-500",
  },
];

export function DevicesSection() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <AnimatedSection>
          <div className="mb-12 flex flex-col items-center text-center">
            <div className="inline-flex rounded-full border border-blue-100 bg-white/86 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--color-primary)] shadow-[0_12px_28px_rgba(15,23,42,0.04)]">
              Cihaz Uyumluluğu
            </div>
            <h2 className="mt-5 max-w-2xl text-balance text-3xl font-semibold tracking-[-0.06em] text-slate-950 sm:text-[2.7rem]">
              Ekibinizin kullandığı her cihazda çalışır
            </h2>
            <p className="mt-4 max-w-xl text-[17px] leading-8 text-[var(--color-ink-soft)]">
              Yeni donanım almak zorunda değilsiniz. Kasa bilgisayarınızdan saha el
              terminalinize kadar mevcut cihazlarınızla hemen başlayın.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid gap-5 lg:grid-cols-3">
          {devices.map((device, index) => {
            const Icon = device.icon;
            return (
              <AnimatedSection key={device.title} delay={index * 0.08}>
                <article
                  className={`flex h-full flex-col rounded-[30px] border p-6 shadow-[var(--shadow-card)] ${device.accent}`}
                >
                  <div className={`inline-flex w-fit rounded-2xl p-3 ${device.iconBg}`}>
                    <Icon className="size-6" />
                  </div>
                  <div className="mt-5">
                    <h3 className="text-xl font-semibold tracking-[-0.03em] text-slate-950">
                      {device.title}
                    </h3>
                    <p className="mt-1 text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
                      {device.subtitle}
                    </p>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{device.description}</p>
                  <div className="mt-5 space-y-2">
                    {device.useCases.map((uc) => (
                      <div key={uc} className="flex items-center gap-2">
                        <CheckCircle2 className="size-4 shrink-0 text-slate-400" />
                        <span className="text-sm text-slate-700">{uc}</span>
                      </div>
                    ))}
                  </div>
                </article>
              </AnimatedSection>
            );
          })}
        </div>

        <AnimatedSection delay={0.2} className="mt-8">
          <div className="relative overflow-hidden rounded-[30px] border border-emerald-200 bg-gradient-to-r from-emerald-50 to-cyan-50 px-6 py-5 shadow-[var(--shadow-card)]">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 size-2 shrink-0 rounded-full bg-emerald-500" />
                <p className="text-sm leading-7 text-slate-700 sm:text-base">
                  <span className="font-semibold text-slate-950">Ücretsiz kurulum desteği</span>{" "}
                  kapsamında tüm cihazların ilk yapılandırması yapılır. El terminalleriniz dahil,
                  ekibiniz sistemi kullanmaya hazır hale gelir.
                </p>
              </div>
              <div className="shrink-0 rounded-full border border-emerald-300 bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-700 shadow-sm">
                Her Planda Dahil
              </div>
            </div>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
