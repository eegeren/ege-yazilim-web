import type { ReactNode } from "react";

import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

type PageShellProps = {
  children: ReactNode;
};

export function PageShell({ children }: PageShellProps) {
  return (
    <div className="relative min-h-screen overflow-x-clip">
      <div className="absolute inset-x-0 top-0 -z-10 h-[760px] bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.16),transparent_32%),radial-gradient(circle_at_top_right,rgba(34,211,238,0.12),transparent_26%),linear-gradient(180deg,rgba(255,255,255,0.2),transparent)]" />
      <div className="absolute left-[-8rem] top-28 -z-10 size-64 rounded-full bg-blue-200/20 blur-3xl" />
      <div className="absolute right-[-5rem] top-20 -z-10 size-52 rounded-full bg-cyan-200/20 blur-3xl" />
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}
