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
    <div className="[background:var(--color-surface)] radius-2xl elevation-md overflow-hidden">

      <table className="w-full">

        <thead className="[background:var(--color-primary)] [color:var(--color-text-inverse)]">

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
                className="text-center py-10 [color:var(--color-text-muted)]"
              >
                No Meals Found
              </td>

            </tr>

          ) : (

            menu.map((meal) => (

              <tr
                key={meal.id}
                className="border-b hover:[background:var(--color-surface-muted)] transition"
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
                      className="[background:var(--color-secondary)] hover:[background:var(--color-secondary)] [color:var(--color-text-inverse)] p-3 radius-lg transition"
                    >
                      <FaEdit />
                    </button>

                    <button
                      onClick={() => onDelete(meal.id)}
                      className="[background:var(--color-danger)] hover:[background:var(--color-danger)] [color:var(--color-text-inverse)] p-3 radius-lg transition"
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
