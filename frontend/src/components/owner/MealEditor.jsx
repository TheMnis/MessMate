import { Pencil, Plus, Trash2 } from "lucide-react";

const MealEditor = ({ title, items = [] }) => {
  return (
    <div className="[background:var(--color-surface-muted)] border radius-xl p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold [color:var(--color-text-primary)]">{title}</h3>

        <button className="flex items-center gap-2 [background:var(--color-secondary)] [color:var(--color-text-inverse)] px-3 py-2 radius-lg hover:[background:var(--color-secondary-hover)] transition">
          <Plus size={18} />
          Add Item
        </button>
      </div>

      <div className="space-y-3">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between [background:var(--color-surface)] border radius-lg px-4 py-3"
          >
            <span className="[color:var(--color-text-secondary)]">{item}</span>

            <div className="flex items-center gap-2">
              <button className="p-2 radius-lg [background:var(--color-warning-subtle)] [color:var(--color-warning-hover)] hover:[background:var(--color-warning-subtle)] transition">
                <Pencil size={18} />
              </button>

              <button className="p-2 radius-lg [background:var(--color-danger-subtle)] [color:var(--color-danger)] hover:[background:var(--color-danger-subtle)] transition">
                <Trash2 size={18} />
              </button>
            </div>
          </div>
        ))}

        {items.length === 0 && (
          <div className="text-center [color:var(--color-text-muted)] py-4">
            No meal items available.
          </div>
        )}
      </div>
    </div>
  );
};

export default MealEditor;

