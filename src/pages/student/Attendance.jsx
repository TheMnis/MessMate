import { useMemo, useState } from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { MdOutlineEventAvailable } from "react-icons/md";

import AttendanceSummaryCard from "../../components/attendance/AttendanceSummaryCard";
import AttendanceProgress from "../../components/attendance/AttendanceProgress";
import AttendanceHistory from "../../components/attendance/AttendanceHistory";
import AttendanceFilter from "../../components/attendance/AttendanceFilter";

import attendanceData from "../../data/attendanceData";
import { getAttendanceSummary } from "../../services/student/attendance.service";

function Attendance() {
  const summary = getAttendanceSummary();

  const [filter, setFilter] = useState("All");

  const filteredAttendance = useMemo(() => {
    if (filter === "All") {
      return attendanceData;
    }

    return attendanceData.filter(
      (item) => item.status === filter
    );
  }, [filter]);

  return (
    <div className="p-6">
      <h1 className="mb-8 text-3xl font-bold">
        Attendance
      </h1>

      <div className="grid gap-6 md:grid-cols-3">

        <AttendanceSummaryCard
          title="Present"
          value={summary.present}
          icon={<FaCheckCircle className="text-green-600" />}
          bgColor="bg-green-50"
          textColor="text-green-700"
        />

        <AttendanceSummaryCard
          title="Absent"
          value={summary.absent}
          icon={<FaTimesCircle className="text-red-600" />}
          bgColor="bg-red-50"
          textColor="text-red-700"
        />

        <AttendanceSummaryCard
          title="Leave"
          value={summary.leave}
          icon={<MdOutlineEventAvailable className="text-yellow-600" />}
          bgColor="bg-yellow-50"
          textColor="text-yellow-700"
        />

      </div>

      <AttendanceProgress />

      <AttendanceFilter
        selected={filter}
        onChange={setFilter}
      />

      <AttendanceHistory
        attendance={filteredAttendance}
      />

    </div>
  );
}

export default Attendance;