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
      color: "bg-primary",
    },
    {
      id: 2,
      title: "Meals Taken",
      value: profile.mealsTaken,
      icon: <FaUtensils />,
      color: "bg-highlight",
    },
    {
      id: 3,
      title: "Notifications",
      value: profile.notifications,
      icon: <FaBell />,
      color: "bg-secondary",
    },
    {
      id: 4,
      title: "Subscription",
      value: profile.subscription,
      icon: <FaCrown />,
      color: "bg-accent",
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
          className="bg-surface radius-3xl elevation-lg border border-border-subtle p-6"
        >

          <div className="flex items-center justify-between">

            <div>

              <p className="text-text-muted text-sm">
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
                text-text-inverse
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