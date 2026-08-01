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
        y: -6,
        scale: 1.02,
      }}
      transition={{
        duration: 0.25,
      }}
      className={`
        ${bgColor}
        radius-3xl
        elevation-lg
        border
        border-border-subtle
        p-6
        overflow-hidden
        relative
      `}
    >
      <div className="absolute -right-6 -top-6 w-24 h-24 radius-full bg-surface/20"></div>

      <div className="relative flex items-center justify-between">

        <div>

          <p className="text-text-secondary text-sm font-semibold uppercase tracking-wide">
            {title}
          </p>

          <h2 className={`mt-3 text-4xl font-bold ${textColor}`}>
            {value}
          </h2>

          <div className="flex items-center gap-2 mt-4">

            <FaArrowTrendUp className="text-success text-sm" />

            <span className="text-success text-sm font-semibold">
              +5%
            </span>

            <span className="text-text-muted text-sm">
              This Month
            </span>

          </div>

        </div>

        <div
          className={`
            w-16
            h-16
            radius-2xl
            bg-surface
            elevation-md
            flex
            items-center
            justify-center
            text-3xl
            ${textColor}
          `}
        >
          {icon}
        </div>

      </div>

    </motion.div>
  );
}

export default AttendanceSummaryCard;