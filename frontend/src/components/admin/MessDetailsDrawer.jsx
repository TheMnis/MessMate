import { AnimatePresence, motion } from "framer-motion";
import {
  FaTimes,
  FaStore,
  FaUserTie,
  FaUsers,
  FaRupeeSign,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaCheckCircle,
} from "react-icons/fa";

function MessDetailsDrawer({
  open,
  mess,
  onClose,
}) {
  if (!mess) return null;

  const statusStyle = {
    Active: {
      bg: "var(--color-success-subtle)",
      color: "var(--color-success)",
    },
    Pending: {
      bg: "var(--color-warning-subtle)",
      color: "var(--color-warning)",
    },
    Inactive: {
      bg: "var(--color-danger-subtle)",
      color: "var(--color-danger)",
    },
    Blocked: {
      bg: "var(--color-secondary-subtle)",
      color: "var(--color-secondary)",
    },
  };

  const badge =
    statusStyle[mess.status] ||
    statusStyle.Active;

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
            transition={{ duration: 0.3 }}
            className="fixed right-0 top-0 z-50 flex h-screen w-full max-w-xl flex-col"
            style={{
              background: "var(--color-surface)",
              boxShadow: "var(--shadow-xl)",
            }}
          >
            <div
              className="flex items-center justify-between border-b p-6"
              style={{
                borderColor: "var(--color-border)",
              }}
            >
              <h2
                className="text-3xl font-bold"
                style={{
                  color: "var(--color-text-primary)",
                }}
              >
                Mess Details
              </h2>

              <button
                onClick={onClose}
                className="flex h-12 w-12 items-center justify-center rounded-2xl"
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

            <div className="flex-1 overflow-y-auto p-8">

              <div className="flex flex-col items-center">

                <div
                  className="flex h-28 w-28 items-center justify-center rounded-3xl text-5xl"
                  style={{
                    background:
                      "var(--color-primary-subtle)",
                    color:
                      "var(--color-primary)",
                  }}
                >
                  <FaStore />
                </div>

                <h2
                  className="mt-5 text-3xl font-bold"
                  style={{
                    color:
                      "var(--color-text-primary)",
                  }}
                >
                  {mess.name}
                </h2>

                <span
                  className="mt-4 rounded-full px-5 py-2 font-semibold"
                  style={{
                    background: badge.bg,
                    color: badge.color,
                  }}
                >
                  {mess.status}
                </span>

              </div>

              <div className="mt-10 space-y-5">

                <div
                  className="flex items-center gap-4 rounded-2xl p-5"
                  style={{
                    background:
                      "var(--color-background)",
                  }}
                >
                  <FaUserTie />

                  <div>
                    <div
                      className="text-sm"
                      style={{
                        color:
                          "var(--color-text-secondary)",
                      }}
                    >
                      Owner
                    </div>

                    <div
                      className="font-semibold"
                      style={{
                        color:
                          "var(--color-text-primary)",
                      }}
                    >
                      {mess.owner}
                    </div>

                  </div>

                </div>

                <div
                  className="flex items-center gap-4 rounded-2xl p-5"
                  style={{
                    background:
                      "var(--color-background)",
                  }}
                >
                  <FaUsers />

                  <div>
                    <div
                      className="text-sm"
                      style={{
                        color:
                          "var(--color-text-secondary)",
                      }}
                    >
                      Students
                    </div>

                    <div
                      className="font-semibold"
                      style={{
                        color:
                          "var(--color-text-primary)",
                      }}
                    >
                      {mess.students}
                    </div>

                  </div>

                </div>

                <div
                  className="flex items-center gap-4 rounded-2xl p-5"
                  style={{
                    background:
                      "var(--color-background)",
                  }}
                >
                  <FaRupeeSign />

                  <div>
                    <div
                      className="text-sm"
                      style={{
                        color:
                          "var(--color-text-secondary)",
                      }}
                    >
                      Monthly Revenue
                    </div>

                    <div
                      className="font-semibold"
                      style={{
                        color:
                          "var(--color-text-primary)",
                      }}
                    >
                      ₹{mess.revenue}
                    </div>

                  </div>

                </div>

                <div
                  className="flex items-center gap-4 rounded-2xl p-5"
                  style={{
                    background:
                      "var(--color-background)",
                  }}
                >
                  <FaMapMarkerAlt />

                  <div>
                    <div
                      className="text-sm"
                      style={{
                        color:
                          "var(--color-text-secondary)",
                      }}
                    >
                      Address
                    </div>

                    <div
                      className="font-semibold"
                      style={{
                        color:
                          "var(--color-text-primary)",
                      }}
                    >
                      {mess.address ||
                        "Bhilai, Chhattisgarh"}
                    </div>

                  </div>

                </div>

                <div
                  className="grid gap-5 md:grid-cols-2"
                >
                  <div
                    className="flex items-center gap-4 rounded-2xl p-5"
                    style={{
                      background:
                        "var(--color-background)",
                    }}
                  >
                    <FaPhone />

                    <div>
                      <div
                        className="text-sm"
                        style={{
                          color:
                            "var(--color-text-secondary)",
                        }}
                      >
                        Contact
                      </div>

                      <div
                        className="font-semibold"
                        style={{
                          color:
                            "var(--color-text-primary)",
                        }}
                      >
                        {mess.phone ||
                          "+91 9876543210"}
                      </div>

                    </div>

                  </div>

                  <div
                    className="flex items-center gap-4 rounded-2xl p-5"
                    style={{
                      background:
                        "var(--color-background)",
                    }}
                  >
                    <FaEnvelope />

                    <div>
                      <div
                        className="text-sm"
                        style={{
                          color:
                            "var(--color-text-secondary)",
                        }}
                      >
                        Email
                      </div>

                      <div
                        className="font-semibold break-all"
                        style={{
                          color:
                            "var(--color-text-primary)",
                        }}
                      >
                        {mess.email ||
                          "owner@messmate.com"}
                      </div>

                    </div>

                  </div>

                </div>

                <div
                  className="flex items-center gap-4 rounded-2xl p-5"
                  style={{
                    background:
                      badge.bg,
                  }}
                >
                  <FaCheckCircle
                    style={{
                      color:
                        badge.color,
                    }}
                  />

                  <div>
                    <div
                      className="text-sm"
                      style={{
                        color:
                          "var(--color-text-secondary)",
                      }}
                    >
                      Verification
                    </div>

                    <div
                      className="font-semibold"
                      style={{
                        color:
                          badge.color,
                      }}
                    >
                      {mess.status}
                    </div>

                  </div>

                </div>

              </div>

            </div>

          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

export default MessDetailsDrawer;