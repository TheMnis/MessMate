import { useState } from "react";

import SubscriptionHeader from "../../components/owner/SubscriptionHeader";
import SubscriptionStats from "../../components/owner/SubscriptionStats";
import CurrentPlanCard from "../../components/owner/CurrentPlanCard";
import SubscriptionPlans from "../../components/owner/SubscriptionPlans";
import UpgradePlanCard from "../../components/owner/UpgradePlanCard";
import PaymentHistory from "../../components/owner/PaymentHistory";

function Subscriptions() {
  const [selectedPlan, setSelectedPlan] =
    useState("Premium");

  return (
    <div className="space-y-8">

      <SubscriptionHeader />

      <SubscriptionStats />

      <div className="grid gap-8 xl:grid-cols-3">

        <div className="xl:col-span-2">

          <CurrentPlanCard
            plan={selectedPlan}
          />

        </div>

        <UpgradePlanCard
          selectedPlan={selectedPlan}
        />

      </div>

      <SubscriptionPlans
        selectedPlan={selectedPlan}
        onSelectPlan={setSelectedPlan}
      />

      <PaymentHistory />

    </div>
  );
}

export default Subscriptions;