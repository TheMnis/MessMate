import ReportHeader from "../../components/owner/ReportHeader";
import ReportStats from "../../components/owner/ReportStats";
import RevenueChart from "../../components/owner/RevenueChart";
import AttendanceChart from "../../components/owner/AttendanceChart";
import MealAnalytics from "../../components/owner/MealAnalytics";
import RecentActivity from "../../components/owner/RecentActivity";
import InvoiceTable from "../../components/owner/InvoiceTable";

function Reports() {
  return (
    <div className="space-y-8">

      <ReportHeader />

      <ReportStats />

      <div className="grid gap-8 xl:grid-cols-2">

        <RevenueChart />

        <AttendanceChart />

      </div>

      <div className="grid gap-8 xl:grid-cols-2">

        <MealAnalytics />

        <RecentActivity />

      </div>

      <InvoiceTable />

    </div>
  );
}

export default Reports;