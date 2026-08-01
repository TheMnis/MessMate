import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowTrendUp } from "react-icons/fa6";

function StatsCard({
  title,
  value,
  icon,
  color,
  link,
  change = "+12%",
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
    >
      <Link
        to={link}
        className="
          block
          bg-surface
          radius-3xl
          elevation-lg
          hover:elevation-2xl
          transition-all
          duration-300
          p-6
          border
          border-border-subtle
        "
      >
        <div className="flex items-start justify-between">

          <div>

            <p className="text-text-muted text-sm font-medium">
              {title}
            </p>

            <h2 className="text-3xl font-bold mt-3">
              {value}
            </h2>

            <div className="flex items-center gap-2 mt-5">

              <FaArrowTrendUp className="text-success text-sm" />

              <span className="text-success text-sm font-semibold">
                {change}
              </span>

              <span className="text-text-disabled text-sm">
                This Month
              </span>

            </div>

          </div>

          <div
            className={`
              w-16
              h-16
              radius-2xl
              flex
              items-center
              justify-center
              text-3xl
              text-text-inverse
              elevation-lg
              ${color}
            `}
          >
            {icon}
          </div>

        </div>
      </Link>
    </motion.div>
  );
}

export default StatsCard;