import { motion } from "framer-motion";
import {
  FaEye,
  FaEdit,
  FaTrash,
  FaBoxes,
  FaRupeeSign,
  FaWarehouse,
} from "react-icons/fa";

function InventoryCard({
  item,
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

              <FaBoxes />

              <span className="font-semibold">
                {item.category}
              </span>

            </div>

            <h2 className="mt-4 text-3xl font-bold">
              {item.name}
            </h2>

          </div>

          <div
            className="flex h-16 w-16 items-center justify-center rounded-2xl text-2xl"
            style={{
              background: "rgba(255,255,255,.15)",
            }}
          >
            <FaWarehouse />
          </div>

        </div>

      </div>

      <div className="space-y-5 p-6">

        <div
          className="rounded-2xl p-4"
          style={{
            background: "var(--color-background)",
          }}
        >
          <div
            className="text-sm"
            style={{
              color: "var(--color-text-secondary)",
            }}
          >
            Supplier
          </div>

          <div
            className="mt-2 text-lg font-semibold"
            style={{
              color: "var(--color-text-primary)",
            }}
          >
            {item.supplier}
          </div>

        </div>

        <div className="grid grid-cols-2 gap-4">

          <div
            className="rounded-2xl p-4"
            style={{
              background: "var(--color-background)",
            }}
          >
            <div
              className="flex items-center gap-2"
              style={{
                color: "var(--color-text-secondary)",
              }}
            >
              <FaBoxes />

              Quantity

            </div>

            <h3
              className="mt-2 text-2xl font-bold"
              style={{
                color: "var(--color-text-primary)",
              }}
            >
              {item.quantity} {item.unit}
            </h3>

          </div>

          <div
            className="rounded-2xl p-4"
            style={{
              background: "var(--color-background)",
            }}
          >
            <div
              className="flex items-center gap-2"
              style={{
                color: "var(--color-text-secondary)",
              }}
            >
              <FaRupeeSign />

              Price

            </div>

            <h3
              className="mt-2 text-2xl font-bold"
              style={{
                color: "var(--color-text-primary)",
              }}
            >
              ₹{item.price}
            </h3>

          </div>

        </div>

        <div className="flex items-center justify-between">

          <span
            className="rounded-full px-4 py-2 text-sm font-semibold"
            style={{
              background:
                item.status === "In Stock"
                  ? "var(--color-success-subtle)"
                  : item.status === "Low Stock"
                  ? "var(--color-warning-subtle)"
                  : "var(--color-danger-subtle)",
              color:
                item.status === "In Stock"
                  ? "var(--color-success)"
                  : item.status === "Low Stock"
                  ? "var(--color-warning)"
                  : "var(--color-danger)",
            }}
          >
            {item.status}
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
            onClick={() => onView(item)}
            className="flex items-center justify-center rounded-2xl py-3"
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
            onClick={() => onEdit(item)}
            className="flex items-center justify-center rounded-2xl py-3"
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
            onClick={() => onDelete(item)}
            className="flex items-center justify-center rounded-2xl py-3"
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

export default InventoryCard;