import type { RoleOption } from "@/lib/data";

type RoleSelectorProps = {
  value: string;
  options: RoleOption[];
  onChange: (value: string) => void;
};

export function RoleSelector({ value, options, onChange }: RoleSelectorProps) {
  return (
    <select
      value={value}
      onChange={(event) => onChange(event.target.value)}
      className="rounded-[18px] border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 outline-none focus:border-blue-200"
    >
      {options.map((option) => (
        <option key={option.id} value={option.id}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
