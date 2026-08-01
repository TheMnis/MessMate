import { FaSearch } from "react-icons/fa";

function SearchBar({
  value,
  onChange,
}) {
  return (
    <div className="relative w-full md:w-80">

      <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 [color:var(--color-text-disabled)]" />

      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search meal..."
        className="
          w-full
          pl-12
          pr-4
          py-3
          radius-xl
          border
          [border-color:var(--color-border)]
          outline-none
          focus:[border-color:var(--color-primary)]
          transition
        "
      />

    </div>
  );
}

export default SearchBar;
