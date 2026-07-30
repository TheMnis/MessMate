import { useMemo, useState } from "react";

import MenuHeader from "../../components/menu/MenuHeader";
import TodaysSpecial from "../../components/menu/TodaysSpecial";
import MenuSummaryCard from "../../components/menu/MenuSummaryCard";
import MenuSearch from "../../components/menu/MenuSearch";
import MealTabs from "../../components/menu/MealTabs";
import MealCard from "../../components/menu/MealCard";
import MenuViewToggle from "../../components/menu/MenuViewToggle";

import { getAllMeals } from "../../services/student/menu.service";

function StudentMenu() {
  const [view, setView] = useState("today");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMeal, setSelectedMeal] = useState("All");

  const meals = getAllMeals();

  const filteredMeals = useMemo(() => {
    return meals.filter((meal) => {
      const matchesMeal =
        selectedMeal === "All" ||
        meal.meal === selectedMeal;

      const query = searchTerm.toLowerCase();

      const matchesSearch =
        meal.meal.toLowerCase().includes(query) ||
        meal.items.some((item) =>
          item.toLowerCase().includes(query)
        );

      return matchesMeal && matchesSearch;
    });
  }, [meals, selectedMeal, searchTerm]);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <MenuHeader />

      <TodaysSpecial />

      <MenuViewToggle
        view={view}
        onChange={setView}
      />

      {view === "today" ? (
        <>
          <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {meals.map((meal) => (
              <MenuSummaryCard
                key={meal.id}
                icon={meal.icon}
                title={meal.meal}
                status={meal.available ? "Available" : "Closed"}
              />
            ))}
          </div>

          <MenuSearch
            searchTerm={searchTerm}
            onSearch={setSearchTerm}
          />

          <MealTabs
            selectedMeal={selectedMeal}
            onSelectMeal={setSelectedMeal}
          />

          <div className="grid gap-6 md:grid-cols-2">
            {filteredMeals.map((meal) => (
              <MealCard
                key={meal.id}
                meal={meal}
              />
            ))}
          </div>
        </>
      ) : (
        <div className="rounded-3xl bg-white p-10 text-center shadow-lg">
          <h2 className="text-3xl font-bold">
            📅 Weekly Menu
          </h2>

          <p className="mt-4 text-gray-500">
            Weekly Menu Component will be added in the next step.
          </p>
        </div>
      )}
    </div>
  );
}

export default StudentMenu;