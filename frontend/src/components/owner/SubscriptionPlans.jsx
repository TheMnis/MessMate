import { motion } from "framer-motion";
import {
  FaCheck,
  FaCrown,
  FaRocket,
  FaGem,
} from "react-icons/fa";

const plans = [
  {
    id: 1,
    name: "Basic",
    price: 499,
    icon: <FaRocket />,
    color: "var(--color-secondary)",
    bg: "var(--color-secondary-subtle)",
    features: [
      "Up to 50 Students",
      "Attendance",
      "Daily Menu",
      "Basic Reports",
    ],
  },
  {
    id: 2,
    name: "Premium",
    price: 999,
    icon: <FaCrown />,
    color: "var(--color-warning)",
    bg: "var(--color-warning-subtle)",
    popular: true,
    features: [
      "Unlimited Students",
      "Inventory",
      "Meal Management",
      "Advanced Reports",
      "Notifications",
      "Priority Support",
    ],
  },
  {
    id: 3,
    name: "Enterprise",
    price: 1999,
    icon: <FaGem />,
    color: "var(--color-primary)",
    bg: "var(--color-primary-subtle)",
    features: [
      "Everything in Premium",
      "Multiple Messes",
      "Custom Branding",
      "Analytics",
      "Dedicated Support",
    ],
  },
];

function SubscriptionPlans({
  selectedPlan,
  onSelectPlan,
}) {
  return (
    <section>

      <div className="mb-8">

        <h2
          className="text-3xl font-bold"
          style={{
            color: "var(--color-text-primary)",
          }}
        >
          Available Plans
        </h2>

        <p
          className="mt-2"
          style={{
            color: "var(--color-text-secondary)",
          }}
        >
          Choose the plan that best fits your mess.
        </p>

      </div>

      <div className="grid gap-8 lg:grid-cols-3">

        {plans.map((plan) => {

          const active =
            selectedPlan === plan.name;

          return (
            <motion.div
              key={plan.id}
              whileHover={{
                y: -8,
              }}
              className="relative rounded-3xl p-8"
              style={{
                background:
                  "var(--color-surface)",
                border: active
                  ? "2px solid var(--color-primary)"
                  : "1px solid var(--color-border)",
                boxShadow:
                  "var(--shadow-lg)",
              }}
            >

              {plan.popular && (
                <div
                  className="absolute right-6 top-6 rounded-full px-4 py-2 text-sm font-semibold"
                  style={{
                    background:
                      "var(--color-primary)",
                    color:
                      "var(--color-text-inverse)",
                  }}
                >
                  Most Popular
                </div>
              )}

              <div
                className="flex h-20 w-20 items-center justify-center rounded-3xl text-3xl"
                style={{
                  background: plan.bg,
                  color: plan.color,
                }}
              >
                {plan.icon}
              </div>

              <h2
                className="mt-6 text-3xl font-bold"
                style={{
                  color:
                    "var(--color-text-primary)",
                }}
              >
                {plan.name}
              </h2>

              <div
                className="mt-4 text-5xl font-bold"
                style={{
                  color:
                    "var(--color-text-primary)",
                }}
              >
                ₹{plan.price}

                <span
                  className="ml-2 text-lg font-normal"
                  style={{
                    color:
                      "var(--color-text-secondary)",
                  }}
                >
                  /month
                </span>

              </div>

              <div className="mt-8 space-y-4">

                {plan.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-3"
                  >
                    <FaCheck
                      style={{
                        color:
                          "var(--color-success)",
                      }}
                    />

                    <span
                      style={{
                        color:
                          "var(--color-text-primary)",
                      }}
                    >
                      {feature}
                    </span>

                  </div>
                ))}

              </div>

              <button
                onClick={() =>
                  onSelectPlan(plan.name)
                }
                className="mt-10 w-full rounded-2xl py-4 font-semibold transition-all hover:scale-[1.02]"
                style={{
                  background: active
                    ? "var(--color-success)"
                    : "var(--color-primary)",
                  color:
                    "var(--color-text-inverse)",
                }}
              >
                {active
                  ? "Current Plan"
                  : "Select Plan"}
              </button>

            </motion.div>
          );
        })}

      </div>

    </section>
  );
}

export default SubscriptionPlans;