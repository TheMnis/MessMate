import { motion } from "framer-motion";
import {
  FaLock,
  FaKey,
  FaShieldAlt,
  FaMobileAlt,
  FaArrowRight,
} from "react-icons/fa";

function SecurityCard() {
  const items = [
    {
      title: "Change Password",
      description:
        "Update your password regularly to keep your account secure.",
      icon: <FaKey />,
      color: "var(--color-primary)",
      bg: "var(--color-primary-subtle)",
    },
    {
      title: "Two Factor Authentication",
      description:
        "Enable OTP verification for better account protection.",
      icon: <FaShieldAlt />,
      color: "var(--color-success)",
      bg: "var(--color-success-subtle)",
    },
    {
      title: "Trusted Devices",
      description:
        "Manage all devices currently logged into your account.",
      icon: <FaMobileAlt />,
      color: "var(--color-warning)",
      bg: "var(--color-warning-subtle)",
    },
  ];

  return (
    <section
      className="rounded-3xl p-8"
      style={{
        background: "var(--color-surface)",
        border: "1px solid var(--color-border)",
        boxShadow: "var(--shadow-lg)",
      }}
    >
      <div className="flex items-center gap-4 mb-8">

        <div
          className="flex h-16 w-16 items-center justify-center rounded-2xl"
          style={{
            background: "var(--color-primary-subtle)",
            color: "var(--color-primary)",
          }}
        >
          <FaLock size={28} />
        </div>

        <div>

          <h2
            className="text-3xl font-bold"
            style={{
              color: "var(--color-text-primary)",
            }}
          >
            Security
          </h2>

          <p
            style={{
              color: "var(--color-text-secondary)",
            }}
          >
            Protect your MessMate account.
          </p>

        </div>

      </div>

      <div className="space-y-5">

        {items.map((item, index) => (

          <motion.div
            key={item.title}
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: index * 0.08,
            }}
            whileHover={{
              y: -4,
            }}
            className="flex flex-col gap-5 rounded-3xl p-6 lg:flex-row lg:items-center lg:justify-between"
            style={{
              background: "var(--color-background)",
              border: "1px solid var(--color-border)",
            }}
          >

            <div className="flex items-center gap-5">

              <div
                className="flex h-14 w-14 items-center justify-center rounded-2xl text-xl"
                style={{
                  background: item.bg,
                  color: item.color,
                }}
              >
                {item.icon}
              </div>

              <div>

                <h3
                  className="text-xl font-bold"
                  style={{
                    color: "var(--color-text-primary)",
                  }}
                >
                  {item.title}
                </h3>

                <p
                  className="mt-2"
                  style={{
                    color: "var(--color-text-secondary)",
                  }}
                >
                  {item.description}
                </p>

              </div>

            </div>

            <motion.button
              whileHover={{
                scale: 1.04,
              }}
              whileTap={{
                scale: 0.96,
              }}
              className="flex items-center justify-center gap-3 rounded-2xl px-6 py-3 font-semibold"
              style={{
                background: "var(--color-primary)",
                color: "var(--color-text-inverse)",
              }}
            >
              Manage

              <FaArrowRight />

            </motion.button>

          </motion.div>

        ))}

      </div>

    </section>
  );
}

export default SecurityCard;