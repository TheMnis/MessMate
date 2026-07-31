import {
  FaEdit,
  FaTrash,
} from "react-icons/fa";

function MenuTable({
  menu,
  onEdit,
  onDelete,
}) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden">

      <table className="w-full">

        <thead className="bg-green-600 text-white">

          <tr>

            <th className="p-4 text-left">
              Day
            </th>

            <th className="p-4 text-left">
              Breakfast
            </th>

            <th className="p-4 text-left">
              Lunch
            </th>

            <th className="p-4 text-left">
              Dinner
            </th>

            <th className="p-4 text-center">
              Actions
            </th>

          </tr>

        </thead>

        <tbody>

          {menu.length === 0 ? (

            <tr>

              <td
                colSpan="5"
                className="text-center py-10 text-gray-500"
              >
                No Meals Found
              </td>

            </tr>

          ) : (

            menu.map((meal) => (

              <tr
                key={meal.id}
                className="border-b hover:bg-gray-50 transition"
              >

                <td className="p-4 font-semibold">
                  {meal.day}
                </td>

                <td className="p-4">
                  {meal.breakfast}
                </td>

                <td className="p-4">
                  {meal.lunch}
                </td>

                <td className="p-4">
                  {meal.dinner}
                </td>

                <td className="p-4">

                  <div className="flex justify-center gap-3">

                    <button
                      onClick={() => onEdit(meal)}
                      className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-lg transition"
                    >
                      <FaEdit />
                    </button>

                    <button
                      onClick={() => onDelete(meal.id)}
                      className="bg-red-500 hover:bg-red-600 text-white p-3 rounded-lg transition"
                    >
                      <FaTrash />
                    </button>

                  </div>

                </td>

              </tr>

            ))

          )}

        </tbody>

      </table>

    </div>
  );
}

export default MenuTable;