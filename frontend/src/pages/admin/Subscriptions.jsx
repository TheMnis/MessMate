import SubscriptionHeader from "../../components/admin/SubscriptionHeader";
import SubscriptionStats from "../../components/admin/SubscriptionStats";
import SubscriptionPlans from "../../components/admin/SubscriptionPlans";
import SubscriptionTable from "../../components/admin/SubscriptionTable";
import SubscriptionRevenueChart from "../../components/admin/SubscriptionRevenueChart";
import PaymentOverview from "../../components/admin/PaymentOverview";

function Subscriptions() {
  return (
    <div className="space-y-8">

      <SubscriptionHeader />

      <SubscriptionStats />

      <div className="grid gap-8 xl:grid-cols-2">

        <SubscriptionRevenueChart />

        <PaymentOverview />

      </div>


      <SubscriptionPlans />


      <SubscriptionTable />

    </div>
  );
}

export default Subscriptions;