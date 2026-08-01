import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaFire,
  FaStar,
  FaLeaf,
} from "react-icons/fa";

function TodaysSpecial() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="mb-10"
    >
      <div
        className="grid lg:grid-cols-2 gap-10 items-center rounded-3xl overflow-hidden p-8"
        style={{
          background: "var(--color-surface)",
          border: "1px solid var(--color-border)",
          boxShadow: "0 18px 45px rgba(15,23,42,.08)",
        }}
      >
        {/* Left Side */}

        <div>

          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{
              background: "var(--color-warning-subtle)",
              color: "var(--color-warning)",
            }}
          >
            ⭐ Chef's Recommendation
          </div>

          <h2
            className="text-5xl font-bold leading-tight"
            style={{
              color: "var(--color-text-primary)",
            }}
          >
            Paneer Butter Masala
          </h2>

          <p
            className="mt-5 text-lg leading-8"
            style={{
              color: "var(--color-text-secondary)",
            }}
          >
            Rich creamy paneer cooked with aromatic spices,
            buttery tomato gravy, fresh naan and jeera rice.
            Prepared by our chef using fresh ingredients.
          </p>

          <div className="flex flex-wrap gap-3 mt-8">

            <div
              className="px-5 py-3 rounded-full flex items-center gap-2"
              style={{
                background: "var(--color-warning-subtle)",
              }}
            >
              <FaStar />
              <strong>4.9</strong>
            </div>

            <div
              className="px-5 py-3 rounded-full flex items-center gap-2"
              style={{
                background: "var(--color-danger-subtle)",
              }}
            >
              <FaFire />
              780 kcal
            </div>

            <div
              className="px-5 py-3 rounded-full flex items-center gap-2"
              style={{
                background: "var(--color-success-subtle)",
              }}
            >
              <FaLeaf />
              100% Veg
            </div>

          </div>

          <button
            className="mt-8 flex items-center gap-3 px-6 py-4 rounded-2xl font-semibold transition-all hover:scale-105"
            style={{
              background: "var(--color-primary)",
              color: "white",
            }}
          >
            View Complete Meal
            <FaArrowRight />
          </button>

        </div>

        {/* Right Side */}

        <div className="flex justify-center">

          <div
            className="relative w-[320px] h-[320px] rounded-[36px] overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg,var(--color-primary-subtle),var(--color-background))",
              border: "1px solid var(--color-border)",
            }}
          >

            {/* Decorative Blob */}

            <div
              style={{
                position: "absolute",
                width: 220,
                height: 220,
                borderRadius: "999px",
                background: "var(--color-primary)",
                opacity: 0.08,
                top: -40,
                right: -40,
              }}
            />

            {/* Placeholder */}

            <div className="absolute inset-0 flex flex-col items-center justify-center">

              <div
                style={{
                  fontSize: 120,
                }}
              >
                🍛
              </div>

              <h3
                className="mt-3 text-xl font-bold"
                style={{
                  color: "var(--color-text-primary)",
                }}
              >
                Today's Special
              </h3>

              <p
                style={{
                  color: "var(--color-text-muted)",
                }}
              >
                Fresh • Healthy • Delicious
              </p>

            </div>

          </div>

        </div>

      </div>
    </motion.section>
  );
}

export default TodaysSpecial;