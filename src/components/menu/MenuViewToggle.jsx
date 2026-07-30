function MenuViewToggle({ view, onChange }) {
  return (
    <div className="mb-8 flex w-fit rounded-2xl bg-white p-1 shadow-md">
      <button
        onClick={() => onChange("today")}
        className={`rounded-xl px-6 py-3 font-semibold transition ${
          view === "today"
            ? "bg-green-600 text-white"
            : "text-gray-600"
        }`}
      >
        🍽 Today
      </button>

      <button
        onClick={() => onChange("weekly")}
        className={`rounded-xl px-6 py-3 font-semibold transition ${
          view === "weekly"
            ? "bg-green-600 text-white"
            : "text-gray-600"
        }`}
      >
        📅 Weekly
      </button>
    </div>
  );
}

export default MenuViewToggle;