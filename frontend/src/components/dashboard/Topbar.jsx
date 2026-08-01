import { motion } from "framer-motion";
import {
  FaBars,
  FaBell,
  FaMoon,
  FaSearch,
  FaUserCircle,
} from "react-icons/fa";

function Topbar({ toggleSidebar }) {
  return (
    <header className="sticky top-0 z-30 flex h-20 items-center justify-between gap-4 border-b px-5 [background:color-mix(in_srgb,var(--color-surface)_82%,transparent)] [border-color:color-mix(in_srgb,var(--color-border)_78%,transparent)] [box-shadow:0_8px_24px_color-mix(in_srgb,var(--color-text-primary)_5%,transparent)] backdrop-blur-md sm:px-6 lg:px-10">
      <div className="flex min-w-0 items-center gap-3 sm:gap-5">
        <motion.button
          whileTap={{ scale: 0.94 }}
          onClick={toggleSidebar}
          className="grid h-10 w-10 shrink-0 place-items-center rounded-xl [background:var(--color-surface-hover)] [color:var(--color-text-secondary)] hover:[background:var(--color-primary-subtle)] hover:[color:var(--color-primary)] transition-colors lg:hidden"
          aria-label="Open sidebar"
        >
          <FaBars className="text-base" />
        </motion.button>

        <div className="min-w-0">
          <h1 className="truncate text-xl font-bold tracking-tight [color:var(--color-text-primary)] sm:text-2xl">
            Student Dashboard
          </h1>
          <p className="mt-1 hidden truncate text-xs font-medium [color:var(--color-text-muted)] sm:block">
            Welcome back ðŸ‘‹ Have a great day.
          </p>
        </div>
      </div>

      <div className="flex shrink-0 items-center gap-2 sm:gap-3">
        <div className="group relative hidden lg:block">
          <FaSearch className="pointer-events-none absolute left-4 top-1/2 z-10 -translate-y-1/2 text-sm [color:var(--color-text-muted)] transition-colors group-focus-within:[color:var(--color-primary)]" />
          <input
            placeholder="Search anything..."
            className="h-11 w-64 rounded-xl border pl-11 pr-4 text-sm font-medium [background:color-mix(in_srgb,var(--color-surface-hover)_78%,transparent)] [border-color:var(--color-border)] [color:var(--color-text-primary)] outline-none placeholder:[color:var(--color-text-muted)] transition-all duration-200 focus:w-80 focus:[background:var(--color-surface)] focus:[border-color:var(--color-primary)] focus:[box-shadow:0_0_0_4px_color-mix(in_srgb,var(--color-primary)_12%,transparent)]"
          />
        </div>

        <motion.button
          whileHover={{ y: -1 }}
          whileTap={{ scale: 0.94 }}
          className="group relative grid h-10 w-10 place-items-center rounded-xl border [background:color-mix(in_srgb,var(--color-surface)_72%,transparent)] [border-color:var(--color-border)] [color:var(--color-text-secondary)] hover:[background:var(--color-primary-subtle)] hover:[border-color:color-mix(in_srgb,var(--color-primary)_28%,var(--color-border))] hover:[color:var(--color-primary)] transition-colors"
          aria-label="Notifications"
        >
          <FaBell className="text-base transition-transform duration-200 group-hover:rotate-12" />
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full [background:var(--color-danger)] [box-shadow:0_0_0_2px_var(--color-surface)]" />
        </motion.button>

        <motion.button
          whileHover={{ y: -1, rotate: -8 }}
          whileTap={{ scale: 0.94 }}
          className="hidden h-10 w-10 place-items-center rounded-xl border [background:color-mix(in_srgb,var(--color-surface)_72%,transparent)] [border-color:var(--color-border)] [color:var(--color-text-secondary)] hover:[background:var(--color-primary-subtle)] hover:[color:var(--color-primary)] transition-colors sm:grid"
          aria-label="Theme settings"
        >
          <FaMoon className="text-sm" />
        </motion.button>

        <motion.div
          whileHover={{ y: -1 }}
          className="flex items-center gap-2 rounded-xl border p-1.5 pr-2.5 [background:color-mix(in_srgb,var(--color-surface)_84%,transparent)] [border-color:var(--color-border)] [box-shadow:0_4px_12px_color-mix(in_srgb,var(--color-text-primary)_4%,transparent)] transition-colors hover:[border-color:color-mix(in_srgb,var(--color-primary)_28%,var(--color-border))]"
        >
          <span className="grid h-8 w-8 place-items-center rounded-lg [background:var(--color-primary-subtle)] [color:var(--color-primary)]">
            <FaUserCircle className="text-xl" />
          </span>
          <div className="hidden xl:block">
            <h4 className="text-sm font-bold leading-tight [color:var(--color-text-primary)]">
              Student
            </h4>
            <p className="mt-0.5 text-[10px] font-medium [color:var(--color-text-muted)]">
              Active Subscription
            </p>
          </div>
        </motion.div>
      </div>
    </header>
  );
}

export default Topbar;

