import { motion } from "framer-motion";
import {
  FaEdit,
  FaTrash,
  FaEye,
} from "react-icons/fa";

function MenuTable({
  menu = [],
  onEdit = () => {},
  onDelete = () => {},
  onView = () => {},
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
                Day
              </th>

              <th className="px-6 py-5 text-left">
                Meal Type
              </th>

              <th className="px-6 py-5 text-left">
                Meal Name
              </th>

              <th className="px-6 py-5 text-left">
                Items
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

            {menu.map((item) => (

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

                <td className="px-6 py-5 font-semibold">
                  {item.day}
                </td>

                <td className="px-6 py-5">
                  {item.type}
                </td>

                <td className="px-6 py-5 font-medium">
                  {item.meal}
                </td>

                <td className="px-6 py-5">

                  <div className="flex flex-wrap gap-2">

                    {item.items?.map((food) => (
                      <span
                        key={food}
                        className="rounded-full px-3 py-1 text-sm"
                        style={{
                          background:
                            "var(--color-primary-subtle)",
                          color:
                            "var(--color-primary)",
                        }}
                      >
                        {food}
                      </span>
                    ))}

                  </div>

                </td>

                <td className="px-6 py-5 text-center">

                  <span
                    className="rounded-full px-3 py-1 text-sm font-semibold"
                    style={{
                      background:
                        item.status === "Active"
                          ? "var(--color-success-subtle)"
                          : "var(--color-danger-subtle)",
                      color:
                        item.status === "Active"
                          ? "var(--color-success)"
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

export default MenuTable;