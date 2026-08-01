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

const data = [
  { month: "Jan", revenue: 48000 },
  { month: "Feb", revenue: 53000 },
  { month: "Mar", revenue: 61000 },
  { month: "Apr", revenue: 59000 },
  { month: "May", revenue: 67000 },
  { month: "Jun", revenue: 72000 },
  { month: "Jul", revenue: 78000 },
];

function RevenueChart() {
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
          Revenue Overview
        </h2>

        <p
          className="mt-2"
          style={{
            color: "var(--color-text-secondary)",
          }}
        >
          Monthly income generated from student subscriptions.
        </p>

      </div>

      <div style={{ width: "100%", height: 340 }}>

        <ResponsiveContainer>

          <AreaChart data={data}>

            <defs>

              <linearGradient
                id="revenueFill"
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
                  stopOpacity={0}
                />

              </linearGradient>

            </defs>

            <CartesianGrid
              strokeDasharray="4 4"
              stroke="var(--color-border)"
            />

            <XAxis
              dataKey="month"
              stroke="var(--color-text-secondary)"
            />

            <YAxis
              stroke="var(--color-text-secondary)"
            />

            <Tooltip />

            <Area
              type="monotone"
              dataKey="revenue"
              stroke="var(--color-primary)"
              strokeWidth={3}
              fill="url(#revenueFill)"
            />

          </AreaChart>

        </ResponsiveContainer>

      </div>

    </motion.section>
  );
}

export default RevenueChart;