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
        rounded-3xl
        shadow-lg
        border
        border-gray-100
        p-6
        overflow-hidden
        relative
      `}
    >
      <div className="absolute -right-6 -top-6 w-24 h-24 rounded-full bg-white/20"></div>

      <div className="relative flex items-center justify-between">

        <div>

          <p className="text-gray-600 text-sm font-semibold uppercase tracking-wide">
            {title}
          </p>

          <h2 className={`mt-3 text-4xl font-bold ${textColor}`}>
            {value}
          </h2>

          <div className="flex items-center gap-2 mt-4">

            <FaArrowTrendUp className="text-green-600 text-sm" />

            <span className="text-green-600 text-sm font-semibold">
              +5%
            </span>

            <span className="text-gray-500 text-sm">
              This Month
            </span>

          </div>

        </div>

        <div
          className={`
            w-16
            h-16
            rounded-2xl
            bg-white
            shadow-md
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