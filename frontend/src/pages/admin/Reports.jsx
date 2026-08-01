import ReportHeader from "../../components/admin/ReportHeader";
import ReportStats from "../../components/admin/ReportStats";
import RevenueReportChart from "../../components/admin/RevenueReportChart";
import GrowthChart from "../../components/admin/GrowthChart";
import InvoiceTable from "../../components/admin/InvoiceTable";
import AdminActivity from "../../components/admin/AdminActivity";

function Reports() {
  return (
    <div className="space-y-8">

      <ReportHeader />

      <ReportStats />

      <div className="grid gap-8 xl:grid-cols-2">

        <RevenueReportChart />

        <GrowthChart />

      </div>


      <InvoiceTable />


      <AdminActivity />

    </div>
  );
}

export default Reports;