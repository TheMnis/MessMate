import { FaSearch } from "react-icons/fa";

function MenuSearch({
  search,
  setSearch,
}) {
  return (
    <section
      className="rounded-3xl p-5"
      style={{
        background: "var(--color-surface)",
        border: "1px solid var(--color-border)",
        boxShadow: "var(--shadow-lg)",
      }}
    >
      <div
        className="flex items-center gap-4 rounded-2xl px-5 py-4"
        style={{
          background: "var(--color-background)",
          border: "1px solid var(--color-border)",
        }}
      >
        <FaSearch
          style={{
            color: "var(--color-text-muted)",
            fontSize: 18,
          }}
        />

        <input
          type="text"
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          placeholder="Search meal, menu, day..."
          className="w-full bg-transparent outline-none"
          style={{
            color: "var(--color-text-primary)",
          }}
        />
      </div>
    </section>
  );
}

export default MenuSearch;