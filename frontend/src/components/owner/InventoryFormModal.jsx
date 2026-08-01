import { AnimatePresence, motion } from "framer-motion";
import { FaTimes, FaSave } from "react-icons/fa";

function InventoryFormModal({
  open,
  onClose,
}) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
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
            className="w-full max-w-4xl rounded-3xl p-8"
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
                  Add / Edit Inventory Item
                </h2>

                <p
                  className="mt-2"
                  style={{
                    color: "var(--color-text-secondary)",
                  }}
                >
                  Create or update inventory stock.
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
                    color:
                      "var(--color-text-primary)",
                  }}
                >
                  Item Name
                </label>

                <input
                  type="text"
                  placeholder="Rice"
                  className="w-full rounded-2xl px-4 py-3 outline-none"
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
                    color:
                      "var(--color-text-primary)",
                  }}
                >
                  Category
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
                  <option>Grains</option>
                  <option>Vegetables</option>
                  <option>Fruits</option>
                  <option>Dairy</option>
                  <option>Spices</option>
                  <option>Oil</option>
                  <option>Beverages</option>
                  <option>Cleaning</option>
                </select>

              </div>

              <div>

                <label
                  className="mb-2 block font-semibold"
                  style={{
                    color:
                      "var(--color-text-primary)",
                  }}
                >
                  Quantity
                </label>

                <input
                  type="number"
                  placeholder="50"
                  className="w-full rounded-2xl px-4 py-3 outline-none"
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
                    color:
                      "var(--color-text-primary)",
                  }}
                >
                  Unit
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
                  <option>Kg</option>
                  <option>Gram</option>
                  <option>Liter</option>
                  <option>ml</option>
                  <option>Packet</option>
                  <option>Piece</option>
                </select>

              </div>

              <div>

                <label
                  className="mb-2 block font-semibold"
                  style={{
                    color:
                      "var(--color-text-primary)",
                  }}
                >
                  Price
                </label>

                <input
                  type="number"
                  placeholder="65"
                  className="w-full rounded-2xl px-4 py-3 outline-none"
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
                    color:
                      "var(--color-text-primary)",
                  }}
                >
                  Supplier
                </label>

                <input
                  type="text"
                  placeholder="ABC Traders"
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
                    color:
                      "var(--color-text-primary)",
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
                  <option>In Stock</option>
                  <option>Low Stock</option>
                  <option>Out of Stock</option>
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

                Save Item

              </button>

            </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default InventoryFormModal;