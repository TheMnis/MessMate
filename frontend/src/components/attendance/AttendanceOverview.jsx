import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  Tooltip,
} from "recharts";

const chartData = [
  { day: "Mon", attendance: 92 },
  { day: "Tue", attendance: 95 },
  { day: "Wed", attendance: 88 },
  { day: "Thu", attendance: 96 },
  { day: "Fri", attendance: 90 },
  { day: "Sat", attendance: 97 },
  { day: "Sun", attendance: 94 },
];

function AttendanceOverview() {
  return (
    <section
      className="rounded-3xl p-8"
      style={{
        background: "var(--color-surface)",
        border: "1px solid var(--color-border)",
        boxShadow: "var(--shadow-lg)",
      }}
    >
      <div className="mb-8 flex items-center justify-between">

        <div>

          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-2"
            style={{
              background: "var(--color-success-subtle)",
              color: "var(--color-success)",
            }}
          >
            📈 Attendance
          </div>

          <h2
            className="mt-4 text-3xl font-bold"
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
            Attendance performance during this week.
          </p>

        </div>

        <div
          className="rounded-3xl px-6 py-5 text-center"
          style={{
            background: "var(--gradient-primary)",
            color: "var(--color-text-inverse)",
            boxShadow: "var(--shadow-md)",
          }}
        >
          <div className="text-5xl font-bold">
            93%
          </div>

          <div className="mt-2">
            Weekly Average
          </div>

        </div>

      </div>

      <div
        className="rounded-3xl p-5"
        style={{
          background: "var(--color-background)",
          border: "1px solid var(--color-border)",
        }}
      >
        <div className="h-80">

          <ResponsiveContainer
            width="100%"
            height="100%"
          >

            <AreaChart data={chartData}>

              <defs>

                <linearGradient
                  id="attendanceGradient"
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

              <XAxis
                dataKey="day"
                tick={{
                  fill: "var(--color-text-secondary)",
                }}
                axisLine={false}
                tickLine={false}
              />

              <Tooltip
                contentStyle={{
                  background:
                    "var(--color-surface)",
                  border:
                    "1px solid var(--color-border)",
                  borderRadius: 16,
                  color:
                    "var(--color-text-primary)",
                }}
              />

              <Area
                type="monotone"
                dataKey="attendance"
                stroke="var(--color-primary)"
                strokeWidth={4}
                fill="url(#attendanceGradient)"
              />

            </AreaChart>

          </ResponsiveContainer>

        </div>

      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-4">

        {[
          {
            title: "Present",
            value: "26",
            bg: "var(--color-success-subtle)",
            color: "var(--color-success)",
          },
          {
            title: "Absent",
            value: "2",
            bg: "var(--color-danger-subtle)",
            color: "var(--color-danger)",
          },
          {
            title: "Leave",
            value: "1",
            bg: "var(--color-warning-subtle)",
            color: "var(--color-warning)",
          },
          {
            title: "Target",
            value: "75%",
            bg: "var(--color-primary-subtle)",
            color: "var(--color-primary)",
          },
        ].map((item) => (

          <div
            key={item.title}
            className="rounded-3xl p-5"
            style={{
              background: item.bg,
              border: "1px solid var(--color-border)",
            }}
          >

            <div
              style={{
                color: "var(--color-text-muted)",
                fontWeight: 600,
              }}
            >
              {item.title}
            </div>

            <div
              className="mt-3 text-4xl font-bold"
              style={{
                color: item.color,
              }}
            >
              {item.value}
            </div>

          </div>

        ))}

      </div>
    </section>
  );
}

export default AttendanceOverview;
