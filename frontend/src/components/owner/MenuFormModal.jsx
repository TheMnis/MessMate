import { AnimatePresence, motion } from "framer-motion";
import { FaTimes, FaSave } from "react-icons/fa";

function MenuFormModal({
  open,
  onClose,
}) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          className="fixed inset-0 z-50 flex items-center justify-center p-5"
          style={{
            background: "rgba(0,0,0,.45)",
            backdropFilter: "blur(8px)",
          }}
        >
          <motion.div
            initial={{
              scale: 0.9,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            exit={{
              scale: 0.9,
              opacity: 0,
            }}
            className="w-full max-w-3xl rounded-3xl p-8"
            style={{
              background: "var(--color-surface)",
              border: "1px solid var(--color-border)",
              boxShadow: "var(--shadow-xl)",
            }}
          >
            <div className="mb-8 flex items-center justify-between">

              <div>

                <h2
                  className="text-3xl font-bold"
                  style={{
                    color: "var(--color-text-primary)",
                  }}
                >
                  Add / Edit Menu
                </h2>

                <p
                  className="mt-2"
                  style={{
                    color: "var(--color-text-secondary)",
                  }}
                >
                  Configure the menu for a specific day and meal.
                </p>

              </div>

              <button
                onClick={onClose}
                className="flex h-11 w-11 items-center justify-center rounded-2xl"
                style={{
                  background:
                    "var(--color-danger-subtle)",
                  color:
                    "var(--color-danger)",
                }}
              >
                <FaTimes />
              </button>

            </div>

            <div className="grid gap-5 md:grid-cols-2">

              <div>

                <label
                  className="mb-2 block font-semibold"
                  style={{
                    color: "var(--color-text-primary)",
                  }}
                >
                  Day
                </label>

                <select
                  className="w-full rounded-2xl px-4 py-3 outline-none"
                  style={{
                    background:
                      "var(--color-background)",
                    border:
                      "1px solid var(--color-border)",
                  }}
                >
                  <option>Monday</option>
                  <option>Tuesday</option>
                  <option>Wednesday</option>
                  <option>Thursday</option>
                  <option>Friday</option>
                  <option>Saturday</option>
                  <option>Sunday</option>
                </select>

              </div>

              <div>

                <label
                  className="mb-2 block font-semibold"
                  style={{
                    color: "var(--color-text-primary)",
                  }}
                >
                  Meal Type
                </label>

                <select
                  className="w-full rounded-2xl px-4 py-3 outline-none"
                  style={{
                    background:
                      "var(--color-background)",
                    border:
                      "1px solid var(--color-border)",
                  }}
                >
                  <option>Breakfast</option>
                  <option>Lunch</option>
                  <option>Dinner</option>
                </select>

              </div>

              <div className="md:col-span-2">

                <label
                  className="mb-2 block font-semibold"
                  style={{
                    color: "var(--color-text-primary)",
                  }}
                >
                  Menu Title
                </label>

                <input
                  type="text"
                  placeholder="Special Veg Thali"
                  className="w-full rounded-2xl px-4 py-3 outline-none"
                  style={{
                    background:
                      "var(--color-background)",
                    border:
                      "1px solid var(--color-border)",
                  }}
                />

              </div>

              <div className="md:col-span-2">

                <label
                  className="mb-2 block font-semibold"
                  style={{
                    color: "var(--color-text-primary)",
                  }}
                >
                  Food Items
                </label>

                <textarea
                  rows={5}
                  placeholder="Rice, Dal, Paneer, Salad..."
                  className="w-full rounded-2xl px-4 py-3 outline-none resize-none"
                  style={{
                    background:
                      "var(--color-background)",
                    border:
                      "1px solid var(--color-border)",
                  }}
                />

              </div>

              <div>

                <label
                  className="mb-2 block font-semibold"
                  style={{
                    color: "var(--color-text-primary)",
                  }}
                >
                  Status
                </label>

                <select
                  className="w-full rounded-2xl px-4 py-3 outline-none"
                  style={{
                    background:
                      "var(--color-background)",
                    border:
                      "1px solid var(--color-border)",
                  }}
                >
                  <option>Active</option>
                  <option>Inactive</option>
                </select>

              </div>

            </div>

            <div className="mt-8 flex justify-end gap-4">

              <button
                onClick={onClose}
                className="rounded-2xl px-6 py-3 font-semibold"
                style={{
                  background:
                    "var(--color-background)",
                  border:
                    "1px solid var(--color-border)",
                  color:
                    "var(--color-text-primary)",
                }}
              >
                Cancel
              </button>

              <button
                className="flex items-center gap-2 rounded-2xl px-6 py-3 font-semibold"
                style={{
                  background:
                    "var(--color-primary)",
                  color:
                    "var(--color-text-inverse)",
                }}
              >
                <FaSave />

                Save Menu

              </button>

            </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default MenuFormModal;