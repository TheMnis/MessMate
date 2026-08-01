import {
  FaFire,
  FaTrophy,
  FaBullseye,
  FaUtensils,
  FaCoffee,
  FaMoon,
  FaBoxOpen,
  FaLightbulb,
} from "react-icons/fa";

import { getAttendanceSummary } from "../../services/student/attendance.service";
import attendanceData from "../../data/attendanceData";

function AttendanceInsights() {
  const summary = getAttendanceSummary();

  const total = attendanceData.length;

  const breakfast = attendanceData.filter(
    (item) => item.breakfast
  ).length;

  const lunch = attendanceData.filter(
    (item) => item.lunch
  ).length;

  const snacks = attendanceData.filter(
    (item) => item.snacks
  ).length;

  const dinner = attendanceData.filter(
    (item) => item.dinner
  ).length;

  const extraTiffin = attendanceData.reduce(
    (sum, item) => sum + item.extraTiffin,
    0
  );

  const mealPercentage = (count) =>
    total === 0 ? 0 : Math.round((count / total) * 100);

  const cards = [
    {
      icon: <FaFire />,
      title: "Current Streak",
      value: `${summary.currentStreak} Days`,
      color: "var(--color-primary)",
      bg: "var(--color-primary-subtle)",
    },
    {
      icon: <FaTrophy />,
      title: "Best Streak",
      value: `${summary.bestStreak} Days`,
      color: "var(--color-success)",
      bg: "var(--color-success-subtle)",
    },
    {
      icon: <FaBullseye />,
      title: "Target",
      value: `${summary.targetPercentage}%`,
      color: "var(--color-warning)",
      bg: "var(--color-warning-subtle)",
    },
    {
      icon: <FaBoxOpen />,
      title: "Extra Tiffin",
      value: extraTiffin,
      color: "var(--color-danger)",
      bg: "var(--color-danger-subtle)",
    },
    {
      icon: <FaUtensils />,
      title: "Breakfast",
      value: `${mealPercentage(breakfast)}%`,
      color: "var(--color-success)",
      bg: "var(--color-success-subtle)",
    },
    {
      icon: <FaUtensils />,
      title: "Lunch",
      value: `${mealPercentage(lunch)}%`,
      color: "var(--color-primary)",
      bg: "var(--color-primary-subtle)",
    },
    {
      icon: <FaCoffee />,
      title: "Snacks",
      value: `${mealPercentage(snacks)}%`,
      color: "var(--color-warning)",
      bg: "var(--color-warning-subtle)",
    },
    {
      icon: <FaMoon />,
      title: "Dinner",
      value: `${mealPercentage(dinner)}%`,
      color: "var(--color-secondary)",
      bg: "var(--color-secondary-subtle)",
    },
  ];

  return (
    <section
      className="mt-8 rounded-3xl p-8"
      style={{
        background: "var(--color-surface)",
        border: "1px solid var(--color-border)",
        boxShadow: "var(--shadow-lg)",
      }}
    >
      <div className="mb-8">

        <div
          className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-4"
          style={{
            background: "var(--color-primary-subtle)",
            color: "var(--color-primary)",
          }}
        >
          <FaLightbulb />
          Insights
        </div>

        <h2
          className="text-3xl font-bold"
          style={{
            color: "var(--color-text-primary)",
          }}
        >
          Attendance Insights
        </h2>

        <p
          className="mt-2"
          style={{
            color: "var(--color-text-secondary)",
          }}
        >
          AI powered overview of your attendance and meal habits.
        </p>

      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">

        {cards.map((card) => (

          <div
            key={card.title}
            className="rounded-3xl p-5 transition-all duration-300 hover:-translate-y-1"
            style={{
              background: card.bg,
              border: "1px solid var(--color-border)",
            }}
          >
            <div
              className="flex h-14 w-14 items-center justify-center rounded-2xl text-2xl"
              style={{
                background: "var(--gradient-primary)",
                color: "var(--color-text-inverse)",
                boxShadow: "var(--shadow-md)",
              }}
            >
              {card.icon}
            </div>

            <h3
              className="mt-5 text-sm font-semibold"
              style={{
                color: "var(--color-text-muted)",
              }}
            >
              {card.title}
            </h3>

            <div
              className="mt-2 text-3xl font-bold"
              style={{
                color: card.color,
              }}
            >
              {card.value}
            </div>

          </div>

        ))}

      </div>

      <div
        className="mt-8 rounded-3xl p-6"
        style={{
          background: "var(--gradient-primary)",
          color: "var(--color-text-inverse)",
        }}
      >
        <h3 className="text-xl font-bold">
          💡 AI Recommendation
        </h3>

        <p className="mt-3 leading-7">
          Maintain at least{" "}
          <strong>{summary.targetPercentage}%</strong>{" "}
          attendance. Try not to skip Breakfast and Lunch,
          avoid unnecessary Extra Tiffin orders, and keep your
          Current Streak growing to improve overall attendance
          consistency.
        </p>
      </div>
    </section>
  );
}

export default AttendanceInsights;
