import { FiSearch } from "react-icons/fi";

function MenuSearch({ searchTerm, onSearch }) {
  return (
    <div className="mb-8">
      <div className="relative">
        <FiSearch
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          size={20}
        />

        <input
          type="text"
          value={searchTerm}
          onChange={(e) => onSearch(e.target.value)}
          placeholder="Search meals or food items..."
          className="w-full rounded-2xl border border-gray-200 bg-white py-4 pl-12 pr-4 shadow-sm outline-none transition-all duration-300 focus:border-green-500 focus:ring-2 focus:ring-green-200"
        />
      </div>
    </div>
  );
}

export default MenuSearch;