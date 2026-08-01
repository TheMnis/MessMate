import {
  FaClipboardCheck,
  FaUtensils,
  FaBell,
  FaCrown,
} from "react-icons/fa";

import { motion } from "framer-motion";

function ProfileStats({ profile }) {
  const stats = [
    {
      id: 1,
      title: "Attendance",
      value: `${profile.attendance}%`,
      icon: <FaClipboardCheck />,
      color: "[background:var(--color-primary)]",
    },
    {
      id: 2,
      title: "Meals Taken",
      value: profile.mealsTaken,
      icon: <FaUtensils />,
      color: "[background:var(--color-highlight)]",
    },
    {
      id: 3,
      title: "Notifications",
      value: profile.notifications,
      icon: <FaBell />,
      color: "[background:var(--color-secondary)]",
    },
    {
      id: 4,
      title: "Subscription",
      value: profile.subscription,
      icon: <FaCrown />,
      color: "[background:var(--color-accent)]",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">

      {stats.map((stat) => (

        <motion.div
          key={stat.id}
          whileHover={{
            y: -5,
            scale: 1.02,
          }}
          className="[background:var(--color-surface)] radius-3xl elevation-lg border [border-color:var(--color-border-subtle)] p-6"
        >

          <div className="flex items-center justify-between">

            <div>

              <p className="[color:var(--color-text-muted)] text-sm">
                {stat.title}
              </p>

              <h2 className="text-3xl font-bold mt-2">
                {stat.value}
              </h2>

            </div>

            <div
              className={`
                w-16
                h-16
                radius-2xl
                flex
                items-center
                justify-center
                [color:var(--color-text-inverse)]
                text-2xl
                ${stat.color}
              `}
            >
              {stat.icon}
            </div>

          </div>

        </motion.div>

      ))}

    </div>
  );
}

export default ProfileStats;
