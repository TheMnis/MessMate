import { motion } from "framer-motion";
import weeklyMenuData from "../../data/weeklyMenuData";

const meals = [
  {
    key: "breakfast",
    title: "Breakfast",
    icon: "🍳",
    color: "var(--color-warning)",
    bg: "var(--color-warning-subtle)",
  },
  {
    key: "lunch",
    title: "Lunch",
    icon: "🍛",
    color: "var(--color-primary)",
    bg: "var(--color-primary-subtle)",
  },
  {
    key: "snacks",
    title: "Snacks",
    icon: "☕",
    color: "#8B5CF6",
    bg: "#F3E8FF",
  },
  {
    key: "dinner",
    title: "Dinner",
    icon: "🌙",
    color: "var(--color-success)",
    bg: "var(--color-success-subtle)",
  },
];

function WeeklyMenu() {
  return (
    <div className="space-y-8">

      {weeklyMenuData.map((day, index) => (

        <motion.div
          key={day.day}
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: index * 0.05,
          }}
          className="rounded-3xl overflow-hidden"
          style={{
            background: "var(--color-surface)",
            border: "1px solid var(--color-border)",
            boxShadow:
              "0 15px 40px rgba(15,23,42,.07)",
          }}
        >

          {/* Header */}

          <div
            className="px-8 py-6 flex items-center justify-between"
            style={{
              borderBottom:
                "1px solid var(--color-border)",
            }}
          >

            <div>

              <h2
                className="text-3xl font-bold"
                style={{
                  color:
                    "var(--color-text-primary)",
                }}
              >
                {day.day}
              </h2>

              <p
                style={{
                  color:
                    "var(--color-text-muted)",
                }}
              >
                Complete meal schedule
              </p>

            </div>

            <div
              className="px-5 py-3 rounded-full"
              style={{
                background:
                  "var(--color-primary-subtle)",
                color:
                  "var(--color-primary)",
                fontWeight: 600,
              }}
            >
              4 Meals
            </div>

          </div>

          {/* Meals */}

          <div className="grid md:grid-cols-2 gap-6 p-8">

            {meals.map((meal) => (

              <motion.div
                whileHover={{
                  y: -4,
                }}
                key={meal.key}
                className="rounded-3xl p-6"
                style={{
                  background: meal.bg,
                }}
              >

                <div className="flex items-center gap-4 mb-5">

                  <div
                    style={{
                      width: 52,
                      height: 52,
                      borderRadius: 16,
                      background: meal.color,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#fff",
                      fontSize: 24,
                    }}
                  >
                    {meal.icon}
                  </div>

                  <div>

                    <h3
                      className="font-bold text-xl"
                      style={{
                        color: meal.color,
                      }}
                    >
                      {meal.title}
                    </h3>

                    <p
                      style={{
                        color:
                          "var(--color-text-muted)",
                        fontSize: 14,
                      }}
                    >
                      Meal Items
                    </p>

                  </div>

                </div>

                <div className="space-y-3">

                  {day[meal.key].map((item) => (

                    <div
                      key={item}
                      className="flex items-center gap-3"
                    >

                      <div
                        style={{
                          width: 22,
                          height: 22,
                          borderRadius: "999px",
                          background: "#fff",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: 12,
                          fontWeight: 700,
                        }}
                      >
                        ✓
                      </div>

                      <span
                        style={{
                          color:
                            "var(--color-text-secondary)",
                        }}
                      >
                        {item}
                      </span>

                    </div>

                  ))}

                </div>

              </motion.div>

            ))}

          </div>

        </motion.div>

      ))}

    </div>
  );
}

export default WeeklyMenu;
