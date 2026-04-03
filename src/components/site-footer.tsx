import Link from "next/link";

import { navItems } from "@/lib/data";

import { Container } from "./ui/container";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/60 bg-white/70 py-10 backdrop-blur">
      <Container className="grid gap-10 lg:grid-cols-[1fr_0.7fr_0.7fr]">
        <div>
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-2xl bg-slate-950 text-sm font-semibold text-white">
              M
            </div>
            <div>
              <div className="text-sm font-semibold tracking-[-0.03em] text-slate-950">
                MağazaERP
              </div>
              <div className="text-xs text-slate-500">Retail ERP / POS</div>
            </div>
          </div>
          <p className="mt-4 max-w-md text-sm leading-7 text-slate-600">
            Mağaza satış, stok, mal kabul, transfer, kullanıcı ve kasa süreçlerini tek panelde yöneten rol bazlı operasyon platformu.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-slate-950">Navigasyon</h3>
          <div className="mt-4 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block text-sm text-slate-600 hover:text-slate-950"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-slate-950">İletişim</h3>
          <div className="mt-4 space-y-3 text-sm text-slate-600">
            <p>info@ybyazilim.com</p>
            <p>+90 (545) 154 20 03</p>
            <p>Bursa / Turkey</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
