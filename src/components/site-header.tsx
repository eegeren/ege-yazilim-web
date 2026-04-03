"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { navItems } from "@/lib/data";
import { cn } from "@/lib/utils";

import { ButtonLink } from "./ui/button-link";
import { Container } from "./ui/container";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 overflow-visible border-b border-white/8 bg-[#0a1628]/95 backdrop-blur-2xl">
      <Container className="flex h-16 items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/ybyazilimlogo.png"
            alt="YB Yazılım"
            width={420}
            height={140}
            className="h-36 w-auto object-contain drop-shadow-[0_0_22px_rgba(16,185,129,0.4)]"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-white/70 hover:bg-white/8 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <ButtonLink href="/start">Hemen Başla</ButtonLink>
        </div>

        <button
          type="button"
          aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
          onClick={() => setOpen((value) => !value)}
          className="inline-flex size-11 items-center justify-center rounded-2xl border border-white/12 bg-white/8 text-white lg:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </Container>

      <div
        className={cn(
          "overflow-hidden border-t border-white/8 bg-[#0a1628]/98 backdrop-blur-xl lg:hidden",
          open ? "max-h-96" : "max-h-0 border-t-0",
        )}
      >
        <Container className="flex flex-col gap-1 py-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-2xl px-3 py-3 text-sm font-medium text-white/70 hover:bg-white/8 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
          <ButtonLink href="/start" className="mt-2" variant="primary">
            Hemen Başla
          </ButtonLink>
        </Container>
      </div>
    </header>
  );
}
