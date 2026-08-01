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
        y: -8,
        scale: 1.015,
      }}
      transition={{
        duration: 0.25,
      }}
    >
      <Link
        to={link}
        className="
        group
        relative
        overflow-hidden
        block
        bg-surface
        rounded-3xl
        border
        border-border
        shadow-sm
        hover:shadow-xl
        transition-all
        duration-300
        p-7
        "
      >
        {/* Accent */}

        <div className="absolute left-0 top-0 h-full w-1 bg-primary opacity-80 group-hover:opacity-100 transition-all"></div>

        <div className="flex justify-between items-start">

          {/* Left */}

          <div>

            <p className="text-sm font-semibold text-text-muted uppercase tracking-wide">
              {title}
            </p>

            <h2 className="text-4xl font-extrabold mt-4 text-text-primary">
              {value}
            </h2>

            <div className="flex items-center gap-2 mt-6">

              <FaArrowTrendUp className="text-success" />

              <span className="font-semibold text-success">
                {change}
              </span>

              <span className="text-sm text-text-muted">
                vs last month
              </span>

            </div>

          </div>

          {/* Right */}

          <div
            className={`
            w-16
            h-16
            rounded-2xl
            flex
            items-center
            justify-center
            text-3xl
            text-white
            shadow-lg
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