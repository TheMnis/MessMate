import { motion } from "framer-motion";
import { FaSearch, FaFilter } from "react-icons/fa";

function MenuSearch({
  search,
  setSearch,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="mb-8"
    >
      <div
        className="flex flex-col lg:flex-row gap-4"
      >
        {/* Search */}

        <div
          className="relative flex-1"
        >
          <FaSearch
            className="absolute left-5 top-1/2 -translate-y-1/2 text-lg"
            style={{
              color: "var(--color-primary)",
            }}
          />

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search meals, dishes or ingredients..."
            className="w-full pl-14 pr-5 py-4 rounded-3xl outline-none transition-all duration-300"
            style={{
              background: "var(--color-surface)",
              border: "1px solid var(--color-border)",
              color: "var(--color-text-primary)",
              boxShadow: "0 12px 30px rgba(15,23,42,.06)",
            }}
          />

        </div>

        {/* Filter Button */}

        <button
          className="flex items-center justify-center gap-3 px-6 py-4 rounded-3xl font-semibold transition-all duration-300 hover:scale-105"
          style={{
            background:
              "linear-gradient(135deg,var(--color-primary),var(--color-secondary))",
            color: "#fff",
            boxShadow:
              "0 12px 25px rgba(59,130,246,.25)",
          }}
        >
          <FaFilter />
          Filters
        </button>

      </div>
    </motion.div>
  );
}

export default MenuSearch;
