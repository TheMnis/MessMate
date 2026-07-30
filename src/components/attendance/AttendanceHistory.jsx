function getBadge(status) {
  if (status === "Present") {
    return (
      <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
        Present
      </span>
    );
  }

  if (status === "Absent") {
    return (
      <span className="rounded-full bg-red-100 px-3 py-1 text-sm font-semibold text-red-700">
        Absent
      </span>
    );
  }

  return (
    <span className="rounded-full bg-yellow-100 px-3 py-1 text-sm font-semibold text-yellow-700">
      Leave
    </span>
  );
}

function AttendanceHistory({ attendance }) {
  return (
    <div className="mt-8 rounded-2xl bg-white p-6 shadow-md">
      <h2 className="mb-5 text-xl font-bold">
        Attendance History
      </h2>

      <div className="space-y-4">
        {attendance.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between rounded-xl border p-4"
          >
            <p className="font-medium">{item.date}</p>

            {getBadge(item.status)}
          </div>
        ))}
      </div>
    </div>
  );
}

export default AttendanceHistory;