import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaDoorOpen,
  FaClipboardCheck,
  FaEdit,
  FaTrash,
} from "react-icons/fa";

function StudentCard({ student }) {
  return (
    <motion.div
      whileHover={{
        y: -6,
      }}
      transition={{
        duration: 0.25,
      }}
      className="overflow-hidden rounded-3xl"
      style={{
        background: "var(--color-surface)",
        border: "1px solid var(--color-border)",
        boxShadow: "var(--shadow-lg)",
      }}
    >
      <div
        className="p-8"
        style={{
          background: "var(--gradient-primary)",
          color: "var(--color-text-inverse)",
        }}
      >
        <div className="flex items-center gap-5">

          <img
            src={`https://api.dicebear.com/9.x/adventurer/svg?seed=${student.name}`}
            alt={student.name}
            className="h-20 w-20 rounded-full object-cover"
            style={{
              border: "4px solid rgba(255,255,255,.25)",
            }}
          />

          <div>

            <h2 className="text-2xl font-bold">
              {student.name}
            </h2>

            <div
              className="mt-2 inline-flex rounded-full px-3 py-1 text-sm font-semibold"
              style={{
                background:
                  student.status === "Active"
                    ? "rgba(34,197,94,.18)"
                    : "rgba(245,158,11,.18)",
              }}
            >
              {student.status}
            </div>

          </div>

        </div>

      </div>

      <div className="space-y-5 p-6">

        <div className="flex items-center gap-3">

          <FaDoorOpen
            style={{
              color: "var(--color-primary)",
            }}
          />

          <span
            style={{
              color: "var(--color-text-secondary)",
            }}
          >
            Room
          </span>

          <strong
            className="ml-auto"
            style={{
              color: "var(--color-text-primary)",
            }}
          >
            {student.room}
          </strong>

        </div>

        <div className="flex items-center gap-3">

          <FaPhoneAlt
            style={{
              color: "var(--color-success)",
            }}
          />

          <span
            style={{
              color: "var(--color-text-secondary)",
            }}
          >
            Phone
          </span>

          <strong
            className="ml-auto"
            style={{
              color: "var(--color-text-primary)",
            }}
          >
            {student.phone}
          </strong>

        </div>

        <div className="flex items-center gap-3">

          <FaClipboardCheck
            style={{
              color: "var(--color-warning)",
            }}
          />

          <span
            style={{
              color: "var(--color-text-secondary)",
            }}
          >
            Attendance
          </span>

          <strong
            className="ml-auto"
            style={{
              color: "var(--color-primary)",
            }}
          >
            {student.attendance}%
          </strong>

        </div>

        <div
          className="mt-6 flex gap-4"
        >

          <motion.button
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.97,
            }}
            className="flex flex-1 items-center justify-center gap-2 rounded-2xl py-3 font-semibold"
            style={{
              background: "var(--color-primary)",
              color: "var(--color-text-inverse)",
            }}
          >
            <FaEdit />

            Edit

          </motion.button>

          <motion.button
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.97,
            }}
            className="flex flex-1 items-center justify-center gap-2 rounded-2xl py-3 font-semibold"
            style={{
              background: "var(--color-danger-subtle)",
              color: "var(--color-danger)",
            }}
          >
            <FaTrash />

            Delete

          </motion.button>

        </div>

      </div>

    </motion.div>
  );
}

export default StudentCard;