import {
  FaSun,
  FaCalendarAlt,
  FaUtensils,
  FaChartLine,
  FaBell,
} from "react-icons/fa";

function WelcomeBanner({
  studentName = "Student",
  attendance = 92,
  todaysMeals = 4,
  notifications = 3,
}) {
  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const greetingHour = new Date().getHours();

  const greeting =
    greetingHour < 12
      ? "Good Morning"
      : greetingHour < 17
      ? "Good Afternoon"
      : "Good Evening";

  return (
    <section
      className="relative overflow-hidden rounded-3xl p-8"
      style={{
        background: "var(--gradient-primary)",
        color: "var(--color-text-inverse)",
        boxShadow: "var(--shadow-xl)",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: -80,
          right: -80,
          width: 240,
          height: 240,
          borderRadius: "var(--radius-full)",
          background: "var(--color-surface)",
          opacity: 0.08,
        }}
      />

      <div
        style={{
          position: "absolute",
          bottom: -90,
          left: -90,
          width: 220,
          height: 220,
          borderRadius: "var(--radius-full)",
          background: "var(--color-surface)",
          opacity: 0.05,
        }}
      />

      <div className="relative flex flex-col gap-8 xl:flex-row xl:items-center xl:justify-between">
        <div>
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-2"
            style={{
              background: "rgba(255,255,255,.15)",
              backdropFilter: "blur(12px)",
            }}
          >
            <FaSun />
            {greeting}
          </div>

          <h1 className="mt-6 text-5xl font-bold">
            Welcome back,
            <br />
            {studentName} 👋
          </h1>

          <p
            className="mt-5 max-w-2xl text-lg"
            style={{
              color: "rgba(255,255,255,.9)",
            }}
          >
            Track your attendance, today's meals,
            notifications and hostel activities from one
            beautiful dashboard.
          </p>

          <div
            className="mt-6 inline-flex items-center gap-3 rounded-2xl px-5 py-3"
            style={{
              background: "rgba(255,255,255,.12)",
              backdropFilter: "blur(12px)",
            }}
          >
            <FaCalendarAlt />
            {today}
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div
            className="rounded-3xl p-6"
            style={{
              background: "rgba(255,255,255,.12)",
              backdropFilter: "blur(14px)",
            }}
          >
            <div className="flex items-center justify-between">
              <FaChartLine size={26} />

              <span
                className="rounded-full px-3 py-1 text-sm font-semibold"
                style={{
                  background: "rgba(255,255,255,.18)",
                }}
              >
                Live
              </span>
            </div>

            <div className="mt-5 text-5xl font-bold">
              {attendance}%
            </div>

            <div
              className="mt-2"
              style={{
                color: "rgba(255,255,255,.9)",
              }}
            >
              Attendance
            </div>
          </div>

          <div
            className="rounded-3xl p-6"
            style={{
              background: "rgba(255,255,255,.12)",
              backdropFilter: "blur(14px)",
            }}
          >
            <div className="flex items-center justify-between">
              <FaUtensils size={26} />

              <span
                className="rounded-full px-3 py-1 text-sm font-semibold"
                style={{
                  background: "rgba(255,255,255,.18)",
                }}
              >
                Today
              </span>
            </div>

            <div className="mt-5 text-5xl font-bold">
              {todaysMeals}
            </div>

            <div
              className="mt-2"
              style={{
                color: "rgba(255,255,255,.9)",
              }}
            >
              Meals Available
            </div>
          </div>

          <div
            className="rounded-3xl p-6 sm:col-span-2"
            style={{
              background: "rgba(255,255,255,.12)",
              backdropFilter: "blur(14px)",
            }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <FaBell size={24} />

                <div>
                  <div className="text-xl font-bold">
                    Notifications
                  </div>

                  <div
                    style={{
                      color: "rgba(255,255,255,.9)",
                    }}
                  >
                    Stay updated with the latest hostel
                    announcements.
                  </div>
                </div>
              </div>

              <div
                className="flex h-16 w-16 items-center justify-center rounded-full text-2xl font-bold"
                style={{
                  background: "rgba(255,255,255,.18)",
                }}
              >
                {notifications}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WelcomeBanner;
