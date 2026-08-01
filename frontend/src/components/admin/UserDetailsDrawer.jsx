import { AnimatePresence, motion } from "framer-motion";
import {
  FaTimes,
  FaUserGraduate,
  FaStore,
  FaUserShield,
  FaEnvelope,
  FaPhone,
  FaCalendarAlt,
  FaCircle,
} from "react-icons/fa";

function UserDetailsDrawer({
  open,
  user,
  onClose,
}) {
  if (!user) return null;

  const roleIcon = {
    Student: <FaUserGraduate />,
    Owner: <FaStore />,
    Admin: <FaUserShield />,
  };

  const statusStyle = {
    Active: {
      bg: "var(--color-success-subtle)",
      color: "var(--color-success)",
    },
    Inactive: {
      bg: "var(--color-danger-subtle)",
      color: "var(--color-danger)",
    },
    Blocked: {
      bg: "var(--color-warning-subtle)",
      color: "var(--color-warning)",
    },
  };

  const badge =
    statusStyle[user.status] ||
    statusStyle.Active;

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
              background:
                "rgba(0,0,0,.45)",
              backdropFilter:
                "blur(6px)",
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
              duration: 0.3,
            }}
            className="fixed right-0 top-0 z-50 flex h-screen w-full max-w-lg flex-col"
            style={{
              background:
                "var(--color-surface)",
              boxShadow:
                "var(--shadow-xl)",
            }}
          >
            <div
              className="flex items-center justify-between border-b p-6"
              style={{
                borderColor:
                  "var(--color-border)",
              }}
            >
              <h2
                className="text-3xl font-bold"
                style={{
                  color:
                    "var(--color-text-primary)",
                }}
              >
                User Details
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

                <img
                  src={
                    user.avatar ||
                    `https://api.dicebear.com/9.x/initials/svg?seed=${user.name}`
                  }
                  alt={user.name}
                  className="h-32 w-32 rounded-full"
                />

                <h2
                  className="mt-5 text-3xl font-bold"
                  style={{
                    color:
                      "var(--color-text-primary)",
                  }}
                >
                  {user.name}
                </h2>

                <div
                  className="mt-3 flex items-center gap-2"
                  style={{
                    color:
                      "var(--color-text-secondary)",
                  }}
                >
                  {roleIcon[user.role]}

                  {user.role}
                </div>

                <span
                  className="mt-5 rounded-full px-5 py-2 font-semibold"
                  style={{
                    background: badge.bg,
                    color: badge.color,
                  }}
                >
                  {user.status}
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
                      className="font-semibold"
                      style={{
                        color:
                          "var(--color-text-primary)",
                      }}
                    >
                      {user.email}
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
                  <FaPhone />

                  <div>
                    <div
                      className="text-sm"
                      style={{
                        color:
                          "var(--color-text-secondary)",
                      }}
                    >
                      Phone
                    </div>

                    <div
                      className="font-semibold"
                      style={{
                        color:
                          "var(--color-text-primary)",
                      }}
                    >
                      {user.phone}
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
                  <FaCalendarAlt />

                  <div>
                    <div
                      className="text-sm"
                      style={{
                        color:
                          "var(--color-text-secondary)",
                      }}
                    >
                      Joined
                    </div>

                    <div
                      className="font-semibold"
                      style={{
                        color:
                          "var(--color-text-primary)",
                      }}
                    >
                      {user.joined}
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
                  <FaCircle
                    style={{
                      color: badge.color,
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
                      Account Status
                    </div>

                    <div
                      className="font-semibold"
                      style={{
                        color: badge.color,
                      }}
                    >
                      {user.status}
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

export default UserDetailsDrawer;