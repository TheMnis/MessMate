import {
  FaEye,
  FaEdit,
  FaTrash,
  FaStore,
  FaUsers,
  FaRupeeSign,
} from "react-icons/fa";

function MessTable({
  messes,
  onView,
  onEdit,
  onDelete,
}) {
  const getStatusStyle = (status) => {
    switch (status) {
      case "Active":
        return {
          bg: "var(--color-success-subtle)",
          color: "var(--color-success)",
        };

      case "Inactive":
        return {
          bg: "var(--color-danger-subtle)",
          color: "var(--color-danger)",
        };

      case "Pending":
        return {
          bg: "var(--color-warning-subtle)",
          color: "var(--color-warning)",
        };

      case "Blocked":
        return {
          bg: "var(--color-secondary-subtle)",
          color: "var(--color-secondary)",
        };

      default:
        return {
          bg: "var(--color-primary-subtle)",
          color: "var(--color-primary)",
        };
    }
  };

  return (
    <section
      className="overflow-hidden rounded-3xl"
      style={{
        background: "var(--color-surface)",
        border: "1px solid var(--color-border)",
        boxShadow: "var(--shadow-lg)",
      }}
    >
      <div className="overflow-x-auto">

        <table className="min-w-full">

          <thead
            style={{
              background: "var(--color-background)",
            }}
          >
            <tr>

              <th className="px-6 py-5 text-left">
                Mess
              </th>

              <th className="px-6 py-5 text-left">
                Owner
              </th>

              <th className="px-6 py-5 text-center">
                Students
              </th>

              <th className="px-6 py-5 text-center">
                Revenue
              </th>

              <th className="px-6 py-5 text-center">
                Status
              </th>

              <th className="px-6 py-5 text-center">
                Actions
              </th>

            </tr>
          </thead>

          <tbody>

            {messes.map((mess) => {
              const badge =
                getStatusStyle(mess.status);

              return (
                <tr
                  key={mess.id}
                  style={{
                    borderTop:
                      "1px solid var(--color-border)",
                  }}
                >

                  <td className="px-6 py-5">

                    <div className="flex items-center gap-4">

                      <div
                        className="flex h-12 w-12 items-center justify-center rounded-2xl"
                        style={{
                          background:
                            "var(--color-primary-subtle)",
                          color:
                            "var(--color-primary)",
                        }}
                      >
                        <FaStore />
                      </div>

                      <div>

                        <h3
                          className="font-bold"
                          style={{
                            color:
                              "var(--color-text-primary)",
                          }}
                        >
                          {mess.name}
                        </h3>

                        <p
                          className="text-sm"
                          style={{
                            color:
                              "var(--color-text-secondary)",
                          }}
                        >
                          #{mess.id}
                        </p>

                      </div>

                    </div>

                  </td>

                  <td className="px-6 py-5">
                    {mess.owner}
                  </td>

                  <td className="px-6 py-5">

                    <div className="flex items-center justify-center gap-2">

                      <FaUsers />

                      {mess.students}

                    </div>

                  </td>

                  <td className="px-6 py-5">

                    <div className="flex items-center justify-center gap-2 font-semibold">

                      <FaRupeeSign />

                      {mess.revenue}

                    </div>

                  </td>

                  <td className="px-6 py-5 text-center">

                    <span
                      className="rounded-full px-4 py-2 text-sm font-semibold"
                      style={{
                        background: badge.bg,
                        color: badge.color,
                      }}
                    >
                      {mess.status}
                    </span>

                  </td>

                  <td className="px-6 py-5">

                    <div className="flex justify-center gap-2">

                      <button
                        onClick={() =>
                          onView(mess)
                        }
                        className="rounded-xl p-3"
                        style={{
                          background:
                            "var(--color-primary-subtle)",
                          color:
                            "var(--color-primary)",
                        }}
                      >
                        <FaEye />
                      </button>

                      <button
                        onClick={() =>
                          onEdit(mess)
                        }
                        className="rounded-xl p-3"
                        style={{
                          background:
                            "var(--color-warning-subtle)",
                          color:
                            "var(--color-warning)",
                        }}
                      >
                        <FaEdit />
                      </button>

                      <button
                        onClick={() =>
                          onDelete(mess)
                        }
                        className="rounded-xl p-3"
                        style={{
                          background:
                            "var(--color-danger-subtle)",
                          color:
                            "var(--color-danger)",
                        }}
                      >
                        <FaTrash />
                      </button>

                    </div>

                  </td>

                </tr>
              );
            })}

          </tbody>

        </table>

      </div>

    </section>
  );
}

export default MessTable;