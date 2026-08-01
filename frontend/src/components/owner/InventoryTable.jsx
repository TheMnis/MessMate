import { motion } from "framer-motion";
import {
  FaEye,
  FaEdit,
  FaTrash,
  FaBoxes,
} from "react-icons/fa";

function InventoryTable({
  items = [],
  onView = () => {},
  onEdit = () => {},
  onDelete = () => {},
}) {
  return (
    <section
      className="overflow-hidden rounded-3xl"
      style={{
        background: "var(--color-surface)",
        border: "1px solid var(--color-border)",
        boxShadow: "var(--shadow-lg)",
      }}
    >
      <div className="overflow-x-auto">

        <table className="min-w-full">

          <thead
            style={{
              background: "var(--color-background)",
            }}
          >
            <tr>

              <th className="px-6 py-5 text-left">
                Item
              </th>

              <th className="px-6 py-5 text-left">
                Category
              </th>

              <th className="px-6 py-5 text-left">
                Quantity
              </th>

              <th className="px-6 py-5 text-left">
                Unit
              </th>

              <th className="px-6 py-5 text-left">
                Price
              </th>

              <th className="px-6 py-5 text-center">
                Status
              </th>

              <th className="px-6 py-5 text-center">
                Actions
              </th>

            </tr>
          </thead>

          <tbody>

            {items.map((item) => (

              <motion.tr
                key={item.id}
                whileHover={{
                  backgroundColor:
                    "rgba(0,0,0,.02)",
                }}
                style={{
                  borderTop:
                    "1px solid var(--color-border)",
                }}
              >

                <td className="px-6 py-5">

                  <div className="flex items-center gap-4">

                    <div
                      className="flex h-14 w-14 items-center justify-center rounded-2xl"
                      style={{
                        background:
                          "var(--color-primary-subtle)",
                        color:
                          "var(--color-primary)",
                      }}
                    >
                      <FaBoxes />
                    </div>

                    <div>

                      <div
                        className="font-bold"
                        style={{
                          color:
                            "var(--color-text-primary)",
                        }}
                      >
                        {item.name}
                      </div>

                      <div
                        className="mt-1 text-sm"
                        style={{
                          color:
                            "var(--color-text-secondary)",
                        }}
                      >
                        {item.supplier}
                      </div>

                    </div>

                  </div>

                </td>

                <td className="px-6 py-5">
                  {item.category}
                </td>

                <td className="px-6 py-5">
                  {item.quantity}
                </td>

                <td className="px-6 py-5">
                  {item.unit}
                </td>

                <td className="px-6 py-5">
                  ₹{item.price}
                </td>

                <td className="px-6 py-5 text-center">

                  <span
                    className="rounded-full px-3 py-1 text-sm font-semibold"
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

                </td>

                <td className="px-6 py-5">

                  <div className="flex justify-center gap-3">

                    <motion.button
                      whileHover={{
                        scale: 1.08,
                      }}
                      whileTap={{
                        scale: 0.96,
                      }}
                      onClick={() =>
                        onView(item)
                      }
                      className="flex h-10 w-10 items-center justify-center rounded-xl"
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
                        scale: 1.08,
                      }}
                      whileTap={{
                        scale: 0.96,
                      }}
                      onClick={() =>
                        onEdit(item)
                      }
                      className="flex h-10 w-10 items-center justify-center rounded-xl"
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
                        scale: 1.08,
                      }}
                      whileTap={{
                        scale: 0.96,
                      }}
                      onClick={() =>
                        onDelete(item)
                      }
                      className="flex h-10 w-10 items-center justify-center rounded-xl"
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

                </td>

              </motion.tr>

            ))}

          </tbody>

        </table>

      </div>
    </section>
  );
}

export default InventoryTable;