import { motion } from "framer-motion";

function Button({
  children,
  type = "button",
  variant = "primary",
  className = "",
  ...props
}) {

  const isDisabled = props.disabled;

  const variants = {
    primary:
      "[background:var(--color-primary)] hover:[background:var(--color-primary-hover)] [color:var(--color-text-inverse)]",

    secondary:
      "[background:var(--color-surface-hover)] hover:[background:var(--color-border-strong)] [color:var(--color-text-secondary)]",

    danger:
      "[background:var(--color-danger)] hover:[background:var(--color-danger-hover)] [color:var(--color-text-inverse)]",
  };

  return (

    <motion.button
      whileHover={isDisabled ? undefined : { y: -1 }}
      whileTap={isDisabled ? undefined : { scale: 0.97 }}
      type={type}
      className={`
        inline-flex
        items-center
        justify-center
        gap-2
        px-5
        py-3
        radius-2xl
        text-sm
        font-bold
        tracking-tight
        [box-shadow:0_8px_18px_color-mix(in_srgb,var(--color-text-primary)_8%,transparent)]
        hover:[box-shadow:0_12px_24px_color-mix(in_srgb,var(--color-text-primary)_12%,transparent)]
        focus-visible:outline-none
        focus-visible:[box-shadow:0_0_0_4px_color-mix(in_srgb,var(--color-primary)_20%,transparent)]
        disabled:pointer-events-none
        disabled:opacity-55
        disabled:[box-shadow:none]
        transition-all
        duration-200
        ${variants[variant]}
        ${className}
      `}
      {...props}
    >
      {children}
    </motion.button>

  );

}

export default Button;
