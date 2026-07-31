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
        bg-white
        rounded-3xl
        shadow-lg
        hover:shadow-2xl
        transition-all
        duration-300
        p-6
        border
        border-gray-100
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}

export default Card;