import { motion } from "framer-motion";

function Card({
  children,
  className = "",
}) {
  return (
    <motion.div
      whileHover={{
        y: -5,
        scale: 1.01,
      }}
      transition={{
        duration: 0.25,
      }}
      className={`
        [background:var(--color-surface)]
        radius-3xl
        elevation-lg
        hover:elevation-2xl
        transition-all
        duration-300
        p-6
        border
        [border-color:var(--color-border-subtle)]
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}

export default Card;