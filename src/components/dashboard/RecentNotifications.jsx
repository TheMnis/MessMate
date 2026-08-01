import {
  FaBell,
  FaCheckCircle,
  FaExclamationTriangle,
  FaArrowRight,
} from "react-icons/fa";
import { motion } from "framer-motion";

function RecentNotifications() {
  const notifications = [
    {
      id: 1,
      title: "Today's menu has been updated",
      description: "Breakfast and lunch menu changed for today.",
      time: "10 min ago",
      icon: <FaBell />,
      color: "[background:var(--color-secondary)]",
    },
    {
      id: 2,
      title: "Attendance marked successfully",
      description: "Your attendance has been recorded.",
      time: "1 hour ago",
      icon: <FaCheckCircle />,
      color: "[background:var(--color-success)]",
    },
    {
      id: 3,
      title: "Subscription expires soon",
      description: "Your subscription will expire in 5 days.",
      time: "Yesterday",
      icon: <FaExclamationTriangle />,
      color: "[background:var(--color-danger)]",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
      className="[background:var(--color-surface)] radius-3xl elevation-lg border [border-color:var(--color-border-subtle)] p-6"
    >
      <div className="flex items-center justify-between mb-6">

        <h2 className="text-2xl font-bold">
          🔔 Recent Notifications
        </h2>

        <button className="[color:var(--color-success)] flex items-center gap-2 text-sm font-semibold hover:[color:var(--color-success-hover)] transition">
          View All
          <FaArrowRight />
        </button>

      </div>

      <div className="space-y-5">

        {notifications.map((item) => (

          <motion.div
            key={item.id}
            whileHover={{
              x: 5,
            }}
            className="flex items-start gap-4 p-4 radius-2xl hover:[background:var(--color-primary-subtle)] transition-all"
          >

            <div
              className={`
                w-14
                h-14
                radius-2xl
                flex
                items-center
                justify-center
                [color:var(--color-text-inverse)]
                text-xl
                elevation-md
                ${item.color}
              `}
            >
              {item.icon}
            </div>

            <div className="flex-1">

              <h3 className="font-semibold [color:var(--color-text-primary)]">
                {item.title}
              </h3>

              <p className="[color:var(--color-text-muted)] text-sm mt-1">
                {item.description}
              </p>

              <p className="text-xs [color:var(--color-text-disabled)] mt-2">
                {item.time}
              </p>

            </div>

          </motion.div>

        ))}

      </div>
    </motion.div>
  );
}

export default RecentNotifications;