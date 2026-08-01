import { motion } from "framer-motion";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const data = [
  { day: "Mon", present: 84 },
  { day: "Tue", present: 90 },
  { day: "Wed", present: 86 },
  { day: "Thu", present: 94 },
  { day: "Fri", present: 88 },
  { day: "Sat", present: 91 },
  { day: "Sun", present: 80 },
];

function AttendanceChart() {
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
          Weekly Attendance
        </h2>

        <p
          className="mt-2"
          style={{
            color: "var(--color-text-secondary)",
          }}
        >
          Student attendance percentage for the current week.
        </p>

      </div>

      <div
        style={{
          width: "100%",
          height: 340,
        }}
      >

        <ResponsiveContainer>

          <BarChart data={data}>

            <CartesianGrid
              strokeDasharray="4 4"
              stroke="var(--color-border)"
            />

            <XAxis
              dataKey="day"
              stroke="var(--color-text-secondary)"
            />

            <YAxis
              stroke="var(--color-text-secondary)"
            />

            <Tooltip />

            <Bar
              dataKey="present"
              radius={[10, 10, 0, 0]}
              fill="var(--color-success)"
            />

          </BarChart>

        </ResponsiveContainer>

      </div>

    </motion.section>
  );
}

export default AttendanceChart;