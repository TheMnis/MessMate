import { FaArrowUp } from "react-icons/fa";

function DashboardCard({
  title,
  value,
  icon,
  color = "from-green-500 to-green-600",
  change = "+12%",
}) {
  return (
    <div
      className="
        relative
        overflow-hidden
        rounded-3xl
        bg-white
        shadow-md
        hover:shadow-2xl
        transition-all
        duration-300
        hover:-translate-y-1
        p-6
      "
    >
      {/* Background Circle */}

      <div
        className="
          absolute
          -top-10
          -right-10
          w-32
          h-32
          rounded-full
          bg-green-100
          opacity-40
        "
      />

      {/* Header */}

      <div className="flex justify-between items-center">

        <div>

          <p className="text-gray-500 text-sm">
            {title}
          </p>

          <h2 className="text-4xl font-bold mt-3 text-gray-800">
            {value}
          </h2>

        </div>

        <div
          className={`
            w-16
            h-16
            rounded-2xl
            bg-gradient-to-br
            ${color}
            flex
            items-center
            justify-center
            text-white
            text-2xl
            shadow-lg
          `}
        >
          {icon}
        </div>

      </div>

      {/* Footer */}

      <div className="flex items-center justify-between mt-8">

        <div className="flex items-center gap-2 text-green-600 font-semibold">

          <FaArrowUp />

          {change}

        </div>

        <span className="text-sm text-gray-400">
          This Month
        </span>

      </div>

      {/* Progress */}

      <div className="mt-4">

        <div className="w-full h-2 rounded-full bg-gray-200">

          <div className="w-3/4 h-2 rounded-full bg-green-600" />

        </div>

      </div>

    </div>
  );
}

export default DashboardCard;