"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { LockKeyhole, ShieldCheck } from "lucide-react";

import type { AppPlan } from "@/lib/data";

import { FormInput } from "./form-input";

type CheckoutCardProps = {
  plan: AppPlan;
};

export function CheckoutCard({ plan }: CheckoutCardProps) {
  const router = useRouter();
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [loading, setLoading] = useState(false);

  function handleSubmit() {
    setLoading(true);
    window.setTimeout(() => {
      router.push(`/onboarding?plan=${plan.id}`);
    }, 1200);
  }

  return (
    <div className="grid gap-5 xl:grid-cols-[0.95fr_1.05fr]">
      <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-5">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm font-semibold text-slate-950">Sipariş özeti</p>
            <p className="mt-1 text-sm text-slate-500">Seçiminiz mock ödeme akışı ile tamamlanacaktır.</p>
          </div>
          <ShieldCheck className="size-5 text-blue-700" />
        </div>
        <div className="mt-6 rounded-[24px] border border-slate-200 bg-white p-4">
          <p className="text-sm font-semibold text-slate-950">{plan.title}</p>
          <p className="mt-2 text-sm leading-6 text-slate-500">{plan.description}</p>
          <div className="mt-6 flex items-end justify-between">
            <div>
              <p className="text-[2.3rem] font-semibold tracking-[-0.06em] text-slate-950">{plan.price}</p>
              <p className="text-sm text-slate-500">{plan.cadence}</p>
            </div>
            {plan.highlight ? (
              <span className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-700">
                {plan.highlight}
              </span>
            ) : null}
          </div>
        </div>
      </div>

      <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-[0_12px_28px_rgba(15,23,42,0.04)]">
        <div className="flex items-center gap-2 text-sm font-semibold text-slate-950">
          <LockKeyhole className="size-4 text-blue-700" />
          Güvenli ödeme ekranı
        </div>
        <div className="mt-5 grid gap-4">
          <FormInput
            label="Kart numarası"
            placeholder="4242 4242 4242 4242"
            value={cardNumber}
            onChange={setCardNumber}
          />
          <div className="grid gap-4 sm:grid-cols-2">
            <FormInput label="Son kullanma" placeholder="12/29" value={expiry} onChange={setExpiry} />
            <FormInput label="CVV" placeholder="123" value={cvv} onChange={setCvv} />
          </div>
        </div>
        <button
          type="button"
          onClick={handleSubmit}
          disabled={loading}
          className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[linear-gradient(180deg,#2f6ff5_0%,#2563eb_100%)] px-5 py-3 text-sm font-semibold text-white shadow-[0_18px_45px_rgba(37,99,235,0.24)] hover:-translate-y-0.5 disabled:translate-y-0 disabled:opacity-70"
        >
          {loading ? "Ödeme işleniyor..." : "Ödemeyi Tamamla"}
        </button>
        <p className="mt-3 text-sm text-slate-500">
          Bu ekran görsel akış içindir. Gerçek kart verisi işlenmez.
        </p>
      </div>
    </div>
  );
}
