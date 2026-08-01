import { motion } from "framer-motion";
import { FaCalendarAlt, FaUtensils } from "react-icons/fa";

function MenuViewToggle({ view, onChange }) {
  return (
    <div
      className="mb-8 inline-flex rounded-3xl p-2"
      style={{
        background: "var(--color-surface)",
        border: "1px solid var(--color-border)",
        boxShadow: "0 12px 30px rgba(15,23,42,.06)",
      }}
    >
      {/* Today */}

      <motion.button
        whileTap={{ scale: 0.96 }}
        whileHover={{ y: -2 }}
        onClick={() => onChange("today")}
        className="flex items-center gap-3 rounded-2xl px-6 py-4 transition-all duration-300"
        style={{
          background:
            view === "today"
              ? "linear-gradient(135deg,var(--color-primary),var(--color-secondary))"
              : "transparent",

          color:
            view === "today"
              ? "#fff"
              : "var(--color-text-primary)",

          boxShadow:
            view === "today"
              ? "0 10px 22px rgba(59,130,246,.25)"
              : "none",
        }}
      >
        <div
          style={{
            width: 38,
            height: 38,
            borderRadius: 12,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background:
              view === "today"
                ? "rgba(255,255,255,.18)"
                : "var(--color-primary-subtle)",

            color:
              view === "today"
                ? "#fff"
                : "var(--color-primary)",
          }}
        >
          <FaUtensils />
        </div>

        <div className="text-left">
          <div className="font-semibold">
            Today
          </div>

          <div
            style={{
              fontSize: 12,
              opacity: .75,
            }}
          >
            Daily Menu
          </div>
        </div>
      </motion.button>

      {/* Weekly */}

      <motion.button
        whileTap={{ scale: 0.96 }}
        whileHover={{ y: -2 }}
        onClick={() => onChange("weekly")}
        className="flex items-center gap-3 rounded-2xl px-6 py-4 transition-all duration-300"
        style={{
          background:
            view === "weekly"
              ? "linear-gradient(135deg,var(--color-primary),var(--color-secondary))"
              : "transparent",

          color:
            view === "weekly"
              ? "#fff"
              : "var(--color-text-primary)",

          boxShadow:
            view === "weekly"
              ? "0 10px 22px rgba(59,130,246,.25)"
              : "none",
        }}
      >
        <div
          style={{
            width: 38,
            height: 38,
            borderRadius: 12,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background:
              view === "weekly"
                ? "rgba(255,255,255,.18)"
                : "var(--color-primary-subtle)",

            color:
              view === "weekly"
                ? "#fff"
                : "var(--color-primary)",
          }}
        >
          <FaCalendarAlt />
        </div>

        <div className="text-left">
          <div className="font-semibold">
            Weekly
          </div>

          <div
            style={{
              fontSize: 12,
              opacity: .75,
            }}
          >
            Full Schedule
          </div>
        </div>
      </motion.button>
    </div>
  );
}

export default MenuViewToggle;