function StudentFilter({
  value,
  onChange,
}) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="px-4 py-3 radius-xl border [border-color:var(--color-border)] [background:var(--color-surface)] outline-none focus:[border-color:var(--color-primary)]"
    >
      <option value="All">
        All Students
      </option>

      <option value="Active">
        Active
      </option>

      <option value="Expired">
        Expired
      </option>

      <option value="Monthly">
        Monthly Plan
      </option>

      <option value="Quarterly">
        Quarterly Plan
      </option>

      <option value="Yearly">
        Yearly Plan
      </option>
    </select>
  );
}

export default StudentFilter;