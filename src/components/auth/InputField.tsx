/* eslint-disable */

import type React from "react";
import type { FieldError } from "react-hook-form";

interface InputFieldProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  register: any;
  error?: FieldError;
  autoComplete?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  type = "text",
  placeholder,
  register,
  error,
  autoComplete,
}) => {
  return (
    <div className="mb-5 group relative">
      <label
        htmlFor={name}
        className={`block text-sm font-medium mb-2 transition-colors ${
          error
            ? "text-foreground"
            : "text-foreground group-focus-within:text-darkPrimary"
        }`}
      >
        {label}
      </label>
      <input
        id={name}
        type={type}
        placeholder={placeholder}
        className={`
          w-full px-4 py-2 rounded-lg border
          bg-background text-foreground
          border-input/50 hover:border-input/80
          focus:border-darkPrimary focus:ring-2
          transition-all duration-200
          placeholder:text-muted-foreground
          ${error ? "border-destructive focus:ring-destructive" : ""}
        `}
        {...register}
        autoComplete={autoComplete}
      />
      {error && (
        <div className="absolute right-3 top-1/2 -translate-y-1/2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5 text-destructive"
          >
            <path
              fillRule="evenodd"
              d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      )}
      {error && (
        <p className="mt-[6px] text-sm text-destructive">{error.message}</p>
      )}
    </div>
  );
};

export default InputField;
