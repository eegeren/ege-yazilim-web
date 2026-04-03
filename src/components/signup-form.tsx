"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import type { AppPlan } from "@/lib/data";

import { FormInput } from "./form-input";

type SignupFormProps = {
  plan: AppPlan;
};

export function SignupForm({ plan }: SignupFormProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [fullName, setFullName] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit() {
    setLoading(true);
    window.setTimeout(() => {
      router.push(`/checkout?plan=${plan.id}&company=${encodeURIComponent(businessName || "Mağazam")}`);
    }, 700);
  }

  return (
    <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
      <div className="surface-card rounded-[32px] p-6">
        <p className="text-sm font-semibold text-slate-950">Seçiminiz</p>
        <div className="mt-4 rounded-[24px] border border-slate-200 bg-slate-50 p-4">
          <p className="text-lg font-semibold tracking-[-0.03em] text-slate-950">{plan.title}</p>
          <p className="mt-2 text-sm leading-6 text-slate-500">{plan.description}</p>
          <div className="mt-4 flex items-end justify-between">
            <div>
              <p className="text-[2rem] font-semibold tracking-[-0.06em] text-slate-950">{plan.price}</p>
              <p className="text-sm text-slate-500">{plan.cadence}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="surface-card rounded-[32px] p-6 sm:p-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-700">Kayıt</p>
          <h1 className="mt-4 text-balance text-[2.3rem] font-semibold tracking-[-0.06em] text-slate-950 sm:text-[3rem]">
            Hesabınızı oluşturun
          </h1>
          <p className="mt-3 text-base leading-8 text-slate-600">
            Kurulum akışını başlatmak için temel hesap bilgilerinizi girin.
          </p>
        </div>

        <div className="mt-8 grid gap-4">
          <FormInput label="Ad Soyad" placeholder="Örn. Ayşe Yılmaz" value={fullName} onChange={setFullName} />
          <FormInput
            label="İşletme Adı"
            placeholder="Örn. Merkez Mağaza"
            value={businessName}
            onChange={setBusinessName}
          />
          <div className="grid gap-4 sm:grid-cols-2">
            <FormInput label="E-posta" type="email" placeholder="ornek@isletme.com" value={email} onChange={setEmail} />
            <FormInput label="Telefon" placeholder="+90 (5__) ___ __ __" value={phone} onChange={setPhone} />
          </div>
          <FormInput
            label="Şifre"
            type="password"
            placeholder="••••••••"
            hint="Bu alan örnek akış içindir, gerçek kimlik doğrulama yapılmaz."
            value={password}
            onChange={setPassword}
          />
        </div>

        <button
          type="button"
          disabled={loading}
          onClick={handleSubmit}
          className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[linear-gradient(180deg,#2f6ff5_0%,#2563eb_100%)] px-5 py-3 text-sm font-semibold text-white shadow-[0_18px_45px_rgba(37,99,235,0.24)] hover:-translate-y-0.5 disabled:translate-y-0 disabled:opacity-70"
        >
          {loading ? "Hesap hazırlanıyor..." : "Hesap Oluştur"}
        </button>
      </div>
    </div>
  );
}
