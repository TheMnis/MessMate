import {
  FaCrown,
  FaCreditCard,
  FaCalendarAlt,
  FaCheckCircle,
} from "react-icons/fa";

import PlanDetails from "../../components/subscription/PlanDetails";
import SubscriptionSummary from "../../components/subscription/SubscriptionSummary";
import PaymentHistory from "../../components/subscription/PaymentHistory";
import RenewSubscription from "../../components/subscription/RenewSubscription";

function Subscription() {
  const subscription = {
    plan: "Premium Student Plan",
    status: "Active",
    startDate: "01 July 2026",
    expiryDate: "31 July 2026",
    amount: "₹2,500",
    mealsPerDay: 3,
  };

  return (
    <div className="space-y-8">

      {/* Hero */}

      <section
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

        <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

          <div>

            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-2"
              style={{
                background: "rgba(255,255,255,.15)",
              }}
            >
              <FaCrown />

              Active Subscription

            </div>

            <h1 className="mt-6 text-5xl font-bold">
              {subscription.plan}
            </h1>

            <p
              className="mt-4 max-w-2xl text-lg"
              style={{
                color: "rgba(255,255,255,.9)",
              }}
            >
              Manage your subscription,
              payment history and renewal
              from one place.
            </p>

          </div>

          <div
            className="rounded-3xl p-7"
            style={{
              background: "rgba(255,255,255,.14)",
            }}
          >

            <div className="text-5xl font-bold">
              {subscription.amount}
            </div>

            <div
              className="mt-2"
              style={{
                color: "rgba(255,255,255,.9)",
              }}
            >
              Monthly Plan
            </div>

          </div>

        </div>

      </section>

      {/* Summary */}

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        <SubscriptionSummary
          title="Status"
          value={subscription.status}
          icon={<FaCheckCircle />}
          color="var(--color-success)"
          bg="var(--color-success-subtle)"
        />

        <SubscriptionSummary
          title="Start Date"
          value={subscription.startDate}
          icon={<FaCalendarAlt />}
          color="var(--color-primary)"
          bg="var(--color-primary-subtle)"
        />

        <SubscriptionSummary
          title="Expiry"
          value={subscription.expiryDate}
          icon={<FaCalendarAlt />}
          color="var(--color-warning)"
          bg="var(--color-warning-subtle)"
        />

        <SubscriptionSummary
          title="Payment"
          value={subscription.amount}
          icon={<FaCreditCard />}
          color="var(--color-secondary)"
          bg="var(--color-secondary-subtle)"
        />

      </div>
            <PlanDetails
        plan={subscription}
      />

      <RenewSubscription
        currentPlan={subscription.plan}
        amount={subscription.amount}
        expiryDate={subscription.expiryDate}
      />

      <PaymentHistory />

    </div>
  );
}

export default Subscription;