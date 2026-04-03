import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { appPlans } from "@/lib/data";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Onboarding",
  description: "MağazaERP kurulum sihirbazına hoş geldiniz.",
};

export default async function OnboardingPage(props: PageProps<"/onboarding">) {
  const searchParams = await props.searchParams;
  const planId = typeof searchParams.plan === "string" ? searchParams.plan : "yillik";
  const plan = appPlans.find((item) => item.id === planId) ?? appPlans[1];

  return (
    <div className="pb-20 pt-12 sm:pb-24 sm:pt-16">
      <Container>
        <div className="mx-auto max-w-4xl">
          <div className="surface-card rounded-[38px] p-8 sm:p-10">
            <div className="inline-flex rounded-full border border-blue-100 bg-white/86 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-blue-700">
              Kurulum Başlıyor
            </div>
            <h1 className="mt-6 text-balance text-[2.7rem] font-semibold tracking-[-0.07em] text-slate-950 sm:text-[3.6rem]">
              İlk mağaza kurulumunu birkaç kısa adımda tamamlayın
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
              Seçtiğiniz <span className="font-semibold text-slate-950">{plan.title}</span> planı ile birlikte mağaza bilgileri, kullanıcı yapısı, ürün, stok ve kasa başlangıç ayarlarını tamamlayacaksınız.
            </p>

            <div className="mt-8 rounded-[28px] border border-slate-200 bg-slate-50 p-5">
              <p className="text-sm font-semibold text-slate-950">Kurulum özeti</p>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                <div className="rounded-[22px] border border-slate-200 bg-white p-4">
                  <p className="text-sm font-semibold text-slate-950">Seçili plan</p>
                  <p className="mt-2 text-sm text-slate-500">{plan.title}</p>
                </div>
                <div className="rounded-[22px] border border-slate-200 bg-white p-4">
                  <p className="text-sm font-semibold text-slate-950">Süre</p>
                  <p className="mt-2 text-sm text-slate-500">Yaklaşık 3-5 dakika</p>
                </div>
                <div className="rounded-[22px] border border-slate-200 bg-white p-4">
                  <p className="text-sm font-semibold text-slate-950">Sonuç</p>
                  <p className="mt-2 text-sm text-slate-500">Hazır dashboard ekranı</p>
                </div>
              </div>
            </div>

            <Link
              href={`/onboarding/store?plan=${plan.id}`}
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-[linear-gradient(180deg,#2f6ff5_0%,#2563eb_100%)] px-5 py-3 text-sm font-semibold text-white shadow-[0_18px_45px_rgba(37,99,235,0.24)] hover:-translate-y-0.5"
            >
              Onboarding’i Başlat
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
