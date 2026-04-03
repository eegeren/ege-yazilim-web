type FormInputProps = {
  label: string;
  placeholder: string;
  type?: string;
  hint?: string;
  value?: string;
  onChange?: (value: string) => void;
};

export function FormInput({
  label,
  placeholder,
  type = "text",
  hint,
  value,
  onChange,
}: FormInputProps) {
  return (
    <label className="grid gap-2">
      <span className="text-sm font-semibold text-slate-950">{label}</span>
      <input
        type={type}
        value={value}
        onChange={(event) => onChange?.(event.target.value)}
        placeholder={placeholder}
        className="rounded-[24px] border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none placeholder:text-slate-400 focus:border-blue-200 focus:bg-white"
      />
      {hint ? <span className="text-xs text-slate-500">{hint}</span> : null}
    </label>
  );
}
