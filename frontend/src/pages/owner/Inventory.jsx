import { useMemo, useState } from "react";
import { FaPlus } from "react-icons/fa";

import InventoryHeader from "../../components/owner/InventoryHeader";
import InventoryStats from "../../components/owner/InventoryStats";
import InventoryFilter from "../../components/owner/InventoryFilter";
import InventoryTable from "../../components/owner/InventoryTable";
import InventoryCard from "../../components/owner/InventoryCard";
import InventoryFormModal from "../../components/owner/InventoryFormModal";
import InventoryDetailsDrawer from "../../components/owner/InventoryDetailsDrawer";
import InventoryDeleteDialog from "../../components/owner/InventoryDeleteDialog";

import inventoryData from "../../data/inventoryData";

function Inventory() {
  const [items] = useState(inventoryData);

  const [search, setSearch] =
    useState("");

  const [category, setCategory] =
    useState("All");

  const [view, setView] =
    useState("table");

  const [selectedItem, setSelectedItem] =
    useState(null);

  const [openForm, setOpenForm] =
    useState(false);

  const [openDrawer, setOpenDrawer] =
    useState(false);

  const [openDelete, setOpenDelete] =
    useState(false);

  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      const categoryMatch =
        category === "All"
          ? true
          : item.category === category;

      const searchMatch =
        item.name
          .toLowerCase()
          .includes(search.toLowerCase());

      return (
        categoryMatch &&
        searchMatch
      );
    });
  }, [
    items,
    search,
    category,
  ]);

  return (
    <div className="space-y-8">

      <InventoryHeader />

      <InventoryStats />

      <InventoryFilter
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

          Add Item

        </button>

      </div>

      {view === "table" ? (
        <InventoryTable
          items={filteredItems}
          onView={(item) => {
            setSelectedItem(item);
            setOpenDrawer(true);
          }}
          onEdit={(item) => {
            setSelectedItem(item);
            setOpenForm(true);
          }}
          onDelete={(item) => {
            setSelectedItem(item);
            setOpenDelete(true);
          }}
        />
      ) : (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

          {filteredItems.map((item) => (
            <InventoryCard
              key={item.id}
              item={item}
              onView={(data) => {
                setSelectedItem(data);
                setOpenDrawer(true);
              }}
              onEdit={(data) => {
                setSelectedItem(data);
                setOpenForm(true);
              }}
              onDelete={(data) => {
                setSelectedItem(data);
                setOpenDelete(true);
              }}
            />
          ))}

        </div>
      )}

      <InventoryFormModal
        open={openForm}
        onClose={() =>
          setOpenForm(false)
        }
      />

      <InventoryDetailsDrawer
        open={openDrawer}
        item={selectedItem}
        onClose={() =>
          setOpenDrawer(false)
        }
      />

      <InventoryDeleteDialog
        open={openDelete}
        item={selectedItem}
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

export default Inventory;