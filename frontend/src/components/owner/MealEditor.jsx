import { FaSearch, FaCalendarAlt } from "react-icons/fa";

const days = [
  "All",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

function MenuEditor({
  selectedDay,
  setSelectedDay,
  search,
  setSearch,
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
              placeholder="Search meal..."
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
            <FaCalendarAlt
              style={{
                color: "var(--color-text-muted)",
              }}
            />

            <select
              value={selectedDay}
              onChange={(e) =>
                setSelectedDay(e.target.value)
              }
              className="bg-transparent outline-none"
              style={{
                color: "var(--color-text-primary)",
              }}
            >
              {days.map((day) => (
                <option
                  key={day}
                  value={day}
                >
                  {day}
                </option>
              ))}
            </select>

          </div>

        </div>

      </div>
    </section>
  );
}

export default MenuEditor;