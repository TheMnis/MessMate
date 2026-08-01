import {
  FaUserGraduate,
  FaStore,
  FaUserShield,
  FaEnvelope,
  FaEye,
  FaEdit,
  FaTrash,
} from "react-icons/fa";

function UserCard({
  user,
  onView,
  onEdit,
  onDelete,
}) {
  const roleIcon = {
    Student: <FaUserGraduate />,
    Owner: <FaStore />,
    Admin: <FaUserShield />,
  };

  const statusStyle = {
    Active: {
      bg: "var(--color-success-subtle)",
      color: "var(--color-success)",
    },
    Inactive: {
      bg: "var(--color-danger-subtle)",
      color: "var(--color-danger)",
    },
    Blocked: {
      bg: "var(--color-warning-subtle)",
      color: "var(--color-warning)",
    },
  };

  const badge =
    statusStyle[user.status] ||
    statusStyle.Active;

  return (
    <div
      className="rounded-3xl p-6 transition-all hover:-translate-y-1"
      style={{
        background: "var(--color-surface)",
        border: "1px solid var(--color-border)",
        boxShadow: "var(--shadow-lg)",
      }}
    >
      <div className="flex items-center gap-4">

        <img
          src={
            user.avatar ||
            `https://api.dicebear.com/9.x/initials/svg?seed=${user.name}`
          }
          alt={user.name}
          className="h-20 w-20 rounded-full"
        />

        <div className="flex-1">

          <h2
            className="text-xl font-bold"
            style={{
              color:
                "var(--color-text-primary)",
            }}
          >
            {user.name}
          </h2>

          <div
            className="mt-2 flex items-center gap-2"
            style={{
              color:
                "var(--color-text-secondary)",
            }}
          >
            {roleIcon[user.role]}

            {user.role}

          </div>

        </div>

      </div>

      <div
        className="mt-6 flex items-center gap-3"
        style={{
          color:
            "var(--color-text-secondary)",
        }}
      >
        <FaEnvelope />

        <span className="truncate">
          {user.email}
        </span>

      </div>

      <div className="mt-4 flex items-center justify-between">

        <span
          className="rounded-full px-4 py-2 text-sm font-semibold"
          style={{
            background: badge.bg,
            color: badge.color,
          }}
        >
          {user.status}
        </span>

        <span
          className="text-sm"
          style={{
            color:
              "var(--color-text-secondary)",
          }}
        >
          {user.joined}
        </span>

      </div>

      <div className="mt-8 flex gap-3">

        <button
          onClick={() =>
            onView(user)
          }
          className="flex flex-1 items-center justify-center gap-2 rounded-2xl py-3 font-semibold"
          style={{
            background:
              "var(--color-primary-subtle)",
            color:
              "var(--color-primary)",
          }}
        >
          <FaEye />

          View

        </button>

        <button
          onClick={() =>
            onEdit(user)
          }
          className="flex flex-1 items-center justify-center gap-2 rounded-2xl py-3 font-semibold"
          style={{
            background:
              "var(--color-warning-subtle)",
            color:
              "var(--color-warning)",
          }}
        >
          <FaEdit />

          Edit

        </button>

        <button
          onClick={() =>
            onDelete(user)
          }
          className="flex flex-1 items-center justify-center gap-2 rounded-2xl py-3 font-semibold"
          style={{
            background:
              "var(--color-danger-subtle)",
            color:
              "var(--color-danger)",
          }}
        >
          <FaTrash />

          Delete

        </button>

      </div>

    </div>
  );
}

export default UserCard;