import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaTachometerAlt,
  FaUsers,
  FaBuilding,
  FaChartBar,
  FaCog,
  FaUserShield,
  FaSignOutAlt,
} from "react-icons/fa";

const menuItems = [
  {
    title: "Dashboard",
    path: "/admin/dashboard",
    icon: FaTachometerAlt,
  },
  {
    title: "Users",
    path: "/admin/users",
    icon: FaUsers,
  },
  {
    title: "Messes",
    path: "/admin/messes",
    icon: FaBuilding,
  },
  {
    title: "Reports",
    path: "/admin/reports",
    icon: FaChartBar,
  },
  {
    title: "Settings",
    path: "/admin/settings",
    icon: FaCog,
  },
];

function AdminMobileSidebar() {
  const [open, setOpen] =
    useState(false);

  return (
    <>
      <button
        onClick={() =>
          setOpen(true)
        }
        className="fixed left-5 top-5 z-50 flex h-12 w-12 items-center justify-center rounded-2xl xl:hidden"
        style={{
          background:
            "var(--color-primary)",
          color:
            "var(--color-text-inverse)",
          boxShadow:
            "var(--shadow-lg)",
        }}
      >
        <FaBars />
      </button>

      {open && (
        <>
          <div
            onClick={() =>
              setOpen(false)
            }
            className="fixed inset-0 z-40"
            style={{
              background:
                "rgba(0,0,0,.45)",
              backdropFilter:
                "blur(6px)",
            }}
          />

          <aside
            className="fixed left-0 top-0 z-50 flex h-screen w-72 flex-col"
            style={{
              background:
                "var(--color-surface)",
              borderRight:
                "1px solid var(--color-border)",
              boxShadow:
                "var(--shadow-xl)",
            }}
          >
            <div
              className="flex items-center justify-between p-6"
              style={{
                borderBottom:
                  "1px solid var(--color-border)",
              }}
            >
              <div>

                <h2
                  className="text-2xl font-bold"
                  style={{
                    color:
                      "var(--color-primary)",
                  }}
                >
                  MessMate
                </h2>

                <p
                  style={{
                    color:
                      "var(--color-text-secondary)",
                  }}
                >
                  Super Admin
                </p>

              </div>

              <button
                onClick={() =>
                  setOpen(false)
                }
                className="flex h-11 w-11 items-center justify-center rounded-2xl"
                style={{
                  background:
                    "var(--color-danger-subtle)",
                  color:
                    "var(--color-danger)",
                }}
              >
                <FaTimes />
              </button>

            </div>

            <nav className="flex-1 space-y-2 p-5">

              {menuItems.map((item) => {
                const Icon =
                  item.icon;

                return (
                  <NavLink
                    key={item.title}
                    to={item.path}
                    onClick={() =>
                      setOpen(false)
                    }
                    className={({ isActive }) =>
                      `flex items-center gap-4 rounded-2xl px-5 py-4 transition-all ${
                        isActive
                          ? "shadow-lg"
                          : ""
                      }`
                    }
                    style={({
                      isActive,
                    }) => ({
                      background:
                        isActive
                          ? "var(--gradient-primary)"
                          : "transparent",
                      color:
                        isActive
                          ? "var(--color-text-inverse)"
                          : "var(--color-text-primary)",
                    })}
                  >
                    <Icon size={20} />

                    <span className="font-semibold">
                      {item.title}
                    </span>

                  </NavLink>
                );
              })}

            </nav>

            <div
              className="border-t p-5"
              style={{
                borderColor:
                  "var(--color-border)",
              }}
            >
              <div
                className="mb-5 flex items-center gap-4 rounded-2xl p-4"
                style={{
                  background:
                    "var(--color-background)",
                }}
              >
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-2xl"
                  style={{
                    background:
                      "var(--gradient-primary)",
                    color:
                      "var(--color-text-inverse)",
                  }}
                >
                  <FaUserShield />
                </div>

                <div>

                  <div
                    className="font-bold"
                    style={{
                      color:
                        "var(--color-text-primary)",
                    }}
                  >
                    Super Admin
                  </div>

                  <div
                    className="text-sm"
                    style={{
                      color:
                        "var(--color-text-secondary)",
                    }}
                  >
                    administrator
                  </div>

                </div>

              </div>

              <button
                className="flex w-full items-center justify-center gap-3 rounded-2xl py-4 font-semibold"
                style={{
                  background:
                    "var(--color-danger)",
                  color:
                    "var(--color-text-inverse)",
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

export default AdminMobileSidebar;