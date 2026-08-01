import { motion } from "framer-motion";
import {
  FaUserCircle,
  FaBuilding,
  FaArrowRight,
} from "react-icons/fa";

const recentUsers = [
  {
    id: 1,
    name: "Rahul Verma",
    role: "Student",
    mess: "Sunrise Mess",
    joined: "2 min ago",
    status: "Active",
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Owner",
    mess: "Food Palace",
    joined: "15 min ago",
    status: "Verified",
  },
  {
    id: 3,
    name: "Amit Kumar",
    role: "Student",
    mess: "Annapurna Mess",
    joined: "42 min ago",
    status: "Active",
  },
  {
    id: 4,
    name: "Neha Singh",
    role: "Owner",
    mess: "Green Leaf Mess",
    joined: "1 hour ago",
    status: "Verified",
  },
  {
    id: 5,
    name: "Rohit Patel",
    role: "Student",
    mess: "Campus Mess",
    joined: "Today",
    status: "Active",
  },
];

function RecentUsers() {
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
            Recent Users
          </h2>

          <p
            className="mt-2"
            style={{
              color: "var(--color-text-secondary)",
            }}
          >
            Latest registrations across the platform.
          </p>

        </div>

        <button
          className="flex items-center gap-2 rounded-2xl px-4 py-2 font-semibold"
          style={{
            background: "var(--color-primary-subtle)",
            color: "var(--color-primary)",
          }}
        >
          View All

          <FaArrowRight />

        </button>

      </div>

      <div className="space-y-5">

        {recentUsers.map((user) => (
          <motion.div
            key={user.id}
            whileHover={{
              x: 5,
            }}
            className="flex items-center justify-between rounded-2xl p-5"
            style={{
              background: "var(--color-background)",
            }}
          >
            <div className="flex items-center gap-4">

              <div
                className="flex h-14 w-14 items-center justify-center rounded-2xl text-2xl"
                style={{
                  background:
                    "var(--color-primary-subtle)",
                  color:
                    "var(--color-primary)",
                }}
              >
                <FaUserCircle />
              </div>

              <div>

                <h3
                  className="text-lg font-bold"
                  style={{
                    color:
                      "var(--color-text-primary)",
                  }}
                >
                  {user.name}
                </h3>

                <div
                  className="mt-1 flex items-center gap-2 text-sm"
                  style={{
                    color:
                      "var(--color-text-secondary)",
                  }}
                >
                  <FaBuilding />

                  {user.mess}

                </div>

              </div>

            </div>

            <div className="text-right">

              <div
                className="font-semibold"
                style={{
                  color:
                    "var(--color-text-primary)",
                }}
              >
                {user.role}
              </div>

              <div
                className="mt-1 text-sm"
                style={{
                  color:
                    "var(--color-text-secondary)",
                }}
              >
                {user.joined}
              </div>

              <span
                className="mt-3 inline-block rounded-full px-3 py-1 text-xs font-semibold"
                style={{
                  background:
                    "var(--color-success-subtle)",
                  color:
                    "var(--color-success)",
                }}
              >
                {user.status}
              </span>

            </div>

          </motion.div>
        ))}

      </div>

    </motion.section>
  );
}

export default RecentUsers;