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
      "bg-green-600 hover:bg-green-700 text-white",

    secondary:
      "bg-gray-100 hover:bg-gray-200 text-gray-700",

    danger:
      "bg-red-600 hover:bg-red-700 text-white",
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
        rounded-2xl
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