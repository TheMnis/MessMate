import { motion } from "framer-motion";
import NotificationCard from "./NotificationCard";

function NotificationList({ notifications }) {
  if (!notifications.length) {
    return (
      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        className="rounded-3xl p-12 text-center"
        style={{
          background: "var(--color-surface)",
          border: "1px solid var(--color-border)",
          boxShadow: "var(--shadow-md)",
        }}
      >
        <div
          style={{
            fontSize: 72,
          }}
        >
          🔔
        </div>

        <h2
          className="mt-6 text-3xl font-bold"
          style={{
            color: "var(--color-text-primary)",
          }}
        >
          No Notifications Found
        </h2>

        <p
          className="mt-3"
          style={{
            color: "var(--color-text-secondary)",
          }}
        >
          There are no notifications matching
          your current search or filter.
        </p>
      </motion.div>
    );
  }

  return (
    <div className="space-y-5">
      {notifications.map((notification, index) => (
        <motion.div
          key={notification.id}
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.25,
            delay: index * 0.05,
          }}
        >
          <NotificationCard
            notification={notification}
          />
        </motion.div>
      ))}
    </div>
  );
}

export default NotificationList;