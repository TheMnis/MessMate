import { useState } from "react";

function InventoryModal({
  isOpen,
  onClose,
}) {

  const [formData, setFormData] = useState({
    name: "",
    category: "Grains",
    quantity: "",
    unit: "KG",
    minimumStock: "",
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="fixed inset-0 bg-overlay flex items-center justify-center z-50">

      <div className="bg-surface radius-2xl elevation-xl p-6 w-full max-w-lg">

        <h2 className="text-2xl font-bold mb-6">
          Add Inventory Item
        </h2>

        <div className="space-y-4">

          <input
            name="name"
            placeholder="Item Name"
            onChange={handleChange}
            className="w-full border radius-xl p-3"
          />

          <input
            name="quantity"
            placeholder="Quantity"
            onChange={handleChange}
            className="w-full border radius-xl p-3"
          />

          <input
            name="minimumStock"
            placeholder="Minimum Stock"
            onChange={handleChange}
            className="w-full border radius-xl p-3"
          />

          <div className="flex justify-end gap-3 pt-3">

            <button
              onClick={onClose}
              className="px-5 py-2 border radius-xl"
            >
              Cancel
            </button>

            <button
              className="px-5 py-2 bg-primary text-text-inverse radius-xl"
            >
              Save
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default InventoryModal;