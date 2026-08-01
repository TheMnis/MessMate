import { NavLink } from "react-router-dom";
import {
  FaChartPie,
  FaUsers,
  FaUtensils,
  FaHamburger,
  FaBoxes,
  FaCreditCard,
  FaChartBar,
  FaUserCircle,
  FaSignOutAlt,
} from "react-icons/fa";

const menus = [
  {
    name: "Dashboard",
    icon: FaChartPie,
    path: "/owner/dashboard",
  },
  {
    name: "Students",
    icon: FaUsers,
    path: "/owner/students",
  },
  {
    name: "Menu",
    icon: FaUtensils,
    path: "/owner/menu",
  },
  {
    name: "Meals",
    icon: FaHamburger,
    path: "/owner/meals",
  },
  {
    name: "Inventory",
    icon: FaBoxes,
    path: "/owner/inventory",
  },
  {
    name: "Subscriptions",
    icon: FaCreditCard,
    path: "/owner/subscriptions",
  },
  {
    name: "Reports",
    icon: FaChartBar,
    path: "/owner/reports",
  },
  {
    name: "Profile",
    icon: FaUserCircle,
    path: "/owner/profile",
  },
];

function OwnerSidebar() {
  return (
    <aside
      className="flex h-screen w-72 flex-col"
      style={{
        background: "var(--color-surface)",
        borderRight: "1px solid var(--color-border)",
      }}
    >
      <div
        className="p-8"
        style={{
          borderBottom: "1px solid var(--color-border)",
        }}
      >
        <h1
          className="text-3xl font-bold"
          style={{
            color: "var(--color-primary)",
          }}
        >
          MessMate
        </h1>

        <p
          className="mt-2"
          style={{
            color: "var(--color-text-secondary)",
          }}
        >
          Owner Panel
        </p>
      </div>

      <nav className="flex-1 space-y-2 p-5">

        {menus.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-4 rounded-2xl px-5 py-4 transition-all ${
                  isActive ? "shadow-lg" : ""
                }`
              }
              style={({ isActive }) => ({
                background: isActive
                  ? "var(--gradient-primary)"
                  : "transparent",
                color: isActive
                  ? "var(--color-text-inverse)"
                  : "var(--color-text-primary)",
              })}
            >
              <Icon size={20} />

              <span className="font-semibold">
                {item.name}
              </span>
            </NavLink>
          );
        })}

      </nav>

      <div
        className="p-5"
        style={{
          borderTop: "1px solid var(--color-border)",
        }}
      >
        <button
          className="flex w-full items-center justify-center gap-3 rounded-2xl py-4 font-semibold transition-all hover:scale-[1.02]"
          style={{
            background: "var(--color-danger)",
            color: "var(--color-text-inverse)",
          }}
        >
          <FaSignOutAlt />

          Logout
        </button>
      </div>
    </aside>
  );
}

export default OwnerSidebar;