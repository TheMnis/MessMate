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
        <label className="font-semibold text-text-secondary">
          {label}
        </label>
      )}

      <div className="relative">

        {Icon && (
          <Icon className="absolute left-4 top-1/2 -translate-y-1/2 text-text-disabled" />
        )}

        {textarea ? (
          <textarea
            className={`
              w-full
              radius-2xl
              border
              border-border
              bg-surface
              px-4
              py-3
              ${Icon ? "pl-12" : ""}
              outline-none
              focus:ring-4
              focus:ring-primary-muted
              focus:border-primary
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
              border-border
              bg-surface
              px-4
              py-3
              ${Icon ? "pl-12" : ""}
              ${type === "password" ? "pr-12" : ""}
              outline-none
              focus:ring-4
              focus:ring-primary-muted
              focus:border-primary
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
            className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted"
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
        <p className="text-sm text-text-muted">
          {helperText}
        </p>
      )}

      {error && (
        <p className="text-sm text-danger">
          {error}
        </p>
      )}

    </div>
  );
}

export default Input;