import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  FaBell,
  FaSearch,
  FaCheckCircle,
  FaExclamationCircle,
  FaInfoCircle,
  FaFilter,
  FaCheckDouble,
} from "react-icons/fa";

import notificationData from "../../data/notificationData";

function Notifications() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const filters = [
    "All",
    "Unread",
    "Read",
    "Important",
  ];

  const filteredNotifications = useMemo(() => {
    return notificationData.filter((item) => {
      const matchesSearch =
        item.title
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        item.message
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesFilter =
        filter === "All" ||
        item.status === filter ||
        item.type === filter;

      return matchesSearch && matchesFilter;
    });
  }, [search, filter]);

  const unreadCount = notificationData.filter(
    (item) => item.status === "Unread"
  ).length;

  const readCount = notificationData.filter(
    (item) => item.status === "Read"
  ).length;

  const importantCount = notificationData.filter(
    (item) => item.type === "Important"
  ).length;

  const getIcon = (type) => {
    switch (type) {
      case "Important":
        return <FaExclamationCircle />;

      case "Success":
        return <FaCheckCircle />;

      default:
        return <FaInfoCircle />;
    }
  };

  const getColor = (type) => {
    switch (type) {
      case "Important":
        return {
          bg: "var(--color-danger-subtle)",
          color: "var(--color-danger)",
        };

      case "Success":
        return {
          bg: "var(--color-success-subtle)",
          color: "var(--color-success)",
        };

      default:
        return {
          bg: "var(--color-primary-subtle)",
          color: "var(--color-primary)",
        };
    }
  };

  return (
    <div className="space-y-8">

      {/* Hero */}

      <section
        className="rounded-3xl p-8"
        style={{
          background: "var(--color-surface)",
          border: "1px solid var(--color-border)",
          boxShadow: "var(--shadow-lg)",
        }}
      >
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">

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
              Stay updated with attendance,
              meals, subscriptions,
              announcements and important
              hostel activities.
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
            <div className="text-6xl font-bold">
              {notificationData.length}
            </div>

            <div className="mt-2 text-lg font-semibold">
              Total Notifications
            </div>

          </div>

        </div>
      </section>

      {/* Summary */}

      <section className="grid gap-6 md:grid-cols-3">

        {[
          {
            title: "Unread",
            value: unreadCount,
            color: "var(--color-warning)",
            bg: "var(--color-warning-subtle)",
          },
          {
            title: "Read",
            value: readCount,
            color: "var(--color-success)",
            bg: "var(--color-success-subtle)",
          },
          {
            title: "Important",
            value: importantCount,
            color: "var(--color-danger)",
            bg: "var(--color-danger-subtle)",
          },
        ].map((card) => (

          <div
            key={card.title}
            className="rounded-3xl p-6"
            style={{
              background: "var(--color-surface)",
              border: "1px solid var(--color-border)",
              boxShadow: "var(--shadow-md)",
            }}
          >

            <div
              className="inline-flex rounded-2xl p-4"
              style={{
                background: card.bg,
                color: card.color,
              }}
            >
              <FaBell />
            </div>

            <h3
              className="mt-5 text-lg font-bold"
              style={{
                color: "var(--color-text-primary)",
              }}
            >
              {card.title}
            </h3>

            <div
              className="mt-2 text-4xl font-bold"
              style={{
                color: card.color,
              }}
            >
              {card.value}
            </div>

          </div>

        ))}

      </section>

      {/* Search & Filter */}

      <section
        className="rounded-3xl p-6"
        style={{
          background: "var(--color-surface)",
          border: "1px solid var(--color-border)",
          boxShadow: "var(--shadow-md)",
        }}
      >

        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

          <div className="relative w-full lg:max-w-md">

            <FaSearch
              className="absolute left-5 top-1/2 -translate-y-1/2"
              style={{
                color: "var(--color-primary)",
              }}
            />

            <input
              type="text"
              placeholder="Search notification..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              className="w-full rounded-3xl py-4 pl-14 pr-5 outline-none"
              style={{
                background: "var(--color-background)",
                border: "1px solid var(--color-border)",
                color: "var(--color-text-primary)",
              }}
            />

          </div>

          <div className="flex flex-wrap gap-3">

            {filters.map((item) => (

              <button
                key={item}
                onClick={() =>
                  setFilter(item)
                }
                className="rounded-full px-5 py-3 font-semibold transition"
                style={{
                  background:
                    filter === item
                      ? "var(--color-primary)"
                      : "var(--color-background)",

                  color:
                    filter === item
                      ? "var(--color-text-inverse)"
                      : "var(--color-text-primary)",

                  border:
                    "1px solid var(--color-border)",
                }}
              >
                {item}
              </button>

            ))}

          </div>

        </div>

      </section>

      {/* Notification List */}

      <section className="space-y-5">
                {filteredNotifications.length === 0 ? (

          <div
            className="rounded-3xl py-20 text-center"
            style={{
              background: "var(--color-surface)",
              border: "1px solid var(--color-border)",
              boxShadow: "var(--shadow-md)",
            }}
          >

            <div
              className="mx-auto flex h-24 w-24 items-center justify-center rounded-full"
              style={{
                background: "var(--color-primary-subtle)",
                color: "var(--color-primary)",
                fontSize: 36,
              }}
            >
              <FaBell />
            </div>

            <h2
              className="mt-6 text-3xl font-bold"
              style={{
                color: "var(--color-text-primary)",
              }}
            >
              No Notifications Found
            </h2>

            <p
              className="mt-3"
              style={{
                color: "var(--color-text-secondary)",
              }}
            >
              Try changing search or filter.
            </p>

          </div>

        ) : (

          filteredNotifications.map((item) => {

            const theme = getColor(item.type);

            return (

              <motion.div
                key={item.id}
                whileHover={{
                  y: -5,
                }}
                transition={{
                  duration: 0.25,
                }}
                className="rounded-3xl p-6"
                style={{
                  background: "var(--color-surface)",
                  border: "1px solid var(--color-border)",
                  boxShadow: "var(--shadow-md)",
                }}
              >

                <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">

                  <div className="flex gap-5">

                    <div
                      className="flex h-16 w-16 items-center justify-center rounded-2xl text-2xl"
                      style={{
                        background: theme.bg,
                        color: theme.color,
                      }}
                    >
                      {getIcon(item.type)}
                    </div>

                    <div>

                      <div className="flex flex-wrap items-center gap-3">

                        <h2
                          className="text-xl font-bold"
                          style={{
                            color: "var(--color-text-primary)",
                          }}
                        >
                          {item.title}
                        </h2>

                        <span
                          className="rounded-full px-4 py-1 text-sm font-semibold"
                          style={{
                            background: theme.bg,
                            color: theme.color,
                          }}
                        >
                          {item.type}
                        </span>

                        <span
                          className="rounded-full px-4 py-1 text-sm font-semibold"
                          style={{
                            background:
                              item.status === "Unread"
                                ? "var(--color-warning-subtle)"
                                : "var(--color-success-subtle)",

                            color:
                              item.status === "Unread"
                                ? "var(--color-warning)"
                                : "var(--color-success)",
                          }}
                        >
                          {item.status}
                        </span>

                      </div>

                      <p
                        className="mt-4 leading-7"
                        style={{
                          color:
                            "var(--color-text-secondary)",
                        }}
                      >
                        {item.message}
                      </p>

                      <div
                        className="mt-5 flex flex-wrap items-center gap-4"
                        style={{
                          color:
                            "var(--color-text-muted)",
                        }}
                      >
                        <span>
                          🕒 {item.time}
                        </span>

                        {item.date && (
                          <span>
                            📅 {item.date}
                          </span>
                        )}
                      </div>

                    </div>

                  </div>

                  <button
                    className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 font-semibold transition-all duration-300 hover:-translate-y-1"
                    style={{
                      background:
                        "var(--color-primary-subtle)",
                      color:
                        "var(--color-primary)",
                    }}
                  >
                    <FaCheckDouble />

                    Mark Read
                  </button>

                </div>

              </motion.div>

            );

          })

        )}

      </section>

    </div>
  );
}

export default Notifications;