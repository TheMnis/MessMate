import { motion } from "framer-motion";
import {
  FaUserCircle,
  FaShieldAlt,
  FaCheckCircle,
} from "react-icons/fa";

function ProfileHeader() {
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
        duration: 0.3,
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
          top: -90,
          right: -90,
          width: 240,
          height: 240,
          borderRadius: "999px",
          background: "rgba(255,255,255,.08)",
        }}
      />

      <div
        style={{
          position: "absolute",
          bottom: -90,
          left: -90,
          width: 220,
          height: 220,
          borderRadius: "999px",
          background: "rgba(255,255,255,.05)",
        }}
      />

      <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

        <div>

          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-2"
            style={{
              background: "rgba(255,255,255,.15)",
            }}
          >
            <FaUserCircle />

            Owner Profile

          </div>

          <h1 className="mt-6 text-5xl font-bold">
            My Profile
          </h1>

          <p
            className="mt-4 max-w-2xl text-lg"
            style={{
              color: "rgba(255,255,255,.92)",
            }}
          >
            Manage your account information, security
            settings and business details from one place.
          </p>

        </div>

        <div className="grid gap-4 sm:grid-cols-2">

          <div
            className="rounded-3xl p-6"
            style={{
              background: "rgba(255,255,255,.12)",
            }}
          >
            <FaShieldAlt size={28} />

            <div className="mt-5 text-4xl font-bold">
              Secure
            </div>

            <div
              className="mt-2"
              style={{
                color: "rgba(255,255,255,.9)",
              }}
            >
              Account Status
            </div>

          </div>

          <div
            className="rounded-3xl p-6"
            style={{
              background: "rgba(255,255,255,.12)",
            }}
          >
            <FaCheckCircle size={28} />

            <div className="mt-5 text-4xl font-bold">
              Verified
            </div>

            <div
              className="mt-2"
              style={{
                color: "rgba(255,255,255,.9)",
              }}
            >
              Profile Status
            </div>

          </div>

        </div>

      </div>

    </motion.section>
  );
}

export default ProfileHeader;