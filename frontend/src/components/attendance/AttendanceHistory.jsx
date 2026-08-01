import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  FaCalendarAlt,
  FaSearch,
  FaCheckCircle,
  FaTimesCircle,
} from "react-icons/fa";
import { MdOutlineEventAvailable } from "react-icons/md";

function AttendanceHistory({ attendance }) {
  const [search, setSearch] = useState("");

  const filteredAttendance = useMemo(() => {
    return attendance.filter((item) =>
      item.date.toLowerCase().includes(search.toLowerCase())
    );
  }, [attendance, search]);

  const getStatus = (status) => {
    switch (status) {
      case "Present":
        return {
          icon: <FaCheckCircle />,
          color: "var(--color-success)",
          bg: "var(--color-success-subtle)",
        };

      case "Absent":
        return {
          icon: <FaTimesCircle />,
          color: "var(--color-danger)",
          bg: "var(--color-danger-subtle)",
        };

      default:
        return {
          icon: <MdOutlineEventAvailable />,
          color: "var(--color-warning)",
          bg: "var(--color-warning-subtle)",
        };
    }
  };

  return (
    <div
      className="mt-8 rounded-3xl p-8"
      style={{
        background: "var(--color-surface)",
        border: "1px solid var(--color-border)",
        boxShadow: "var(--shadow-lg)",
      }}
    >
      {/* Header */}

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">

        <div>

          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-4"
            style={{
              background: "var(--color-primary-subtle)",
              color: "var(--color-primary)",
            }}
          >
            <FaCalendarAlt />
            History
          </div>

          <h2
            className="text-3xl font-bold"
            style={{
              color: "var(--color-text-primary)",
            }}
          >
            Attendance History
          </h2>

          <p
            style={{
              color: "var(--color-text-muted)",
            }}
          >
            Complete attendance records.
          </p>

        </div>

        {/* Search */}

        <div className="relative w-full lg:w-80">

          <FaSearch
            className="absolute left-5 top-1/2 -translate-y-1/2"
            style={{
              color: "var(--color-primary)",
            }}
          />

          <input
            type="text"
            placeholder="Search date..."
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

      </div>

      {/* Empty */}

      {filteredAttendance.length === 0 ? (

        <div className="py-16 text-center">

          <div
            style={{
              fontSize: 60,
            }}
          >
            📅
          </div>

          <h3
            className="mt-5 text-2xl font-bold"
            style={{
              color:
                "var(--color-text-primary)",
            }}
          >
            No Records Found
          </h3>

          <p
            className="mt-2"
            style={{
              color:
                "var(--color-text-muted)",
            }}
          >
            Try another search.
          </p>

        </div>

      ) : (

        <div className="space-y-4">

          {filteredAttendance.map((item) => {

            const status = getStatus(item.status);

            return (

              <motion.div
                key={item.id}
                whileHover={{
                  y: -3,
                }}
                className="flex items-center justify-between rounded-3xl p-5 transition-all"
                style={{
                  background:
                    "var(--color-background)",
                }}
              >

                {/* Date */}

                <div>

                  <div
                    className="font-bold"
                    style={{
                      color:
                        "var(--color-text-primary)",
                    }}
                  >
                    {item.date}
                  </div>

                  <div
                    style={{
                      color:
                        "var(--color-text-muted)",
                      fontSize: 13,
                    }}
                  >
                    Attendance Record
                  </div>

                </div>

                {/* Status */}

                <div
                  className="flex items-center gap-3 rounded-full px-5 py-3"
                  style={{
                    background: status.bg,
                    color: status.color,
                  }}
                >

                  {status.icon}

                  <span
                    style={{
                      fontWeight: 700,
                    }}
                  >
                    {item.status}
                  </span>

                </div>

              </motion.div>

            );

          })}

        </div>

      )}

    </div>
  );
}

export default AttendanceHistory;