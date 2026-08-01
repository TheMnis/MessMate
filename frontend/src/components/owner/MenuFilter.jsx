import {
  FaSearch,
  FaCalendarAlt,
  FaUtensils,
} from "react-icons/fa";

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

const mealTypes = [
  "All",
  "Breakfast",
  "Lunch",
  "Dinner",
];

function MenuFilter({
  search,
  setSearch,
  selectedDay,
  setSelectedDay,
  selectedMeal,
  setSelectedMeal,
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
      <div className="grid gap-5 lg:grid-cols-3">

        <div
          className="flex items-center gap-3 rounded-2xl px-4 py-3"
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
            placeholder="Search menu..."
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
            className="w-full bg-transparent outline-none"
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

        <div
          className="flex items-center gap-3 rounded-2xl px-4 py-3"
          style={{
            background: "var(--color-background)",
            border: "1px solid var(--color-border)",
          }}
        >
          <FaUtensils
            style={{
              color: "var(--color-text-muted)",
            }}
          />

          <select
            value={selectedMeal}
            onChange={(e) =>
              setSelectedMeal(e.target.value)
            }
            className="w-full bg-transparent outline-none"
            style={{
              color: "var(--color-text-primary)",
            }}
          >
            {mealTypes.map((meal) => (
              <option
                key={meal}
                value={meal}
              >
                {meal}
              </option>
            ))}
          </select>
        </div>

      </div>
    </section>
  );
}

export default MenuFilter;