import { motion } from "framer-motion";
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
  { title: "Dashboard", path: "/student/dashboard", icon: <FaHome /> },
  { title: "Today's Menu", path: "/student/menu", icon: <FaUtensils /> },
  { title: "Attendance", path: "/student/attendance", icon: <FaClipboardCheck /> },
  { title: "Notifications", path: "/student/notifications", icon: <FaBell /> },
  { title: "Subscription", path: "/student/subscription", icon: <FaWallet /> },
  { title: "Profile", path: "/student/profile", icon: <FaUserCircle /> },
];

function Sidebar({ isOpen, closeSidebar }) {
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 [background:color-mix(in_srgb,var(--color-text-primary)_55%,transparent)] backdrop-blur-sm z-40 lg:hidden"
          onClick={closeSidebar}
        />
      )}

      <aside
        className={`
          fixed lg:static top-0 left-0 h-screen w-72 z-50 flex flex-col overflow-hidden
          [background:linear-gradient(165deg,var(--color-text-primary),color-mix(in_srgb,var(--color-text-primary)_82%,var(--color-secondary)))]
          [border-right:1px_solid_color-mix(in_srgb,var(--color-surface)_12%,transparent)]
          [box-shadow:18px_0_42px_color-mix(in_srgb,var(--color-text-primary)_18%,transparent)]
          transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
      >
        <div className="px-5 pt-7 pb-6">
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.32, ease: "easeOut" }}
            className="flex items-center gap-3.5 rounded-2xl p-4 [background:color-mix(in_srgb,var(--color-surface)_10%,transparent)] [border:1px_solid_color-mix(in_srgb,var(--color-surface)_14%,transparent)] [box-shadow:inset_0_1px_0_color-mix(in_srgb,var(--color-surface)_14%,transparent)]"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[color-mix(in_srgb,var(--color-primary)_60%,var(--color-danger))] to-[var(--color-primary)] text-xl font-extrabold [color:var(--color-text-inverse)] [box-shadow:0_12px_26px_color-mix(in_srgb,var(--color-primary)_38%,transparent)]">
              M
            </div>

            <div className="min-w-0">
              <h1 className="text-xl font-extrabold tracking-tight [color:var(--color-text-inverse)]">
                MessMate
              </h1>
              <p className="mt-0.5 text-xs font-medium [color:color-mix(in_srgb,var(--color-text-inverse)_58%,transparent)]">
                Student Portal
              </p>
            </div>

            <button
              onClick={closeSidebar}
              className="ml-auto grid h-8 w-8 place-items-center rounded-lg text-lg [color:color-mix(in_srgb,var(--color-text-inverse)_65%,transparent)] hover:[background:color-mix(in_srgb,var(--color-surface)_10%,transparent)] hover:[color:var(--color-text-inverse)] transition-colors lg:hidden"
              aria-label="Close sidebar"
            >
              <FaTimes />
            </button>
          </motion.div>
        </div>

        <div className="mx-5 h-px [background:color-mix(in_srgb,var(--color-surface)_12%,transparent)]" />

        <nav className="flex-1 px-4 py-8">
          <p className="px-3 pb-4 text-[10px] font-bold uppercase tracking-[0.22em] [color:color-mix(in_srgb,var(--color-text-inverse)_42%,transparent)]">
            Navigation
          </p>

          <ul className="space-y-2">
            {menuItems.map((item) => (
              <motion.li key={item.title} whileHover={{ x: 2 }} transition={{ duration: 0.18 }}>
                <NavLink
                  to={item.path}
                  onClick={closeSidebar}
                  className={({ isActive }) =>
                    `group relative flex items-center gap-3.5 rounded-2xl px-4 py-3.5 text-sm font-semibold transition-all duration-200 ${
                      isActive
                        ? "bg-gradient-to-r from-[color-mix(in_srgb,var(--color-primary)_62%,var(--color-danger))] to-[var(--color-primary)] [color:var(--color-text-inverse)] [box-shadow:0_12px_28px_color-mix(in_srgb,var(--color-primary)_34%,transparent)]"
                        : "[color:color-mix(in_srgb,var(--color-text-inverse)_68%,transparent)] hover:[background:color-mix(in_srgb,var(--color-surface)_9%,transparent)] hover:[color:var(--color-text-inverse)] hover:[box-shadow:inset_0_1px_0_color-mix(in_srgb,var(--color-surface)_8%,transparent)]"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {isActive && (
                        <span className="absolute -left-1 h-6 w-1 rounded-full [background:var(--color-text-inverse)] [box-shadow:0_0_12px_color-mix(in_srgb,var(--color-surface)_70%,transparent)]" />
                      )}
                      <span className="grid h-9 w-9 place-items-center rounded-xl text-base transition-transform duration-200 group-hover:scale-110 group-hover:-rotate-3 [background:color-mix(in_srgb,var(--color-surface)_11%,transparent)]">
                        {item.icon}
                      </span>
                      <span>{item.title}</span>
                    </>
                  )}
                </NavLink>
              </motion.li>
            ))}
          </ul>
        </nav>

        <div className="mx-5 h-px [background:color-mix(in_srgb,var(--color-surface)_12%,transparent)]" />

        <div className="p-5 pt-6">
          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="group flex w-full items-center justify-center gap-3 rounded-2xl py-3.5 text-sm font-semibold [background:color-mix(in_srgb,var(--color-danger)_15%,transparent)] [border:1px_solid_color-mix(in_srgb,var(--color-danger)_30%,transparent)] [color:color-mix(in_srgb,var(--color-text-inverse)_88%,var(--color-danger))] hover:[background:color-mix(in_srgb,var(--color-danger)_25%,transparent)] hover:[box-shadow:0_12px_24px_color-mix(in_srgb,var(--color-danger)_20%,transparent)] transition-all duration-200"
          >
            <FaSignOutAlt className="transition-transform duration-200 group-hover:-translate-x-0.5" />
            Logout
          </motion.button>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;

