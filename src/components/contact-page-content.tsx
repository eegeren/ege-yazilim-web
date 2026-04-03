import { Mail, MessageCircleMore, PhoneCall } from "lucide-react";

import { AnimatedSection } from "./ui/animated-section";
import { Container } from "./ui/container";
import { SectionHeading } from "./ui/section-heading";

export function ContactPageContent() {
  return (
    <div className="pb-20 pt-12 sm:pb-24 sm:pt-16">
      <Container>
        <div className="grid gap-10 xl:grid-cols-[0.9fr_1.1fr]">
          <AnimatedSection>
            <SectionHeading
              eyebrow="İletişim"
              title="Kurulum, demo ve teklif süreci için bizimle iletişime geçin"
              description="İşletmenizin yapısına göre demo planı, ücretsiz kurulum desteği ve uygun paket seçimi konusunda aşağıdaki formu doldurun."
            />

            <div className="mt-8 space-y-4">
              <InfoCard
                icon={MessageCircleMore}
                title="WhatsApp"
                value="+90 (545) 154 20 03"
                description="Hızlı ön görüşme ve demo planlaması"
              />
              <InfoCard
                icon={Mail}
                title="E-posta"
                value="info@ybyazilim.com"
                description="Teklif, kapsam ve demo talepleri"
              />
              <InfoCard
                icon={PhoneCall}
                title="Destek Süreci"
                value="Kurulum + eğitim planı"
                description="İlk kurulum aşamalarında destek kapsamı planlanabilir"
              />
            </div>

            <div className="mt-6 rounded-[28px] border border-blue-100 bg-blue-50/80 p-6">
              <h3 className="text-lg font-semibold tracking-[-0.03em] text-slate-950">
                Mini Destek Kutusu
              </h3>
              <div className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
                <p>Kurulum sonrası ekip eğitimi planlanabilir.</p>
                <p>Veri aktarımı ve kullanıcı rolleri başlangıçta yapılandırılabilir.</p>
                <p>Tarayıcı ve el terminali kullanım senaryosu birlikte değerlendirilebilir.</p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="rounded-[32px] border border-white/70 bg-white/90 p-6 shadow-[var(--shadow-card)] sm:p-8">
              <form className="grid gap-5">
                <Field label="Ad Soyad" placeholder="Adınızı ve soyadınızı girin" />
                <Field label="İşletme Adı" placeholder="Mağaza veya şirket adı" />
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Telefon" placeholder="+90 (5__) ___ __ __" />
                  <Field label="E-posta" placeholder="ornek@isletme.com" type="email" />
                </div>
                <label className="grid gap-2">
                  <span className="text-sm font-semibold text-slate-950">Mesaj</span>
                  <textarea
                    rows={6}
                    placeholder="Mevcut mağaza yapınızı, mağaza sayınızı ve ihtiyaç duyduğunuz modülleri kısaca paylaşın."
                    className="rounded-[24px] border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none ring-0 placeholder:text-slate-400 focus:border-blue-200 focus:bg-white"
                  />
                </label>
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-full bg-[var(--color-primary)] px-5 py-3 text-sm font-semibold text-white shadow-[0_18px_45px_rgba(37,99,235,0.28)] hover:-translate-y-0.5 hover:bg-[var(--color-primary-strong)]"
                >
                  Talep Oluştur
                </button>
                <p className="text-sm text-slate-500">
                  Form örnek amaçlıdır. Backend veya gerçek gönderim akışı bağlı değildir.
                </p>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </div>
  );
}

function Field({
  label,
  placeholder,
  type = "text",
}: {
  label: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <label className="grid gap-2">
      <span className="text-sm font-semibold text-slate-950">{label}</span>
      <input
        type={type}
        placeholder={placeholder}
        className="rounded-[24px] border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none placeholder:text-slate-400 focus:border-blue-200 focus:bg-white"
      />
    </label>
  );
}

function InfoCard({
  icon: Icon,
  title,
  value,
  description,
}: {
  icon: typeof Mail;
  title: string;
  value: string;
  description: string;
}) {
  return (
    <div className="rounded-[28px] border border-white/70 bg-white/90 p-5 shadow-[var(--shadow-card)]">
      <div className="flex items-center gap-3">
        <div className="rounded-2xl bg-blue-50 p-3 text-[var(--color-primary)]">
          <Icon className="size-5" />
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-950">{title}</p>
          <p className="text-sm text-slate-600">{value}</p>
        </div>
      </div>
      <p className="mt-4 text-sm leading-7 text-slate-600">{description}</p>
    </div>
  );
}
