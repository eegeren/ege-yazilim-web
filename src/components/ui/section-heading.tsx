import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  children?: ReactNode;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  children,
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      {eyebrow ? (
        <div className="mb-5 inline-flex rounded-full border border-blue-100 bg-white/86 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--color-primary)] shadow-[0_10px_24px_rgba(15,23,42,0.04)]">
          {eyebrow}
        </div>
      ) : null}
      <h2 className="text-balance text-[2rem] font-semibold tracking-[-0.055em] text-slate-950 sm:text-[2.6rem] lg:text-[3.3rem]">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 max-w-2xl text-[15px] leading-7 text-[var(--color-ink-soft)] sm:text-lg sm:leading-8">
          {description}
        </p>
      ) : null}
      {children ? <div className="mt-7">{children}</div> : null}
    </div>
  );
}
