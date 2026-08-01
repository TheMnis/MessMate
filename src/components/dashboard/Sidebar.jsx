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
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden"
          onClick={closeSidebar}
        />
      )}

      <aside
        className={`
          fixed lg:static
          top-0
          left-0
          h-screen
          w-72
          [background:var(--color-surface)]
          border-r
          [border-color:var(--color-border)]
          flex
          flex-col
          z-50
          transition-transform
          duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
      >
        {/* Logo */}

        <div className="px-7 py-8 border-b [border-color:var(--color-border)]">

          <div className="flex items-center gap-4">

            <div className="w-14 h-14 rounded-2xl [background:var(--color-primary)] flex items-center justify-center text-white text-2xl font-bold shadow-lg">
              M
            </div>

            <div>

              <h1 className="text-2xl font-extrabold tracking-tight [color:var(--color-text-primary)]">
                MessMate
              </h1>

              <p className="text-sm [color:var(--color-text-muted)]">
                Student Portal
              </p>

            </div>

            <button
              onClick={closeSidebar}
              className="ml-auto lg:hidden text-xl [color:var(--color-text-secondary)]"
            >
              <FaTimes />
            </button>

          </div>

        </div>

        {/* Navigation */}

        <div className="flex-1 px-5 py-7">

          <p className="text-xs uppercase tracking-[0.25em] [color:var(--color-text-muted)] px-4 mb-5">
            Navigation
          </p>

          <ul className="space-y-2">

            {menuItems.map((item) => (
              <li key={item.title}>

                <NavLink
                  to={item.path}
                  onClick={closeSidebar}
                  className={({ isActive }) =>
                    `
                    flex
                    items-center
                    gap-4
                    px-5
                    py-4
                    rounded-2xl
                    font-medium
                    transition-all
                    duration-300
                    ${
                      isActive
                        ? "[background:var(--color-primary)] text-white shadow-xl"
                        : "[color:var(--color-text-secondary)] hover:[background:var(--color-primary-subtle)] hover:[color:var(--color-primary)]"
                    }
                    `
                  }
                >

                  <span className="text-xl">
                    {item.icon}
                  </span>

                  <span>{item.title}</span>

                </NavLink>

              </li>
            ))}

          </ul>

        </div>

        {/* Logout */}

        <div className="border-t [border-color:var(--color-border)] p-5">

          <button
            className="
              w-full
              flex
              items-center
              justify-center
              gap-3
              rounded-2xl
              [background:color-mix(in_srgb,var(--color-danger) 10%,transparent)]
              hover:[background:color-mix(in_srgb,var(--color-danger) 20%,transparent)]
              [color:var(--color-danger)]
              py-4
              font-semibold
              transition-all
              duration-300
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