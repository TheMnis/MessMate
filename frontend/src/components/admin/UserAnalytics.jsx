import { motion } from "framer-motion";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from "recharts";

const analyticsData = [
  {
    name: "Students",
    value: 10840,
    color: "#3B82F6",
  },
  {
    name: "Owners",
    value: 148,
    color: "#10B981",
  },
  {
    name: "Admins",
    value: 12,
    color: "#F59E0B",
  },
  {
    name: "Inactive",
    value: 1842,
    color: "#EF4444",
  },
];

function UserAnalytics() {
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
            User Analytics
          </h2>

          <p
            className="mt-2"
            style={{
              color: "var(--color-text-secondary)",
            }}
          >
            Distribution of all registered users.
          </p>

        </div>

        <div
          className="rounded-2xl px-4 py-2 font-semibold"
          style={{
            background:
              "var(--color-primary-subtle)",
            color:
              "var(--color-primary)",
          }}
        >
          12,842 Users
        </div>

      </div>

      <div
        style={{
          width: "100%",
          height: 340,
        }}
      >
        <ResponsiveContainer width="100%" height="100%">

          <PieChart>

            <Pie
              data={analyticsData}
              cx="50%"
              cy="50%"
              innerRadius={70}
              outerRadius={120}
              paddingAngle={4}
              dataKey="value"
            >
              {analyticsData.map((entry) => (
                <Cell
                  key={entry.name}
                  fill={entry.color}
                />
              ))}
            </Pie>

            <Tooltip />

            <Legend />

          </PieChart>

        </ResponsiveContainer>

      </div>

      <div className="mt-6 grid grid-cols-2 gap-4">

        {analyticsData.map((item) => (
          <div
            key={item.name}
            className="rounded-2xl p-4"
            style={{
              background:
                "var(--color-background)",
            }}
          >
            <div className="flex items-center justify-between">

              <span
                className="font-semibold"
                style={{
                  color:
                    "var(--color-text-primary)",
                }}
              >
                {item.name}
              </span>

              <span
                className="h-4 w-4 rounded-full"
                style={{
                  background: item.color,
                }}
              />

            </div>

            <h3
              className="mt-3 text-3xl font-bold"
              style={{
                color:
                  "var(--color-text-primary)",
              }}
            >
              {item.value.toLocaleString()}
            </h3>

          </div>
        ))}

      </div>

    </motion.section>
  );
}

export default UserAnalytics;