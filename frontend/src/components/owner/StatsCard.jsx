import { motion } from "framer-motion";

function StatsCard({
  title,
  value,
  icon,
  color,
  bg,
}) {
  return (
    <motion.div
      whileHover={{
        y: -6,
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
      <div className="flex items-start justify-between">

        <div>

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
            className="mt-2 text-4xl font-bold"
            style={{
              color: "var(--color-text-primary)",
            }}
          >
            {value}
          </h2>

        </div>

        <div
          className="rounded-full px-3 py-1 text-sm font-semibold"
          style={{
            background: "var(--color-success-subtle)",
            color: "var(--color-success)",
          }}
        >
          +12%
        </div>

      </div>

      <div
        className="mt-6 h-2 overflow-hidden rounded-full"
        style={{
          background: "var(--color-border)",
        }}
      >
        <div
          style={{
            width: "75%",
            height: "100%",
            background: color,
            borderRadius: "999px",
          }}
        />
      </div>

    </motion.div>
  );
}

export default StatsCard;