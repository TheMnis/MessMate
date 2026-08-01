import { motion } from "framer-motion";

function Button({
  children,
  type = "button",
  variant = "primary",
  className = "",
  ...props
}) {

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
      whileTap={{
        scale: 0.95,
      }}
      type={type}
      className={`
        px-6
        py-3
        radius-2xl
        font-semibold
        transition-all
        duration-300
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