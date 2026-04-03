"use client";

import { useState } from "react";

import type { MockStockRow } from "@/lib/data";

type StockTableProps = {
  initialRows: MockStockRow[];
};

export function StockTable({ initialRows }: StockTableProps) {
  const [rows, setRows] = useState(initialRows);

  function updateQuantity(id: string, quantity: number) {
    setRows((current) =>
      current.map((row) => (row.id === id ? { ...row, quantity } : row)),
    );
  }

  return (
    <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-[0_12px_28px_rgba(15,23,42,0.04)]">
      <p className="text-sm font-semibold text-slate-950">Başlangıç stok tablosu</p>
      <p className="mt-1 text-sm text-slate-500">İlk envanter değerlerini girerek operasyona hazır duruma geçin.</p>

      <div className="mt-5 overflow-x-auto">
        <table className="min-w-full text-left text-sm">
          <thead>
            <tr className="text-slate-400">
              <th className="px-3 py-3 font-medium">Ürün</th>
              <th className="px-3 py-3 font-medium">Lokasyon</th>
              <th className="px-3 py-3 font-medium">Miktar</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id} className="border-t border-slate-100">
                <td className="px-3 py-3 font-medium text-slate-950">{row.product}</td>
                <td className="px-3 py-3 text-slate-600">{row.location}</td>
                <td className="px-3 py-3">
                  <input
                    type="number"
                    min={0}
                    value={row.quantity}
                    onChange={(event) => updateQuantity(row.id, Number(event.target.value))}
                    className="w-24 rounded-[16px] border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700 outline-none focus:border-blue-200 focus:bg-white"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
