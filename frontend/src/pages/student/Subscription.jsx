import SubscriptionSummary from "../../components/subscription/SubscriptionSummary";
import PlanDetails from "../../components/subscription/PlanDetails";
import PaymentHistory from "../../components/subscription/PaymentHistory";
import RenewSubscription from "../../components/subscription/RenewSubscription";

import { getSubscription } from "../../services/student/subscription.service";

function Subscription() {
  const subscription = getSubscription();

  return (
    <div className="space-y-8">

      <SubscriptionSummary
        subscription={subscription}
      />

      <PlanDetails />

      <PaymentHistory />

      <RenewSubscription />

    </div>
  );
}

export default Subscription;
