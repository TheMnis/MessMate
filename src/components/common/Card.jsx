import { motion } from "framer-motion";

function Card({
  children,
  className = "",
}) {
  return (
    <motion.div
      whileHover={{ y: -3, scale: 1.005 }}
      transition={{
        duration: 0.25,
      }}
      className={`
        [background:var(--color-surface)]
        radius-3xl
        [box-shadow:0_10px_28px_color-mix(in_srgb,var(--color-text-primary)_6%,transparent)]
        hover:[box-shadow:0_20px_42px_color-mix(in_srgb,var(--color-text-primary)_11%,transparent)]
        transition-all
        duration-300
        p-7
        border
        [border-color:color-mix(in_srgb,var(--color-border)_72%,transparent)]
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}

export default Card;
