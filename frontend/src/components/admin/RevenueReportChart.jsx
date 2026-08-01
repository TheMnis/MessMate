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
  {
    month: "Jan",
    revenue: 1850000,
  },
  {
    month: "Feb",
    revenue: 2050000,
  },
  {
    month: "Mar",
    revenue: 2240000,
  },
  {
    month: "Apr",
    revenue: 2420000,
  },
  {
    month: "May",
    revenue: 2680000,
  },
  {
    month: "Jun",
    revenue: 2910000,
  },
  {
    month: "Jul",
    revenue: 3150000,
  },
  {
    month: "Aug",
    revenue: 3420000,
  },
];

function RevenueReportChart() {
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
            Revenue Analytics
          </h2>

          <p
            className="mt-2"
            style={{
              color:
                "var(--color-text-secondary)",
            }}
          >
            Monthly revenue growth across the platform.
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
          +22.8%
        </div>

      </div>


      <div
        style={{
          width: "100%",
          height: 360,
        }}
      >

        <ResponsiveContainer
          width="100%"
          height="100%"
        >

          <AreaChart
            data={revenueData}
          >

            <defs>

              <linearGradient
                id="reportRevenueGradient"
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
                  stopOpacity={0.05}
                />

              </linearGradient>

            </defs>


            <CartesianGrid
              strokeDasharray="4 4"
              opacity={0.2}
            />


            <XAxis
              dataKey="month"
            />


            <YAxis />


            <Tooltip />


            <Area
              type="monotone"
              dataKey="revenue"
              stroke="var(--color-primary)"
              strokeWidth={3}
              fill="url(#reportRevenueGradient)"
            />

          </AreaChart>

        </ResponsiveContainer>

      </div>


      <div className="mt-6 grid grid-cols-3 gap-4">

        <div
          className="rounded-2xl p-4"
          style={{
            background:
              "var(--color-background)",
          }}
        >
          <p
            className="text-sm"
            style={{
              color:
                "var(--color-text-secondary)",
            }}
          >
            Highest Month
          </p>

          <h3
            className="mt-2 text-xl font-bold"
            style={{
              color:
                "var(--color-text-primary)",
            }}
          >
            August
          </h3>

        </div>


        <div
          className="rounded-2xl p-4"
          style={{
            background:
              "var(--color-background)",
          }}
        >
          <p
            className="text-sm"
            style={{
              color:
                "var(--color-text-secondary)",
            }}
          >
            Avg Revenue
          </p>

          <h3
            className="mt-2 text-xl font-bold"
            style={{
              color:
                "var(--color-text-primary)",
            }}
          >
            ₹26.5L
          </h3>

        </div>


        <div
          className="rounded-2xl p-4"
          style={{
            background:
              "var(--color-background)",
          }}
        >
          <p
            className="text-sm"
            style={{
              color:
                "var(--color-text-secondary)",
            }}
          >
            Forecast
          </p>

          <h3
            className="mt-2 text-xl font-bold"
            style={{
              color:
                "var(--color-success)",
            }}
          >
            ₹38L
          </h3>

        </div>

      </div>

    </motion.section>
  );
}

export default RevenueReportChart;