import {
  FaEdit,
  FaTrash,
} from "react-icons/fa";

function InventoryTable({
  items,
  onEdit,
  onDelete,
}) {
  return (
    <div className="[background:var(--color-surface)] radius-2xl elevation-md overflow-hidden">

      <table className="w-full">

        <thead className="[background:var(--color-primary)] [color:var(--color-text-inverse)]">

          <tr>

            <th className="p-4 text-left">
              Item
            </th>

            <th className="p-4 text-left">
              Category
            </th>

            <th className="p-4 text-left">
              Stock
            </th>

            <th className="p-4 text-left">
              Minimum
            </th>

            <th className="p-4 text-left">
              Status
            </th>

            <th className="p-4 text-center">
              Actions
            </th>

          </tr>

        </thead>

        <tbody>

          {items.map((item) => (

            <tr
              key={item.id}
              className="border-b hover:[background:var(--color-surface-muted)]"
            >

              <td className="p-4 font-semibold">
                {item.name}
              </td>

              <td className="p-4">
                {item.category}
              </td>

              <td className="p-4">
                {item.quantity} {item.unit}
              </td>

              <td className="p-4">
                {item.minimumStock} {item.unit}
              </td>

              <td className="p-4">

                <span
                  className={`px-3 py-1 radius-full text-sm ${
                    item.quantity <= item.minimumStock
                      ? "[background:var(--color-danger-subtle)] [color:var(--color-danger-hover)]"
                      : "[background:var(--color-success-subtle)] [color:var(--color-success-hover)]"
                  }`}
                >
                  {item.quantity <= item.minimumStock
                    ? "Low Stock"
                    : "In Stock"}
                </span>

              </td>

              <td className="p-4">

                <div className="flex justify-center gap-3">

                  <button
                    onClick={() => onEdit(item)}
                    className="[background:var(--color-secondary)] [color:var(--color-text-inverse)] p-3 radius-lg"
                  >
                    <FaEdit />
                  </button>

                  <button
                    onClick={() => onDelete(item.id)}
                    className="[background:var(--color-danger)] [color:var(--color-text-inverse)] p-3 radius-lg"
                  >
                    <FaTrash />
                  </button>

                </div>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default InventoryTable;