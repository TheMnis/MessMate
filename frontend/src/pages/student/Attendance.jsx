import { useMemo, useState } from "react";
import {
  FaCheckCircle,
  FaTimesCircle,
} from "react-icons/fa";
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
    if (filter === "All") return attendanceData;

    return attendanceData.filter(
      (item) => item.status === filter
    );
  }, [filter]);

  const total =
    summary.present +
    summary.absent +
    summary.leave;

  const percentage = Math.round(
    (summary.present / total) * 100
  );

  return (
    <div className="relative space-y-8 overflow-hidden">

      {/* Background */}

      <div
        style={{
          position: "absolute",
          top: -180,
          right: -120,
          width: 340,
          height: 340,
          borderRadius: "var(--radius-full)",
          background: "var(--gradient-primary)",
          opacity: .05,
          filter: "blur(30px)",
        }}
      />

      <div
        style={{
          position: "absolute",
          bottom: -180,
          left: -120,
          width: 320,
          height: 320,
          borderRadius: "var(--radius-full)",
          background: "var(--gradient-success)",
          opacity: .05,
          filter: "blur(30px)",
        }}
      />

      {/* Hero */}

      <div
        className="relative overflow-hidden rounded-3xl p-8"
        style={{
          background: "var(--color-surface)",
          border: "1px solid var(--color-border)",
          boxShadow: "var(--shadow-lg)",
        }}
      >

        <div className="flex flex-col lg:flex-row justify-between gap-8">

          <div>

            <div
              className="inline-flex items-center rounded-full px-4 py-2 mb-5"
              style={{
                background:
                  "var(--color-primary-subtle)",
                color:
                  "var(--color-primary)",
              }}
            >
              📅 Monthly Attendance
            </div>

            <h1
              className="text-5xl font-bold"
              style={{
                color:
                  "var(--color-text-primary)",
              }}
            >
              Attendance
            </h1>

            <p
              className="mt-4 max-w-xl text-lg"
              style={{
                color:
                  "var(--color-text-secondary)",
              }}
            >
              Track attendance,
              monitor consistency and
              maintain your attendance
              percentage.
            </p>

          </div>

          <div
            className="rounded-3xl p-6 text-center"
            style={{
              background:
                "var(--color-background)",
              border:
                "1px solid var(--color-border)",
            }}
          >

            <div
              className="text-6xl font-bold"
              style={{
                color:
                  "var(--color-primary)",
              }}
            >
              {percentage}%
            </div>

            <p
              className="mt-2"
              style={{
                color:
                  "var(--color-text-muted)",
              }}
            >
              Overall Attendance
            </p>

          </div>

        </div>

      </div>

      {/* Summary */}

      <div className="grid gap-6 md:grid-cols-3">

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

      </div>

      {/* Progress */}

      <AttendanceProgress />

      {/* Filter */}

      <AttendanceFilter
        selected={filter}
        onChange={setFilter}
      />

      {/* History */}

      <AttendanceHistory
        attendance={filteredAttendance}
      />

    </div>
  );
}

export default Attendance;