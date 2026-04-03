import { roles } from "@/lib/data";

import { AnimatedSection } from "./ui/animated-section";
import { Container } from "./ui/container";
import { SectionHeading } from "./ui/section-heading";

export function RoleShowcase() {
  const panels = [
    {
      eyebrow: "Kontrol Merkezi",
      title: "Genel görünüm",
      description:
        "Tüm operasyonun tek ekranda izlendiği, özet verilerin toplandığı üst seviye panel yapısı.",
    },
    {
      eyebrow: "Operasyon Ekranı",
      title: "Ürün ve stok akışı",
      description:
        "Ürün kartları, fiyat güncellemeleri, stok hareketleri ve mağaza içi akışların yönetildiği alan.",
    },
    {
      eyebrow: "Satış Ekranı",
      title: "Hızlı işlem deneyimi",
      description:
        "Ödeme akışı, fiş görünümü ve kasa oturumu için sadeleştirilmiş hızlı kullanım arayüzü.",
    },
    {
      eyebrow: "Kabul Ekranı",
      title: "Giriş ve doğrulama akışı",
      description:
        "Gelen ürünlerin kontrol edildiği, sayım ve stok giriş süreçlerinin yönetildiği ekran yapısı.",
    },
  ];

  return (
    <section className="py-20 sm:py-24">
      <Container>
        <AnimatedSection>
          <SectionHeading
            eyebrow="Rol Bazlı Yapı"
            title="Yetkiler net, ekranlar sade, süreçler kontrollü"
            description="Kullanıcı sisteme giriş yaptığında yalnızca yetkili olduğu modülleri görür. Bu yapı, gereksiz karmaşayı azaltır ve günlük işlemlerin daha güvenli, daha hızlı ilerlemesini sağlar."
          />
        </AnimatedSection>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {roles.map((role, index) => {
            const Icon = role.icon;
            const panel = panels[index];

            return (
              <AnimatedSection key={role.slug} delay={index * 0.08}>
                <article className="surface-card surface-card-hover overflow-hidden rounded-[32px]">
                  <div className="relative border-b border-slate-200/80 bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)] px-6 py-6">
                    <div className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${role.accent}`} />
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                          {panel.eyebrow}
                        </div>
                        <h3 className="mt-4 text-[1.75rem] font-semibold tracking-[-0.045em] text-slate-950">
                          {panel.title}
                        </h3>
                        <p className="mt-3 max-w-xl text-[15px] leading-7 text-slate-600">
                          {panel.description}
                        </p>
                      </div>
                      <div className="rounded-2xl border border-slate-200 bg-white p-3 text-slate-900 shadow-[0_10px_24px_rgba(15,23,42,0.04)]">
                        <Icon className="size-5" />
                      </div>
                    </div>
                  </div>
                  <div className="grid gap-4 p-6 sm:grid-cols-[1.08fr_0.92fr]">
                    <div className="rounded-[24px] border border-slate-200/80 bg-slate-50/90 p-5">
                      <p className="text-[11px] uppercase tracking-[0.2em] text-slate-400">
                        Gördüğü panel
                      </p>
                      <p className="mt-3 text-[15px] leading-7 text-slate-700">{role.sees}</p>
                    </div>
                    <div className="rounded-[24px] border border-slate-200/80 bg-white p-5">
                      <p className="text-[11px] uppercase tracking-[0.2em] text-slate-400">
                        Yaptığı işlemler
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2.5">
                        {role.actions.map((action) => (
                          <span
                            key={action}
                            className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-[12px] font-semibold text-slate-700"
                          >
                            {action}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              </AnimatedSection>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
