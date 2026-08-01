import {
  FaTachometerAlt,
  FaUsers,
  FaStore,
  FaChartBar,
  FaCrown,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

import { NavLink } from "react-router-dom";


const menuItems = [

  {
    name: "Dashboard",
    path: "/admin/dashboard",
    icon: <FaTachometerAlt />,
  },

  {
    name: "Users",
    path: "/admin/users",
    icon: <FaUsers />,
  },

  {
    name: "Messes",
    path: "/admin/messes",
    icon: <FaStore />,
  },

  {
    name: "Reports",
    path: "/admin/reports",
    icon: <FaChartBar />,
  },

  {
    name: "Subscriptions",
    path: "/admin/subscriptions",
    icon: <FaCrown />,
  },

  {
    name: "Settings",
    path: "/admin/settings",
    icon: <FaCog />,
  },

];


function AdminSidebar() {

  return (
    <aside
      className="flex h-full flex-col p-5"
      style={{
        background:
          "var(--color-surface)",
        borderRight:
          "1px solid var(--color-border)",
      }}
    >

      <div className="mb-8 flex items-center gap-3">

        <div
          className="flex h-12 w-12 items-center justify-center rounded-2xl text-xl font-bold"
          style={{
            background:
              "var(--gradient-primary)",
            color:
              "var(--color-text-inverse)",
          }}
        >
          M
        </div>


        <div>

          <h1
            className="text-xl font-bold"
            style={{
              color:
                "var(--color-text-primary)",
            }}
          >
            MessMate
          </h1>


          <p
            className="text-sm"
            style={{
              color:
                "var(--color-text-secondary)",
            }}
          >
            Admin Panel
          </p>

        </div>

      </div>



      <nav className="flex-1 space-y-2">

        {menuItems.map((item) => (

          <NavLink
            key={item.name}
            to={item.path}
            className="flex items-center gap-4 rounded-2xl px-4 py-3 font-semibold transition-all"
            style={({ isActive }) => ({
              background: isActive
                ? "var(--color-primary-subtle)"
                : "transparent",

              color: isActive
                ? "var(--color-primary)"
                : "var(--color-text-secondary)",
            })}
          >

            <span className="text-lg">
              {item.icon}
            </span>

            {item.name}

          </NavLink>

        ))}

      </nav>



      <button
        className="flex items-center gap-4 rounded-2xl px-4 py-3 font-semibold"
        style={{
          background:
            "var(--color-danger-subtle)",
          color:
            "var(--color-danger)",
        }}
      >

        <FaSignOutAlt />

        Logout

      </button>


    </aside>
  );
}


export default AdminSidebar;