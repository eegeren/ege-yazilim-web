import type { Metadata } from "next";
import { IBM_Plex_Mono, Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://magaza-erp-landing.example"),
  title: {
    default: "MağazaERP | Mağaza ERP ve POS Operasyon Platformu",
    template: "%s | MağazaERP",
  },
  description:
    "Satış, stok, mal kabul, transfer, kasa ve rol bazlı mağaza operasyonlarını tek panelden yönetin.",
  keywords: [
    "mağaza erp",
    "pos sistemi",
    "stok takibi",
    "mal kabul",
    "kasa yönetimi",
    "perakende yazılımı",
  ],
  openGraph: {
    title: "MağazaERP",
    description:
      "Perakende operasyonları için rol bazlı ERP ve POS platformu.",
    url: "https://magaza-erp-landing.example",
    siteName: "MağazaERP",
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MağazaERP",
    description:
      "Satış, stok, mal kabul ve kullanıcı yönetimini tek sistemde toplayın.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${manrope.variable} ${plexMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-[var(--color-surface)] font-sans text-[var(--color-ink)]">
        {children}
      </body>
    </html>
  );
}
