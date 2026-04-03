import { CTASection } from "@/components/cta-section";
import { DemoPreview } from "@/components/demo-preview";
import { DevicesSection } from "@/components/devices-section";
import { FeatureGrid } from "@/components/feature-grid";
import { FAQSection } from "@/components/faq-section";
import { HeroSection } from "@/components/hero-section";
import { PageShell } from "@/components/page-shell";
import { PricingSection } from "@/components/pricing-section";
import { ProblemSection } from "@/components/problem-section";
import { RoleShowcase } from "@/components/role-showcase";
import { SetupSection } from "@/components/setup-section";
import { StatsSection } from "@/components/stats-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { TrustStrip } from "@/components/trust-strip";

export default function HomePage() {
  return (
    <PageShell>
      <HeroSection />
      <StatsSection />
      <TrustStrip />
      <ProblemSection />
      <FeatureGrid />
      <RoleShowcase />
      <DevicesSection />
      <DemoPreview />
      <TestimonialsSection />
      <SetupSection />
      <PricingSection />
      <FAQSection />
      <CTASection />
    </PageShell>
  );
}
