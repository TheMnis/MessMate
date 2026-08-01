import { motion } from "framer-motion";
import {
  FaEdit,
  FaTrash,
  FaEye,
  FaCalendarAlt,
  FaUtensils,
} from "react-icons/fa";

function MenuCard({
  menu,
  onView = () => {},
  onEdit = () => {},
  onDelete = () => {},
}) {
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
        className="p-6"
        style={{
          background: "var(--gradient-primary)",
          color: "var(--color-text-inverse)",
        }}
      >
        <div className="flex items-center justify-between">

          <div>

            <div className="flex items-center gap-2">

              <FaCalendarAlt />

              <span className="font-semibold">
                {menu.day}
              </span>

            </div>

            <h2 className="mt-4 text-3xl font-bold">
              {menu.type}
            </h2>

          </div>

          <div
            className="flex h-16 w-16 items-center justify-center rounded-2xl text-2xl"
            style={{
              background: "rgba(255,255,255,.15)",
            }}
          >
            <FaUtensils />
          </div>

        </div>

      </div>

      <div className="space-y-5 p-6">

        <div>

          <div
            className="text-sm"
            style={{
              color: "var(--color-text-secondary)",
            }}
          >
            Meal Name
          </div>

          <h3
            className="mt-2 text-xl font-bold"
            style={{
              color: "var(--color-text-primary)",
            }}
          >
            {menu.meal}
          </h3>

        </div>

        <div>

          <div
            className="mb-3 text-sm"
            style={{
              color: "var(--color-text-secondary)",
            }}
          >
            Food Items
          </div>

          <div className="flex flex-wrap gap-2">

            {menu.items?.map((item) => (
              <span
                key={item}
                className="rounded-full px-3 py-1 text-sm font-medium"
                style={{
                  background:
                    "var(--color-primary-subtle)",
                  color:
                    "var(--color-primary)",
                }}
              >
                {item}
              </span>
            ))}

          </div>

        </div>

        <div className="flex items-center justify-between">

          <span
            className="rounded-full px-4 py-2 text-sm font-semibold"
            style={{
              background:
                menu.status === "Active"
                  ? "var(--color-success-subtle)"
                  : "var(--color-danger-subtle)",
              color:
                menu.status === "Active"
                  ? "var(--color-success)"
                  : "var(--color-danger)",
            }}
          >
            {menu.status}
          </span>

        </div>

        <div className="grid grid-cols-3 gap-3">

          <motion.button
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
            onClick={() => onView(menu)}
            className="flex items-center justify-center gap-2 rounded-2xl py-3"
            style={{
              background:
                "var(--color-secondary-subtle)",
              color:
                "var(--color-secondary)",
            }}
          >
            <FaEye />
          </motion.button>

          <motion.button
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
            onClick={() => onEdit(menu)}
            className="flex items-center justify-center gap-2 rounded-2xl py-3"
            style={{
              background:
                "var(--color-primary-subtle)",
              color:
                "var(--color-primary)",
            }}
          >
            <FaEdit />
          </motion.button>

          <motion.button
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
            onClick={() => onDelete(menu)}
            className="flex items-center justify-center gap-2 rounded-2xl py-3"
            style={{
              background:
                "var(--color-danger-subtle)",
              color:
                "var(--color-danger)",
            }}
          >
            <FaTrash />
          </motion.button>

        </div>

      </div>

    </motion.div>
  );
}

export default MenuCard;