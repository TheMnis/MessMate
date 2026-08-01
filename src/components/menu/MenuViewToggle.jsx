function MenuViewToggle({ view, onChange }) {
  return (
    <div className="mb-8 flex w-fit radius-2xl bg-surface p-1 elevation-md">
      <button
        onClick={() => onChange("today")}
        className={`radius-xl px-6 py-3 font-semibold transition ${
          view === "today"
            ? "bg-primary text-text-inverse"
            : "text-text-secondary"
        }`}
      >
        🍽 Today
      </button>

      <button
        onClick={() => onChange("weekly")}
        className={`radius-xl px-6 py-3 font-semibold transition ${
          view === "weekly"
            ? "bg-primary text-text-inverse"
            : "text-text-secondary"
        }`}
      >
        📅 Weekly
      </button>
    </div>
  );
}

export default MenuViewToggle;