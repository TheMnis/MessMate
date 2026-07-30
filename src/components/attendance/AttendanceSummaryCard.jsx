function AttendanceSummaryCard({
  title,
  value,
  icon,
  bgColor,
  textColor,
}) {
  return (
    <div
      className={`rounded-2xl p-5 shadow-md ${bgColor} transition-all duration-300 hover:scale-105`}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">
            {title}
          </p>

          <h2 className={`mt-2 text-3xl font-bold ${textColor}`}>
            {value}
          </h2>
        </div>

        <div className="text-4xl">
          {icon}
        </div>
      </div>
    </div>
  );
}

export default AttendanceSummaryCard;