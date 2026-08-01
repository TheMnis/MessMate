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

function StudentMenu() {
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
        selectedMeal === "All" ||
        meal.meal === selectedMeal;

      return matchesSearch && matchesTab;
    });
  }, [meals, search, selectedMeal]);

  return (
    <div
      className="relative space-y-8 overflow-hidden"
      style={{
        paddingBottom: "30px",
      }}
    >
      {/* Background Blob */}

      <div
        style={{
          position: "absolute",
          top: -150,
          right: -120,
          width: 350,
          height: 350,
          borderRadius: "999px",
          background:
            "linear-gradient(135deg,var(--color-primary),var(--color-secondary))",
          opacity: .05,
          filter: "blur(30px)",
        }}
      />

      <div
        style={{
          position: "absolute",
          bottom: -180,
          left: -120,
          width: 320,
          height: 320,
          borderRadius: "999px",
          background:
            "linear-gradient(135deg,var(--color-success),var(--color-primary))",
          opacity: .05,
          filter: "blur(30px)",
        }}
      />

      <div className="relative">

        <MenuHeader />

        <TodaysSpecial />

        <MenuViewToggle
          view={view}
          onChange={setView}
        />

        {view === "today" ? (
          <>
            {/* Summary */}

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">

              <MenuSummaryCard
                icon="🍳"
                title="Breakfast"
                status="Available"
              />

              <MenuSummaryCard
                icon="🍛"
                title="Lunch"
                status="Available"
              />

              <MenuSummaryCard
                icon="☕"
                title="Snacks"
                status="Closed"
              />

              <MenuSummaryCard
                icon="🌙"
                title="Dinner"
                status="Available"
              />

            </div>

            {/* Search */}

            <MenuSearch
              search={search}
              setSearch={setSearch}
            />

            {/* Tabs */}

            <MealTabs
              selectedMeal={selectedMeal}
              onSelectMeal={setSelectedMeal}
            />

            {/* Cards */}

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 gap-7">

              {filteredMeals.map((meal) => (
                <MealCard
                  key={meal.id}
                  meal={meal}
                />
              ))}

            </div>
          </>
        ) : (
          <WeeklyMenu />
        )}

      </div>
    </div>
  );
}

export default StudentMenu;
