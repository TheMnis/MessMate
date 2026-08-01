import {
  FaBell,
  FaArrowRight,
} from "react-icons/fa";

const notifications = [
  {
    id: 1,
    title: "Breakfast Menu Updated",
    description:
      "Today's breakfast has been updated with Poha & Tea.",
    time: "10 min ago",
    color: "var(--color-primary)",
    bg: "var(--color-primary-subtle)",
  },
  {
    id: 2,
    title: "Attendance Marked",
    description:
      "Your breakfast attendance has been recorded.",
    time: "30 min ago",
    color: "var(--color-success)",
    bg: "var(--color-success-subtle)",
  },
  {
    id: 3,
    title: "Monthly Bill Generated",
    description:
      "Your mess bill for this month is now available.",
    time: "2 hrs ago",
    color: "var(--color-warning)",
    bg: "var(--color-warning-subtle)",
  },
];

function NotificationCard() {
  return (
    <section
      className="rounded-3xl p-8"
      style={{
        background: "var(--color-surface)",
        border: "1px solid var(--color-border)",
        boxShadow: "var(--shadow-lg)",
      }}
    >
      <div className="mb-8 flex items-center justify-between">

        <div>

          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-2"
            style={{
              background: "var(--color-primary-subtle)",
              color: "var(--color-primary)",
            }}
          >
            <FaBell />
            Notifications
          </div>

          <h2
            className="mt-4 text-3xl font-bold"
            style={{
              color: "var(--color-text-primary)",
            }}
          >
            Latest Updates
          </h2>

          <p
            className="mt-2"
            style={{
              color: "var(--color-text-secondary)",
            }}
          >
            Recent announcements and important updates.
          </p>

        </div>

        <button
          className="rounded-2xl px-5 py-3 font-semibold transition-all duration-300 hover:-translate-y-1"
          style={{
            background: "var(--gradient-primary)",
            color: "var(--color-text-inverse)",
            boxShadow: "var(--shadow-md)",
          }}
        >
          View All
        </button>

      </div>

      <div className="space-y-5">

        {notifications.map((item) => (

          <div
            key={item.id}
            className="rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1"
            style={{
              background: "var(--color-background)",
              border: "1px solid var(--color-border)",
            }}
          >
            <div className="flex items-start justify-between gap-5">

              <div className="flex gap-4">

                <div
                  className="flex h-14 w-14 items-center justify-center rounded-2xl text-2xl"
                  style={{
                    background: item.bg,
                    color: item.color,
                  }}
                >
                  <FaBell />
                </div>

                <div>

                  <h3
                    className="text-lg font-bold"
                    style={{
                      color: "var(--color-text-primary)",
                    }}
                  >
                    {item.title}
                  </h3>

                  <p
                    className="mt-2"
                    style={{
                      color: "var(--color-text-secondary)",
                    }}
                  >
                    {item.description}
                  </p>

                  <div
                    className="mt-3 text-sm"
                    style={{
                      color: "var(--color-text-muted)",
                    }}
                  >
                    {item.time}
                  </div>

                </div>

              </div>

              <button
                className="flex h-11 w-11 items-center justify-center rounded-xl transition-all duration-300 hover:scale-105"
                style={{
                  background: "var(--color-primary-subtle)",
                  color: "var(--color-primary)",
                }}
              >
                <FaArrowRight />
              </button>

            </div>

          </div>

        ))}

      </div>
    </section>
  );
}

export default NotificationCard;
