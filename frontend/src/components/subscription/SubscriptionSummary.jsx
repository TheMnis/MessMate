import {
  FaCalendarAlt,
  FaCheckCircle,
  FaCrown,
  FaWallet,
} from "react-icons/fa";

import { motion } from "framer-motion";

function SubscriptionSummary({ subscription }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-success)] radius-3xl p-8 [color:var(--color-text-inverse)] elevation-xl"
    >
      <div className="flex flex-col lg:flex-row justify-between gap-8">

        <div>

          <div className="flex items-center gap-3">

            <FaCrown className="text-4xl [color:var(--color-warning)]" />

            <div>

              <h2 className="text-3xl font-bold">
                {subscription.plan}
              </h2>

              <p className="[color:var(--color-primary-muted)] mt-1">
                Your current subscription plan
              </p>

            </div>

          </div>

          <div className="grid grid-cols-2 gap-6 mt-8">

            <div>

              <p className="[color:var(--color-primary-muted)] text-sm">
                Monthly Fee
              </p>

              <h3 className="text-2xl font-bold mt-1">
                ₹{subscription.price}
              </h3>

            </div>

            <div>

              <p className="[color:var(--color-primary-muted)] text-sm">
                Remaining Days
              </p>

              <h3 className="text-2xl font-bold mt-1">
                {subscription.remainingDays}
              </h3>

            </div>

          </div>

        </div>

        <div className="[background:color-mix(in_srgb,var(--color-surface) 10%,transparent)] backdrop-blur-lg radius-3xl p-6 min-w-[280px]">

          <div className="flex items-center gap-3 mb-5">

            <FaCalendarAlt />

            <span>
              Expiry Date
            </span>

          </div>

          <h2 className="text-3xl font-bold">
            {subscription.expiry}
          </h2>

          <div className="mt-6">

            <div className="flex justify-between text-sm mb-2">

              <span>Status</span>

              <span className="flex items-center gap-2">

                <FaCheckCircle />

                {subscription.status}

              </span>

            </div>

            <div className="w-full [background:color-mix(in_srgb,var(--color-surface) 20%,transparent)] radius-full h-3">

              <div
                className="[background:var(--color-surface)] radius-full h-3 transition-all"
                style={{
                  width: `${subscription.progress}%`,
                }}
              />

            </div>

          </div>

          <div className="flex items-center gap-3 mt-8">

            <FaWallet />

            <span>
              {subscription.duration} Plan
            </span>

          </div>

        </div>

      </div>

    </motion.div>
  );
}

export default SubscriptionSummary;
