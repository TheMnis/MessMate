import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

function RevenueChart({ data }) {
  return (
    <div className="[background:var(--color-surface)] radius-3xl elevation-lg p-6">

      <h2 className="text-2xl font-bold mb-6">
        Revenue Overview
      </h2>

      <div className="h-[350px]">

        <ResponsiveContainer width="100%" height="100%">

          <LineChart data={data}>

            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="month" />

            <YAxis />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="revenue"
              stroke="var(--color-success)"
              strokeWidth={4}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}

export default RevenueChart;
