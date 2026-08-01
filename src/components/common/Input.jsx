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
    <div className="space-y-2">

      {label && (
        <label className="font-semibold [color:var(--color-text-secondary)]">
          {label}
        </label>
      )}

      <div className="relative">

        {Icon && (
          <Icon className="absolute left-4 top-1/2 -translate-y-1/2 [color:var(--color-text-disabled)]" />
        )}

        {textarea ? (
          <textarea
            className={`
              w-full
              radius-2xl
              border
              [border-color:var(--color-border)]
              [background:var(--color-surface)]
              px-4
              py-3
              ${Icon ? "pl-12" : ""}
              outline-none
              focus:ring-4
              focus:[--tw-ring-color:var(--color-primary-muted)]
              focus:[border-color:var(--color-primary)]
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
              px-4
              py-3
              ${Icon ? "pl-12" : ""}
              ${type === "password" ? "pr-12" : ""}
              outline-none
              focus:ring-4
              focus:[--tw-ring-color:var(--color-primary-muted)]
              focus:[border-color:var(--color-primary)]
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
            className="absolute right-4 top-1/2 -translate-y-1/2 [color:var(--color-text-muted)]"
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
        <p className="text-sm [color:var(--color-text-muted)]">
          {helperText}
        </p>
      )}

      {error && (
        <p className="text-sm [color:var(--color-danger)]">
          {error}
        </p>
      )}

    </div>
  );
}

export default Input;