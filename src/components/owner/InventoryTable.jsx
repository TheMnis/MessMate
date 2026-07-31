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
    <div className="bg-white rounded-2xl shadow-md overflow-hidden">

      <table className="w-full">

        <thead className="bg-green-600 text-white">

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
              className="border-b hover:bg-gray-50"
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
                  className={`px-3 py-1 rounded-full text-sm ${
                    item.quantity <= item.minimumStock
                      ? "bg-red-100 text-red-700"
                      : "bg-green-100 text-green-700"
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
                    className="bg-blue-600 text-white p-3 rounded-lg"
                  >
                    <FaEdit />
                  </button>

                  <button
                    onClick={() => onDelete(item.id)}
                    className="bg-red-600 text-white p-3 rounded-lg"
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