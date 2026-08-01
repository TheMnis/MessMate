import { AnimatePresence, motion } from "framer-motion";
import {
  FaTimes,
  FaCalendarAlt,
  FaUtensils,
  FaClipboardCheck,
} from "react-icons/fa";

function MenuDetailsDrawer({
  open,
  menu,
  onClose,
}) {
  return (
    <AnimatePresence>
      {open && (
        <>
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
            onClick={onClose}
            className="fixed inset-0 z-40"
            style={{
              background: "rgba(0,0,0,.45)",
              backdropFilter: "blur(6px)",
            }}
          />

          <motion.aside
            initial={{
              x: "100%",
            }}
            animate={{
              x: 0,
            }}
            exit={{
              x: "100%",
            }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 18,
            }}
            className="fixed right-0 top-0 z-50 h-screen w-full max-w-xl overflow-y-auto p-8"
            style={{
              background: "var(--color-surface)",
              borderLeft:
                "1px solid var(--color-border)",
              boxShadow: "var(--shadow-xl)",
            }}
          >
            <div className="flex items-center justify-between">

              <div>

                <h2
                  className="text-3xl font-bold"
                  style={{
                    color:
                      "var(--color-text-primary)",
                  }}
                >
                  Menu Details
                </h2>

                <p
                  className="mt-2"
                  style={{
                    color:
                      "var(--color-text-secondary)",
                  }}
                >
                  Complete information about
                  the selected menu.
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

            <div className="mt-8 space-y-6">

              <div
                className="rounded-3xl p-6"
                style={{
                  background:
                    "var(--color-background)",
                  border:
                    "1px solid var(--color-border)",
                }}
              >
                <div className="flex items-center gap-3">

                  <FaCalendarAlt
                    style={{
                      color:
                        "var(--color-primary)",
                    }}
                  />

                  <span
                    style={{
                      color:
                        "var(--color-text-secondary)",
                    }}
                  >
                    Day
                  </span>

                </div>

                <h3
                  className="mt-3 text-2xl font-bold"
                  style={{
                    color:
                      "var(--color-text-primary)",
                  }}
                >
                  {menu?.day || "-"}
                </h3>

              </div>

              <div
                className="rounded-3xl p-6"
                style={{
                  background:
                    "var(--color-background)",
                  border:
                    "1px solid var(--color-border)",
                }}
              >
                <div className="flex items-center gap-3">

                  <FaUtensils
                    style={{
                      color:
                        "var(--color-success)",
                    }}
                  />

                  <span
                    style={{
                      color:
                        "var(--color-text-secondary)",
                    }}
                  >
                    Meal
                  </span>

                </div>

                <h3
                  className="mt-3 text-2xl font-bold"
                  style={{
                    color:
                      "var(--color-text-primary)",
                  }}
                >
                  {menu?.meal || "-"}
                </h3>

              </div>

              <div
                className="rounded-3xl p-6"
                style={{
                  background:
                    "var(--color-background)",
                  border:
                    "1px solid var(--color-border)",
                }}
              >
                <div className="flex items-center gap-3">

                  <FaClipboardCheck
                    style={{
                      color:
                        "var(--color-warning)",
                    }}
                  />

                  <span
                    style={{
                      color:
                        "var(--color-text-secondary)",
                    }}
                  >
                    Food Items
                  </span>

                </div>

                <div className="mt-5 flex flex-wrap gap-3">

                  {menu?.items?.length ? (
                    menu.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full px-4 py-2"
                        style={{
                          background:
                            "var(--color-primary-subtle)",
                          color:
                            "var(--color-primary)",
                        }}
                      >
                        {item}
                      </span>
                    ))
                  ) : (
                    <span
                      style={{
                        color:
                          "var(--color-text-muted)",
                      }}
                    >
                      No Items
                    </span>
                  )}

                </div>

              </div>

              <div
                className="rounded-3xl p-6"
                style={{
                  background:
                    menu?.status === "Active"
                      ? "var(--color-success-subtle)"
                      : "var(--color-danger-subtle)",
                }}
              >
                <h4
                  className="font-bold"
                  style={{
                    color:
                      menu?.status === "Active"
                        ? "var(--color-success)"
                        : "var(--color-danger)",
                  }}
                >
                  Status
                </h4>

                <div className="mt-3 text-xl font-bold">
                  {menu?.status || "-"}
                </div>

              </div>

            </div>

          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

export default MenuDetailsDrawer;