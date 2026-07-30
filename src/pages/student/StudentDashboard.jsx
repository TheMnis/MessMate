import {
  FaUtensils,
  FaClipboardCheck,
  FaWallet,
  FaFire,
} from "react-icons/fa";

import StudentLayout from "../../layouts/StudentLayout";
import DashboardCard from "../../components/dashboard/DashboardCard";

function StudentDashboard() {
  return (
    <StudentLayout>
      <div className="space-y-8">

        {/* Heading */}

        <div>
          <h1 className="text-4xl font-bold text-gray-800">
            Dashboard
          </h1>

          <p className="text-gray-500 mt-2">
            Welcome back! Here's your mess activity overview.
          </p>
        </div>

        {/* Dashboard Cards */}

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

          <DashboardCard
            title="Today's Meals"
            value="03"
            icon={<FaUtensils />}
            color="from-green-500 to-emerald-600"
            change="+12%"
          />

          <DashboardCard
            title="Attendance"
            value="92%"
            icon={<FaClipboardCheck />}
            color="from-blue-500 to-cyan-600"
            change="+8%"
          />

          <DashboardCard
            title="Active Plan"
            value="Monthly"
            icon={<FaWallet />}
            color="from-purple-500 to-pink-600"
            change="+5%"
          />

          <DashboardCard
            title="Remaining Meals"
            value="46"
            icon={<FaFire />}
            color="from-orange-500 to-red-600"
            change="+18%"
          />

        </div>

        {/* Bottom Section */}

        <div className="grid lg:grid-cols-3 gap-6">

          {/* Today's Menu */}

          <div className="lg:col-span-2 bg-white rounded-3xl shadow-md p-8">

            <h2 className="text-2xl font-bold mb-6">
              🍛 Today's Menu
            </h2>

            <div className="grid md:grid-cols-3 gap-5">

              <div className="bg-green-50 rounded-2xl p-5">
                <h3 className="font-bold text-green-700">
                  Breakfast
                </h3>

                <ul className="mt-3 space-y-2 text-gray-600">
                  <li>🥣 Poha</li>
                  <li>🍌 Banana</li>
                  <li>☕ Tea</li>
                </ul>
              </div>

              <div className="bg-orange-50 rounded-2xl p-5">
                <h3 className="font-bold text-orange-700">
                  Lunch
                </h3>

                <ul className="mt-3 space-y-2 text-gray-600">
                  <li>🍚 Rice</li>
                  <li>🥣 Dal Fry</li>
                  <li>🧀 Paneer Masala</li>
                </ul>
              </div>

              <div className="bg-blue-50 rounded-2xl p-5">
                <h3 className="font-bold text-blue-700">
                  Dinner
                </h3>

                <ul className="mt-3 space-y-2 text-gray-600">
                  <li>🫓 Roti</li>
                  <li>🥬 Mixed Veg</li>
                  <li>🍮 Gulab Jamun</li>
                </ul>
              </div>

            </div>

          </div>

          {/* Quick Actions */}

          <div className="bg-white rounded-3xl shadow-md p-8">

            <h2 className="text-2xl font-bold mb-6">
              ⚡ Quick Actions
            </h2>

            <div className="space-y-4">

              <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl transition">
                Mark Attendance
              </button>

              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl transition">
                View Subscription
              </button>

              <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl transition">
                Suggest Food
              </button>

              <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-xl transition">
                Notifications
              </button>

            </div>

          </div>

        </div>

      </div>
    </StudentLayout>
  );
}

export default StudentDashboard;