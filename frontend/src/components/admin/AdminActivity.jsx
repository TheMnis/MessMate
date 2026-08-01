import { motion } from "framer-motion";
import {
  FaUserPlus,
  FaStore,
  FaCreditCard,
  FaShieldAlt,
  FaChartLine,
  FaArrowRight,
} from "react-icons/fa";

const activities = [
  {
    id: 1,
    title: "New Mess Registered",
    description:
      "Sunrise Mess successfully joined the MessMate platform.",
    time: "5 minutes ago",
    icon: <FaStore />,
    color: "var(--color-primary)",
    bg: "var(--color-primary-subtle)",
  },
  {
    id: 2,
    title: "New Student Added",
    description:
      "24 new students created accounts today.",
    time: "18 minutes ago",
    icon: <FaUserPlus />,
    color: "var(--color-success)",
    bg: "var(--color-success-subtle)",
  },
  {
    id: 3,
    title: "Subscription Payment Received",
    description:
      "Premium plan payment completed successfully.",
    time: "42 minutes ago",
    icon: <FaCreditCard />,
    color: "var(--color-warning)",
    bg: "var(--color-warning-subtle)",
  },
  {
    id: 4,
    title: "Security Check Completed",
    description:
      "System security audit completed without issues.",
    time: "1 hour ago",
    icon: <FaShieldAlt />,
    color: "var(--color-secondary)",
    bg: "var(--color-secondary-subtle)",
  },
  {
    id: 5,
    title: "Revenue Milestone Achieved",
    description:
      "Monthly revenue crossed ₹28 lakh milestone.",
    time: "Today",
    icon: <FaChartLine />,
    color: "var(--color-success)",
    bg: "var(--color-success-subtle)",
  },
];

function AdminActivity() {
  return (
    <motion.section
      whileHover={{
        y: -4,
      }}
      className="rounded-3xl p-6"
      style={{
        background:
          "var(--color-surface)",
        border:
          "1px solid var(--color-border)",
        boxShadow:
          "var(--shadow-lg)",
      }}
    >

      <div className="mb-8 flex items-center justify-between">

        <div>

          <h2
            className="text-3xl font-bold"
            style={{
              color:
                "var(--color-text-primary)",
            }}
          >
            Admin Activity
          </h2>

          <p
            className="mt-2"
            style={{
              color:
                "var(--color-text-secondary)",
            }}
          >
            Latest actions and platform events.
          </p>

        </div>


        <button
          className="flex items-center gap-2 rounded-2xl px-5 py-3 font-semibold"
          style={{
            background:
              "var(--color-primary-subtle)",
            color:
              "var(--color-primary)",
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
              background:
                "var(--color-background)",
            }}
          >

            <div
              className="flex h-14 w-14 items-center justify-center rounded-2xl text-xl"
              style={{
                background:
                  activity.bg,
                color:
                  activity.color,
              }}
            >
              {activity.icon}
            </div>


            <div className="flex-1">

              <div className="flex flex-col justify-between gap-2 md:flex-row">

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

export default AdminActivity;