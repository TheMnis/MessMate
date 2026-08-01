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
        [border-color:var(--color-border)]
        outline-none
        focus:[border-color:var(--color-primary)]
        [background:var(--color-surface)]
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
