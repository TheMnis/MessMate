import { FiSearch } from "react-icons/fi";

function MenuSearch({ searchTerm, onSearch }) {
  return (
    <div className="mb-8">
      <div className="relative">
        <FiSearch
          className="absolute left-4 top-1/2 -translate-y-1/2 text-text-disabled"
          size={20}
        />

        <input
          type="text"
          value={searchTerm}
          onChange={(e) => onSearch(e.target.value)}
          placeholder="Search meals or food items..."
          className="w-full radius-2xl border border-border-strong bg-surface py-4 pl-12 pr-4 elevation-sm outline-none transition-all duration-300 focus:border-success focus:ring-2 focus:ring-primary-muted"
        />
      </div>
    </div>
  );
}

export default MenuSearch;