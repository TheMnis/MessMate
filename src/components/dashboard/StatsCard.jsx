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
          bg-white
          rounded-3xl
          shadow-lg
          hover:shadow-2xl
          transition-all
          duration-300
          p-6
          border
          border-gray-100
        "
      >
        <div className="flex items-start justify-between">

          <div>

            <p className="text-gray-500 text-sm font-medium">
              {title}
            </p>

            <h2 className="text-3xl font-bold mt-3">
              {value}
            </h2>

            <div className="flex items-center gap-2 mt-5">

              <FaArrowTrendUp className="text-green-600 text-sm" />

              <span className="text-green-600 text-sm font-semibold">
                {change}
              </span>

              <span className="text-gray-400 text-sm">
                This Month
              </span>

            </div>

          </div>

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