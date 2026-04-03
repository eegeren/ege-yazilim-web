import Link from "next/link";
import { ArrowRight, BadgeCheck, LayoutDashboard, ShoppingCart } from "lucide-react";

type SuccessStateProps = {
  title: string;
  description: string;
};

export function SuccessState({ title, description }: SuccessStateProps) {
  const shortcuts = [
    { title: "POS Satış", description: "Hızlı satış ekranı", icon: ShoppingCart },
    { title: "Mal Kabul", description: "Giriş ve sayım akışı", icon: BadgeCheck },
    { title: "Operasyon", description: "Ürün ve stok görünümü", icon: LayoutDashboard },
    { title: "Admin Panel", description: "Genel kontrol ve raporlar", icon: LayoutDashboard },
  ];

  return (
    <div className="pb-20 pt-12 sm:pb-24 sm:pt-16">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-5 sm:px-6 lg:px-8">
        <div className="surface-card rounded-[36px] p-8 text-center sm:p-10">
          <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-blue-50 text-blue-700">
            <BadgeCheck className="size-8" />
          </div>
          <h1 className="mt-6 text-balance text-[2.4rem] font-semibold tracking-[-0.06em] text-slate-950 sm:text-[3.2rem]">
            {title}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            {description}
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {shortcuts.map((item) => {
            const Icon = item.icon;

            return (
              <div key={item.title} className="surface-card surface-card-hover rounded-[28px] p-5">
                <div className="rounded-2xl bg-blue-50 p-3 text-blue-700 w-fit">
                  <Icon className="size-5" />
                </div>
                <p className="mt-4 text-lg font-semibold tracking-[-0.03em] text-slate-950">{item.title}</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
              </div>
            );
          })}
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/workspace/pos"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[linear-gradient(180deg,#2f6ff5_0%,#2563eb_100%)] px-5 py-3 text-sm font-semibold text-white shadow-[0_18px_45px_rgba(37,99,235,0.24)] hover:-translate-y-0.5"
          >
            POS Ekranına Git
            <ArrowRight className="size-4" />
          </Link>
          <Link
            href="/workspace/admin"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--color-line)] bg-white/88 px-5 py-3 text-sm font-semibold text-[var(--color-ink)] shadow-[0_8px_24px_rgba(15,23,42,0.04)] hover:-translate-y-0.5 hover:border-blue-200 hover:bg-white"
          >
            Yönetim Paneline Git
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
