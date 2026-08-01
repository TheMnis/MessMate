import {
  FaEdit,
  FaTrash,
  FaEye,
} from "react-icons/fa";

function StudentTable({
  students,
  onEdit,
  onDelete,
}) {
  return (
    <div className="[background:var(--color-surface)] radius-2xl elevation-md overflow-hidden">

      <table className="w-full">

        <thead className="[background:var(--color-primary)] [color:var(--color-text-inverse)]">

          <tr>

            <th className="p-4 text-left">
              Name
            </th>

            <th className="p-4 text-left">
              Email
            </th>

            <th className="p-4 text-left">
              Phone
            </th>

            <th className="p-4 text-left">
              Plan
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

          {students.length === 0 ? (

            <tr>

              <td
                colSpan="6"
                className="text-center py-10 [color:var(--color-text-muted)]"
              >
                No Students Found
              </td>

            </tr>

          ) : (

            students.map((student) => (

              <tr
                key={student.id}
                className="border-b hover:[background:var(--color-surface-muted)]"
              >

                <td className="p-4 font-semibold">
                  {student.name}
                </td>

                <td className="p-4">
                  {student.email}
                </td>

                <td className="p-4">
                  {student.phone}
                </td>

                <td className="p-4">
                  {student.plan}
                </td>

                <td className="p-4">

                  <span
                    className={`px-3 py-1 radius-full text-sm font-semibold ${
                      student.status === "Active"
                        ? "[background:var(--color-success-subtle)] [color:var(--color-success-hover)]"
                        : "[background:var(--color-danger-subtle)] [color:var(--color-danger-hover)]"
                    }`}
                  >
                    {student.status}
                  </span>

                </td>

                <td className="p-4">

                  <div className="flex justify-center gap-3">

                    <button
                      className="[background:var(--color-info)] hover:[background:var(--color-info-hover)] [color:var(--color-text-inverse)] p-3 radius-lg transition"
                    >
                      <FaEye />
                    </button>

                    <button
                      onClick={() => onEdit(student)}
                      className="[background:var(--color-secondary)] hover:[background:var(--color-secondary)] [color:var(--color-text-inverse)] p-3 radius-lg transition"
                    >
                      <FaEdit />
                    </button>

                    <button
                      onClick={() => onDelete(student.id)}
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

export default StudentTable;