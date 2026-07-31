import { motion } from "framer-motion";
import { FaFilter } from "react-icons/fa6";

function AttendanceFilter({ selected, onChange }) {
  const filters = [
    {
      label: "All",
      color: "bg-gray-700",
    },
    {
      label: "Present",
      color: "bg-green-600",
    },
    {
      label: "Absent",
      color: "bg-red-600",
    },
    {
      label: "Leave",
      color: "bg-yellow-500",
    },
  ];

  return (
    <div className="mt-8 bg-white rounded-3xl shadow-lg border border-gray-100 p-6">

      <div className="flex items-center gap-3 mb-5">

        <FaFilter className="text-green-600 text-xl" />

        <h2 className="text-xl font-bold">
          Filter Attendance
        </h2>

      </div>

      <div className="flex flex-wrap gap-4">

        {filters.map((filter) => (

          <motion.button
            key={filter.label}
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
            onClick={() => onChange(filter.label)}
            className={`
              px-6
              py-3
              rounded-2xl
              font-semibold
              transition-all
              duration-300
              ${
                selected === filter.label
                  ? `${filter.color} text-white shadow-lg`
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }
            `}
          >
            {filter.label}
          </motion.button>

        ))}

      </div>

    </div>
  );
}

export default AttendanceFilter;