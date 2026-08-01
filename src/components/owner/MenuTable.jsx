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
    <div className="bg-surface radius-2xl elevation-md overflow-hidden">

      <table className="w-full">

        <thead className="bg-primary text-text-inverse">

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
                className="text-center py-10 text-text-muted"
              >
                No Meals Found
              </td>

            </tr>

          ) : (

            menu.map((meal) => (

              <tr
                key={meal.id}
                className="border-b hover:bg-surface-muted transition"
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
                      className="bg-secondary hover:bg-secondary text-text-inverse p-3 radius-lg transition"
                    >
                      <FaEdit />
                    </button>

                    <button
                      onClick={() => onDelete(meal.id)}
                      className="bg-danger hover:bg-danger text-text-inverse p-3 radius-lg transition"
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