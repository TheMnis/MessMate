const meals = [
  {
    id: 1,
    label: "All",
    icon: "🍽️",
  },
  {
    id: 2,
    label: "Breakfast",
    icon: "🍳",
  },
  {
    id: 3,
    label: "Lunch",
    icon: "🍛",
  },
  {
    id: 4,
    label: "Snacks",
    icon: "☕",
  },
  {
    id: 5,
    label: "Dinner",
    icon: "🌙",
  },
];

function MealTabs({ selectedMeal, onSelectMeal }) {
  return (
    <div className="mb-8 flex flex-wrap gap-3">
      {meals.map((meal) => (
        <button
          key={meal.id}
          onClick={() => onSelectMeal(meal.label)}
          className={`radius-2xl px-5 py-3 font-medium transition-all duration-300 ${
            selectedMeal === meal.label
              ? "bg-primary text-text-inverse elevation-lg"
              : "bg-surface text-text-secondary elevation-base hover:bg-primary-subtle"
          }`}
        >
          <span className="mr-2">{meal.icon}</span>
          {meal.label}
        </button>
      ))}
    </div>
  );
}

export default MealTabs;