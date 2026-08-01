import {
  FaCheckCircle,
  FaUtensils,
  FaBell,
  FaWallet,
} from "react-icons/fa";

function StatsGrid({
  attendance = 92,
  meals = 4,
  notifications = 3,
  wallet = 1250,
}) {
  const stats = [
    {
      title: "Attendance",
      value: `${attendance}%`,
      icon: <FaCheckCircle />,
      color: "var(--color-success)",
      bg: "var(--color-success-subtle)",
    },
    {
      title: "Today's Meals",
      value: meals,
      icon: <FaUtensils />,
      color: "var(--color-primary)",
      bg: "var(--color-primary-subtle)",
    },
    {
      title: "Notifications",
      value: notifications,
      icon: <FaBell />,
      color: "var(--color-warning)",
      bg: "var(--color-warning-subtle)",
    },
    {
      title: "Wallet Balance",
      value: `₹${wallet}`,
      icon: <FaWallet />,
      color: "var(--color-secondary)",
      bg: "var(--color-secondary-subtle)",
    },
  ];

  return (
    <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

      {stats.map((item) => (

        <div
          key={item.title}
          className="rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1"
          style={{
            background: "var(--color-surface)",
            border: "1px solid var(--color-border)",
            boxShadow: "var(--shadow-lg)",
          }}
        >

          <div
            className="flex h-16 w-16 items-center justify-center rounded-2xl text-3xl"
            style={{
              background: item.bg,
              color: item.color,
            }}
          >
            {item.icon}
          </div>

          <div
            className="mt-6 text-sm font-semibold"
            style={{
              color: "var(--color-text-muted)",
            }}
          >
            {item.title}
          </div>

          <div
            className="mt-2 text-4xl font-bold"
            style={{
              color: "var(--color-text-primary)",
            }}
          >
            {item.value}
          </div>

        </div>

      ))}

    </section>
  );
}

export default StatsGrid;