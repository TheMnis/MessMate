import { FaPlus } from "react-icons/fa";

function InventoryHeader({ onAddItem }) {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-4">

      <div>

        <h1 className="text-4xl font-bold text-text-primary">
          Inventory Management
        </h1>

        <p className="text-text-muted mt-2">
          Manage all inventory items and stock levels.
        </p>

      </div>

      <button
        onClick={onAddItem}
        className="flex items-center gap-3 bg-primary hover:bg-primary-hover text-text-inverse px-6 py-3 radius-xl elevation-lg transition"
      >
        <FaPlus />

        Add Item

      </button>

    </div>
  );
}

export default InventoryHeader;