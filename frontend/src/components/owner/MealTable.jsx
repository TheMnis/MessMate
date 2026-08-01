import { motion } from "framer-motion";
import {
  FaEye,
  FaEdit,
  FaTrash,
  FaLeaf,
  FaFireAlt,
} from "react-icons/fa";

function MealTable({
  meals = [],
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
                Meal
              </th>

              <th className="px-6 py-5 text-left">
                Category
              </th>

              <th className="px-6 py-5 text-left">
                Price
              </th>

              <th className="px-6 py-5 text-left">
                Calories
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

            {meals.map((meal) => (

              <motion.tr
                key={meal.id}
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
                      <FaLeaf />
                    </div>

                    <div>

                      <div
                        className="font-bold"
                        style={{
                          color:
                            "var(--color-text-primary)",
                        }}
                      >
                        {meal.name}
                      </div>

                      <div
                        className="mt-1 text-sm"
                        style={{
                          color:
                            "var(--color-text-secondary)",
                        }}
                      >
                        {meal.description}
                      </div>

                    </div>

                  </div>

                </td>

                <td className="px-6 py-5">
                  {meal.category}
                </td>

                <td className="px-6 py-5">
                  ₹{meal.price}
                </td>

                <td className="px-6 py-5">

                  <div className="flex items-center gap-2">

                    <FaFireAlt
                      style={{
                        color:
                          "var(--color-warning)",
                      }}
                    />

                    {meal.calories} kcal

                  </div>

                </td>

                <td className="px-6 py-5 text-center">

                  <span
                    className="rounded-full px-3 py-1 text-sm font-semibold"
                    style={{
                      background:
                        meal.status === "Available"
                          ? "var(--color-success-subtle)"
                          : "var(--color-danger-subtle)",
                      color:
                        meal.status === "Available"
                          ? "var(--color-success)"
                          : "var(--color-danger)",
                    }}
                  >
                    {meal.status}
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
                        onView(meal)
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
                        onEdit(meal)
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
                        onDelete(meal)
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

export default MealTable;