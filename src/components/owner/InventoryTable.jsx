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
    <div className="bg-surface radius-2xl elevation-md overflow-hidden">

      <table className="w-full">

        <thead className="bg-primary text-text-inverse">

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
              className="border-b hover:bg-surface-muted"
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
                      ? "bg-danger-subtle text-danger-hover"
                      : "bg-success-subtle text-success-hover"
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
                    className="bg-secondary text-text-inverse p-3 radius-lg"
                  >
                    <FaEdit />
                  </button>

                  <button
                    onClick={() => onDelete(item.id)}
                    className="bg-danger text-text-inverse p-3 radius-lg"
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