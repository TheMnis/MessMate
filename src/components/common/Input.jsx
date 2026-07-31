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
        <label className="font-semibold text-gray-700">
          {label}
        </label>
      )}

      <div className="relative">

        {Icon && (
          <Icon className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
        )}

        {textarea ? (
          <textarea
            className={`
              w-full
              rounded-2xl
              border
              border-gray-300
              bg-white
              px-4
              py-3
              ${Icon ? "pl-12" : ""}
              outline-none
              focus:ring-4
              focus:ring-green-200
              focus:border-green-600
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
              rounded-2xl
              border
              border-gray-300
              bg-white
              px-4
              py-3
              ${Icon ? "pl-12" : ""}
              ${type === "password" ? "pr-12" : ""}
              outline-none
              focus:ring-4
              focus:ring-green-200
              focus:border-green-600
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
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
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
        <p className="text-sm text-gray-500">
          {helperText}
        </p>
      )}

      {error && (
        <p className="text-sm text-red-600">
          {error}
        </p>
      )}

    </div>
  );
}

export default Input;