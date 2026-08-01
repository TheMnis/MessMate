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
        duration: .25,
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
      {/* Background */}

      <div
        style={{
          position: "absolute",
          top: -55,
          right: -55,
          width: 170,
          height: 170,
          borderRadius: "var(--radius-full)",
          background: "var(--gradient-primary)",
          opacity: .08,
        }}
      />

      <div className="relative">

        <div className="flex items-center justify-between">

          <div>

            <div
              style={{
                color: "var(--color-text-muted)",
                fontSize: 13,
                textTransform: "uppercase",
                letterSpacing: ".08em",
                fontWeight: 700,
              }}
            >
              {title}
            </div>

            <h2
              className="mt-3 text-5xl font-bold"
              style={{
                color: textColor
                  ? `var(${textColor})`
                  : "var(--color-text-primary)",
              }}
            >
              {value}
            </h2>

          </div>

          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: "var(--radius-2xl)",
              background: "var(--gradient-primary)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "var(--color-text-inverse)",
              fontSize: 30,
              boxShadow: "var(--shadow-md)",
            }}
          >
            {icon}
          </div>

        </div>

        <div
          className="mt-7 rounded-2xl p-4"
          style={{
            background: "var(--color-background)",
            border: "1px solid var(--color-border)",
          }}
        >

          <div className="flex items-center justify-between">

            <div className="flex items-center gap-2">

              <FaArrowTrendUp
                style={{
                  color: "var(--color-success)",
                }}
              />

              <span
                style={{
                  color: "var(--color-success)",
                  fontWeight: 700,
                }}
              >
                +5%
              </span>

            </div>

            <span
              style={{
                color: "var(--color-text-muted)",
              }}
            >
              This Month
            </span>

          </div>

        </div>

      </div>

    </motion.div>
  );
}

export default AttendanceSummaryCard;