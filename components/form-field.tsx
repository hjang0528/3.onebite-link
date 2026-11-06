import type { ReactNode } from "react";

interface FormFieldProps {
  label: string;
  htmlFor: string;
  hint?: string;
  children: ReactNode;
}

export default function FormField({
  label,
  htmlFor,
  hint,
  children,
}: FormFieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={htmlFor}
        className="text-[17px] leading-[1.5] font-semibold tracking-[-0.2px]"
      >
        {label}
      </label>
      {children}
      {hint && (
        <p className="text-[14px] leading-[1.4] text-[var(--text-sub)]">
          {hint}
        </p>
      )}
    </div>
  );
}
