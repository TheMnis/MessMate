import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaUtensils,
  FaClipboardCheck,
  FaWallet,
  FaChartPie,
  FaComments,
  FaCog,
  FaSignOutAlt,
  FaTimes,
} from "react-icons/fa";

const menuItems = [
  {
    title: "Dashboard",
    path: "/student",
    icon: <FaHome />,
  },
  {
    title: "Today's Menu",
    path: "/student/menu",
    icon: <FaUtensils />,
  },
  {
    title: "Attendance",
    path: "/student/attendance",
    icon: <FaClipboardCheck />,
  },
  {
    title: "Subscription",
    path: "/student/subscription",
    icon: <FaWallet />,
  },
  {
    title: "Analytics",
    path: "/student/analytics",
    icon: <FaChartPie />,
  },
  {
    title: "Suggest Food",
    path: "/student/suggestions",
    icon: <FaComments />,
  },
  {
    title: "Settings",
    path: "/student/settings",
    icon: <FaCog />,
  },
];

function Sidebar({ isOpen, closeSidebar }) {
  return (
    <>
      {/* Overlay */}

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={closeSidebar}
        />
      )}

      {/* Sidebar */}

      <aside
        className={`
        fixed lg:static
        top-0 left-0
        h-screen
        w-72
        bg-white
        shadow-xl
        border-r
        z-50
        transition-transform
        duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
      `}
      >
        {/* Header */}

        <div className="flex items-center justify-between p-6 border-b">

          <div>

            <h1 className="text-3xl font-bold text-green-600">
              MessMate
            </h1>

            <p className="text-sm text-gray-500 mt-1">
              Student Dashboard
            </p>

          </div>

          <button
            onClick={closeSidebar}
            className="lg:hidden text-2xl"
          >
            <FaTimes />
          </button>

        </div>

        {/* Menu */}

        <nav className="p-5">

          <ul className="space-y-3">

            {menuItems.map((item) => (
              <li key={item.title}>
                <NavLink
                  to={item.path}
                  onClick={closeSidebar}
                  className={({ isActive }) =>
                    `flex items-center gap-4 px-5 py-4 rounded-xl font-medium transition-all duration-300 ${
                      isActive
                        ? "bg-green-600 text-white shadow-lg"
                        : "text-gray-700 hover:bg-green-50 hover:text-green-600"
                    }`
                  }
                >
                  <span className="text-xl">
                    {item.icon}
                  </span>

                  {item.title}
                </NavLink>
              </li>
            ))}

          </ul>

        </nav>

        {/* Bottom */}

        <div className="absolute bottom-6 left-5 right-5">

          <button
            className="
              w-full
              flex
              items-center
              justify-center
              gap-3
              bg-red-500
              hover:bg-red-600
              text-white
              py-3
              rounded-xl
              transition
            "
          >
            <FaSignOutAlt />

            Logout
          </button>

        </div>

      </aside>
    </>
  );
}

export default Sidebar;