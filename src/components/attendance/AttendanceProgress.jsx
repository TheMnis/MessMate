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
      color: "var(--color-success)",
      bg: "var(--color-success-subtle)",
    },
    {
      name: "Absent",
      value: summary.absent,
      color: "var(--color-danger)",
      bg: "var(--color-danger-subtle)",
    },
    {
      name: "Leave",
      value: summary.leave,
      color: "var(--color-warning)",
      bg: "var(--color-warning-subtle)",
    },
  ];

  return (
    <div
      className="mt-8 overflow-hidden rounded-3xl p-8"
      style={{
        background: "var(--color-surface)",
        border: "1px solid var(--color-border)",
        boxShadow: "var(--shadow-lg)",
      }}
    >
      {/* Header */}

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">

        <div>

          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-4"
            style={{
              background: "var(--color-primary-subtle)",
              color: "var(--color-primary)",
            }}
          >
            <FaChartPie />
            Analytics
          </div>

          <h2
            className="text-3xl font-bold"
            style={{
              color: "var(--color-text-primary)",
            }}
          >
            Attendance Analytics
          </h2>

          <p
            className="mt-2"
            style={{
              color: "var(--color-text-secondary)",
            }}
          >
            Monthly attendance overview
          </p>

        </div>

        <div
          className="rounded-3xl px-8 py-6 text-center"
          style={{
            background: "var(--gradient-primary)",
            color: "var(--color-text-inverse)",
          }}
        >
          <div className="text-5xl font-bold">
            {summary.percentage}%
          </div>

          <div
            style={{
              opacity: .9,
            }}
          >
            Overall Score
          </div>

        </div>

      </div>

      {/* Chart */}

      <div className="grid lg:grid-cols-2 gap-10 items-center">

        <div
          className="rounded-3xl p-6"
          style={{
            background: "var(--color-background)",
          }}
        >
          <div className="h-80">

            <ResponsiveContainer
              width="100%"
              height="100%"
            >

              <PieChart>

                <Pie
                  data={data}
                  dataKey="value"
                  innerRadius={80}
                  outerRadius={110}
                  paddingAngle={5}
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

        </div>

        {/* Legend */}

        <div className="space-y-5">

          {data.map((item) => (

            <div
              key={item.name}
              className="rounded-3xl p-5 transition-all duration-300 hover:-translate-y-1"
              style={{
                background: item.bg,
              }}
            >

              <div className="flex items-center justify-between">

                <div className="flex items-center gap-4">

                  <div
                    style={{
                      width: 18,
                      height: 18,
                      borderRadius: "var(--radius-full)",
                      background: item.color,
                    }}
                  />

                  <div>

                    <div
                      className="font-bold"
                      style={{
                        color:
                          "var(--color-text-primary)",
                      }}
                    >
                      {item.name}
                    </div>

                    <div
                      style={{
                        color:
                          "var(--color-text-muted)",
                        fontSize: 13,
                      }}
                    >
                      Attendance Count
                    </div>

                  </div>

                </div>

                <div
                  className="text-3xl font-bold"
                  style={{
                    color: item.color,
                  }}
                >
                  {item.value}
                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}

export default AttendanceProgress;