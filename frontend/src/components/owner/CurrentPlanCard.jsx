import {
  FaCrown,
  FaCalendarAlt,
  FaCheckCircle,
  FaStar,
} from "react-icons/fa";

function CurrentPlanCard({
  plan = "Premium",
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
              background:
                "var(--color-warning-subtle)",
              color:
                "var(--color-warning)",
            }}
          >
            <FaCrown />

            Current Plan

          </div>

          <h2
            className="mt-5 text-5xl font-bold"
            style={{
              color:
                "var(--color-text-primary)",
            }}
          >
            {plan}
          </h2>

          <p
            className="mt-4"
            style={{
              color:
                "var(--color-text-secondary)",
            }}
          >
            Your subscription is currently active
            and all premium features are enabled.
          </p>

        </div>

        <div className="grid gap-5 sm:grid-cols-2">

          <div
            className="rounded-2xl p-5"
            style={{
              background:
                "var(--color-background)",
            }}
          >
            <div className="flex items-center gap-2">

              <FaCalendarAlt
                style={{
                  color:
                    "var(--color-primary)",
                }}
              />

              Renewal

            </div>

            <h3
              className="mt-3 text-2xl font-bold"
              style={{
                color:
                  "var(--color-text-primary)",
              }}
            >
              24 Aug 2026
            </h3>

          </div>

          <div
            className="rounded-2xl p-5"
            style={{
              background:
                "var(--color-background)",
            }}
          >
            <div className="flex items-center gap-2">

              <FaCheckCircle
                style={{
                  color:
                    "var(--color-success)",
                }}
              />

              Status

            </div>

            <h3
              className="mt-3 text-2xl font-bold"
              style={{
                color:
                  "var(--color-success)",
              }}
            >
              Active
            </h3>

          </div>

        </div>

      </div>

      <div className="mt-8">

        <h3
          className="mb-4 text-xl font-bold"
          style={{
            color:
              "var(--color-text-primary)",
          }}
        >
          Plan Features
        </h3>

        <div className="grid gap-4 md:grid-cols-2">

          {[
            "Unlimited Students",
            "Meal Management",
            "Inventory Management",
            "Reports & Analytics",
            "Attendance Tracking",
            "Priority Support",
          ].map((feature) => (
            <div
              key={feature}
              className="flex items-center gap-3 rounded-2xl p-4"
              style={{
                background:
                  "var(--color-background)",
              }}
            >
              <FaStar
                style={{
                  color:
                    "var(--color-warning)",
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

      </div>

    </section>
  );
}
export default CurrentPlanCard;