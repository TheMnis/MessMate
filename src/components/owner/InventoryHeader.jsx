import { FaPlus } from "react-icons/fa";

function InventoryHeader({ onAddItem }) {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-4">

      <div>

        <h1 className="text-4xl font-bold text-gray-800">
          Inventory Management
        </h1>

        <p className="text-gray-500 mt-2">
          Manage all inventory items and stock levels.
        </p>

      </div>

      <button
        onClick={onAddItem}
        className="flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl shadow-lg transition"
      >
        <FaPlus />

        Add Item

      </button>

    </div>
  );
}

export default InventoryHeader;