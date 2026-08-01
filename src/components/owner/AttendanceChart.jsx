import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const attendanceData = [
  { day: "Mon", attendance: 210 },
  { day: "Tue", attendance: 230 },
  { day: "Wed", attendance: 225 },
  { day: "Thu", attendance: 240 },
  { day: "Fri", attendance: 245 },
  { day: "Sat", attendance: 260 },
  { day: "Sun", attendance: 250 },
];

function AttendanceChart() {
  return (
    <div className="bg-surface radius-3xl elevation-lg p-6">

      <h2 className="text-2xl font-bold mb-6">
        Weekly Attendance
      </h2>

      <div className="h-[320px]">

        <ResponsiveContainer width="100%" height="100%">

          <BarChart data={attendanceData}>

            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="day" />

            <YAxis />

            <Tooltip />

            <Bar
              dataKey="attendance"
              fill="var(--color-secondary)"
              radius={[8,8,0,0]}
            />

          </BarChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}

export default AttendanceChart;
