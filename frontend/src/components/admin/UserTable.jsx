import {
  FaEye,
  FaEdit,
  FaTrash,
  FaUserGraduate,
  FaStore,
  FaUserShield,
} from "react-icons/fa";

function UserTable({
  users,
  onView,
  onEdit,
  onDelete,
}) {
  const getRoleIcon = (role) => {
    switch (role) {
      case "Student":
        return <FaUserGraduate />;
      case "Owner":
        return <FaStore />;
      case "Admin":
        return <FaUserShield />;
      default:
        return <FaUserGraduate />;
    }
  };

  const getStatusColor = (status) => {
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
      case "Blocked":
        return {
          bg: "var(--color-warning-subtle)",
          color: "var(--color-warning)",
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
                User
              </th>

              <th className="px-6 py-5 text-left">
                Email
              </th>

              <th className="px-6 py-5 text-left">
                Role
              </th>

              <th className="px-6 py-5 text-left">
                Joined
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

            {users.map((user) => {
              const status =
                getStatusColor(user.status);

              return (
                <tr
                  key={user.id}
                  style={{
                    borderTop:
                      "1px solid var(--color-border)",
                  }}
                >

                  <td className="px-6 py-5">

                    <div className="flex items-center gap-4">

                      <img
                        src={
                          user.avatar ||
                          `https://api.dicebear.com/9.x/initials/svg?seed=${user.name}`
                        }
                        alt={user.name}
                        className="h-12 w-12 rounded-full"
                      />

                      <div>

                        <h3
                          className="font-bold"
                          style={{
                            color:
                              "var(--color-text-primary)",
                          }}
                        >
                          {user.name}
                        </h3>

                        <p
                          className="text-sm"
                          style={{
                            color:
                              "var(--color-text-secondary)",
                          }}
                        >
                          #{user.id}
                        </p>

                      </div>

                    </div>

                  </td>

                  <td className="px-6 py-5">
                    {user.email}
                  </td>

                  <td className="px-6 py-5">

                    <div className="flex items-center gap-2">

                      {getRoleIcon(user.role)}

                      {user.role}

                    </div>

                  </td>

                  <td className="px-6 py-5">
                    {user.joined}
                  </td>

                  <td className="px-6 py-5 text-center">

                    <span
                      className="rounded-full px-4 py-2 text-sm font-semibold"
                      style={{
                        background: status.bg,
                        color: status.color,
                      }}
                    >
                      {user.status}
                    </span>

                  </td>

                  <td className="px-6 py-5">

                    <div className="flex justify-center gap-2">

                      <button
                        onClick={() =>
                          onView(user)
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
                          onEdit(user)
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
                          onDelete(user)
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
export default UserTable;