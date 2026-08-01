import { NavLink } from "react-router-dom";
import {
  FaTachometerAlt,
  FaUsers,
  FaBuilding,
  FaChartBar,
  FaCog,
  FaSignOutAlt,
  FaUserShield,
} from "react-icons/fa";

const menuItems = [
  {
    title: "Dashboard",
    path: "/admin/dashboard",
    icon: <FaTachometerAlt />,
  },
  {
    title: "Users",
    path: "/admin/users",
    icon: <FaUsers />,
  },
  {
    title: "Messes",
    path: "/admin/messes",
    icon: <FaBuilding />,
  },
  {
    title: "Reports",
    path: "/admin/reports",
    icon: <FaChartBar />,
  },
  {
    title: "Settings",
    path: "/admin/settings",
    icon: <FaCog />,
  },
];

function AdminSidebar() {
  return (
    <aside
      className="sticky top-0 flex h-screen w-72 flex-col justify-between border-r"
      style={{
        background: "var(--color-surface)",
        borderColor: "var(--color-border)",
      }}
    >
      <div>

        <div
          className="flex items-center gap-4 border-b p-6"
          style={{
            borderColor: "var(--color-border)",
          }}
        >
          <div
            className="flex h-14 w-14 items-center justify-center rounded-2xl text-2xl"
            style={{
              background: "var(--gradient-primary)",
              color: "var(--color-text-inverse)",
            }}
          >
            <FaUserShield />
          </div>

          <div>

            <h2
              className="text-2xl font-bold"
              style={{
                color: "var(--color-text-primary)",
              }}
            >
              MessMate
            </h2>

            <p
              style={{
                color: "var(--color-text-secondary)",
              }}
            >
              Super Admin
            </p>

          </div>

        </div>

        <nav className="space-y-2 p-5">

          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-4 rounded-2xl px-5 py-4 font-semibold transition-all ${
                  isActive
                    ? "scale-[1.02]"
                    : "hover:translate-x-1"
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
              <span className="text-xl">

                {item.icon}

              </span>

              {item.title}

            </NavLink>
          ))}

        </nav>

      </div>

      <div
        className="border-t p-5"
        style={{
          borderColor: "var(--color-border)",
        }}
      >
        <div
          className="mb-5 rounded-2xl p-4"
          style={{
            background: "var(--color-background)",
          }}
        >
          <div
            className="text-sm"
            style={{
              color: "var(--color-text-secondary)",
            }}
          >
            Logged in as
          </div>

          <div
            className="mt-2 text-lg font-bold"
            style={{
              color: "var(--color-text-primary)",
            }}
          >
            Super Admin
          </div>

        </div>

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

export default AdminSidebar;