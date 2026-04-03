"use client";

import { Plus } from "lucide-react";
import { useState } from "react";

import type { MockProduct } from "@/lib/data";

type ProductMockTableProps = {
  initialProducts: MockProduct[];
};

export function ProductMockTable({ initialProducts }: ProductMockTableProps) {
  const [products, setProducts] = useState(initialProducts);

  function addProduct() {
    setProducts((current) => [
      ...current,
      {
        id: `mock-${current.length + 1}`,
        name: `Yeni Ürün ${current.length + 1}`,
        category: "Yeni Kategori",
        price: "₺XXX",
        sku: `NEW-${1000 + current.length + 1}`,
      },
    ]);
  }

  return (
    <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-[0_12px_28px_rgba(15,23,42,0.04)]">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold text-slate-950">Örnek ürün listesi</p>
          <p className="mt-1 text-sm text-slate-500">İlk ürün yapınızı bu ekranda hızlıca hazırlayabilirsiniz.</p>
        </div>
        <button
          type="button"
          onClick={addProduct}
          className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700 hover:border-blue-200 hover:bg-white"
        >
          <Plus className="size-4" />
          Ürün Ekle
        </button>
      </div>

      <div className="mt-5 overflow-x-auto">
        <table className="min-w-full text-left text-sm">
          <thead>
            <tr className="text-slate-400">
              <th className="px-3 py-3 font-medium">Ürün</th>
              <th className="px-3 py-3 font-medium">Kategori</th>
              <th className="px-3 py-3 font-medium">SKU</th>
              <th className="px-3 py-3 font-medium">Fiyat</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="border-t border-slate-100">
                <td className="px-3 py-3 font-medium text-slate-950">{product.name}</td>
                <td className="px-3 py-3 text-slate-600">{product.category}</td>
                <td className="px-3 py-3 font-mono text-slate-500">{product.sku}</td>
                <td className="px-3 py-3 text-slate-600">{product.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
