import { motion } from "framer-motion";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const revenueData = [
  { month: "Jan", revenue: 280000 },
  { month: "Feb", revenue: 315000 },
  { month: "Mar", revenue: 338000 },
  { month: "Apr", revenue: 356000 },
  { month: "May", revenue: 392000 },
  { month: "Jun", revenue: 418000 },
  { month: "Jul", revenue: 452000 },
  { month: "Aug", revenue: 482000 },
];

function RevenueChart() {
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
      <div className="mb-6 flex items-center justify-between">

        <div>

          <h2
            className="text-2xl font-bold"
            style={{
              color: "var(--color-text-primary)",
            }}
          >
            Revenue Overview
          </h2>

          <p
            className="mt-1"
            style={{
              color: "var(--color-text-secondary)",
            }}
          >
            Monthly revenue performance.
          </p>

        </div>

        <div
          className="rounded-2xl px-4 py-2 font-semibold"
          style={{
            background:
              "var(--color-success-subtle)",
            color:
              "var(--color-success)",
          }}
        >
          +18%
        </div>

      </div>

      <div style={{ width: "100%", height: 340 }}>

        <ResponsiveContainer>

          <AreaChart data={revenueData}>

            <defs>

              <linearGradient
                id="revenueGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="5%"
                  stopColor="var(--color-primary)"
                  stopOpacity={0.45}
                />

                <stop
                  offset="95%"
                  stopColor="var(--color-primary)"
                  stopOpacity={0.02}
                />

              </linearGradient>

            </defs>

            <CartesianGrid
              strokeDasharray="4 4"
              opacity={0.2}
            />

            <XAxis dataKey="month" />

            <YAxis />

            <Tooltip />

            <Area
              type="monotone"
              dataKey="revenue"
              stroke="var(--color-primary)"
              strokeWidth={3}
              fill="url(#revenueGradient)"
            />

          </AreaChart>

        </ResponsiveContainer>

      </div>

    </motion.section>
  );
}

export default RevenueChart;