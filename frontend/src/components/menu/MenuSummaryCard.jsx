import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaCheckCircle,
  FaTimesCircle,
} from "react-icons/fa";

function MenuSummaryCard({ icon, title, status }) {
  const isAvailable = status === "Available";

  return (
    <motion.div
      whileHover={{
        y: -6,
        scale: 1.02,
      }}
      transition={{
        duration: 0.25,
      }}
      className="relative overflow-hidden rounded-3xl p-6"
      style={{
        background: "var(--color-surface)",
        border: "1px solid var(--color-border)",
        boxShadow: "0 18px 40px rgba(15,23,42,.08)",
      }}
    >
      {/* Decorative Gradient Circle */}

      <div
        style={{
          position: "absolute",
          top: -50,
          right: -50,
          width: 150,
          height: 150,
          borderRadius: "999px",
          background:
            "linear-gradient(135deg,var(--color-primary),var(--color-secondary))",
          opacity: 0.08,
        }}
      />

      {/* Icon */}

      <div
        className="mb-5"
        style={{
          width: 72,
          height: 72,
          borderRadius: 22,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 34,
          background:
            "linear-gradient(135deg,var(--color-primary),var(--color-secondary))",
          color: "#fff",
        }}
      >
        {icon}
      </div>

      {/* Title */}

      <h3
        className="text-xl font-bold"
        style={{
          color: "var(--color-text-primary)",
        }}
      >
        {title}
      </h3>

      <p
        className="mt-2"
        style={{
          color: "var(--color-text-muted)",
          fontSize: 14,
        }}
      >
        Meal availability for today
      </p>

      {/* Status */}

      <div className="mt-6 flex items-center justify-between">

        <div
          className="flex items-center gap-2 rounded-full px-4 py-2"
          style={{
            background: isAvailable
              ? "var(--color-success-subtle)"
              : "var(--color-danger-subtle)",

            color: isAvailable
              ? "var(--color-success)"
              : "var(--color-danger)",
          }}
        >
          {isAvailable ? (
            <FaCheckCircle />
          ) : (
            <FaTimesCircle />
          )}

          <span
            style={{
              fontWeight: 600,
            }}
          >
            {status}
          </span>
        </div>

        <button
          className="flex items-center gap-2 font-semibold"
          style={{
            color: "var(--color-primary)",
          }}
        >
          View

          <FaArrowRight />
        </button>

      </div>
    </motion.div>
  );
}

export default MenuSummaryCard;