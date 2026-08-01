import { FiSearch } from "react-icons/fi";

function MenuSearch({ searchTerm, onSearch }) {
  return (
    <div className="mb-8">
      <div className="relative">
        <FiSearch
          className="absolute left-4 top-1/2 -translate-y-1/2 [color:var(--color-text-disabled)]"
          size={20}
        />

        <input
          type="text"
          value={searchTerm}
          onChange={(e) => onSearch(e.target.value)}
          placeholder="Search meals or food items..."
          className="w-full radius-2xl border [border-color:var(--color-border-strong)] [background:var(--color-surface)] py-4 pl-12 pr-4 elevation-sm outline-none transition-all duration-300 focus:[border-color:var(--color-success)] focus:ring-2 focus:[--tw-ring-color:var(--color-primary-muted)]"
        />
      </div>
    </div>
  );
}

export default MenuSearch;