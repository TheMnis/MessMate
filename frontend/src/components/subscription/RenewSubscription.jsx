import { motion } from "framer-motion";
import {
  FaSyncAlt,
  FaArrowRight,
  FaCalendarCheck,
} from "react-icons/fa";

function RenewSubscription({
  currentPlan,
  amount,
  expiryDate,
}) {
  return (
    <section
      className="rounded-3xl p-8"
      style={{
        background: "var(--color-surface)",
        border: "1px solid var(--color-border)",
        boxShadow: "var(--shadow-lg)",
      }}
    >
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

        <div>

          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-2"
            style={{
              background: "var(--color-warning-subtle)",
              color: "var(--color-warning)",
            }}
          >
            <FaSyncAlt />

            Renewal Available

          </div>

          <h2
            className="mt-5 text-4xl font-bold"
            style={{
              color: "var(--color-text-primary)",
            }}
          >
            Renew Your Subscription
          </h2>

          <p
            className="mt-4 max-w-2xl text-lg"
            style={{
              color: "var(--color-text-secondary)",
            }}
          >
            Continue enjoying uninterrupted
            meals and services by renewing
            your subscription before it
            expires.
          </p>

        </div>

        <motion.button
          whileHover={{
            scale: 1.04,
          }}
          whileTap={{
            scale: 0.97,
          }}
          className="rounded-2xl px-8 py-4 text-lg font-bold"
          style={{
            background: "var(--gradient-primary)",
            color: "var(--color-text-inverse)",
            boxShadow: "var(--shadow-lg)",
          }}
        >
          Renew Now
        </motion.button>

      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-3">

        <div
          className="rounded-2xl p-5"
          style={{
            background: "var(--color-background)",
            border: "1px solid var(--color-border)",
          }}
        >
          <div className="flex items-center gap-3">

            <FaCalendarCheck
              style={{
                color: "var(--color-primary)",
              }}
            />

            <span
              style={{
                color: "var(--color-text-secondary)",
              }}
            >
              Current Plan
            </span>

          </div>

          <h3
            className="mt-4 text-2xl font-bold"
            style={{
              color: "var(--color-text-primary)",
            }}
          >
            {currentPlan}
          </h3>

        </div>

        <div
          className="rounded-2xl p-5"
          style={{
            background: "var(--color-background)",
            border: "1px solid var(--color-border)",
          }}
        >
          <div
            style={{
              color: "var(--color-text-secondary)",
            }}
          >
            Renewal Amount
          </div>

          <h3
            className="mt-4 text-2xl font-bold"
            style={{
              color: "var(--color-success)",
            }}
          >
            {amount}
          </h3>

        </div>

        <div
          className="rounded-2xl p-5"
          style={{
            background: "var(--color-background)",
            border: "1px solid var(--color-border)",
          }}
        >
          <div
            style={{
              color: "var(--color-text-secondary)",
            }}
          >
            Valid Till
          </div>

          <h3
            className="mt-4 text-2xl font-bold"
            style={{
              color: "var(--color-warning)",
            }}
          >
            {expiryDate}
          </h3>

        </div>

      </div>

      <div
        className="mt-8 flex flex-wrap items-center justify-between gap-5 rounded-2xl p-6"
        style={{
          background: "var(--color-primary-subtle)",
        }}
      >

        <div>

          <h3
            className="text-xl font-bold"
            style={{
              color: "var(--color-primary)",
            }}
          >
            Secure Online Payment
          </h3>

          <p
            className="mt-2"
            style={{
              color: "var(--color-text-secondary)",
            }}
          >
            Pay securely using UPI,
            Debit Card, Credit Card
            or Net Banking.
          </p>

        </div>

        <motion.button
          whileHover={{
            x: 4,
          }}
          className="flex items-center gap-3 rounded-2xl px-6 py-3 font-semibold"
          style={{
            background: "var(--color-primary)",
            color: "var(--color-text-inverse)",
          }}
        >
          Proceed

          <FaArrowRight />

        </motion.button>

      </div>

    </section>
  );
}

export default RenewSubscription;