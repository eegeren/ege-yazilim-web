import type { ReactNode } from "react";
import {
  ArrowRightLeft,
  BarChart3,
  CreditCard,
  Layers3,
  Package2,
  ShieldCheck,
} from "lucide-react";

import { cn } from "@/lib/utils";

type DashboardPreviewProps = {
  variant?: "hero" | "workflow";
  className?: string;
};

export function DashboardPreview({
  variant = "hero",
  className,
}: DashboardPreviewProps) {
  if (variant === "workflow") {
    return (
      <div
        className={cn(
          "grain-mask surface-card rounded-[34px] p-5 backdrop-blur sm:p-6",
          className,
        )}
      >
        <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <Panel title="Giriş Ekranı" label="Rol seçimi">
            <div className="rounded-[24px] border border-slate-200/80 bg-[linear-gradient(180deg,#fefefe_0%,#f8fafc_100%)] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-sm font-semibold">MağazaERP Demo</span>
                <ShieldCheck className="size-4 text-[var(--color-primary)]" />
              </div>
              <div className="space-y-2">
                <Line width="w-3/4" />
                <Line width="w-full" />
                <div className="grid grid-cols-2 gap-2 pt-2">
                  <Pill text="admin" />
                  <Pill text="cashier" />
                </div>
              </div>
            </div>
          </Panel>
          <Panel title="Rol Yönlendirme" label="İlk ekran">
            <div className="grid gap-2">
              <Tile icon={ShieldCheck} title="Admin" subtitle="Raporlar" />
              <Tile icon={CreditCard} title="Cashier" subtitle="POS ekranı" />
              <Tile icon={Package2} title="Mal Kabul" subtitle="Stok girişi" />
            </div>
          </Panel>
          <Panel title="POS Screen" label="Satış">
            <div className="space-y-3 rounded-[24px] border border-slate-200/80 bg-[linear-gradient(180deg,#fefefe_0%,#f8fafc_100%)] p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold">Hızlı satış</p>
                  <p className="text-xs text-slate-500">Nakit / Kart / Bölünmüş ödeme</p>
                </div>
                <CreditCard className="size-4 text-[var(--color-primary)]" />
              </div>
              <div className="grid grid-cols-3 gap-2">
                <Keypad label="Ürün 1" />
                <Keypad label="Ürün 2" />
                <Keypad label="Ürün 3" />
              </div>
              <div className="rounded-[20px] bg-slate-950 p-3 text-white shadow-[0_16px_32px_rgba(15,23,42,0.16)]">
                <div className="flex justify-between text-xs text-white/70">
                  <span>Toplam</span>
                  <span>₺2.480</span>
                </div>
                <div className="mt-2 h-1.5 rounded-full bg-white/10">
                  <div className="h-1.5 w-3/4 rounded-full bg-blue-400" />
                </div>
              </div>
            </div>
          </Panel>
          <Panel title="Receiving + Admin" label="Kontrol">
            <div className="grid gap-2">
              <Tile icon={Layers3} title="Mal Kabul" subtitle="Bekleyen sevkiyat: 03" />
              <Tile icon={ArrowRightLeft} title="Transfer" subtitle="İşlemde: 08" />
              <Tile icon={BarChart3} title="Rapor" subtitle="Bugün satış: ₺48.920" />
            </div>
          </Panel>
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "grain-mask surface-card relative overflow-hidden rounded-[34px] p-5 backdrop-blur sm:p-6",
        className,
      )}
    >
      <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-r from-blue-500/12 via-cyan-500/10 to-transparent" />
      <div className="absolute right-6 top-6 size-20 rounded-full bg-blue-100/60 blur-2xl" />
      <div className="relative space-y-5">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold tracking-[-0.02em] text-slate-950">Operasyon Kontrol Paneli</p>
            <p className="mt-1 text-xs text-slate-500">Satış, stok ve kullanıcı hareketleri aynı akışta</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
              Online
            </div>
            <div className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-semibold text-[var(--color-primary)]">
              Canlı Görünüm
            </div>
          </div>
        </div>
        <div className="grid gap-4 xl:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[30px] border border-slate-800/80 bg-[linear-gradient(180deg,#0f172a_0%,#111827_100%)] p-4 text-white shadow-[0_26px_60px_rgba(15,23,42,0.18)]">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-blue-200/70">POS</p>
                <p className="mt-1 text-lg font-semibold">Hızlı Satış</p>
              </div>
              <CreditCard className="size-5 text-blue-300" />
            </div>
            <div className="mt-4 grid grid-cols-4 gap-2">
              {["Barkod", "Ürün", "İndirim", "Ödeme"].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/5 px-3 py-4 text-center text-xs text-white/80 backdrop-blur"
                >
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-[24px] bg-white/8 p-4">
              <div className="mb-3 flex justify-between text-xs text-white/60">
                <span>Sepet Özeti</span>
                <span>6 ürün</span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Toplam</span>
                  <span>₺8.420</span>
                </div>
                <div className="flex justify-between text-sm text-white/70">
                  <span>Nakit</span>
                  <span>₺2.500</span>
                </div>
                <div className="flex justify-between text-sm text-white/70">
                  <span>Kart</span>
                  <span>₺5.920</span>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-2">
                <StatusChip tone="emerald" text="2 iade" />
                <StatusChip tone="blue" text="14 fiş" />
                <StatusChip tone="amber" text="1 bekleyen" />
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="rounded-[30px] border border-slate-200/80 bg-[linear-gradient(180deg,#fbfdff_0%,#f8fafc_100%)] p-4">
              <p className="text-xs uppercase tracking-[0.22em] text-slate-400">Rol Akışı</p>
              <div className="mt-4 space-y-2">
                <Tile icon={ShieldCheck} title="Admin" subtitle="Kullanıcı ve rapor yönetimi" />
                <Tile icon={Package2} title="Mal Kabul" subtitle="Teslimat doğrulama" />
                <Tile icon={ArrowRightLeft} title="Operasyon" subtitle="Transfer ve fiyat yönetimi" />
              </div>
            </div>
            <div className="rounded-[30px] border border-slate-200/80 bg-white p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold">Günlük Özet</p>
                  <p className="text-xs text-slate-500">Tek panelden mağaza takibi</p>
                </div>
                <BarChart3 className="size-4 text-[var(--color-primary)]" />
              </div>
              <div className="mt-4 grid grid-cols-2 gap-3">
                <Metric label="Açık kasa" value="12" />
                <Metric label="Bekleyen kabul" value="04" />
                <Metric label="Aktif kullanıcı" value="28" />
                <Metric label="Transfer" value="09" />
              </div>
              <div className="mt-4 rounded-[22px] border border-slate-200 bg-slate-50 px-4 py-3">
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span>Bugün satış trendi</span>
                  <span>+18%</span>
                </div>
                <div className="mt-3 flex h-10 items-end gap-1.5">
                  {[35, 42, 26, 54, 60, 48, 64, 58].map((height, index) => (
                    <div
                      key={height + index}
                      className="flex-1 rounded-t-full bg-gradient-to-t from-blue-500 to-cyan-400"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Panel({
  title,
  label,
  children,
}: {
  title: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="rounded-[28px] border border-slate-200/80 bg-gradient-to-b from-white to-slate-50 p-4 shadow-[0_12px_28px_rgba(15,23,42,0.04)]">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold text-slate-950">{title}</p>
          <p className="text-xs text-slate-500">{label}</p>
        </div>
      </div>
      {children}
    </div>
  );
}

function Tile({
  icon: Icon,
  title,
  subtitle,
}: {
  icon: typeof ShieldCheck;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-[20px] border border-slate-200/80 bg-white px-3 py-3 shadow-[0_10px_24px_rgba(15,23,42,0.03)]">
      <div className="rounded-2xl bg-blue-50 p-2 text-[var(--color-primary)]">
        <Icon className="size-4" />
      </div>
      <div>
        <p className="text-sm font-semibold text-slate-950">{title}</p>
        <p className="text-xs text-slate-500">{subtitle}</p>
      </div>
    </div>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[20px] border border-slate-200/80 bg-slate-50 px-3 py-4">
      <p className="text-xs text-slate-500">{label}</p>
      <p className="mt-1 text-xl font-semibold tracking-[-0.04em] text-slate-950">{value}</p>
    </div>
  );
}

function Pill({ text }: { text: string }) {
  return (
    <div className="rounded-xl border border-slate-200/80 bg-white px-3 py-2 text-center text-xs font-medium text-slate-700">
      {text}
    </div>
  );
}

function Line({ width }: { width: string }) {
  return <div className={cn("h-3 rounded-full bg-slate-200", width)} />;
}

function Keypad({ label }: { label: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 px-2 py-3 text-center text-[11px] text-white/80">
      {label}
    </div>
  );
}

function StatusChip({
  tone,
  text,
}: {
  tone: "emerald" | "blue" | "amber";
  text: string;
}) {
  const tones = {
    emerald: "bg-emerald-400/10 text-emerald-200 border-emerald-300/15",
    blue: "bg-blue-400/10 text-blue-200 border-blue-300/15",
    amber: "bg-amber-400/10 text-amber-200 border-amber-300/15",
  };

  return (
    <div className={`rounded-full border px-2.5 py-1 text-center text-[11px] font-medium ${tones[tone]}`}>
      {text}
    </div>
  );
}
