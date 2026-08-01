import { motion } from "framer-motion";
import {
  FaUserShield,
  FaCamera,
  FaCheckCircle,
} from "react-icons/fa";

function ProfileHeader({
  name = "DewaYadav",
  email = "dewayadav@messmate.com",
  image,
}) {
  const defaultAvatar =
    "https://api.dicebear.com/9.x/adventurer/svg?seed=DewaYadav";

  return (
    <section
      className="relative overflow-hidden rounded-3xl p-8"
      style={{
        background: "var(--color-surface)",
        border: "1px solid var(--color-border)",
        boxShadow: "var(--shadow-lg)",
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
          background: "var(--gradient-primary)",
          opacity: 0.08,
          filter: "blur(20px)",
        }}
      />

      <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

        <div className="flex flex-col gap-6 sm:flex-row sm:items-center">

          <div className="relative">

            <motion.img
              whileHover={{
                scale: 1.05,
                rotate: -3,
              }}
              transition={{
                duration: 0.25,
              }}
              src={image || defaultAvatar}
              alt={name}
              className="h-36 w-36 rounded-full object-cover"
              style={{
                border: "5px solid var(--color-surface)",
                boxShadow: "var(--shadow-lg)",
              }}
            />

            <motion.button
              whileHover={{
                scale: 1.08,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="absolute bottom-1 right-1 flex h-11 w-11 items-center justify-center rounded-full"
              style={{
                background: "var(--color-primary)",
                color: "var(--color-text-inverse)",
                border: "3px solid var(--color-surface)",
                boxShadow: "var(--shadow-md)",
              }}
            >
              <FaCamera />
            </motion.button>

          </div>

          <div>

            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-2"
              style={{
                background: "var(--color-primary-subtle)",
                color: "var(--color-primary)",
              }}
            >
              <FaUserShield />
              Student Profile
            </div>

            <h1
              className="mt-5 text-5xl font-bold"
              style={{
                color: "var(--color-text-primary)",
              }}
            >
              {name}
            </h1>

            <p
              className="mt-3 text-lg"
              style={{
                color: "var(--color-text-secondary)",
              }}
            >
              {email}
            </p>

            <div
              className="mt-5 inline-flex items-center gap-2 rounded-full px-4 py-2"
              style={{
                background: "var(--color-success-subtle)",
                color: "var(--color-success)",
              }}
            >
              <FaCheckCircle />
              Verified Student
            </div>

          </div>

        </div>

        <motion.div
          whileHover={{
            y: -4,
          }}
          className="rounded-3xl px-8 py-7 text-center"
          style={{
            background: "var(--gradient-primary)",
            color: "var(--color-text-inverse)",
            boxShadow: "var(--shadow-lg)",
          }}
        >
          <div className="text-6xl font-bold">
            93%
          </div>

          <div className="mt-2 text-xl font-semibold">
            Attendance
          </div>

          <p
            className="mt-4"
            style={{
              color: "rgba(255,255,255,.9)",
            }}
          >
            Keep maintaining your excellent attendance record.
          </p>

        </motion.div>

      </div>

    </section>
  );
}

export default ProfileHeader;