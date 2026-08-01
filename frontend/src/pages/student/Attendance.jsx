import { useMemo, useState } from "react";
import {
  FaCheckCircle,
  FaTimesCircle,
} from "react-icons/fa";
import { MdOutlineEventAvailable } from "react-icons/md";

import AttendanceSummaryCard from "../../components/attendance/AttendanceSummaryCard";
import AttendanceProgress from "../../components/attendance/AttendanceProgress";
import AttendanceInsights from "../../components/attendance/AttendanceInsights";
import AttendanceFilter from "../../components/attendance/AttendanceFilter";
import AttendanceCalendar from "../../components/attendance/AttendanceCalendar";
import AttendanceHistory from "../../components/attendance/AttendanceHistory";

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
    <div className="relative space-y-8 overflow-hidden">

      {/* Background Decoration */}

      <div
        style={{
          position: "absolute",
          top: -220,
          right: -150,
          width: 380,
          height: 380,
          borderRadius: "var(--radius-full)",
          background: "var(--gradient-primary)",
          opacity: 0.05,
          filter: "blur(40px)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "absolute",
          bottom: -220,
          left: -150,
          width: 360,
          height: 360,
          borderRadius: "var(--radius-full)",
          background: "var(--gradient-success)",
          opacity: 0.05,
          filter: "blur(40px)",
          pointerEvents: "none",
        }}
      />

      {/* Hero */}

      <section
        className="relative overflow-hidden rounded-3xl p-8"
        style={{
          background: "var(--color-surface)",
          border: "1px solid var(--color-border)",
          boxShadow: "var(--shadow-lg)",
        }}
      >
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

          <div>

            <div
              className="mb-5 inline-flex items-center gap-2 rounded-full px-4 py-2"
              style={{
                background: "var(--color-primary-subtle)",
                color: "var(--color-primary)",
              }}
            >
              📅 Attendance Dashboard
            </div>

            <h1
              className="text-5xl font-bold"
              style={{
                color: "var(--color-text-primary)",
              }}
            >
              Attendance
            </h1>

            <p
              className="mt-4 max-w-2xl text-lg"
              style={{
                color: "var(--color-text-secondary)",
              }}
            >
              Monitor meal attendance, breakfast, lunch,
              snacks, dinner, attendance percentage,
              extra tiffin history and attendance insights
              from one place.
            </p>

          </div>

          <div
            className="rounded-3xl px-8 py-7 text-center"
            style={{
              background: "var(--gradient-primary)",
              color: "var(--color-text-inverse)",
              boxShadow: "var(--shadow-md)",
            }}
          >
            <div className="text-6xl font-bold">
              {summary.percentage}%
            </div>

            <div className="mt-2 text-lg font-semibold">
              {summary.attendanceScore}
            </div>

            <div
              className="mt-2"
              style={{
                opacity: 0.9,
              }}
            >
              Overall Attendance
            </div>

          </div>

        </div>
      </section>

      {/* Summary */}

      <section className="grid gap-6 md:grid-cols-3">

        <AttendanceSummaryCard
          title="Present"
          value={summary.present}
          icon={<FaCheckCircle />}
          bgColor="--color-success-subtle"
          textColor="--color-success"
        />

        <AttendanceSummaryCard
          title="Absent"
          value={summary.absent}
          icon={<FaTimesCircle />}
          bgColor="--color-danger-subtle"
          textColor="--color-danger"
        />

        <AttendanceSummaryCard
          title="Leave"
          value={summary.leave}
          icon={<MdOutlineEventAvailable />}
          bgColor="--color-warning-subtle"
          textColor="--color-warning"
        />

      </section>

      {/* Analytics */}

      <AttendanceProgress />

      {/* Insights */}

      <AttendanceInsights />

      {/* Filter */}

      <AttendanceFilter
        selected={filter}
        onChange={setFilter}
      />

      {/* Calendar */}

      <AttendanceCalendar />

      {/* History */}

      <AttendanceHistory
        attendance={filteredAttendance}
      />

    </div>
  );
}

export default Attendance;
