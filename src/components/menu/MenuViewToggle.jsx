function MenuViewToggle({ view, onChange }) {
  return (
    <div className="mb-8 flex w-fit radius-2xl [background:var(--color-surface)] p-1 elevation-md">
      <button
        onClick={() => onChange("today")}
        className={`radius-xl px-6 py-3 font-semibold transition ${
          view === "today"
            ? "[background:var(--color-primary)] [color:var(--color-text-inverse)]"
            : "[color:var(--color-text-secondary)]"
        }`}
      >
        🍽 Today
      </button>

      <button
        onClick={() => onChange("weekly")}
        className={`radius-xl px-6 py-3 font-semibold transition ${
          view === "weekly"
            ? "[background:var(--color-primary)] [color:var(--color-text-inverse)]"
            : "[color:var(--color-text-secondary)]"
        }`}
      >
        📅 Weekly
      </button>
    </div>
  );
}

export default MenuViewToggle;