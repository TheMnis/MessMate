import {
  FaSearch,
  FaPlus,
  FaTable,
  FaThLarge,
} from "react-icons/fa";

function MessFilter({
  search,
  setSearch,
  status,
  setStatus,
  view,
  setView,
}) {
  return (
    <section
      className="rounded-3xl p-6"
      style={{
        background: "var(--color-surface)",
        border: "1px solid var(--color-border)",
        boxShadow: "var(--shadow-md)",
      }}
    >
      <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">

        <div className="flex flex-1 flex-col gap-4 md:flex-row">

          <div
            className="flex flex-1 items-center gap-3 rounded-2xl px-4 py-3"
            style={{
              background: "var(--color-background)",
              border: "1px solid var(--color-border)",
            }}
          >
            <FaSearch
              style={{
                color: "var(--color-text-secondary)",
              }}
            />

            <input
              type="text"
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              placeholder="Search by mess or owner..."
              className="w-full bg-transparent outline-none"
              style={{
                color: "var(--color-text-primary)",
              }}
            />

          </div>

          <select
            value={status}
            onChange={(e) =>
              setStatus(e.target.value)
            }
            className="rounded-2xl px-5 py-3 outline-none"
            style={{
              background: "var(--color-background)",
              border: "1px solid var(--color-border)",
              color: "var(--color-text-primary)",
            }}
          >
            <option>All</option>
            <option>Active</option>
            <option>Inactive</option>
            <option>Pending</option>
            <option>Blocked</option>
          </select>

        </div>

        <div className="flex flex-wrap items-center gap-3">

          <div
            className="flex overflow-hidden rounded-2xl"
            style={{
              border: "1px solid var(--color-border)",
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
                    : "var(--color-background)",
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
                setView("card")
              }
              className="flex items-center gap-2 px-5 py-3 font-semibold"
              style={{
                background:
                  view === "card"
                    ? "var(--color-primary)"
                    : "var(--color-background)",
                color:
                  view === "card"
                    ? "var(--color-text-inverse)"
                    : "var(--color-text-primary)",
              }}
            >
              <FaThLarge />

              Cards

            </button>

          </div>

          <button
            className="flex items-center gap-3 rounded-2xl px-6 py-3 font-semibold transition-all hover:scale-[1.02]"
            style={{
              background: "var(--gradient-primary)",
              color: "var(--color-text-inverse)",
            }}
          >
            <FaPlus />

            Add Mess

          </button>

        </div>

      </div>
    </section>
  );
}

export default MessFilter;