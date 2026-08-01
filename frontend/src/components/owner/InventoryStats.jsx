import { motion } from "framer-motion";
import {
  FaBoxes,
  FaWarehouse,
  FaExclamationTriangle,
  FaRupeeSign,
} from "react-icons/fa";

const stats = [
  {
    id: 1,
    title: "Total Items",
    value: "245",
    icon: <FaBoxes />,
    color: "var(--color-primary)",
    bg: "var(--color-primary-subtle)",
    progress: "100%",
  },
  {
    id: 2,
    title: "In Stock",
    value: "218",
    icon: <FaWarehouse />,
    color: "var(--color-success)",
    bg: "var(--color-success-subtle)",
    progress: "89%",
  },
  {
    id: 3,
    title: "Low Stock",
    value: "12",
    icon: <FaExclamationTriangle />,
    color: "var(--color-warning)",
    bg: "var(--color-warning-subtle)",
    progress: "11%",
  },
  {
    id: 4,
    title: "Inventory Value",
    value: "₹1.82L",
    icon: <FaRupeeSign />,
    color: "var(--color-secondary)",
    bg: "var(--color-secondary-subtle)",
    progress: "100%",
  },
];

function InventoryStats() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((item) => (
        <motion.div
          key={item.id}
          whileHover={{
            y: -6,
          }}
          transition={{
            duration: 0.25,
          }}
          className="rounded-3xl p-6"
          style={{
            background: "var(--color-surface)",
            border: "1px solid var(--color-border)",
            boxShadow: "var(--shadow-lg)",
          }}
        >
          <div className="flex items-center justify-between">

            <div
              className="flex h-16 w-16 items-center justify-center rounded-2xl text-2xl"
              style={{
                background: item.bg,
                color: item.color,
              }}
            >
              {item.icon}
            </div>

            <div
              className="rounded-full px-3 py-1 text-sm font-semibold"
              style={{
                background: "var(--color-success-subtle)",
                color: "var(--color-success)",
              }}
            >
              +8%
            </div>

          </div>

          <h3
            className="mt-6 text-lg font-semibold"
            style={{
              color: "var(--color-text-secondary)",
            }}
          >
            {item.title}
          </h3>

          <h2
            className="mt-2 text-4xl font-bold"
            style={{
              color: "var(--color-text-primary)",
            }}
          >
            {item.value}
          </h2>

          <div
            className="mt-6 h-2 overflow-hidden rounded-full"
            style={{
              background: "var(--color-border)",
            }}
          >
            <div
              style={{
                width: item.progress,
                height: "100%",
                background: item.color,
                borderRadius: "999px",
              }}
            />
          </div>

        </motion.div>
      ))}
    </div>
  );
}

export default InventoryStats;