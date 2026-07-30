function AttendanceFilter({ selected, onChange }) {
  const filters = [
    "All",
    "Present",
    "Absent",
    "Leave",
  ];

  return (
    <div className="mt-8 flex flex-wrap gap-3">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => onChange(filter)}
          className={`rounded-xl px-5 py-2 font-medium transition-all duration-300 ${
            selected === filter
              ? "bg-blue-600 text-white"
              : "bg-gray-100 hover:bg-gray-200"
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}

export default AttendanceFilter;