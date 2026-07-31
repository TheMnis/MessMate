import {
  FaUsers,
  FaUtensils,
  FaBoxes,
  FaMoneyBillWave,
} from "react-icons/fa";

import StatsCard from "../../components/dashboard/StatsCard";

function OwnerDashboard() {
  return (
    <div className="space-y-8">

      {/* Welcome */}

      <div className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-3xl p-8 shadow-lg">

        <h1 className="text-4xl font-bold">
          👋 Welcome Back, Owner
        </h1>

        <p className="mt-3 text-blue-100 text-lg">
          Manage your mess, students, inventory and revenue from one place.
        </p>

      </div>

      {/* Stats */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        <StatsCard
          title="Total Students"
          value="128"
          icon={<FaUsers />}
          color="bg-blue-600"
          link="/owner/students"
        />

        <StatsCard
          title="Meals Today"
          value="356"
          icon={<FaUtensils />}
          color="bg-green-600"
          link="/owner/menu"
        />

        <StatsCard
          title="Inventory Items"
          value="42"
          icon={<FaBoxes />}
          color="bg-orange-500"
          link="/owner/inventory"
        />

        <StatsCard
          title="Revenue"
          value="₹1.25L"
          icon={<FaMoneyBillWave />}
          color="bg-purple-600"
          link="/owner/reports"
        />

      </div>

      {/* Quick Actions */}

      <div className="bg-white rounded-2xl shadow-md p-6">

        <h2 className="text-2xl font-bold mb-6">
          ⚡ Quick Actions
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

          <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl p-4 font-semibold transition">
            Add Student
          </button>

          <button className="bg-green-600 hover:bg-green-700 text-white rounded-xl p-4 font-semibold transition">
            Update Menu
          </button>

          <button className="bg-orange-500 hover:bg-orange-600 text-white rounded-xl p-4 font-semibold transition">
            Inventory
          </button>

          <button className="bg-purple-600 hover:bg-purple-700 text-white rounded-xl p-4 font-semibold transition">
            Reports
          </button>

        </div>

      </div>

      {/* Recent Activity */}

      <div className="bg-white rounded-2xl shadow-md p-6">

        <h2 className="text-2xl font-bold mb-6">
          📋 Recent Activities
        </h2>

        <div className="space-y-4">

          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="font-semibold">
              Menu Updated
            </h3>

            <p className="text-gray-500 text-sm">
              Paneer Butter Masala added for today's lunch.
            </p>
          </div>

          <div className="border-l-4 border-green-500 pl-4">
            <h3 className="font-semibold">
              New Student Joined
            </h3>

            <p className="text-gray-500 text-sm">
              Rahul Verma subscribed to Monthly Plan.
            </p>
          </div>

          <div className="border-l-4 border-red-500 pl-4">
            <h3 className="font-semibold">
              Low Inventory Alert
            </h3>

            <p className="text-gray-500 text-sm">
              Rice stock is below 20 KG.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default OwnerDashboard;