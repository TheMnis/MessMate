import { useMemo, useState } from "react";
import {
  FaCalendarAlt,
  FaSearch,
} from "react-icons/fa";

function getBadge(status) {
  const styles = {
    Present: "[background:var(--color-success-subtle)] [color:var(--color-success-hover)]",
    Absent: "[background:var(--color-danger-subtle)] [color:var(--color-danger-hover)]",
    Leave: "[background:var(--color-warning-subtle)] [color:var(--color-warning-hover)]",
  };

  return (
    <span
      className={`px-4 py-1 radius-full text-sm font-semibold ${styles[status]}`}
    >
      {status}
    </span>
  );
}

function AttendanceHistory({ attendance }) {
  const [search, setSearch] = useState("");

  const filteredAttendance = useMemo(() => {
    return attendance.filter((item) =>
      item.date.toLowerCase().includes(search.toLowerCase())
    );
  }, [attendance, search]);

  return (
    <div className="mt-8 [background:var(--color-surface)] radius-3xl elevation-lg border [border-color:var(--color-border-subtle)] p-6">

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-6">

        <h2 className="text-2xl font-bold">
          📅 Attendance History
        </h2>

        <div className="relative w-full md:w-72">

          <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 [color:var(--color-text-disabled)]" />

          <input
            type="text"
            placeholder="Search by date..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full radius-2xl border [border-color:var(--color-border)] py-3 pl-12 pr-4 outline-none focus:ring-2 focus:[--tw-ring-color:var(--color-primary)]"
          />

        </div>

      </div>

      {filteredAttendance.length === 0 ? (

        <div className="text-center py-12">

          <FaCalendarAlt className="mx-auto text-5xl [color:var(--color-text-disabled)]" />

          <p className="mt-4 [color:var(--color-text-muted)]">
            No attendance records found.
          </p>

        </div>

      ) : (

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead>

              <tr className="border-b">

                <th className="text-left py-4 [color:var(--color-text-muted)]">
                  Date
                </th>

                <th className="text-left py-4 [color:var(--color-text-muted)]">
                  Status
                </th>

              </tr>

            </thead>

            <tbody>

              {filteredAttendance.map((item) => (

                <tr
                  key={item.id}
                  className="border-b last:border-none hover:[background:var(--color-surface-muted)] transition"
                >

                  <td className="py-4 font-medium">
                    {item.date}
                  </td>

                  <td className="py-4">
                    {getBadge(item.status)}
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      )}

    </div>
  );
}

export default AttendanceHistory;