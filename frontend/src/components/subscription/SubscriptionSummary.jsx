import { motion } from "framer-motion";

function SubscriptionSummary({
  title,
  value,
  icon,
  color,
  bg,
}) {
  return (
    <motion.div
      whileHover={{
        y: -5,
      }}
      transition={{
        duration: 0.25,
      }}
      className="rounded-3xl p-6"
      style={{
        background: "var(--color-surface)",
        border: "1px solid var(--color-border)",
        boxShadow: "var(--shadow-lg)",
      }}
    >
      <div
        className="flex h-16 w-16 items-center justify-center rounded-2xl text-2xl"
        style={{
          background: bg,
          color,
        }}
      >
        {icon}
      </div>

      <h3
        className="mt-6 text-lg font-semibold"
        style={{
          color: "var(--color-text-secondary)",
        }}
      >
        {title}
      </h3>

      <h2
        className="mt-2 text-3xl font-bold break-words"
        style={{
          color: "var(--color-text-primary)",
        }}
      >
        {value}
      </h2>
    </motion.div>
  );
}

export default SubscriptionSummary;