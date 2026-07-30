import { Pencil, Plus, Trash2 } from "lucide-react";

const MealEditor = ({ title, items = [] }) => {
  return (
    <div className="bg-gray-50 border rounded-xl p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>

        <button className="flex items-center gap-2 bg-indigo-600 text-white px-3 py-2 rounded-lg hover:bg-indigo-700 transition">
          <Plus size={18} />
          Add Item
        </button>
      </div>

      <div className="space-y-3">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between bg-white border rounded-lg px-4 py-3"
          >
            <span className="text-gray-700">{item}</span>

            <div className="flex items-center gap-2">
              <button className="p-2 rounded-lg bg-yellow-100 text-yellow-600 hover:bg-yellow-200 transition">
                <Pencil size={18} />
              </button>

              <button className="p-2 rounded-lg bg-red-100 text-red-600 hover:bg-red-200 transition">
                <Trash2 size={18} />
              </button>
            </div>
          </div>
        ))}

        {items.length === 0 && (
          <div className="text-center text-gray-500 py-4">
            No meal items available.
          </div>
        )}
      </div>
    </div>
  );
};

export default MealEditor;