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
          className={`rounded-2xl px-5 py-3 font-medium transition-all duration-300 ${
            selectedMeal === meal.label
              ? "bg-green-600 text-white shadow-lg"
              : "bg-white text-gray-700 shadow hover:bg-green-50"
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