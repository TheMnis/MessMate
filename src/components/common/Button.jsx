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
      "bg-primary hover:bg-primary-hover text-text-inverse",

    secondary:
      "bg-surface-hover hover:bg-border-strong text-text-secondary",

    danger:
      "bg-danger hover:bg-danger-hover text-text-inverse",
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