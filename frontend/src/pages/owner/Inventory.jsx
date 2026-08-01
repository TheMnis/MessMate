import { useState } from "react";

import InventoryHeader from "../../components/owner/InventoryHeader";
import InventoryStats from "../../components/owner/InventoryStats";
import InventoryTable from "../../components/owner/InventoryTable";
import InventoryModal from "../../components/owner/InventoryModal";
import CategoryFilter from "../../components/owner/CategoryFilter";
import SearchBar from "../../components/owner/SearchBar";

import {
  getInventory,
} from "../../services/owner/inventory.service";

function Inventory() {

  const [items] = useState(getInventory());

  const [search, setSearch] = useState("");

  const [category, setCategory] = useState("All");

  const [modalOpen, setModalOpen] = useState(false);

  const filteredItems = items.filter((item) => {

    const matchSearch =
      item.name.toLowerCase().includes(search.toLowerCase());

    const matchCategory =
      category === "All" ||
      item.category === category;

    return matchSearch && matchCategory;

  });

  return (
    <div className="space-y-8">

      <InventoryHeader
        onAddItem={() => setModalOpen(true)}
      />

      <InventoryStats
        items={items}
      />

      <div className="flex flex-col md:flex-row justify-between gap-4">

        <SearchBar
          value={search}
          onChange={setSearch}
        />

        <CategoryFilter
          value={category}
          onChange={setCategory}
        />

      </div>

      <InventoryTable
        items={filteredItems}
        onEdit={(item) => console.log(item)}
        onDelete={(id) => console.log(id)}
      />

      <InventoryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />

    </div>
  );
}

export default Inventory;
