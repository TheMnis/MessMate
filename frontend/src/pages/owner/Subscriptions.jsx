import SubscriptionHeader from "../../components/owner/SubscriptionHeader";
import CurrentPlanCard from "../../components/owner/CurrentPlanCard";
import PaymentHistory from "../../components/owner/PaymentHistory";
import SubscriptionPlans from "../../components/owner/SubscriptionPlans";
import InvoiceTable from "../../components/owner/InvoiceTable";

import {
  getSubscription,
  getPaymentHistory,
} from "../../services/owner/subscription.service";

function Subscriptions() {

  const subscription = getSubscription();

  const payments = getPaymentHistory();

  return (

    <div className="space-y-8">

      <SubscriptionHeader />

      <CurrentPlanCard
        plan={subscription}
      />

      <SubscriptionPlans />

      <PaymentHistory
        payments={payments}
      />

      <InvoiceTable
        payments={payments}
      />

    </div>

  );
}

export default Subscriptions;