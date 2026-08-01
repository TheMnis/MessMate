import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaBars,
  FaTimes,
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
    path: "/owner/dashboard",
    icon: FaChartPie,
  },
  {
    name: "Students",
    path: "/owner/students",
    icon: FaUsers,
  },
  {
    name: "Menu",
    path: "/owner/menu",
    icon: FaUtensils,
  },
  {
    name: "Meals",
    path: "/owner/meals",
    icon: FaHamburger,
  },
  {
    name: "Inventory",
    path: "/owner/inventory",
    icon: FaBoxes,
  },
  {
    name: "Subscriptions",
    path: "/owner/subscriptions",
    icon: FaCreditCard,
  },
  {
    name: "Reports",
    path: "/owner/reports",
    icon: FaChartBar,
  },
  {
    name: "Profile",
    path: "/owner/profile",
    icon: FaUserCircle,
  },
];

function OwnerMobileSidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed left-5 top-5 z-50 flex h-12 w-12 items-center justify-center rounded-2xl xl:hidden"
        style={{
          background: "var(--color-primary)",
          color: "var(--color-text-inverse)",
          boxShadow: "var(--shadow-lg)",
        }}
      >
        <FaBars />
      </button>

      {open && (
        <>
          <div
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-40"
            style={{
              background: "rgba(0,0,0,.45)",
              backdropFilter: "blur(6px)",
            }}
          />

          <aside
            className="fixed left-0 top-0 z-50 flex h-screen w-72 flex-col"
            style={{
              background: "var(--color-surface)",
              borderRight: "1px solid var(--color-border)",
              boxShadow: "var(--shadow-xl)",
            }}
          >
            <div
              className="flex items-center justify-between p-6"
              style={{
                borderBottom: "1px solid var(--color-border)",
              }}
            >
              <div>

                <h2
                  className="text-2xl font-bold"
                  style={{
                    color: "var(--color-primary)",
                  }}
                >
                  MessMate
                </h2>

                <p
                  style={{
                    color: "var(--color-text-secondary)",
                  }}
                >
                  Owner Panel
                </p>

              </div>

              <button
                onClick={() => setOpen(false)}
                className="flex h-11 w-11 items-center justify-center rounded-2xl"
                style={{
                  background: "var(--color-danger-subtle)",
                  color: "var(--color-danger)",
                }}
              >
                <FaTimes />
              </button>

            </div>

            <nav className="flex-1 space-y-2 p-5">

              {menus.map((item) => {
                const Icon = item.icon;

                return (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    onClick={() => setOpen(false)}
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
                className="flex w-full items-center justify-center gap-3 rounded-2xl py-4 font-semibold"
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
        </>
      )}
    </>
  );
}

export default OwnerMobileSidebar;