import { AnimatedSection } from "./ui/animated-section";
import { Container } from "./ui/container";

const stats = [
  { value: "4", label: "Farklı Kullanıcı Rolü", sub: "Admin · Operasyon · Kasiyer · Mal Kabul" },
  { value: "1 Gün", label: "Ortalama Kurulum Süresi", sub: "Ücretsiz devreye alma desteğiyle" },
  { value: "%100", label: "Web Tabanlı", sub: "Kurulum gerektirmez, her tarayıcıda çalışır" },
  { value: "7/24", label: "Sistem Erişimi", sub: "Vardiya saatlerine bağlı kalmadan" },
];

export function StatsSection() {
  return (
    <section className="bg-[#0a1628] py-14 sm:py-16">
      <Container>
        <AnimatedSection>
          <p className="mb-10 text-center text-xs font-semibold uppercase tracking-[0.28em] text-emerald-400">
            YB Yazılım Farkı
          </p>
        </AnimatedSection>
        <div className="grid grid-cols-2 gap-px bg-white/8 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <AnimatedSection key={stat.label} delay={index * 0.06}>
              <div className="flex flex-col items-center bg-[#0a1628] px-6 py-8 text-center">
                <div className="text-[2.6rem] font-bold tracking-[-0.06em] text-white sm:text-[3.2rem]">
                  {stat.value}
                </div>
                <div className="mt-2 text-[15px] font-semibold text-white/80">{stat.label}</div>
                <div className="mt-1.5 text-xs leading-5 text-white/38">{stat.sub}</div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
