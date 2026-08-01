import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaUtensils,
  FaClipboardCheck,
  FaWallet,
  FaBell,
  FaUserCircle,
  FaSignOutAlt,
  FaTimes,
} from "react-icons/fa";

const menuItems = [
  {
    title: "Dashboard",
    path: "/student/dashboard",
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
    title: "Notifications",
    path: "/student/notifications",
    icon: <FaBell />,
  },
  {
    title: "Subscription",
    path: "/student/subscription",
    icon: <FaWallet />,
  },
  {
    title: "Profile",
    path: "/student/profile",
    icon: <FaUserCircle />,
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
          bg-surface
          elevation-xl
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
            <h1 className="text-3xl font-bold text-success">
              MessMate
            </h1>

            <p className="text-sm text-text-muted mt-1">
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
                    `flex items-center gap-4 px-5 py-4 radius-xl font-medium transition-all duration-300 ${
                      isActive
                        ? "bg-primary text-text-inverse elevation-lg"
                        : "text-text-secondary hover:bg-primary-subtle hover:text-success"
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
              bg-danger
              hover:bg-danger
              text-text-inverse
              py-3
              radius-xl
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