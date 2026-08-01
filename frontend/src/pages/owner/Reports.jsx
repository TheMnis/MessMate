import ReportHeader from "../../components/owner/ReportHeader";
import ReportStats from "../../components/owner/ReportStats";
import RevenueChart from "../../components/owner/RevenueChart";
import AttendanceChart from "../../components/owner/AttendanceChart";
import MealAnalytics from "../../components/owner/MealAnalytics";
import RecentActivity from "../../components/owner/RecentActivity";

import {
  dashboardStats,
  revenueData,
} from "../../services/owner/reports.service";

function Reports() {

  return (

    <div className="space-y-8">

      <ReportHeader />

      <ReportStats
        stats={dashboardStats}
      />

      <RevenueChart
        data={revenueData}
      />

      <div className="grid lg:grid-cols-2 gap-8">

        <AttendanceChart />

        <MealAnalytics />

      </div>

      <RecentActivity />

    </div>

  );

}

export default Reports;
