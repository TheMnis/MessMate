import { useState } from "react";

import {
  getWeeklyMenu,
  addMeal,
  updateMeal,
  deleteMeal,
} from "../../services/owner/menu.service";

import SearchBar from "../../components/owner/SearchBar";
import DayFilter from "../../components/owner/DayFilter";
import MenuTable from "../../components/owner/MenuTable";
import MealModal from "../../components/owner/MealModal";
import DeleteDialog from "../../components/owner/DeleteDialog";

import { FaPlus } from "react-icons/fa";

function OwnerMenu() {
  const [menu, setMenu] = useState(getWeeklyMenu());

  const [search, setSearch] = useState("");

  const [dayFilter, setDayFilter] = useState("All");

  const [modalOpen, setModalOpen] = useState(false);

  const [editingMeal, setEditingMeal] = useState(null);

  const [deleteOpen, setDeleteOpen] = useState(false);

  const [selectedMeal, setSelectedMeal] = useState(null);

  const filteredMenu = menu.filter((meal) => {
    const matchesSearch =
      meal.day.toLowerCase().includes(search.toLowerCase()) ||
      meal.breakfast.toLowerCase().includes(search.toLowerCase()) ||
      meal.lunch.toLowerCase().includes(search.toLowerCase()) ||
      meal.dinner.toLowerCase().includes(search.toLowerCase());

    const matchesDay =
      dayFilter === "All" || meal.day === dayFilter;

    return matchesSearch && matchesDay;
  });

  const handleSave = (meal) => {
    if (editingMeal) {
      const updated = updateMeal(editingMeal.id, meal);
      setMenu([...updated]);
    } else {
      const updated = addMeal(meal);
      setMenu([...updated]);
    }

    setEditingMeal(null);
  };

  const handleEdit = (meal) => {
    setEditingMeal(meal);

    setModalOpen(true);
  };

  const handleDelete = (id) => {
    const meal = menu.find((m) => m.id === id);

    setSelectedMeal(meal);

    setDeleteOpen(true);
  };

  const confirmDelete = () => {
    const updated = deleteMeal(selectedMeal.id);

    setMenu([...updated]);

    setDeleteOpen(false);

    setSelectedMeal(null);
  };

  return (
    <div className="space-y-8">

      <div className="flex flex-col lg:flex-row justify-between gap-4">

        <div>

          <h1 className="text-4xl font-bold">
            Weekly Menu
          </h1>

          <p className="[color:var(--color-text-muted)] mt-2">
            Manage your complete weekly menu.
          </p>

        </div>

        <button
          onClick={() => {
            setEditingMeal(null);

            setModalOpen(true);
          }}
          className="[background:var(--color-primary)] hover:[background:var(--color-primary-hover)] [color:var(--color-text-inverse)] px-6 py-3 radius-xl flex items-center gap-3"
        >
          <FaPlus />

          Add Meal

        </button>

      </div>

      <div className="flex flex-col md:flex-row gap-4 justify-between">

        <SearchBar
          value={search}
          onChange={setSearch}
        />

        <DayFilter
          value={dayFilter}
          onChange={setDayFilter}
        />

      </div>

      <MenuTable
        menu={filteredMenu}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      <MealModal
        isOpen={modalOpen}
        onClose={() => {
          setModalOpen(false);

          setEditingMeal(null);
        }}
        onSave={handleSave}
        initialData={editingMeal}
      />

      <DeleteDialog
        isOpen={deleteOpen}
        meal={selectedMeal}
        onClose={() => setDeleteOpen(false)}
        onConfirm={confirmDelete}
      />

    </div>
  );
}

export default OwnerMenu;