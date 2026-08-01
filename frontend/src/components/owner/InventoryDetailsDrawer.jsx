import { AnimatePresence, motion } from "framer-motion";
import {
  FaTimes,
  FaBoxes,
  FaWarehouse,
  FaRupeeSign,
  FaTruck,
} from "react-icons/fa";

function InventoryDetailsDrawer({
  open,
  item,
  onClose,
}) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-40"
            style={{
              background: "rgba(0,0,0,.45)",
              backdropFilter: "blur(6px)",
            }}
          />

          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 18,
            }}
            className="fixed right-0 top-0 z-50 h-screen w-full max-w-xl overflow-y-auto p-8"
            style={{
              background: "var(--color-surface)",
              borderLeft: "1px solid var(--color-border)",
              boxShadow: "var(--shadow-xl)",
            }}
          >
            <div className="flex items-center justify-between">

              <div>

                <h2
                  className="text-3xl font-bold"
                  style={{
                    color: "var(--color-text-primary)",
                  }}
                >
                  Inventory Details
                </h2>

                <p
                  className="mt-2"
                  style={{
                    color: "var(--color-text-secondary)",
                  }}
                >
                  Complete information about this inventory item.
                </p>

              </div>

              <button
                onClick={onClose}
                className="flex h-11 w-11 items-center justify-center rounded-2xl"
                style={{
                  background: "var(--color-danger-subtle)",
                  color: "var(--color-danger)",
                }}
              >
                <FaTimes />
              </button>

            </div>

            <div className="mt-8 space-y-6">

              <div
                className="rounded-3xl p-6"
                style={{
                  background: "var(--gradient-primary)",
                  color: "var(--color-text-inverse)",
                }}
              >
                <div className="flex items-center gap-4">

                  <div
                    className="flex h-16 w-16 items-center justify-center rounded-2xl"
                    style={{
                      background: "rgba(255,255,255,.15)",
                    }}
                  >
                    <FaBoxes size={28} />
                  </div>

                  <div>

                    <div className="text-sm opacity-80">
                      Item Name
                    </div>

                    <div className="text-3xl font-bold">
                      {item?.name || "-"}
                    </div>

                  </div>

                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-2">

                <div
                  className="rounded-2xl p-5"
                  style={{
                    background: "var(--color-background)",
                    border: "1px solid var(--color-border)",
                  }}
                >
                  <div className="flex items-center gap-2">

                    <FaWarehouse
                      style={{
                        color: "var(--color-primary)",
                      }}
                    />

                    <span
                      style={{
                        color: "var(--color-text-secondary)",
                      }}
                    >
                      Category
                    </span>

                  </div>

                  <h3
                    className="mt-3 text-2xl font-bold"
                    style={{
                      color: "var(--color-text-primary)",
                    }}
                  >
                    {item?.category || "-"}
                  </h3>

                </div>

                <div
                  className="rounded-2xl p-5"
                  style={{
                    background: "var(--color-background)",
                    border: "1px solid var(--color-border)",
                  }}
                >
                  <div className="flex items-center gap-2">

                    <FaBoxes
                      style={{
                        color: "var(--color-success)",
                      }}
                    />

                    <span
                      style={{
                        color: "var(--color-text-secondary)",
                      }}
                    >
                      Quantity
                    </span>

                  </div>

                  <h3
                    className="mt-3 text-2xl font-bold"
                    style={{
                      color: "var(--color-text-primary)",
                    }}
                  >
                    {item?.quantity ?? "-"} {item?.unit}
                  </h3>

                </div>

                <div
                  className="rounded-2xl p-5"
                  style={{
                    background: "var(--color-background)",
                    border: "1px solid var(--color-border)",
                  }}
                >
                  <div className="flex items-center gap-2">

                    <FaRupeeSign
                      style={{
                        color: "var(--color-warning)",
                      }}
                    />

                    <span
                      style={{
                        color: "var(--color-text-secondary)",
                      }}
                    >
                      Price
                    </span>

                  </div>

                  <h3
                    className="mt-3 text-2xl font-bold"
                    style={{
                      color: "var(--color-text-primary)",
                    }}
                  >
                    ₹{item?.price ?? "-"}
                  </h3>

                </div>

                <div
                  className="rounded-2xl p-5"
                  style={{
                    background: "var(--color-background)",
                    border: "1px solid var(--color-border)",
                  }}
                >
                  <div className="flex items-center gap-2">

                    <FaTruck
                      style={{
                        color: "var(--color-secondary)",
                      }}
                    />

                    <span
                      style={{
                        color: "var(--color-text-secondary)",
                      }}
                    >
                      Supplier
                    </span>

                  </div>

                  <h3
                    className="mt-3 text-2xl font-bold"
                    style={{
                      color: "var(--color-text-primary)",
                    }}
                  >
                    {item?.supplier || "-"}
                  </h3>

                </div>

              </div>

              <div
                className="rounded-3xl p-6"
                style={{
                  background:
                    item?.status === "In Stock"
                      ? "var(--color-success-subtle)"
                      : item?.status === "Low Stock"
                      ? "var(--color-warning-subtle)"
                      : "var(--color-danger-subtle)",
                }}
              >
                <h4
                  className="font-bold"
                  style={{
                    color:
                      item?.status === "In Stock"
                        ? "var(--color-success)"
                        : item?.status === "Low Stock"
                        ? "var(--color-warning)"
                        : "var(--color-danger)",
                  }}
                >
                  Stock Status
                </h4>

                <div className="mt-3 text-2xl font-bold">
                  {item?.status || "-"}
                </div>

              </div>

            </div>

          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

export default InventoryDetailsDrawer;