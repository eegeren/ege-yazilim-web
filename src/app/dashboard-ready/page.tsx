import type { Metadata } from "next";

import { SuccessState } from "@/components/success-state";

export const metadata: Metadata = {
  title: "Hazır",
  description: "Kurulum tamamlandı, sistem kullanıma hazır.",
};

export default function DashboardReadyPage() {
  return (
    <SuccessState
      title="Sisteminiz hazır 🎉"
      description="Artık satış yapmaya başlayabilirsiniz. POS, kabul, operasyon ve yönetim ekranları kullanıma hazır durumda."
    />
  );
}
