import { motion } from "framer-motion";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const revenueData = [
  { month: "Jan", revenue: 1800000 },
  { month: "Feb", revenue: 1960000 },
  { month: "Mar", revenue: 2140000 },
  { month: "Apr", revenue: 2250000 },
  { month: "May", revenue: 2380000 },
  { month: "Jun", revenue: 2510000 },
  { month: "Jul", revenue: 2670000 },
  { month: "Aug", revenue: 2840000 },
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
      <div className="mb-8 flex items-center justify-between">

        <div>

          <h2
            className="text-3xl font-bold"
            style={{
              color: "var(--color-text-primary)",
            }}
          >
            Platform Revenue
          </h2>

          <p
            className="mt-2"
            style={{
              color: "var(--color-text-secondary)",
            }}
          >
            Revenue generated from all registered
            mess subscriptions.
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
          +22%
        </div>

      </div>

      <div style={{ width: "100%", height: 360 }}>

        <ResponsiveContainer width="100%" height="100%">

          <AreaChart data={revenueData}>

            <defs>

              <linearGradient
                id="adminRevenueGradient"
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
                  stopOpacity={0.03}
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
              fill="url(#adminRevenueGradient)"
            />

          </AreaChart>

        </ResponsiveContainer>

      </div>

    </motion.section>
  );
}

export default RevenueChart;