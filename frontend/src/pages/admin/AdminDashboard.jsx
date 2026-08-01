import AdminHeader from "../../components/admin/AdminHeader";
import AdminStats from "../../components/admin/AdminStats";
import RevenueChart from "../../components/admin/RevenueChart";
import UserAnalytics from "../../components/admin/UserAnalytics";
import RecentUsers from "../../components/admin/RecentUsers";
import SystemActivity from "../../components/admin/SystemActivity";

function AdminDashboard() {
  return (
    <div className="space-y-8">

      <AdminHeader />

      <AdminStats />

      <div className="grid gap-8 xl:grid-cols-2">

        <RevenueChart />

        <UserAnalytics />

      </div>

      <div className="grid gap-8 xl:grid-cols-2">

        <RecentUsers />

        <SystemActivity />

      </div>

    </div>
  );
}

export default AdminDashboard;