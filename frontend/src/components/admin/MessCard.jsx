import {
  FaStore,
  FaUsers,
  FaRupeeSign,
  FaEye,
  FaEdit,
  FaTrash,
  FaUserTie,
} from "react-icons/fa";

function MessCard({
  mess,
  onView,
  onEdit,
  onDelete,
}) {
  const statusStyle = {
    Active: {
      bg: "var(--color-success-subtle)",
      color: "var(--color-success)",
    },
    Pending: {
      bg: "var(--color-warning-subtle)",
      color: "var(--color-warning)",
    },
    Inactive: {
      bg: "var(--color-danger-subtle)",
      color: "var(--color-danger)",
    },
    Blocked: {
      bg: "var(--color-secondary-subtle)",
      color: "var(--color-secondary)",
    },
  };

  const badge =
    statusStyle[mess.status] ||
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
      <div className="flex items-center justify-between">

        <div
          className="flex h-20 w-20 items-center justify-center rounded-3xl text-3xl"
          style={{
            background:
              "var(--color-primary-subtle)",
            color:
              "var(--color-primary)",
          }}
        >
          <FaStore />
        </div>

        <span
          className="rounded-full px-4 py-2 text-sm font-semibold"
          style={{
            background: badge.bg,
            color: badge.color,
          }}
        >
          {mess.status}
        </span>

      </div>

      <h2
        className="mt-6 text-2xl font-bold"
        style={{
          color:
            "var(--color-text-primary)",
        }}
      >
        {mess.name}
      </h2>

      <div
        className="mt-3 flex items-center gap-2"
        style={{
          color:
            "var(--color-text-secondary)",
        }}
      >
        <FaUserTie />

        {mess.owner}

      </div>

      <div className="mt-8 grid grid-cols-2 gap-4">

        <div
          className="rounded-2xl p-4"
          style={{
            background:
              "var(--color-background)",
          }}
        >
          <div className="flex items-center gap-2">

            <FaUsers
              style={{
                color:
                  "var(--color-primary)",
              }}
            />

            Students

          </div>

          <h3
            className="mt-3 text-3xl font-bold"
            style={{
              color:
                "var(--color-text-primary)",
            }}
          >
            {mess.students}
          </h3>

        </div>

        <div
          className="rounded-2xl p-4"
          style={{
            background:
              "var(--color-background)",
          }}
        >
          <div className="flex items-center gap-2">

            <FaRupeeSign
              style={{
                color:
                  "var(--color-success)",
              }}
            />

            Revenue

          </div>

          <h3
            className="mt-3 text-3xl font-bold"
            style={{
              color:
                "var(--color-text-primary)",
            }}
          >
            ₹{mess.revenue}
          </h3>

        </div>

      </div>

      <div className="mt-8 flex gap-3">

        <button
          onClick={() =>
            onView(mess)
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
            onEdit(mess)
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
            onDelete(mess)
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

export default MessCard;