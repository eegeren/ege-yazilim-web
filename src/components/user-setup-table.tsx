"use client";

import { Plus, Trash2 } from "lucide-react";
import { useState } from "react";

import type { RoleOption } from "@/lib/data";

import { FormInput } from "./form-input";
import { RoleSelector } from "./role-selector";

type UserRow = {
  id: string;
  name: string;
  email: string;
  role: string;
};

type UserSetupTableProps = {
  roles: RoleOption[];
};

export function UserSetupTable({ roles }: UserSetupTableProps) {
  const [rows, setRows] = useState<UserRow[]>([
    { id: "u1", name: "Mağaza Yöneticisi", email: "yonetim@magaza.com", role: "admin" },
    { id: "u2", name: "Kasa Kullanıcısı", email: "kasa@magaza.com", role: "cashier" },
  ]);

  function updateRow(id: string, key: keyof UserRow, value: string) {
    setRows((current) => current.map((row) => (row.id === id ? { ...row, [key]: value } : row)));
  }

  function addRow() {
    setRows((current) => [
      ...current,
      {
        id: `u${current.length + 1}`,
        name: "",
        email: "",
        role: "operasyon",
      },
    ]);
  }

  function removeRow(id: string) {
    setRows((current) => current.filter((row) => row.id !== id));
  }

  return (
    <div className="space-y-4">
      <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-5">
        <p className="text-sm font-semibold text-slate-950">Rol açıklamaları</p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {roles.map((role) => (
            <div key={role.id} className="rounded-[20px] border border-slate-200 bg-white p-4">
              <p className="text-sm font-semibold text-slate-950">{role.label}</p>
              <p className="mt-2 text-sm leading-6 text-slate-500">{role.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-[0_12px_28px_rgba(15,23,42,0.04)]">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-slate-950">Kullanıcı satırları</p>
            <p className="mt-1 text-sm text-slate-500">İlk erişim yapısını örnek kullanıcılarla hazırlayın.</p>
          </div>
          <button
            type="button"
            onClick={addRow}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700 hover:border-blue-200 hover:bg-white"
          >
            <Plus className="size-4" />
            Kullanıcı Ekle
          </button>
        </div>

        <div className="mt-5 space-y-4">
          {rows.map((row) => (
            <div key={row.id} className="grid gap-3 rounded-[24px] border border-slate-200 bg-slate-50 p-4 lg:grid-cols-[1fr_1fr_180px_44px]">
              <FormInput
                label="Ad Soyad"
                placeholder="Kullanıcı adı"
                value={row.name}
                onChange={(value) => updateRow(row.id, "name", value)}
              />
              <FormInput
                label="E-posta"
                placeholder="eposta@magaza.com"
                type="email"
                value={row.email}
                onChange={(value) => updateRow(row.id, "email", value)}
              />
              <label className="grid gap-2">
                <span className="text-sm font-semibold text-slate-950">Rol</span>
                <RoleSelector
                  value={row.role}
                  options={roles}
                  onChange={(value) => updateRow(row.id, "role", value)}
                />
              </label>
              <div className="flex items-end">
                <button
                  type="button"
                  onClick={() => removeRow(row.id)}
                  className="inline-flex size-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-500 hover:border-red-200 hover:text-red-500"
                >
                  <Trash2 className="size-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
