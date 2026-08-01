import { motion } from "framer-motion";
import { FaFilter } from "react-icons/fa6";

const filters = [
  {
    label: "All",
    color: "var(--color-text-secondary)",
    bg: "var(--color-surface-hover)",
  },
  {
    label: "Present",
    color: "var(--color-success)",
    bg: "var(--color-success-subtle)",
  },
  {
    label: "Absent",
    color: "var(--color-danger)",
    bg: "var(--color-danger-subtle)",
  },
  {
    label: "Leave",
    color: "var(--color-warning)",
    bg: "var(--color-warning-subtle)",
  },
];

function AttendanceFilter({ selected, onChange }) {
  return (
    <div
      className="mt-8 rounded-3xl p-7"
      style={{
        background: "var(--color-surface)",
        border: "1px solid var(--color-border)",
        boxShadow: "var(--shadow-lg)",
      }}
    >
      {/* Header */}

      <div className="flex items-center justify-between mb-7">

        <div>

          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-3"
            style={{
              background: "var(--color-primary-subtle)",
              color: "var(--color-primary)",
            }}
          >
            <FaFilter />
            Filter
          </div>

          <h2
            className="text-2xl font-bold"
            style={{
              color: "var(--color-text-primary)",
            }}
          >
            Attendance Filter
          </h2>

          <p
            style={{
              color: "var(--color-text-muted)",
            }}
          >
            Filter attendance records by status.
          </p>

        </div>

      </div>

      {/* Buttons */}

      <div className="flex flex-wrap gap-4">

        {filters.map((filter) => {

          const active =
            selected === filter.label;

          return (

            <motion.button
              key={filter.label}
              whileHover={{
                y: -3,
                scale: 1.03,
              }}
              whileTap={{
                scale: .96,
              }}
              transition={{
                duration: .2,
              }}
              onClick={() => onChange(filter.label)}
              className="flex items-center gap-3 rounded-2xl px-6 py-4"
              style={{
                background: active
                  ? "var(--gradient-primary)"
                  : filter.bg,

                color: active
                  ? "var(--color-text-inverse)"
                  : filter.color,

                boxShadow: active
                  ? "var(--shadow-md)"
                  : "none",
              }}
            >

              <div
                style={{
                  width: 12,
                  height: 12,
                  borderRadius:
                    "var(--radius-full)",
                  background: active
                    ? "rgba(255,255,255,.85)"
                    : filter.color,
                }}
              />

              <span
                style={{
                  fontWeight: 700,
                }}
              >
                {filter.label}
              </span>

            </motion.button>

          );

        })}

      </div>

    </div>
  );
}

export default AttendanceFilter;
