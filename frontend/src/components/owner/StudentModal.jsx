import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaUserPlus } from "react-icons/fa";

function StudentModal({
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
            className="w-full max-w-2xl rounded-3xl p-8"
            style={{
              background: "var(--color-surface)",
              border: "1px solid var(--color-border)",
              boxShadow: "var(--shadow-xl)",
            }}
          >
            <div className="mb-8 flex items-center justify-between">

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
                  <FaUserPlus size={24} />
                </div>

                <div>

                  <h2
                    className="text-3xl font-bold"
                    style={{
                      color:
                        "var(--color-text-primary)",
                    }}
                  >
                    Add Student
                  </h2>

                  <p
                    style={{
                      color:
                        "var(--color-text-secondary)",
                    }}
                  >
                    Fill the student information.
                  </p>

                </div>

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

              <input
                type="text"
                placeholder="Student Name"
                className="rounded-2xl px-4 py-3 outline-none"
                style={{
                  background:
                    "var(--color-background)",
                  border:
                    "1px solid var(--color-border)",
                }}
              />

              <input
                type="text"
                placeholder="Room Number"
                className="rounded-2xl px-4 py-3 outline-none"
                style={{
                  background:
                    "var(--color-background)",
                  border:
                    "1px solid var(--color-border)",
                }}
              />

              <input
                type="email"
                placeholder="Email Address"
                className="rounded-2xl px-4 py-3 outline-none"
                style={{
                  background:
                    "var(--color-background)",
                  border:
                    "1px solid var(--color-border)",
                }}
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="rounded-2xl px-4 py-3 outline-none"
                style={{
                  background:
                    "var(--color-background)",
                  border:
                    "1px solid var(--color-border)",
                }}
              />

              <select
                className="rounded-2xl px-4 py-3 outline-none"
                style={{
                  background:
                    "var(--color-background)",
                  border:
                    "1px solid var(--color-border)",
                }}
              >
                <option>
                  Active
                </option>

                <option>
                  Inactive
                </option>

              </select>

              <input
                type="number"
                placeholder="Attendance %"
                className="rounded-2xl px-4 py-3 outline-none"
                style={{
                  background:
                    "var(--color-background)",
                  border:
                    "1px solid var(--color-border)",
                }}
              />

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
                className="rounded-2xl px-6 py-3 font-semibold"
                style={{
                  background:
                    "var(--color-primary)",
                  color:
                    "var(--color-text-inverse)",
                }}
              >
                Save Student
              </button>

            </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default StudentModal;