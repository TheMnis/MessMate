import { motion } from "framer-motion";
import { FaFilter } from "react-icons/fa6";

function AttendanceFilter({ selected, onChange }) {
  const filters = [
    {
      label: "All",
      color: "bg-text-secondary",
    },
    {
      label: "Present",
      color: "bg-primary",
    },
    {
      label: "Absent",
      color: "bg-danger",
    },
    {
      label: "Leave",
      color: "bg-warning",
    },
  ];

  return (
    <div className="mt-8 bg-surface radius-3xl elevation-lg border border-border-subtle p-6">

      <div className="flex items-center gap-3 mb-5">

        <FaFilter className="text-success text-xl" />

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
              radius-2xl
              font-semibold
              transition-all
              duration-300
              ${
                selected === filter.label
                  ? `${filter.color} text-text-inverse elevation-lg`
                  : "bg-surface-hover text-text-secondary hover:bg-border-strong"
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
