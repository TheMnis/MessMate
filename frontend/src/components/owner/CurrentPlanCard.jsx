import {
  FaCrown,
  FaCalendarAlt,
} from "react-icons/fa";

function CurrentPlanCard({ plan }) {
  return (
    <div className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-hover)] [color:var(--color-text-inverse)] radius-3xl p-8 elevation-xl">

      <div className="flex justify-between items-center">

        <div>

          <p className="opacity-80">
            Current Plan
          </p>

          <h2 className="text-4xl font-bold mt-2">
            {plan.currentPlan}
          </h2>

          <p className="mt-4 text-xl">
            ₹{plan.amount} / {plan.billingCycle}
          </p>

        </div>

        <FaCrown className="text-6xl opacity-80" />

      </div>

      <div className="mt-8 flex items-center gap-3">

        <FaCalendarAlt />

        <span>
          Expires on {plan.expiryDate}
        </span>

      </div>

    </div>
  );
}

export default CurrentPlanCard;
