import { useMemo, useState } from "react";
import {
  FaCalendarAlt,
  FaSearch,
} from "react-icons/fa";

function getBadge(status) {
  const styles = {
    Present: "bg-green-100 text-green-700",
    Absent: "bg-red-100 text-red-700",
    Leave: "bg-yellow-100 text-yellow-700",
  };

  return (
    <span
      className={`px-4 py-1 rounded-full text-sm font-semibold ${styles[status]}`}
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
    <div className="mt-8 bg-white rounded-3xl shadow-lg border border-gray-100 p-6">

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-6">

        <h2 className="text-2xl font-bold">
          📅 Attendance History
        </h2>

        <div className="relative w-full md:w-72">

          <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

          <input
            type="text"
            placeholder="Search by date..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-2xl border border-gray-300 py-3 pl-12 pr-4 outline-none focus:ring-2 focus:ring-green-500"
          />

        </div>

      </div>

      {filteredAttendance.length === 0 ? (

        <div className="text-center py-12">

          <FaCalendarAlt className="mx-auto text-5xl text-gray-300" />

          <p className="mt-4 text-gray-500">
            No attendance records found.
          </p>

        </div>

      ) : (

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead>

              <tr className="border-b">

                <th className="text-left py-4 text-gray-500">
                  Date
                </th>

                <th className="text-left py-4 text-gray-500">
                  Status
                </th>

              </tr>

            </thead>

            <tbody>

              {filteredAttendance.map((item) => (

                <tr
                  key={item.id}
                  className="border-b last:border-none hover:bg-gray-50 transition"
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