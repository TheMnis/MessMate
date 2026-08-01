import { motion } from "framer-motion";
import {
  FaClipboardCheck,
  FaWallet,
  FaUtensils,
  FaStar,
} from "react-icons/fa";

function ProfileStats() {
  const stats = [
    {
      title: "Attendance",
      value: "93%",
      subtitle: "This Month",
      icon: <FaClipboardCheck />,
      color: "var(--color-success)",
      bg: "var(--color-success-subtle)",
    },
    {
      title: "Subscription",
      value: "Active",
      subtitle: "Premium Plan",
      icon: <FaWallet />,
      color: "var(--color-primary)",
      bg: "var(--color-primary-subtle)",
    },
    {
      title: "Meals Taken",
      value: "82",
      subtitle: "Current Month",
      icon: <FaUtensils />,
      color: "var(--color-warning)",
      bg: "var(--color-warning-subtle)",
    },
    {
      title: "Rating",
      value: "4.9",
      subtitle: "Mess Experience",
      icon: <FaStar />,
      color: "var(--color-secondary)",
      bg: "var(--color-secondary-subtle)",
    },
  ];

  return (
    <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

      {stats.map((item, index) => (

        <motion.div
          key={item.title}
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: index * 0.1,
          }}
          whileHover={{
            y: -5,
          }}
          className="rounded-3xl p-6"
          style={{
            background: "var(--color-surface)",
            border: "1px solid var(--color-border)",
            boxShadow: "var(--shadow-lg)",
          }}
        >

          <div
            className="flex h-16 w-16 items-center justify-center rounded-2xl text-2xl"
            style={{
              background: item.bg,
              color: item.color,
            }}
          >
            {item.icon}
          </div>

          <h3
            className="mt-6 text-lg font-semibold"
            style={{
              color: "var(--color-text-secondary)",
            }}
          >
            {item.title}
          </h3>

          <h2
            className="mt-2 text-4xl font-bold"
            style={{
              color: item.color,
            }}
          >
            {item.value}
          </h2>

          <p
            className="mt-2"
            style={{
              color: "var(--color-text-muted)",
            }}
          >
            {item.subtitle}
          </p>

        </motion.div>

      ))}

    </section>
  );
}

export default ProfileStats;