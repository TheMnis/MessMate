import { motion } from "framer-motion";
import {
  FaCalendarAlt,
  FaClock,
  FaUtensils,
} from "react-icons/fa";

function MenuHeader() {
  const now = new Date();

  const today = now.toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const time = now.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <motion.section
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="relative overflow-hidden rounded-3xl p-8 mb-8"
      style={{
        background: "var(--color-surface)",
        border: "1px solid var(--color-border)",
        boxShadow: "0 18px 40px rgba(15,23,42,.08)",
      }}
    >
      {/* Accent Line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "5px",
          background:
            "linear-gradient(90deg,var(--color-primary),var(--color-secondary))",
        }}
      />

      {/* Soft Background Circle */}
      <div
        style={{
          position: "absolute",
          right: -60,
          top: -60,
          width: 220,
          height: 220,
          borderRadius: "999px",
          background:
            "linear-gradient(135deg,var(--color-primary),var(--color-secondary))",
          opacity: 0.06,
        }}
      />

      <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">

        {/* Left */}

        <div>

          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-5"
            style={{
              background: "var(--color-primary-subtle)",
              color: "var(--color-primary)",
            }}
          >
            <FaUtensils />
            Fresh Meals Prepared Today
          </div>

          <h1
            className="text-5xl font-bold"
            style={{
              color: "var(--color-text-primary)",
            }}
          >
            Today's Menu
          </h1>

          <p
            className="mt-4 text-lg max-w-2xl"
            style={{
              color: "var(--color-text-secondary)",
            }}
          >
            Enjoy freshly prepared meals crafted with quality ingredients,
            balanced nutrition and delicious taste.
          </p>

        </div>

        {/* Right Card */}

        <div
          className="rounded-3xl p-6 min-w-[270px]"
          style={{
            background: "var(--color-background)",
            border: "1px solid var(--color-border)",
          }}
        >
          <div className="flex items-center gap-3 mb-4">
            <FaCalendarAlt
              style={{
                color: "var(--color-primary)",
              }}
            />

            <div>

              <p
                style={{
                  color: "var(--color-text-muted)",
                  fontSize: 13,
                }}
              >
                Today
              </p>

              <h3
                style={{
                  color: "var(--color-text-primary)",
                  fontWeight: 700,
                }}
              >
                {today}
              </h3>

            </div>

          </div>

          <div className="flex items-center gap-3">

            <FaClock
              style={{
                color: "var(--color-success)",
              }}
            />

            <div>

              <p
                style={{
                  color: "var(--color-text-muted)",
                  fontSize: 13,
                }}
              >
                Current Time
              </p>

              <h3
                style={{
                  color: "var(--color-text-primary)",
                  fontWeight: 700,
                }}
              >
                {time}
              </h3>

            </div>

          </div>

        </div>

      </div>

    </motion.section>
  );
}

export default MenuHeader;