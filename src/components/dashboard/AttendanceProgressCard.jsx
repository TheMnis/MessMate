function AttendanceProgressCard() {
  const attendance = 92;

  return (
    <div className="bg-white rounded-2xl shadow-md p-6">
      <h2 className="text-2xl font-bold mb-6">
        📈 Attendance Progress
      </h2>

      <div className="flex flex-col items-center">

        <div className="relative w-40 h-40">

          <svg
            className="w-40 h-40 -rotate-90"
            viewBox="0 0 120 120"
          >
            <circle
              cx="60"
              cy="60"
              r="52"
              stroke="#E5E7EB"
              strokeWidth="10"
              fill="none"
            />

            <circle
              cx="60"
              cy="60"
              r="52"
              stroke="#16A34A"
              strokeWidth="10"
              fill="none"
              strokeLinecap="round"
              strokeDasharray="327"
              strokeDashoffset={327 - (327 * attendance) / 100}
            />
          </svg>

          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-3xl font-bold text-green-600">
              {attendance}%
            </span>
          </div>

        </div>

        <p className="text-gray-500 mt-6 text-center">
          Great job! Your attendance is excellent.
        </p>

      </div>
    </div>
  );
}

export default AttendanceProgressCard;