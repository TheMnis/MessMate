import {
  FaClipboardCheck,
  FaUtensils,
  FaWallet,
  FaBell,
} from "react-icons/fa";

import WelcomeBanner from "../../components/dashboard/WelcomeBanner";
import StatsCard from "../../components/dashboard/StatsCard";
import TodayMenuCard from "../../components/dashboard/TodayMenuCard";
import RecentNotifications from "../../components/dashboard/RecentNotifications";
import AttendanceProgressCard from "../../components/dashboard/AttendanceProgressCard";

function StudentDashboard() {
  return (
    <div className="space-y-8">

      <WelcomeBanner />

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        <StatsCard
          title="Attendance"
          value="92%"
          icon={<FaClipboardCheck />}
          color="bg-green-500"
          link="/student/attendance"
        />

        <StatsCard
          title="Today's Meals"
          value="3"
          icon={<FaUtensils />}
          color="bg-orange-500"
          link="/student/menu"
        />

        <StatsCard
          title="Subscription"
          value="Active"
          icon={<FaWallet />}
          color="bg-blue-500"
          link="/student/subscription"
        />

        <StatsCard
          title="Notifications"
          value="4"
          icon={<FaBell />}
          color="bg-red-500"
          link="/student/notifications"
        />

      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

        <TodayMenuCard />

        <RecentNotifications />

      </div>

      <AttendanceProgressCard />

    </div>
  );
}

export default StudentDashboard;