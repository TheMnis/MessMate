import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  Label,
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
    <section
      className="mt-8 rounded-3xl p-8"
      style={{
        background: "var(--color-surface)",
        border: "1px solid var(--color-border)",
        boxShadow: "var(--shadow-lg)",
      }}
    >
      {/* Header */}

      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

        <div>

          <div
            className="mb-4 inline-flex items-center gap-2 rounded-full px-4 py-2"
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
            Monthly attendance overview with performance insights.
          </p>

        </div>

        <div
          className="rounded-3xl px-8 py-6 text-center"
          style={{
            background: "var(--gradient-primary)",
            color: "var(--color-text-inverse)",
            boxShadow: "var(--shadow-md)",
          }}
        >
          <div className="text-5xl font-bold">
            {summary.percentage}%
          </div>

          <div className="mt-2 font-medium">
            {summary.attendanceScore}
          </div>
        </div>

      </div>

      {/* Content */}

      <div className="mt-10 grid gap-10 xl:grid-cols-2">

        {/* Chart */}

        <div
          className="rounded-3xl p-6"
          style={{
            background: "var(--color-background)",
            border: "1px solid var(--color-border)",
          }}
        >

          <div className="h-96">

            <ResponsiveContainer width="100%" height="100%">

              <PieChart>

                <Pie
                  data={data}
                  dataKey="value"
                  innerRadius={90}
                  outerRadius={125}
                  paddingAngle={5}
                  stroke="transparent"
                >

                  {data.map((item) => (
                    <Cell
                      key={item.name}
                      fill={item.color}
                    />
                  ))}

                  <Label
                    position="center"
                    content={() => (
                      <text
                        x="50%"
                        y="47%"
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x="50%"
                          dy="-0.3em"
                          fontSize="34"
                          fontWeight="700"
                          fill="var(--color-text-primary)"
                        >
                          {summary.percentage}%
                        </tspan>

                        <tspan
                          x="50%"
                          dy="1.7em"
                          fontSize="15"
                          fill="var(--color-text-muted)"
                        >
                          {summary.attendanceScore}
                        </tspan>
                      </text>
                    )}
                  />

                </Pie>

                <Tooltip />

                <Legend />

              </PieChart>

            </ResponsiveContainer>

          </div>

        </div>

        {/* Right */}

        <div className="space-y-5">

          {data.map((item) => (

            <div
              key={item.name}
              className="rounded-3xl p-5"
              style={{
                background: item.bg,
                border: "1px solid var(--color-border)",
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
                        color: "var(--color-text-primary)",
                      }}
                    >
                      {item.name}
                    </div>

                    <div
                      style={{
                        color: "var(--color-text-muted)",
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

          {/* Insights */}

          <div className="grid grid-cols-2 gap-4">

            <div
              className="rounded-2xl p-5"
              style={{
                background: "var(--color-background)",
                border: "1px solid var(--color-border)",
              }}
            >
              <div
                style={{
                  color: "var(--color-text-muted)",
                  fontSize: 13,
                }}
              >
                🔥 Current Streak
              </div>

              <div
                className="mt-2 text-3xl font-bold"
                style={{
                  color: "var(--color-primary)",
                }}
              >
                {summary.currentStreak}
              </div>

              <div
                style={{
                  color: "var(--color-text-secondary)",
                }}
              >
                Days
              </div>

            </div>

            <div
              className="rounded-2xl p-5"
              style={{
                background: "var(--color-background)",
                border: "1px solid var(--color-border)",
              }}
            >
              <div
                style={{
                  color: "var(--color-text-muted)",
                  fontSize: 13,
                }}
              >
                🏆 Best Streak
              </div>

              <div
                className="mt-2 text-3xl font-bold"
                style={{
                  color: "var(--color-success)",
                }}
              >
                {summary.bestStreak}
              </div>

              <div
                style={{
                  color: "var(--color-text-secondary)",
                }}
              >
                Days
              </div>

            </div>

            <div
              className="rounded-2xl p-5"
              style={{
                background: "var(--color-background)",
                border: "1px solid var(--color-border)",
              }}
            >
              <div
                style={{
                  color: "var(--color-text-muted)",
                  fontSize: 13,
                }}
              >
                🎯 Target
              </div>

              <div
                className="mt-2 text-3xl font-bold"
                style={{
                  color: "var(--color-warning)",
                }}
              >
                {summary.targetPercentage}%
              </div>

              <div
                style={{
                  color: "var(--color-text-secondary)",
                }}
              >
                Required
              </div>

            </div>

            <div
              className="rounded-2xl p-5"
              style={{
                background: "var(--color-background)",
                border: "1px solid var(--color-border)",
              }}
            >
              <div
                style={{
                  color: "var(--color-text-muted)",
                  fontSize: 13,
                }}
              >
                📅 Working Days
              </div>

              <div
                className="mt-2 text-3xl font-bold"
                style={{
                  color: "var(--color-secondary)",
                }}
              >
                {summary.workingDays}
              </div>

              <div
                style={{
                  color: "var(--color-text-secondary)",
                }}
              >
                Total Days
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default AttendanceProgress;