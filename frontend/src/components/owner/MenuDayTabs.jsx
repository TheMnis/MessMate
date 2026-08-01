import { motion } from "framer-motion";

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

function MenuDayTabs({
  selectedDay,
  setSelectedDay,
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
      <div className="flex gap-3 overflow-x-auto">

        {days.map((day) => {

          const active =
            selectedDay === day;

          return (
            <motion.button
              key={day}
              whileHover={{
                y: -2,
              }}
              whileTap={{
                scale: 0.97,
              }}
              onClick={() =>
                setSelectedDay(day)
              }
              className="whitespace-nowrap rounded-2xl px-6 py-3 text-sm font-semibold transition-all"
              style={{
                background: active
                  ? "var(--color-primary)"
                  : "var(--color-background)",
                color: active
                  ? "var(--color-text-inverse)"
                  : "var(--color-text-primary)",
                border: active
                  ? "none"
                  : "1px solid var(--color-border)",
              }}
            >
              {day}
            </motion.button>
          );

        })}

      </div>
    </section>
  );
}

export default MenuDayTabs;