import { motion } from "framer-motion";
import { FaFilter } from "react-icons/fa6";

function AttendanceFilter({ selected, onChange }) {
  const filters = [
    {
      label: "All",
      color: "[background:var(--color-text-secondary)]",
    },
    {
      label: "Present",
      color: "[background:var(--color-primary)]",
    },
    {
      label: "Absent",
      color: "[background:var(--color-danger)]",
    },
    {
      label: "Leave",
      color: "[background:var(--color-warning)]",
    },
  ];

  return (
    <div className="mt-8 [background:var(--color-surface)] radius-3xl elevation-lg border [border-color:var(--color-border-subtle)] p-6">

      <div className="flex items-center gap-3 mb-5">

        <FaFilter className="[color:var(--color-success)] text-xl" />

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
                  ? `${filter.color} [color:var(--color-text-inverse)] elevation-lg`
                  : "[background:var(--color-surface-hover)] [color:var(--color-text-secondary)] hover:[background:var(--color-border-strong)]"
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
