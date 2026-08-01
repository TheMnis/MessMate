function DayFilter({
  value,
  onChange,
}) {
  const days = [
    "All",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="
        px-4
        py-3
        radius-xl
        border
        border-border
        outline-none
        focus:border-primary
        bg-surface
      "
    >
      {days.map((day) => (
        <option
          key={day}
          value={day}
        >
          {day}
        </option>
      ))}
    </select>
  );
}

export default DayFilter;