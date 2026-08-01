import {
  FaUsers,
  FaRupeeSign,
  FaUtensils,
  FaClipboardCheck,
} from "react-icons/fa";

import StatsCard from "../../components/owner/StatsCard";
import RevenueChart from "../../components/owner/RevenueChart";
import AttendanceChart from "../../components/owner/AttendanceChart";
import MealAnalytics from "../../components/owner/MealAnalytics";
import RecentActivity from "../../components/owner/RecentActivity";

function OwnerDashboard() {
  return (
    <div className="space-y-8">

      {/* Hero */}

      <section
        className="rounded-3xl p-8"
        style={{
          background: "var(--gradient-primary)",
          color: "var(--color-text-inverse)",
          boxShadow: "var(--shadow-xl)",
        }}
      >

        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

          <div>

            <div
              className="inline-flex rounded-full px-4 py-2"
              style={{
                background: "rgba(255,255,255,.15)",
              }}
            >
              Mess Dashboard
            </div>

            <h1 className="mt-5 text-5xl font-bold">
              Welcome Back 👋
            </h1>

            <p
              className="mt-4 max-w-2xl text-lg"
              style={{
                color: "rgba(255,255,255,.9)",
              }}
            >
              Monitor students,
              revenue,
              attendance,
              meals and overall mess
              performance from one dashboard.
            </p>

          </div>

        </div>

      </section>

      {/* Stats */}

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        <StatsCard
          title="Students"
          value="248"
          icon={<FaUsers />}
          color="var(--color-primary)"
          bg="var(--color-primary-subtle)"
        />

        <StatsCard
          title="Revenue"
          value="₹78,000"
          icon={<FaRupeeSign />}
          color="var(--color-success)"
          bg="var(--color-success-subtle)"
        />

        <StatsCard
          title="Meals Today"
          value="712"
          icon={<FaUtensils />}
          color="var(--color-warning)"
          bg="var(--color-warning-subtle)"
        />

        <StatsCard
          title="Attendance"
          value="91%"
          icon={<FaClipboardCheck />}
          color="var(--color-secondary)"
          bg="var(--color-secondary-subtle)"
        />

      </div>

      {/* Charts */}

      <div className="grid gap-6 xl:grid-cols-2">

        <RevenueChart />

        <AttendanceChart />

      </div>

      <div className="grid gap-6 xl:grid-cols-2">

        <MealAnalytics />

        <RecentActivity />

      </div>

    </div>
  );
}

export default OwnerDashboard;