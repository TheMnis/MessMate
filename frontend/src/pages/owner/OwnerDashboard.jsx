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

      <div className="bg-gradient-to-r from-[var(--color-secondary)] to-[var(--color-info)] [color:var(--color-text-inverse)] radius-3xl p-8 elevation-lg">

        <h1 className="text-4xl font-bold">
          👋 Welcome Back, Owner
        </h1>

        <p className="mt-3 [color:var(--color-secondary-subtle)] text-lg">
          Manage your mess, students, inventory and revenue from one place.
        </p>

      </div>

      {/* Stats */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        <StatsCard
          title="Total Students"
          value="128"
          icon={<FaUsers />}
          color="[background:var(--color-secondary)]"
          link="/owner/students"
        />

        <StatsCard
          title="Meals Today"
          value="356"
          icon={<FaUtensils />}
          color="[background:var(--color-primary)]"
          link="/owner/menu"
        />

        <StatsCard
          title="Inventory Items"
          value="42"
          icon={<FaBoxes />}
          color="[background:var(--color-highlight)]"
          link="/owner/inventory"
        />

        <StatsCard
          title="Revenue"
          value="₹1.25L"
          icon={<FaMoneyBillWave />}
          color="[background:var(--color-accent)]"
          link="/owner/reports"
        />

      </div>

      {/* Quick Actions */}

      <div className="[background:var(--color-surface)] radius-2xl elevation-md p-6">

        <h2 className="text-2xl font-bold mb-6">
          ⚡ Quick Actions
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

          <button className="[background:var(--color-secondary)] hover:[background:var(--color-secondary-hover)] [color:var(--color-text-inverse)] radius-xl p-4 font-semibold transition">
            Add Student
          </button>

          <button className="[background:var(--color-primary)] hover:[background:var(--color-primary-hover)] [color:var(--color-text-inverse)] radius-xl p-4 font-semibold transition">
            Update Menu
          </button>

          <button className="[background:var(--color-highlight)] hover:[background:var(--color-highlight-hover)] [color:var(--color-text-inverse)] radius-xl p-4 font-semibold transition">
            Inventory
          </button>

          <button className="[background:var(--color-accent)] hover:[background:var(--color-accent-hover)] [color:var(--color-text-inverse)] radius-xl p-4 font-semibold transition">
            Reports
          </button>

        </div>

      </div>

      {/* Recent Activity */}

      <div className="[background:var(--color-surface)] radius-2xl elevation-md p-6">

        <h2 className="text-2xl font-bold mb-6">
          📋 Recent Activities
        </h2>

        <div className="space-y-4">

          <div className="border-l-4 [border-color:var(--color-secondary)] pl-4">
            <h3 className="font-semibold">
              Menu Updated
            </h3>

            <p className="[color:var(--color-text-muted)] text-sm">
              Paneer Butter Masala added for today's lunch.
            </p>
          </div>

          <div className="border-l-4 [border-color:var(--color-success)] pl-4">
            <h3 className="font-semibold">
              New Student Joined
            </h3>

            <p className="[color:var(--color-text-muted)] text-sm">
              Rahul Verma subscribed to Monthly Plan.
            </p>
          </div>

          <div className="border-l-4 [border-color:var(--color-danger)] pl-4">
            <h3 className="font-semibold">
              Low Inventory Alert
            </h3>

            <p className="[color:var(--color-text-muted)] text-sm">
              Rice stock is below 20 KG.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default OwnerDashboard;
