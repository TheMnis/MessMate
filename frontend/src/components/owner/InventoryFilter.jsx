import {
  FaSearch,
  FaFilter,
  FaTable,
  FaThLarge,
} from "react-icons/fa";

const categories = [
  "All",
  "Grains",
  "Vegetables",
  "Fruits",
  "Dairy",
  "Spices",
  "Oil",
  "Beverages",
  "Cleaning",
];

function InventoryFilter({
  search,
  setSearch,
  category,
  setCategory,
  view,
  setView,
}) {
  return (
    <section
      className="rounded-3xl p-6"
      style={{
        background: "var(--color-surface)",
        border: "1px solid var(--color-border)",
        boxShadow: "var(--shadow-lg)",
      }}
    >
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

        <div className="flex flex-1 items-center gap-4">

          <div
            className="flex flex-1 items-center gap-3 rounded-2xl px-4 py-3"
            style={{
              background: "var(--color-background)",
              border: "1px solid var(--color-border)",
            }}
          >
            <FaSearch
              style={{
                color: "var(--color-text-muted)",
              }}
            />

            <input
              type="text"
              placeholder="Search inventory..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              className="w-full bg-transparent outline-none"
              style={{
                color: "var(--color-text-primary)",
              }}
            />

          </div>

          <div
            className="flex items-center gap-3 rounded-2xl px-4 py-3"
            style={{
              background: "var(--color-background)",
              border: "1px solid var(--color-border)",
            }}
          >
            <FaFilter
              style={{
                color: "var(--color-text-muted)",
              }}
            />

            <select
              value={category}
              onChange={(e) =>
                setCategory(e.target.value)
              }
              className="bg-transparent outline-none"
              style={{
                color: "var(--color-text-primary)",
              }}
            >
              {categories.map((item) => (
                <option
                  key={item}
                  value={item}
                >
                  {item}
                </option>
              ))}
            </select>

          </div>

        </div>

        <div
          className="flex overflow-hidden rounded-2xl"
          style={{
            border:
              "1px solid var(--color-border)",
          }}
        >

          <button
            onClick={() =>
              setView("table")
            }
            className="flex items-center gap-2 px-5 py-3 font-semibold"
            style={{
              background:
                view === "table"
                  ? "var(--color-primary)"
                  : "var(--color-surface)",
              color:
                view === "table"
                  ? "var(--color-text-inverse)"
                  : "var(--color-text-primary)",
            }}
          >
            <FaTable />

            Table

          </button>

          <button
            onClick={() =>
              setView("grid")
            }
            className="flex items-center gap-2 px-5 py-3 font-semibold"
            style={{
              background:
                view === "grid"
                  ? "var(--color-primary)"
                  : "var(--color-surface)",
              color:
                view === "grid"
                  ? "var(--color-text-inverse)"
                  : "var(--color-text-primary)",
            }}
          >
            <FaThLarge />

            Grid

          </button>

        </div>

      </div>

    </section>
  );
}

export default InventoryFilter;