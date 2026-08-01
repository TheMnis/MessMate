import { FaBell } from "react-icons/fa";

function NotificationHeader() {
  return (
    <section
      className="relative overflow-hidden rounded-3xl p-8"
      style={{
        background: "var(--color-surface)",
        border: "1px solid var(--color-border)",
        boxShadow: "var(--shadow-lg)",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: -80,
          right: -80,
          width: 220,
          height: 220,
          borderRadius: "999px",
          background: "var(--gradient-primary)",
          opacity: 0.08,
          filter: "blur(10px)",
        }}
      />

      <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

        <div>

          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-2"
            style={{
              background: "var(--color-primary-subtle)",
              color: "var(--color-primary)",
            }}
          >
            <FaBell />

            Notification Center
          </div>

          <h1
            className="mt-5 text-5xl font-bold"
            style={{
              color: "var(--color-text-primary)",
            }}
          >
            Notifications
          </h1>

          <p
            className="mt-4 max-w-2xl text-lg"
            style={{
              color: "var(--color-text-secondary)",
            }}
          >
            Stay updated with your attendance,
            meals, subscriptions, announcements
            and important activities happening
            in your mess.
          </p>

        </div>

        <div
          className="rounded-3xl px-8 py-7 text-center"
          style={{
            background: "var(--gradient-primary)",
            color: "var(--color-text-inverse)",
            boxShadow: "var(--shadow-md)",
          }}
        >

          <div className="text-6xl">
            🔔
          </div>

          <div className="mt-3 text-2xl font-bold">
            Stay Updated
          </div>

          <p
            className="mt-2"
            style={{
              color: "rgba(255,255,255,.85)",
            }}
          >
            Never miss an important update.
          </p>

        </div>

      </div>
    </section>
  );
}

export default NotificationHeader;