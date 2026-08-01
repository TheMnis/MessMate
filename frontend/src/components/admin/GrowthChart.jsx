import { motion } from "framer-motion";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

const growthData = [
  {
    month: "Jan",
    students: 8200,
    owners: 92,
    messes: 86,
  },
  {
    month: "Feb",
    students: 8900,
    owners: 101,
    messes: 95,
  },
  {
    month: "Mar",
    students: 9600,
    owners: 112,
    messes: 108,
  },
  {
    month: "Apr",
    students: 10400,
    owners: 124,
    messes: 118,
  },
  {
    month: "May",
    students: 11200,
    owners: 136,
    messes: 129,
  },
  {
    month: "Jun",
    students: 11900,
    owners: 145,
    messes: 138,
  },
  {
    month: "Jul",
    students: 12600,
    owners: 156,
    messes: 148,
  },
  {
    month: "Aug",
    students: 12842,
    owners: 164,
    messes: 152,
  },
];

function GrowthChart() {
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

      <div className="mb-8">

        <h2
          className="text-3xl font-bold"
          style={{
            color:
              "var(--color-text-primary)",
          }}
        >
          Platform Growth
        </h2>

        <p
          className="mt-2"
          style={{
            color:
              "var(--color-text-secondary)",
          }}
        >
          Track student, owner and mess growth
          over time.
        </p>

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

          <BarChart
            data={growthData}
          >

            <CartesianGrid
              strokeDasharray="4 4"
              opacity={0.2}
            />

            <XAxis
              dataKey="month"
            />

            <YAxis />

            <Tooltip />

            <Legend />


            <Bar
              dataKey="students"
              name="Students"
              fill="var(--color-primary)"
              radius={[
                8,
                8,
                0,
                0,
              ]}
            />

            <Bar
              dataKey="owners"
              name="Owners"
              fill="var(--color-success)"
              radius={[
                8,
                8,
                0,
                0,
              ]}
            />

            <Bar
              dataKey="messes"
              name="Messes"
              fill="var(--color-warning)"
              radius={[
                8,
                8,
                0,
                0,
              ]}
            />

          </BarChart>

        </ResponsiveContainer>

      </div>


      <div className="mt-6 grid gap-4 md:grid-cols-3">

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
            Student Growth
          </p>

          <h3
            className="mt-2 text-2xl font-bold"
            style={{
              color:
                "var(--color-primary)",
            }}
          >
            +56%
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
            Owner Growth
          </p>

          <h3
            className="mt-2 text-2xl font-bold"
            style={{
              color:
                "var(--color-success)",
            }}
          >
            +38%
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
            Mess Growth
          </p>

          <h3
            className="mt-2 text-2xl font-bold"
            style={{
              color:
                "var(--color-warning)",
            }}
          >
            +31%
          </h3>

        </div>

      </div>


    </motion.section>
  );
}

export default GrowthChart;