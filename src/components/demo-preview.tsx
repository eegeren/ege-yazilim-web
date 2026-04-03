import { AnimatedSection } from "./ui/animated-section";
import { ButtonLink } from "./ui/button-link";
import { Container } from "./ui/container";
import { DashboardPreview } from "./ui/dashboard-preview";
import { SectionHeading } from "./ui/section-heading";

export function DemoPreview() {
  const previewSteps = [
    {
      title: "Giriş ve yönlendirme",
      text: "Kullanıcı sisteme giriş yaptığında uygun ekran akışına yönlenir.",
    },
    {
      title: "Satış ve stok akışı",
      text: "POS, stok hareketleri ve kabul süreci tek sistem içinde birbirine bağlı ilerler.",
    },
    {
      title: "Genel kontrol görünümü",
      text: "Raporlar, kullanıcı yapısı ve günlük özetler merkezi panelden izlenir.",
    },
  ];

  return (
    <section className="py-20 sm:py-24">
      <Container>
        <div className="grid gap-10 xl:grid-cols-[0.95fr_1.05fr]">
          <AnimatedSection>
            <SectionHeading
              eyebrow="Demo Akışı"
              title="Ziyaretçiler sistemin girişten ekrana kadar akışını net biçimde görür"
              description="Giriş, yönlendirme, satış, stok ve genel kontrol akışlarını gerçek bir ürün deneyimi gibi sade ve anlaşılır biçimde gösterin."
            >
              <div className="flex gap-3">
                <ButtonLink href="/demo">Demo Sayfasını Aç</ButtonLink>
                <ButtonLink href="/contact" variant="secondary">
                  Demo Talep Et
                </ButtonLink>
              </div>
            </SectionHeading>

            <div className="mt-8 grid gap-3">
              {previewSteps.map((step) => (
                <div key={step.title} className="surface-card surface-card-hover rounded-[24px] p-5">
                  <p className="text-[11px] uppercase tracking-[0.22em] text-slate-400">
                    Demo Bölümü
                  </p>
                  <p className="mt-3 text-lg font-semibold tracking-[-0.03em] text-slate-950">
                    {step.title}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{step.text}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-slate-500">
              Demo alanı yalnızca ürün akışını tanıtmak için hazırlanmıştır.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.12}>
            <DashboardPreview variant="workflow" />
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}
