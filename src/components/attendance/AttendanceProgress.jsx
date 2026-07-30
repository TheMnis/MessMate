import { getAttendanceSummary } from "../../services/student/attendance.service";

function AttendanceProgress() {
  const summary = getAttendanceSummary();

  return (
    <div className="mt-8 rounded-2xl bg-white p-6 shadow-md">

      <div className="flex items-center justify-between">

        <h2 className="text-xl font-bold">
          Attendance Percentage
        </h2>

        <span className="text-2xl font-bold text-green-600">
          {summary.percentage}%
        </span>

      </div>

      <div className="mt-6 h-5 w-full overflow-hidden rounded-full bg-gray-200">

        <div
          className="h-full rounded-full bg-green-500 transition-all duration-700"
          style={{
            width: `${summary.percentage}%`,
          }}
        />

      </div>

      <div className="mt-6 flex justify-between text-sm text-gray-600">

        <span>Present : {summary.present}</span>

        <span>Absent : {summary.absent}</span>

        <span>Leave : {summary.leave}</span>

      </div>

    </div>
  );
}

export default AttendanceProgress;