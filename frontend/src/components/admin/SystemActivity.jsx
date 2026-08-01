import { motion } from "framer-motion";
import {
  FaUserPlus,
  FaBuilding,
  FaCreditCard,
  FaShieldAlt,
  FaExclamationTriangle,
  FaArrowRight,
} from "react-icons/fa";

const activities = [
  {
    id: 1,
    title: "New Owner Registered",
    description: "Food Palace Mess joined the platform.",
    icon: <FaBuilding />,
    color: "var(--color-primary)",
    bg: "var(--color-primary-subtle)",
    time: "5 min ago",
  },
  {
    id: 2,
    title: "Student Registration",
    description: "24 new students created accounts today.",
    icon: <FaUserPlus />,
    color: "var(--color-success)",
    bg: "var(--color-success-subtle)",
    time: "18 min ago",
  },
  {
    id: 3,
    title: "Subscription Payment",
    description: "Premium subscription purchased successfully.",
    icon: <FaCreditCard />,
    color: "var(--color-warning)",
    bg: "var(--color-warning-subtle)",
    time: "42 min ago",
  },
  {
    id: 4,
    title: "Security Update",
    description: "Platform security policies were updated.",
    icon: <FaShieldAlt />,
    color: "var(--color-secondary)",
    bg: "var(--color-secondary-subtle)",
    time: "1 hour ago",
  },
  {
    id: 5,
    title: "System Alert",
    description: "High server load detected and resolved.",
    icon: <FaExclamationTriangle />,
    color: "var(--color-danger)",
    bg: "var(--color-danger-subtle)",
    time: "Today",
  },
];

function SystemActivity() {
  return (
    <motion.section
      whileHover={{
        y: -4,
      }}
      className="rounded-3xl p-6"
      style={{
        background: "var(--color-surface)",
        border: "1px solid var(--color-border)",
        boxShadow: "var(--shadow-lg)",
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
            System Activity
          </h2>

          <p
            className="mt-2"
            style={{
              color: "var(--color-text-secondary)",
            }}
          >
            Live updates from across the platform.
          </p>

        </div>

        <button
          className="flex items-center gap-2 rounded-2xl px-4 py-2 font-semibold"
          style={{
            background: "var(--color-primary-subtle)",
            color: "var(--color-primary)",
          }}
        >
          View Logs

          <FaArrowRight />

        </button>

      </div>

      <div className="space-y-5">

        {activities.map((activity) => (
          <motion.div
            key={activity.id}
            whileHover={{
              x: 5,
            }}
            className="flex items-start gap-4 rounded-2xl p-5"
            style={{
              background: "var(--color-background)",
            }}
          >
            <div
              className="flex h-14 w-14 items-center justify-center rounded-2xl text-xl"
              style={{
                background: activity.bg,
                color: activity.color,
              }}
            >
              {activity.icon}
            </div>

            <div className="flex-1">

              <div className="flex items-center justify-between">

                <h3
                  className="text-lg font-bold"
                  style={{
                    color:
                      "var(--color-text-primary)",
                  }}
                >
                  {activity.title}
                </h3>

                <span
                  className="text-sm"
                  style={{
                    color:
                      "var(--color-text-secondary)",
                  }}
                >
                  {activity.time}
                </span>

              </div>

              <p
                className="mt-2 leading-7"
                style={{
                  color:
                    "var(--color-text-secondary)",
                }}
              >
                {activity.description}
              </p>

            </div>

          </motion.div>
        ))}

      </div>

    </motion.section>
  );
}

export default SystemActivity;