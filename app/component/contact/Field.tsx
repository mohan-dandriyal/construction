
"use client";

import { ChevronDown } from "lucide-react";

type Props = {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  kind?: "input" | "select" | "textarea";
  type?: string;
  autoComplete?: string;
  options?: string[];
  required?: boolean;
  error?: string;
};

const control =
  "w-full rounded-sm border bg-transparent px-6 text-[15px] transition-colors duration-300 placeholder:text-[#9ea6b0] focus:border-[#d4a050] focus:outline-none";

export default function Field({
  id,
  label,
  value,
  onChange,
  placeholder,
  kind = "input",
  type = "text",
  autoComplete,
  options = [],
  required,
  error,
}: Props) {
  const border = error ? "border-red-400/70" : "border-white/25";
  const aria = {
    "aria-invalid": error ? true : undefined,
    "aria-describedby": error ? `${id}-error` : undefined,
  };

  return (
    <div>
      <label htmlFor={id} className="mb-3 block text-base font-medium text-white">
        {label}
        {required && <span className="ml-1 text-[#e5714a]" aria-hidden="true">*</span>}
      </label>

      {kind === "textarea" ? (
        <textarea
          id={id}
          name={id}
          rows={5}
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          className={`${control} ${border} resize-none py-5 text-white`}
          {...aria}
        />
      ) : kind === "select" ? (
        <div className="relative">
          <select
            id={id}
            name={id}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className={`${control} ${border} h-14 appearance-none pr-12 ${value ? "text-white" : "text-[#9ea6b0]"}`}
            {...aria}
          >
            <option value="" disabled className="bg-[#121c26]">
              {placeholder}
            </option>
            {options.map((o) => (
              <option key={o} value={o} className="bg-[#121c26] text-white">
                {o}
              </option>
            ))}
          </select>
          <ChevronDown
            size={20}
            className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-white"
            aria-hidden="true"
          />
        </div>
      ) : (
        <input
          id={id}
          name={id}
          type={type}
          value={value}
          placeholder={placeholder}
          autoComplete={autoComplete}
          onChange={(e) => onChange(e.target.value)}
          className={`${control} ${border} h-14 text-white`}
          {...aria}
        />
      )}

      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-sm text-red-300">
          {error}
        </p>
      )}
    </div>
  );
}