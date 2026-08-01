import { motion } from "framer-motion";
import { FaArrowTrendUp } from "react-icons/fa6";

function AttendanceSummaryCard({
  title,
  value,
  icon,
  bgColor,
  textColor,
}) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{
        duration: 0.25,
      }}
      className="relative overflow-hidden rounded-3xl p-6"
      style={{
        background: bgColor
          ? `var(${bgColor})`
          : "var(--color-surface)",
        border: "1px solid var(--color-border)",
        boxShadow: "var(--shadow-lg)",
      }}
    >
      {/* Decorative Blob */}

      <div
        style={{
          position: "absolute",
          top: -50,
          right: -50,
          width: 160,
          height: 160,
          borderRadius: "var(--radius-full)",
          background: "var(--gradient-primary)",
          opacity: 0.08,
        }}
      />

      <div className="relative flex items-center justify-between">

        {/* Left */}

        <div>

          <span
            style={{
              color: "var(--color-text-muted)",
              fontSize: "13px",
              fontWeight: 600,
              letterSpacing: ".08em",
              textTransform: "uppercase",
            }}
          >
            {title}
          </span>

          <h2
            className="mt-3 text-4xl font-bold"
            style={{
              color: textColor
                ? `var(${textColor})`
                : "var(--color-text-primary)",
            }}
          >
            {value}
          </h2>

          <div className="mt-5 flex items-center gap-2">

            <div
              style={{
                width: 28,
                height: 28,
                borderRadius: "var(--radius-full)",
                background: "var(--color-success-subtle)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--color-success)",
              }}
            >
              <FaArrowTrendUp size={12} />
            </div>

            <span
              style={{
                color: "var(--color-success)",
                fontWeight: 700,
              }}
            >
              +5%
            </span>

            <span
              style={{
                color: "var(--color-text-muted)",
              }}
            >
              This Month
            </span>

          </div>

        </div>

        {/* Right */}

        <div
          style={{
            width: 72,
            height: 72,
            borderRadius: "var(--radius-2xl)",
            background: "var(--gradient-primary)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "var(--color-text-inverse)",
            fontSize: 30,
            boxShadow: "var(--shadow-md)",
          }}
        >
          {icon}
        </div>

      </div>

    </motion.div>
  );
}

export default AttendanceSummaryCard;