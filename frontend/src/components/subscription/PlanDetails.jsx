import { motion } from "framer-motion";
import {
  FaCrown,
  FaUtensils,
  FaCalendarAlt,
  FaMoneyBillWave,
  FaCheckCircle,
} from "react-icons/fa";

function PlanDetails({ plan }) {
  const features = [
    "Breakfast Included",
    "Lunch Included",
    "Dinner Included",
    "Healthy Weekly Menu",
    "Unlimited Water",
    "Monthly Attendance Tracking",
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
      <div className="mb-8 flex items-center gap-4">

        <div
          className="flex h-16 w-16 items-center justify-center rounded-2xl"
          style={{
            background: "var(--color-primary-subtle)",
            color: "var(--color-primary)",
          }}
        >
          <FaCrown size={28} />
        </div>

        <div>

          <h2
            className="text-3xl font-bold"
            style={{
              color: "var(--color-text-primary)",
            }}
          >
            Plan Details
          </h2>

          <p
            style={{
              color: "var(--color-text-secondary)",
            }}
          >
            Complete information about your current subscription.
          </p>

        </div>

      </div>

      <div className="grid gap-8 lg:grid-cols-2">

        <div className="space-y-5">

          <div
            className="flex items-center justify-between rounded-2xl p-5"
            style={{
              background: "var(--color-background)",
              border: "1px solid var(--color-border)",
            }}
          >
            <div className="flex items-center gap-3">
              <FaCrown
                style={{
                  color: "var(--color-primary)",
                }}
              />
              <span>Plan</span>
            </div>

            <strong>{plan.plan}</strong>

          </div>

          <div
            className="flex items-center justify-between rounded-2xl p-5"
            style={{
              background: "var(--color-background)",
              border: "1px solid var(--color-border)",
            }}
          >
            <div className="flex items-center gap-3">
              <FaMoneyBillWave
                style={{
                  color: "var(--color-success)",
                }}
              />
              <span>Monthly Fee</span>
            </div>

            <strong>{plan.amount}</strong>

          </div>

          <div
            className="flex items-center justify-between rounded-2xl p-5"
            style={{
              background: "var(--color-background)",
              border: "1px solid var(--color-border)",
            }}
          >
            <div className="flex items-center gap-3">
              <FaUtensils
                style={{
                  color: "var(--color-warning)",
                }}
              />
              <span>Meals Per Day</span>
            </div>

            <strong>{plan.mealsPerDay}</strong>

          </div>

          <div
            className="flex items-center justify-between rounded-2xl p-5"
            style={{
              background: "var(--color-background)",
              border: "1px solid var(--color-border)",
            }}
          >
            <div className="flex items-center gap-3">
              <FaCalendarAlt
                style={{
                  color: "var(--color-secondary)",
                }}
              />
              <span>Expiry Date</span>
            </div>

            <strong>{plan.expiryDate}</strong>

          </div>

        </div>

        <div>

          <h3
            className="mb-6 text-2xl font-bold"
            style={{
              color: "var(--color-text-primary)",
            }}
          >
            Included Features
          </h3>

          <div className="space-y-4">

            {features.map((feature) => (

              <motion.div
                key={feature}
                whileHover={{
                  x: 4,
                }}
                className="flex items-center gap-4 rounded-2xl p-4"
                style={{
                  background: "var(--color-background)",
                  border: "1px solid var(--color-border)",
                }}
              >
                <FaCheckCircle
                  style={{
                    color: "var(--color-success)",
                  }}
                />

                <span
                  style={{
                    color: "var(--color-text-primary)",
                  }}
                >
                  {feature}
                </span>

              </motion.div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}

export default PlanDetails;