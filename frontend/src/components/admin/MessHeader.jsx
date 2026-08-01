import { motion } from "framer-motion";
import {
  FaBuilding,
  FaStore,
  FaUsers,
} from "react-icons/fa";

function MessHeader() {
  return (
    <motion.section
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.35,
      }}
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
          top: -100,
          right: -100,
          width: 260,
          height: 260,
          borderRadius: "999px",
          background: "rgba(255,255,255,.08)",
        }}
      />

      <div
        style={{
          position: "absolute",
          bottom: -110,
          left: -110,
          width: 240,
          height: 240,
          borderRadius: "999px",
          background: "rgba(255,255,255,.05)",
        }}
      />

      <div className="relative flex flex-col gap-8 xl:flex-row xl:items-center xl:justify-between">

        <div>

          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-2"
            style={{
              background: "rgba(255,255,255,.15)",
            }}
          >
            <FaBuilding />

            Mess Management

          </div>

          <h1 className="mt-6 text-5xl font-bold">
            Registered Messes
          </h1>

          <p
            className="mt-4 max-w-3xl text-lg leading-8"
            style={{
              color: "rgba(255,255,255,.92)",
            }}
          >
            Manage all registered messes, verify owners,
            monitor subscriptions, student capacity,
            performance and operational status from one
            centralized admin dashboard.
          </p>

        </div>

        <div className="grid gap-5 sm:grid-cols-2">

          <div
            className="rounded-3xl p-6"
            style={{
              background: "rgba(255,255,255,.12)",
            }}
          >
            <FaStore size={30} />

            <div className="mt-5 text-5xl font-bold">
              148
            </div>

            <div
              className="mt-2"
              style={{
                color: "rgba(255,255,255,.9)",
              }}
            >
              Active Messes
            </div>

          </div>

          <div
            className="rounded-3xl p-6"
            style={{
              background: "rgba(255,255,255,.12)",
            }}
          >
            <FaUsers size={30} />

            <div className="mt-5 text-5xl font-bold">
              12.8K
            </div>

            <div
              className="mt-2"
              style={{
                color: "rgba(255,255,255,.9)",
              }}
            >
              Students Served
            </div>

          </div>

        </div>

      </div>

    </motion.section>
  );
}

export default MessHeader;