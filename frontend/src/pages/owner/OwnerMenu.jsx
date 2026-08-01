import { useMemo, useState } from "react";
import { FaPlus } from "react-icons/fa";

import MenuHeader from "../../components/owner/MenuHeader";
import MenuStats from "../../components/owner/MenuStats";
import MenuFilter from "../../components/owner/MenuFilter";
import MenuDayTabs from "../../components/owner/MenuDayTabs";
import MenuSearch from "../../components/owner/MenuSearch";
import MenuTable from "../../components/owner/MenuTable";
import MenuCard from "../../components/owner/MenuCard";
import MenuFormModal from "../../components/owner/MenuFormModal";
import MenuDetailsDrawer from "../../components/owner/MenuDetailsDrawer";
import MenuDeleteDialog from "../../components/owner/MenuDeleteDialog";

import ownerMenuData from "../../data/ownerMenuData";

function OwnerMenu() {
  const [menu] = useState(ownerMenuData);

  const [search, setSearch] = useState("");

  const [selectedDay, setSelectedDay] =
    useState("Monday");

  const [selectedMeal, setSelectedMeal] =
    useState("All");

  const [view, setView] =
    useState("table");

  const [selectedMenu, setSelectedMenu] =
    useState(null);

  const [openForm, setOpenForm] =
    useState(false);

  const [openDrawer, setOpenDrawer] =
    useState(false);

  const [openDelete, setOpenDelete] =
    useState(false);

  const filteredMenu = useMemo(() => {
    return menu.filter((item) => {
      const dayMatch =
        selectedDay === "All"
          ? true
          : item.day === selectedDay;

      const mealMatch =
        selectedMeal === "All"
          ? true
          : item.type === selectedMeal;

      const searchMatch =
        item.meal
          .toLowerCase()
          .includes(search.toLowerCase());

      return (
        dayMatch &&
        mealMatch &&
        searchMatch
      );
    });
  }, [
    menu,
    search,
    selectedDay,
    selectedMeal,
  ]);

  return (
    <div className="space-y-8">

      <MenuHeader />

      <MenuStats />

      <MenuFilter
        search={search}
        setSearch={setSearch}
        selectedDay={selectedDay}
        setSelectedDay={setSelectedDay}
        selectedMeal={selectedMeal}
        setSelectedMeal={setSelectedMeal}
      />

      <MenuDayTabs
        selectedDay={selectedDay}
        setSelectedDay={setSelectedDay}
      />

      <MenuSearch
        search={search}
        setSearch={setSearch}
      />

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

        <div
          className="flex overflow-hidden rounded-2xl"
          style={{
            border:
              "1px solid var(--color-border)",
          }}
        >
          <button
            onClick={() =>
              setView("table")
            }
            className="px-5 py-3 font-semibold"
            style={{
              background:
                view === "table"
                  ? "var(--color-primary)"
                  : "var(--color-surface)",
              color:
                view === "table"
                  ? "var(--color-text-inverse)"
                  : "var(--color-text-primary)",
            }}
          >
            Table
          </button>

          <button
            onClick={() =>
              setView("grid")
            }
            className="px-5 py-3 font-semibold"
            style={{
              background:
                view === "grid"
                  ? "var(--color-primary)"
                  : "var(--color-surface)",
              color:
                view === "grid"
                  ? "var(--color-text-inverse)"
                  : "var(--color-text-primary)",
            }}
          >
            Grid
          </button>

        </div>

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

          Add Menu

        </button>

      </div>

      {view === "table" ? (
        <MenuTable
          menu={filteredMenu}
          onView={(item) => {
            setSelectedMenu(item);
            setOpenDrawer(true);
          }}
          onEdit={(item) => {
            setSelectedMenu(item);
            setOpenForm(true);
          }}
          onDelete={(item) => {
            setSelectedMenu(item);
            setOpenDelete(true);
          }}
        />
      ) : (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

          {filteredMenu.map((item) => (
            <MenuCard
              key={item.id}
              menu={item}
              onView={(menu) => {
                setSelectedMenu(menu);
                setOpenDrawer(true);
              }}
              onEdit={(menu) => {
                setSelectedMenu(menu);
                setOpenForm(true);
              }}
              onDelete={(menu) => {
                setSelectedMenu(menu);
                setOpenDelete(true);
              }}
            />
          ))}

        </div>
      )}

      <MenuFormModal
        open={openForm}
        onClose={() =>
          setOpenForm(false)
        }
      />

      <MenuDetailsDrawer
        open={openDrawer}
        menu={selectedMenu}
        onClose={() =>
          setOpenDrawer(false)
        }
      />

      <MenuDeleteDialog
        open={openDelete}
        menu={selectedMenu}
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

export default OwnerMenu;