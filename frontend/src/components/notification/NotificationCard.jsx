import { motion } from "framer-motion";
import {
  FaBell,
  FaCheckCircle,
  FaExclamationTriangle,
  FaInfoCircle,
  FaCheckDouble,
  FaClock,
} from "react-icons/fa";

function NotificationCard({ notification }) {
  const getTheme = (type) => {
    switch (type) {
      case "Success":
        return {
          icon: <FaCheckCircle />,
          bg: "var(--color-success-subtle)",
          color: "var(--color-success)",
        };

      case "Important":
        return {
          icon: <FaExclamationTriangle />,
          bg: "var(--color-danger-subtle)",
          color: "var(--color-danger)",
        };

      case "Info":
        return {
          icon: <FaInfoCircle />,
          bg: "var(--color-primary-subtle)",
          color: "var(--color-primary)",
        };

      default:
        return {
          icon: <FaBell />,
          bg: "var(--color-secondary-subtle)",
          color: "var(--color-secondary)",
        };
    }
  };

  const theme = getTheme(notification.type);

  return (
    <motion.article
      whileHover={{
        y: -4,
      }}
      transition={{
        duration: 0.25,
      }}
      className="overflow-hidden rounded-3xl"
      style={{
        background: "var(--color-surface)",
        border: "1px solid var(--color-border)",
        boxShadow: "var(--shadow-md)",
      }}
    >
      <div className="flex flex-col gap-6 p-6 lg:flex-row lg:items-start lg:justify-between">

        <div className="flex gap-5 flex-1">

          <div
            className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl text-2xl"
            style={{
              background: theme.bg,
              color: theme.color,
            }}
          >
            {theme.icon}
          </div>

          <div className="flex-1">

            <div className="flex flex-wrap items-center gap-3">

              <h2
                className="text-xl font-bold"
                style={{
                  color: "var(--color-text-primary)",
                }}
              >
                {notification.title}
              </h2>

              <span
                className="rounded-full px-4 py-1 text-sm font-semibold"
                style={{
                  background: theme.bg,
                  color: theme.color,
                }}
              >
                {notification.type}
              </span>

              <span
                className="rounded-full px-4 py-1 text-sm font-semibold"
                style={{
                  background:
                    notification.status === "Unread"
                      ? "var(--color-warning-subtle)"
                      : "var(--color-success-subtle)",

                  color:
                    notification.status === "Unread"
                      ? "var(--color-warning)"
                      : "var(--color-success)",
                }}
              >
                {notification.status}
              </span>

            </div>

            <p
              className="mt-4 leading-7"
              style={{
                color: "var(--color-text-secondary)",
              }}
            >
              {notification.message}
            </p>

            <div
              className="mt-5 flex flex-wrap items-center gap-5 text-sm"
              style={{
                color: "var(--color-text-muted)",
              }}
            >

              <div className="flex items-center gap-2">
                <FaClock />
                {notification.time}
              </div>

              {notification.date && (
                <div>
                  📅 {notification.date}
                </div>
              )}

            </div>

          </div>

        </div>

        <div className="flex flex-col gap-3">

          <button
            className="flex items-center justify-center gap-2 rounded-2xl px-5 py-3 font-semibold transition-all duration-300 hover:-translate-y-1"
            style={{
              background: "var(--color-primary-subtle)",
              color: "var(--color-primary)",
            }}
          >
            <FaCheckDouble />

            Mark Read
          </button>

          <button
            className="rounded-2xl px-5 py-3 font-semibold transition-all duration-300 hover:-translate-y-1"
            style={{
              background: "var(--color-background)",
              color: "var(--color-text-secondary)",
              border: "1px solid var(--color-border)",
            }}
          >
            View Details
          </button>

        </div>

      </div>

      {notification.status === "Unread" && (
        <div
          style={{
            height: 4,
            background: "var(--color-primary)",
          }}
        />
      )}
    </motion.article>
  );
}

export default NotificationCard;