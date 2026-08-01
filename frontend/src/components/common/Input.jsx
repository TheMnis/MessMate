import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

function Input({
  label,
  icon: Icon,
  error,
  helperText,
  textarea = false,
  type = "text",
  className = "",
  ...props
}) {
  const [showPassword, setShowPassword] = useState(false);

  const inputType =
    type === "password"
      ? showPassword
        ? "text"
        : "password"
      : type;

  return (
    <div className="space-y-2.5">

      {label && (
        <label htmlFor={props.id} className="text-sm font-bold [color:var(--color-text-secondary)]">
          {label}
        </label>
      )}

      <div className="relative">

        {Icon && (
          <Icon className={`absolute left-4 ${textarea ? "top-4" : "top-1/2 -translate-y-1/2"} [color:var(--color-text-disabled)]`} />
        )}

        {textarea ? (
          <textarea
            className={`
              w-full
              radius-2xl
              border
              [border-color:var(--color-border)]
              [background:var(--color-surface)]
              [color:var(--color-text-primary)]
              px-4
              py-3
              ${Icon ? "pl-12" : ""}
              outline-none
              placeholder:[color:var(--color-text-disabled)]
              focus:ring-4
              focus:[--tw-ring-color:color-mix(in_srgb,var(--color-primary)_16%,transparent)]
              focus:[border-color:var(--color-primary)]
              disabled:cursor-not-allowed
              disabled:[background:var(--color-surface-hover)]
              disabled:opacity-65
              ${error ? "[border-color:var(--color-danger)] focus:[--tw-ring-color:color-mix(in_srgb,var(--color-danger)_16%,transparent)] focus:[border-color:var(--color-danger)]" : ""}
              transition-all
              resize-none
              ${className}
            `}
            {...props}
          />
        ) : (
          <input
            type={inputType}
            className={`
              w-full
              radius-2xl
              border
              [border-color:var(--color-border)]
              [background:var(--color-surface)]
              [color:var(--color-text-primary)]
              px-4
              py-3
              ${Icon ? "pl-12" : ""}
              ${type === "password" ? "pr-12" : ""}
              outline-none
              placeholder:[color:var(--color-text-disabled)]
              focus:ring-4
              focus:[--tw-ring-color:color-mix(in_srgb,var(--color-primary)_16%,transparent)]
              focus:[border-color:var(--color-primary)]
              disabled:cursor-not-allowed
              disabled:[background:var(--color-surface-hover)]
              disabled:opacity-65
              ${error ? "[border-color:var(--color-danger)] focus:[--tw-ring-color:color-mix(in_srgb,var(--color-danger)_16%,transparent)] focus:[border-color:var(--color-danger)]" : ""}
              transition-all
              ${className}
            `}
            {...props}
          />
        )}

        {type === "password" && (
          <button
            type="button"
            onClick={() =>
              setShowPassword(!showPassword)
            }
            className="absolute right-3 top-1/2 grid h-8 w-8 -translate-y-1/2 place-items-center radius-lg [color:var(--color-text-muted)] hover:[background:var(--color-surface-hover)] hover:[color:var(--color-primary)] transition-colors"
          >
            {showPassword ? (
              <FaEyeSlash />
            ) : (
              <FaEye />
            )}
          </button>
        )}

      </div>

      {helperText && (
        <p className="text-xs leading-5 [color:var(--color-text-muted)]">
          {helperText}
        </p>
      )}

      {error && (
        <p className="text-xs font-medium leading-5 [color:var(--color-danger)]">
          {error}
        </p>
      )}

    </div>
  );
}

export default Input;

