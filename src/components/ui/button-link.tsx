import type { ReactNode } from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "outline-dark";
  className?: string;
};

const variants = {
  primary:
    "bg-[linear-gradient(180deg,#059669_0%,#047857_100%)] text-white shadow-[0_18px_45px_rgba(5,150,105,0.28)] hover:-translate-y-0.5 hover:shadow-[0_24px_55px_rgba(5,150,105,0.38)] active:scale-[0.97]",
  secondary:
    "border border-[var(--color-line)] bg-white/88 text-[var(--color-ink)] shadow-[0_8px_24px_rgba(15,23,42,0.04)] hover:-translate-y-0.5 hover:border-slate-300 hover:bg-white hover:shadow-[0_18px_35px_rgba(15,23,42,0.08)]",
  ghost:
    "text-[var(--color-ink)] hover:bg-white/70",
  "outline-dark":
    "border border-white/20 bg-white/6 text-white hover:-translate-y-0.5 hover:border-white/36 hover:bg-white/12",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold tracking-[-0.02em]",
        variants[variant],
        className,
      )}
    >
      {children}
    </Link>
  );
}
