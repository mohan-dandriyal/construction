"use client";

import type { LucideIcon } from "lucide-react";
import type { ChangeEvent } from "react";

type Props = {
  id: string;
  label: string;
  icon: LucideIcon;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  type?: string;
  autoComplete?: string;
  multiline?: boolean;
  error?: string;
  className?: string;
};

export default function FormField({
  id,
  label,
  icon: Icon,
  value,
  onChange,
  placeholder,
  type = "text",
  autoComplete,
  multiline = false,
  error,
  className = "",
}: Props) {
  const shared = {
    id,
    name: id,
    value,
    placeholder,
    autoComplete,
    "aria-invalid": error ? true : undefined,
    "aria-describedby": error ? `${id}-error` : undefined,
    className: `w-full bg-transparent text-[15px] text-white placeholder:text-[#9ea6b0] focus:outline-none ${
      multiline ? "resize-none" : ""
    }`,
  };

  return (
    <div className={className}>
      <label htmlFor={id} className="sr-only">
        {label}
      </label>

      <div
        className={`flex gap-4 rounded-md border bg-[#1a1f25] px-5 transition-colors duration-300 focus-within:border-[#d4a050] ${
          multiline ? "items-start py-5" : "items-center py-[22px]"
        } ${error ? "border-red-400/70" : "border-white/10"}`}
      >
        <Icon size={22} strokeWidth={1.5} className="shrink-0 text-[#b7bdc7]" aria-hidden="true" />

        {multiline ? (
          <textarea
            {...shared}
            rows={6}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) => onChange(e.target.value)}
          />
        ) : (
          <input
            {...shared}
            type={type}
            onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
          />
        )}
      </div>

      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-sm text-red-300">
          {error}
        </p>
      )}
    </div>
  );
}