import { useMemo, useState } from "react";

import MenuHeader from "../../components/menu/MenuHeader";
import TodaysSpecial from "../../components/menu/TodaysSpecial";
import MenuViewToggle from "../../components/menu/MenuViewToggle";
import MenuSummaryCard from "../../components/menu/MenuSummaryCard";
import MenuSearch from "../../components/menu/MenuSearch";
import MealTabs from "../../components/menu/MealTabs";
import MealCard from "../../components/menu/MealCard";
import WeeklyMenu from "../../components/menu/WeeklyMenu";

import { getAllMeals } from "../../services/student/menu.service";

const StudentMenu = () => {
  const [view, setView] = useState("today");
  const [search, setSearch] = useState("");
  const [selectedMeal, setSelectedMeal] = useState("All");

  const meals = getAllMeals();

  const filteredMeals = useMemo(() => {
    return meals.filter((meal) => {
      const matchesSearch =
        meal.meal.toLowerCase().includes(search.toLowerCase()) ||
        meal.items.some((item) =>
          item.toLowerCase().includes(search.toLowerCase())
        );

      const matchesTab =
        selectedMeal === "All" || meal.meal === selectedMeal;

      return matchesSearch && matchesTab;
    });
  }, [meals, search, selectedMeal]);

  return (
    <div className="space-y-6">
      <MenuHeader />

      <TodaysSpecial />

      <MenuViewToggle view={view} setView={setView} />

      {view === "today" ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <MenuSummaryCard />
          </div>

          <MenuSearch
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <MealTabs
            selectedMeal={selectedMeal}
            setSelectedMeal={setSelectedMeal}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {filteredMeals.map((meal) => (
              <MealCard key={meal.id} meal={meal} />
            ))}
          </div>
        </>
      ) : (
        <WeeklyMenu />
      )}
    </div>
  );
};

export default StudentMenu;