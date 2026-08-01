import { motion } from "framer-motion";
import {
  FaArrowUp,
  FaRocket,
  FaCrown,
} from "react-icons/fa";

function UpgradePlanCard({
  selectedPlan,
}) {
  return (
    <motion.section
      whileHover={{
        y: -5,
      }}
      className="rounded-3xl p-8"
      style={{
        background: "var(--gradient-primary)",
        color: "var(--color-text-inverse)",
        boxShadow: "var(--shadow-xl)",
      }}
    >
      <div className="flex items-center justify-between">

        <div
          className="flex h-16 w-16 items-center justify-center rounded-2xl"
          style={{
            background: "rgba(255,255,255,.15)",
          }}
        >
          <FaRocket size={28} />
        </div>

        <FaArrowUp size={22} />

      </div>

      <h2 className="mt-8 text-3xl font-bold">
        Upgrade Plan
      </h2>

      <p
        className="mt-4 leading-7"
        style={{
          color: "rgba(255,255,255,.9)",
        }}
      >
        Unlock premium features and manage your
        mess more efficiently with advanced
        analytics, unlimited students, inventory
        management and priority support.
      </p>

      <div
        className="mt-8 rounded-2xl p-5"
        style={{
          background: "rgba(255,255,255,.12)",
        }}
      >
        <div className="flex items-center gap-3">

          <FaCrown />

          Selected Plan

        </div>

        <h3 className="mt-4 text-3xl font-bold">
          {selectedPlan}
        </h3>

      </div>

      <button
        className="mt-8 w-full rounded-2xl py-4 text-lg font-semibold transition-all hover:scale-[1.02]"
        style={{
          background: "#ffffff",
          color: "var(--color-primary)",
        }}
      >
        Upgrade Now
      </button>

    </motion.section>
  );
}

export default UpgradePlanCard;