import { useMemo, useState } from "react";
import { FaPlus } from "react-icons/fa";

import MealHeader from "../../components/owner/MealHeader";
import MealStats from "../../components/owner/MealStats";
import MealFilter from "../../components/owner/MealFilter";
import MealTable from "../../components/owner/MealTable";
import MealCard from "../../components/owner/MealCard";
import MealFormModal from "../../components/owner/MealFormModal";
import MealDetailsDrawer from "../../components/owner/MealDetailsDrawer";
import MealDeleteDialog from "../../components/owner/MealDeleteDialog";

import mealData from "../../data/mealData";

function Meals() {
  const [meals] = useState(mealData);

  const [search, setSearch] =
    useState("");

  const [category, setCategory] =
    useState("All");

  const [view, setView] =
    useState("table");

  const [selectedMeal, setSelectedMeal] =
    useState(null);

  const [openForm, setOpenForm] =
    useState(false);

  const [openDrawer, setOpenDrawer] =
    useState(false);

  const [openDelete, setOpenDelete] =
    useState(false);

  const filteredMeals = useMemo(() => {
    return meals.filter((meal) => {
      const categoryMatch =
        category === "All"
          ? true
          : meal.category === category;

      const searchMatch =
        meal.name
          .toLowerCase()
          .includes(search.toLowerCase());

      return (
        categoryMatch &&
        searchMatch
      );
    });
  }, [
    meals,
    search,
    category,
  ]);

  return (
    <div className="space-y-8">

      <MealHeader />

      <MealStats />

      <MealFilter
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
        view={view}
        setView={setView}
      />

      <div className="flex justify-end">

        <button
          onClick={() =>
            setOpenForm(true)
          }
          className="flex items-center gap-3 rounded-2xl px-6 py-3 font-semibold"
          style={{
            background:
              "var(--color-primary)",
            color:
              "var(--color-text-inverse)",
          }}
        >
          <FaPlus />

          Add Meal

        </button>

      </div>

      {view === "table" ? (
        <MealTable
          meals={filteredMeals}
          onView={(meal) => {
            setSelectedMeal(meal);
            setOpenDrawer(true);
          }}
          onEdit={(meal) => {
            setSelectedMeal(meal);
            setOpenForm(true);
          }}
          onDelete={(meal) => {
            setSelectedMeal(meal);
            setOpenDelete(true);
          }}
        />
      ) : (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

          {filteredMeals.map((meal) => (
            <MealCard
              key={meal.id}
              meal={meal}
              onView={(item) => {
                setSelectedMeal(item);
                setOpenDrawer(true);
              }}
              onEdit={(item) => {
                setSelectedMeal(item);
                setOpenForm(true);
              }}
              onDelete={(item) => {
                setSelectedMeal(item);
                setOpenDelete(true);
              }}
            />
          ))}

        </div>
      )}

      <MealFormModal
        open={openForm}
        onClose={() =>
          setOpenForm(false)
        }
      />

      <MealDetailsDrawer
        open={openDrawer}
        meal={selectedMeal}
        onClose={() =>
          setOpenDrawer(false)
        }
      />

      <MealDeleteDialog
        open={openDelete}
        meal={selectedMeal}
        onClose={() =>
          setOpenDelete(false)
        }
        onConfirm={() =>
          setOpenDelete(false)
        }
      />

    </div>
  );
}

export default Meals;