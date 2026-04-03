import Link from "next/link";

import { Container } from "@/components/ui/container";

export default function PosPlaceholderPage() {
  return (
    <div className="pb-20 pt-12 sm:pb-24 sm:pt-16">
      <Container>
        <div className="surface-card rounded-[36px] p-8 sm:p-10">
          <h1 className="text-[2.4rem] font-semibold tracking-[-0.06em] text-slate-950 sm:text-[3rem]">
            POS ekranı placeholder
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">
            Bu ekran, onboarding sonrasında yönlendirilecek satış modülü için örnek placeholder sayfadır.
          </p>
          <Link
            href="/"
            className="mt-6 inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 hover:border-blue-200"
          >
            Anasayfaya Dön
          </Link>
        </div>
      </Container>
    </div>
  );
}
