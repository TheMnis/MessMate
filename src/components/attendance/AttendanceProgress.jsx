import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
} from "recharts";

import { FaChartPie } from "react-icons/fa6";

import { getAttendanceSummary } from "../../services/student/attendance.service";

function AttendanceProgress() {
  const summary = getAttendanceSummary();

  const data = [
    {
      name: "Present",
      value: summary.present,
      color: "var(--chart-success)",
    },
    {
      name: "Absent",
      value: summary.absent,
      color: "var(--chart-danger)",
    },
    {
      name: "Leave",
      value: summary.leave,
      color: "var(--chart-warning)",
    },
  ];

  return (
    <div className="mt-8 bg-surface radius-3xl elevation-lg border border-border-subtle p-6">

      <div className="flex items-center justify-between mb-8">

        <div>

          <h2 className="text-2xl font-bold flex items-center gap-2">

            <FaChartPie className="text-success" />

            Attendance Analytics

          </h2>

          <p className="text-text-muted mt-1">
            Monthly attendance overview
          </p>

        </div>

        <div className="text-right">

          <h2 className="text-4xl font-bold text-success">
            {summary.percentage}%
          </h2>

          <p className="text-sm text-text-muted">
            Overall Attendance
          </p>

        </div>

      </div>

      <div className="grid lg:grid-cols-2 gap-8 items-center">

        <div className="h-72">

          <ResponsiveContainer width="100%" height="100%">

            <PieChart>

              <Pie
                data={data}
                dataKey="value"
                innerRadius={70}
                outerRadius={95}
                paddingAngle={4}
              >

                {data.map((item) => (

                  <Cell
                    key={item.name}
                    fill={item.color}
                  />

                ))}

              </Pie>

              <Tooltip />

            </PieChart>

          </ResponsiveContainer>

        </div>

        <div className="space-y-5">

          {data.map((item) => (

            <div
              key={item.name}
              className="flex items-center justify-between bg-surface-muted radius-2xl p-4"
            >

              <div className="flex items-center gap-3">

                <div
                  className="w-4 h-4 radius-full"
                  style={{
                    background: item.color,
                  }}
                />

                <span className="font-semibold">
                  {item.name}
                </span>

              </div>

              <span className="text-xl font-bold">
                {item.value}
              </span>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}

export default AttendanceProgress;
