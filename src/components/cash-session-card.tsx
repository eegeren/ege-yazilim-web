"use client";

import { PlayCircle } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

type CashSessionCardProps = {
  planId: string;
};

export function CashSessionCard({ planId }: CashSessionCardProps) {
  const router = useRouter();
  const [opened, setOpened] = useState(false);
  const [loading, setLoading] = useState(false);

  function openSession() {
    setOpened(true);
  }

  function finishSetup() {
    setLoading(true);
    window.setTimeout(() => {
      router.push(`/dashboard-ready?plan=${planId}`);
    }, 1000);
  }

  return (
    <div className="space-y-5">
      <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-5">
        <p className="text-sm font-semibold text-slate-950">İlk kasa oturumu</p>
        <p className="mt-2 text-sm leading-7 text-slate-500">
          Canlı kullanıma geçmeden önce başlangıç oturumunu bu ekran üzerinden açabilirsiniz.
        </p>

        <div className="mt-5 rounded-[24px] border border-slate-200 bg-white p-5">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold text-slate-950">Kasa 01</p>
              <p className="mt-1 text-sm text-slate-500">
                Açılış bakiye, aktif oturum ve hazır başlangıç kontrolü.
              </p>
            </div>
            <button
              type="button"
              onClick={openSession}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700 hover:border-blue-200 hover:bg-white"
            >
              <PlayCircle className="size-4" />
              Kasa Oturumu Aç
            </button>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={finishSetup}
        disabled={!opened || loading}
        className="inline-flex w-full items-center justify-center rounded-full bg-[linear-gradient(180deg,#2f6ff5_0%,#2563eb_100%)] px-5 py-3 text-sm font-semibold text-white shadow-[0_18px_45px_rgba(37,99,235,0.24)] hover:-translate-y-0.5 disabled:translate-y-0 disabled:opacity-60"
      >
        {loading ? "Sistem hazırlanıyor..." : "Sistemi Başlat"}
      </button>
    </div>
  );
}
