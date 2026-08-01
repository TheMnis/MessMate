import WelcomeBanner from "../../components/dashboard/WelcomeBanner";
import StatsGrid from "../../components/dashboard/StatsGrid";
import QuickActions from "../../components/dashboard/QuickActions";
import AttendanceOverview from "../../components/dashboard/AttendanceOverview";
import NotificationCard from "../../components/dashboard/NotificationCard";

function Dashboard() {
  return (
    <div className="space-y-8">

      {/* Hero */}

      <WelcomeBanner
        studentName="Vijendra"
        attendance={92}
        todaysMeals={4}
        notifications={3}
      />

      {/* Stats */}

      <StatsGrid
        attendance={92}
        meals={4}
        notifications={3}
        wallet={1250}
      />

      {/* Main Section */}

      <div className="grid gap-8 xl:grid-cols-3">

        <div className="xl:col-span-2">
          <AttendanceOverview />
        </div>

        <div>
          <NotificationCard />
        </div>

      </div>

      {/* Quick Actions */}

      <QuickActions />

    </div>
  );
}

export default Dashboard;
