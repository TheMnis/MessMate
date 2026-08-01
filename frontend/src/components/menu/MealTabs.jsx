import { motion } from "framer-motion";

const meals = [
  {
    id: 1,
    label: "All",
    icon: "🍽️",
    color: "var(--color-primary)",
  },
  {
    id: 2,
    label: "Breakfast",
    icon: "🍳",
    color: "#F59E0B",
  },
  {
    id: 3,
    label: "Lunch",
    icon: "🍛",
    color: "#3B82F6",
  },
  {
    id: 4,
    label: "Snacks",
    icon: "☕",
    color: "#A855F7",
  },
  {
    id: 5,
    label: "Dinner",
    icon: "🌙",
    color: "#6366F1",
  },
];

function MealTabs({ selectedMeal, onSelectMeal }) {
  return (
    <div className="mb-10 flex flex-wrap gap-4">

      {meals.map((meal) => {

        const active = selectedMeal === meal.label;

        return (

          <motion.button
            key={meal.id}
            whileHover={{
              y: -3,
              scale: 1.03,
            }}
            whileTap={{
              scale: 0.96,
            }}
            transition={{
              duration: 0.2,
            }}
            onClick={() => onSelectMeal(meal.label)}
            className="group flex items-center gap-3 rounded-2xl px-5 py-4 transition-all duration-300"
            style={{
              background: active
                ? "linear-gradient(135deg,var(--color-primary),var(--color-secondary))"
                : "var(--color-surface)",

              color: active
                ? "#fff"
                : "var(--color-text-primary)",

              border: active
                ? "none"
                : "1px solid var(--color-border)",

              boxShadow: active
                ? "0 14px 28px rgba(59,130,246,.28)"
                : "0 10px 24px rgba(15,23,42,.06)",
            }}
          >

            {/* Icon */}

            <div
              style={{
                width: 42,
                height: 42,
                borderRadius: 14,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: active
                  ? "rgba(255,255,255,.18)"
                  : meal.color,

                color: "#fff",

                fontSize: 20,
              }}
            >
              {meal.icon}
            </div>

            <div className="text-left">

              <div
                style={{
                  fontWeight: 700,
                  fontSize: 15,
                }}
              >
                {meal.label}
              </div>

              <div
                style={{
                  fontSize: 12,
                  opacity: active ? 0.85 : 0.55,
                }}
              >
                Category
              </div>

            </div>

          </motion.button>

        );

      })}

    </div>
  );
}

export default MealTabs;
