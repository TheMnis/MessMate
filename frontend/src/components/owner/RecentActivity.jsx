import { motion } from "framer-motion";
import {
  FaUserPlus,
  FaMoneyBillWave,
  FaUtensils,
  FaClipboardCheck,
} from "react-icons/fa";

const activities = [
  {
    id: 1,
    title: "New Student Joined",
    description: "Rahul Verma subscribed to Premium Plan.",
    time: "10 min ago",
    icon: <FaUserPlus />,
    color: "var(--color-primary)",
    bg: "var(--color-primary-subtle)",
  },
  {
    id: 2,
    title: "Subscription Payment",
    description: "₹2,500 payment received successfully.",
    time: "35 min ago",
    icon: <FaMoneyBillWave />,
    color: "var(--color-success)",
    bg: "var(--color-success-subtle)",
  },
  {
    id: 3,
    title: "Menu Updated",
    description: "Today's dinner menu has been modified.",
    time: "1 hour ago",
    icon: <FaUtensils />,
    color: "var(--color-warning)",
    bg: "var(--color-warning-subtle)",
  },
  {
    id: 4,
    title: "Attendance Closed",
    description: "Today's attendance has been finalized.",
    time: "2 hours ago",
    icon: <FaClipboardCheck />,
    color: "var(--color-secondary)",
    bg: "var(--color-secondary-subtle)",
  },
];

function RecentActivity() {
  return (
    <motion.section
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      className="rounded-3xl p-6"
      style={{
        background: "var(--color-surface)",
        border: "1px solid var(--color-border)",
        boxShadow: "var(--shadow-lg)",
      }}
    >
      <div className="mb-6">

        <h2
          className="text-2xl font-bold"
          style={{
            color: "var(--color-text-primary)",
          }}
        >
          Recent Activity
        </h2>

        <p
          className="mt-2"
          style={{
            color: "var(--color-text-secondary)",
          }}
        >
          Latest activities from your mess management system.
        </p>

      </div>

      <div className="space-y-5">

        {activities.map((activity) => (

          <motion.div
            key={activity.id}
            whileHover={{
              x: 4,
            }}
            className="flex items-start gap-4 rounded-2xl p-4"
            style={{
              background: "var(--color-background)",
              border: "1px solid var(--color-border)",
            }}
          >

            <div
              className="flex h-12 w-12 items-center justify-center rounded-2xl"
              style={{
                background: activity.bg,
                color: activity.color,
              }}
            >
              {activity.icon}
            </div>

            <div className="flex-1">

              <h3
                className="font-bold"
                style={{
                  color: "var(--color-text-primary)",
                }}
              >
                {activity.title}
              </h3>

              <p
                className="mt-1"
                style={{
                  color: "var(--color-text-secondary)",
                }}
              >
                {activity.description}
              </p>

              <span
                className="mt-3 inline-block text-sm"
                style={{
                  color: "var(--color-text-muted)",
                }}
              >
                {activity.time}
              </span>

            </div>

          </motion.div>

        ))}

      </div>

    </motion.section>
  );
}

export default RecentActivity;