import { motion } from "framer-motion";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    name: "Breakfast",
    value: 32,
  },
  {
    name: "Lunch",
    value: 38,
  },
  {
    name: "Dinner",
    value: 30,
  },
];

const COLORS = [
  "var(--color-primary)",
  "var(--color-success)",
  "var(--color-warning)",
];

function MealAnalytics() {
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
          Meal Analytics
        </h2>

        <p
          className="mt-2"
          style={{
            color: "var(--color-text-secondary)",
          }}
        >
          Distribution of meals served today.
        </p>

      </div>

      <div
        style={{
          width: "100%",
          height: 340,
        }}
      >

        <ResponsiveContainer>

          <PieChart>

            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              innerRadius={70}
              outerRadius={115}
              paddingAngle={4}
            >

              {data.map((entry, index) => (
                <Cell
                  key={entry.name}
                  fill={COLORS[index]}
                />
              ))}

            </Pie>

            <Tooltip />

            <Legend />

          </PieChart>

        </ResponsiveContainer>

      </div>

    </motion.section>
  );
}

export default MealAnalytics;