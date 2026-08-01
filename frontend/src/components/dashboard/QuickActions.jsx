import {
  FaUtensils,
  FaCalendarCheck,
  FaBell,
  FaWallet,
  FaUserCircle,
  FaReceipt,
} from "react-icons/fa";

const actions = [
  {
    title: "Today's Menu",
    subtitle: "View today's meals",
    icon: <FaUtensils />,
    color: "var(--color-primary)",
    bg: "var(--color-primary-subtle)",
  },
  {
    title: "Attendance",
    subtitle: "Track attendance",
    icon: <FaCalendarCheck />,
    color: "var(--color-success)",
    bg: "var(--color-success-subtle)",
  },
  {
    title: "Notifications",
    subtitle: "Latest updates",
    icon: <FaBell />,
    color: "var(--color-warning)",
    bg: "var(--color-warning-subtle)",
  },
  {
    title: "Wallet",
    subtitle: "Recharge & balance",
    icon: <FaWallet />,
    color: "var(--color-secondary)",
    bg: "var(--color-secondary-subtle)",
  },
  {
    title: "Profile",
    subtitle: "Manage profile",
    icon: <FaUserCircle />,
    color: "var(--color-danger)",
    bg: "var(--color-danger-subtle)",
  },
  {
    title: "Billing",
    subtitle: "View invoices",
    icon: <FaReceipt />,
    color: "var(--color-primary)",
    bg: "var(--color-primary-subtle)",
  },
];

function QuickActions() {
  return (
    <section
      className="rounded-3xl p-8"
      style={{
        background: "var(--color-surface)",
        border: "1px solid var(--color-border)",
        boxShadow: "var(--shadow-lg)",
      }}
    >
      <div className="mb-8">

        <div
          className="inline-flex items-center gap-2 rounded-full px-4 py-2"
          style={{
            background: "var(--color-primary-subtle)",
            color: "var(--color-primary)",
          }}
        >
          ⚡ Quick Actions
        </div>

        <h2
          className="mt-4 text-3xl font-bold"
          style={{
            color: "var(--color-text-primary)",
          }}
        >
          Quick Access
        </h2>

        <p
          className="mt-2"
          style={{
            color: "var(--color-text-secondary)",
          }}
        >
          Frequently used features at your fingertips.
        </p>

      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">

        {actions.map((action) => (

          <button
            key={action.title}
            className="rounded-3xl p-6 text-left transition-all duration-300 hover:-translate-y-1"
            style={{
              background: "var(--color-background)",
              border: "1px solid var(--color-border)",
              boxShadow: "var(--shadow-sm)",
            }}
          >
            <div
              className="flex h-16 w-16 items-center justify-center rounded-2xl text-3xl"
              style={{
                background: action.bg,
                color: action.color,
              }}
            >
              {action.icon}
            </div>

            <h3
              className="mt-5 text-xl font-bold"
              style={{
                color: "var(--color-text-primary)",
              }}
            >
              {action.title}
            </h3>

            <p
              className="mt-2"
              style={{
                color: "var(--color-text-secondary)",
              }}
            >
              {action.subtitle}
            </p>
          </button>

        ))}

      </div>
    </section>
  );
}

export default QuickActions;
