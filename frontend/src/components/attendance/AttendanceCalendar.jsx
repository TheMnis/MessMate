import attendanceData from "../../data/attendanceData";

function AttendanceCalendar() {
  const weekDays = [
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
    "Sun",
  ];

  const getStatusStyle = (status) => {
    switch (status) {
      case "Present":
        return {
          background: "var(--color-success-subtle)",
          color: "var(--color-success)",
        };

      case "Absent":
        return {
          background: "var(--color-danger-subtle)",
          color: "var(--color-danger)",
        };

      default:
        return {
          background: "var(--color-warning-subtle)",
          color: "var(--color-warning)",
        };
    }
  };

  return (
    <section
      className="mt-8 rounded-3xl p-8"
      style={{
        background: "var(--color-surface)",
        border: "1px solid var(--color-border)",
        boxShadow: "var(--shadow-lg)",
      }}
    >
      {/* Header */}

      <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

        <div>

          <div
            className="mb-4 inline-flex items-center gap-2 rounded-full px-4 py-2"
            style={{
              background: "var(--color-primary-subtle)",
              color: "var(--color-primary)",
            }}
          >
            📅 Calendar
          </div>

          <h2
            className="text-3xl font-bold"
            style={{
              color: "var(--color-text-primary)",
            }}
          >
            Monthly Attendance Calendar
          </h2>

          <p
            className="mt-2"
            style={{
              color: "var(--color-text-secondary)",
            }}
          >
            Daily meal attendance overview
          </p>

        </div>

        <div
          className="rounded-2xl px-6 py-4"
          style={{
            background: "var(--gradient-primary)",
            color: "var(--color-text-inverse)",
            boxShadow: "var(--shadow-md)",
          }}
        >
          <div className="text-lg font-bold">
            July 2026
          </div>

          <div
            style={{
              opacity: 0.9,
            }}
          >
            Current Month
          </div>

        </div>

      </div>

      {/* Week Header */}

      <div className="grid grid-cols-7 gap-4">

        {weekDays.map((day) => (

          <div
            key={day}
            className="rounded-2xl py-3 text-center font-semibold"
            style={{
              background: "var(--color-background)",
              color: "var(--color-text-secondary)",
              border: "1px solid var(--color-border)",
            }}
          >
            {day}
          </div>

        ))}

      </div>

      {/* Calendar */}

      <div className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-2">

        {attendanceData.map((item) => {

          const style = getStatusStyle(item.status);

          return (

            <div
              key={item.id}
              className="rounded-3xl p-5 transition-all duration-300 hover:-translate-y-1"
              style={{
                background: "var(--color-background)",
                border: "1px solid var(--color-border)",
                boxShadow: "var(--shadow-sm)",
              }}
            >
              {/* Header */}

              <div className="flex items-center justify-between">

                <div>

                  <div
                    className="text-xl font-bold"
                    style={{
                      color: "var(--color-text-primary)",
                    }}
                  >
                    {new Date(item.date).toLocaleDateString(
                      "en-IN",
                      {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      }
                    )}
                  </div>

                  <div
                    className="mt-1"
                    style={{
                      color: "var(--color-text-muted)",
                    }}
                  >
                    {item.day}
                  </div>

                </div>

                <div
                  className="rounded-full px-4 py-2"
                  style={{
                    background: style.background,
                    color: style.color,
                    fontWeight: 700,
                  }}
                >
                  {item.status}
                </div>

              </div>

              {/* Meals */}

              <div className="mt-6 grid grid-cols-2 gap-3">

                {[
                  {
                    title: "Breakfast",
                    icon: "🍳",
                    value: item.breakfast,
                  },
                  {
                    title: "Lunch",
                    icon: "🍛",
                    value: item.lunch,
                  },
                  {
                    title: "Snacks",
                    icon: "☕",
                    value: item.snacks,
                  },
                  {
                    title: "Dinner",
                    icon: "🌙",
                    value: item.dinner,
                  },
                ].map((meal) => (

                  <div
                    key={meal.title}
                    className="rounded-2xl p-4"
                    style={{
                      background: meal.value
                        ? "var(--color-success-subtle)"
                        : "var(--color-danger-subtle)",
                    }}
                  >
                    <div className="text-2xl">
                      {meal.icon}
                    </div>

                    <div
                      className="mt-2 font-semibold"
                      style={{
                        color: "var(--color-text-primary)",
                      }}
                    >
                      {meal.title}
                    </div>

                    <div
                      className="mt-1 text-sm"
                      style={{
                        color: meal.value
                          ? "var(--color-success)"
                          : "var(--color-danger)",
                        fontWeight: 600,
                      }}
                    >
                      {meal.value
                        ? "Present"
                        : "Missed"}
                    </div>

                  </div>

                ))}

              </div>

              {/* Footer */}

              <div
                className="mt-6 flex flex-col gap-4 border-t pt-5 lg:flex-row lg:items-center lg:justify-between"
                style={{
                  borderColor: "var(--color-border)",
                }}
              >
                <div
                  className="rounded-full px-4 py-2"
                  style={{
                    background:
                      "var(--color-primary-subtle)",
                    color:
                      "var(--color-primary)",
                    fontWeight: 700,
                  }}
                >
                  🍱 Extra Tiffin : {item.extraTiffin}
                </div>

                <div
                  style={{
                    color:
                      "var(--color-text-muted)",
                  }}
                >
                  {item.remarks || "No Remarks"}
                </div>

              </div>

            </div>

          );

        })}

      </div>

      {/* Legend */}

      <div
        className="mt-8 flex flex-wrap gap-5 rounded-3xl p-5"
        style={{
          background: "var(--color-background)",
          border: "1px solid var(--color-border)",
        }}
      >
        {[
          [
            "Present",
            "var(--color-success)",
          ],
          [
            "Absent",
            "var(--color-danger)",
          ],
          [
            "Leave",
            "var(--color-warning)",
          ],
        ].map(([label, color]) => (

          <div
            key={label}
            className="flex items-center gap-3"
          >
            <div
              style={{
                width: 14,
                height: 14,
                borderRadius:
                  "var(--radius-full)",
                background: color,
              }}
            />

            <span
              style={{
                color:
                  "var(--color-text-secondary)",
                fontWeight: 600,
              }}
            >
              {label}
            </span>

          </div>

        ))}
      </div>

    </section>
  );
}

export default AttendanceCalendar;