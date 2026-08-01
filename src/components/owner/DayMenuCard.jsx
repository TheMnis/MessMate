import MealEditor from "./MealEditor";

const DayMenuCard = ({ menu }) => {
  return (
    <div className="bg-surface border border-border-strong radius-xl elevation-sm p-6">
      {/* Day Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-secondary-hover">
          {menu.day}
        </h2>
      </div>

      {/* Meal Editors */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <MealEditor title="🍳 Breakfast" items={menu.breakfast} />

        <MealEditor title="🍛 Lunch" items={menu.lunch} />

        <MealEditor title="☕ Snacks" items={menu.snacks} />

        <MealEditor title="🍽 Dinner" items={menu.dinner} />
      </div>

      {/* Save Button */}
      <div className="mt-6 flex justify-end">
        <button className="bg-secondary hover:bg-secondary-hover text-text-inverse font-medium px-6 py-2 radius-lg transition">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default DayMenuCard;