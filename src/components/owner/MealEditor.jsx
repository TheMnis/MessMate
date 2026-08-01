import { Pencil, Plus, Trash2 } from "lucide-react";

const MealEditor = ({ title, items = [] }) => {
  return (
    <div className="bg-surface-muted border radius-xl p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-text-primary">{title}</h3>

        <button className="flex items-center gap-2 bg-secondary text-text-inverse px-3 py-2 radius-lg hover:bg-secondary-hover transition">
          <Plus size={18} />
          Add Item
        </button>
      </div>

      <div className="space-y-3">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between bg-surface border radius-lg px-4 py-3"
          >
            <span className="text-text-secondary">{item}</span>

            <div className="flex items-center gap-2">
              <button className="p-2 radius-lg bg-warning-subtle text-warning-hover hover:bg-warning-subtle transition">
                <Pencil size={18} />
              </button>

              <button className="p-2 radius-lg bg-danger-subtle text-danger hover:bg-danger-subtle transition">
                <Trash2 size={18} />
              </button>
            </div>
          </div>
        ))}

        {items.length === 0 && (
          <div className="text-center text-text-muted py-4">
            No meal items available.
          </div>
        )}
      </div>
    </div>
  );
};

export default MealEditor;
