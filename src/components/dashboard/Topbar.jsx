import {
  FaBars,
  FaBell,
  FaMoon,
  FaSearch,
  FaUserCircle,
} from "react-icons/fa";

function Topbar({ toggleSidebar }) {
  return (
    <header className="sticky top-0 z-30 bg-surface border-b elevation-sm h-20 flex items-center justify-between px-4 md:px-8">

      {/* Left */}

      <div className="flex items-center gap-4">

        {/* Mobile Menu */}

        <button
          onClick={toggleSidebar}
          className="lg:hidden w-11 h-11 radius-xl bg-surface-hover hover:bg-success-subtle transition flex items-center justify-center"
        >
          <FaBars className="text-lg" />
        </button>

        <div>

          <h1 className="text-2xl md:text-3xl font-bold text-text-primary">
            Student Dashboard
          </h1>

          <p className="text-sm text-text-muted">
            Welcome back 👋
          </p>

        </div>

      </div>

      {/* Right */}

      <div className="flex items-center gap-3 md:gap-5">

        {/* Search */}

        <div className="relative hidden md:block">

          <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-text-disabled" />

          <input
            type="text"
            placeholder="Search..."
            className="
              w-72
              pl-11
              pr-4
              py-3
              radius-xl
              border
              outline-none
              focus:border-primary
              transition
            "
          />

        </div>

        {/* Notification */}

        <button className="relative w-11 h-11 radius-xl bg-surface-hover hover:bg-success-subtle transition flex items-center justify-center">

          <FaBell />

          <span className="absolute -top-1 -right-1 w-5 h-5 radius-full bg-danger text-text-inverse text-[10px] flex items-center justify-center">
            3
          </span>

        </button>

        {/* Dark */}

        <button className="hidden sm:flex w-11 h-11 radius-xl bg-surface-hover hover:bg-success-subtle transition items-center justify-center">

          <FaMoon />

        </button>

        {/* Profile */}

        <button className="flex items-center gap-3 bg-primary hover:bg-primary-hover transition text-text-inverse radius-xl px-3 py-2">

          <FaUserCircle className="text-3xl" />

          <div className="hidden lg:block text-left">

            <p className="font-semibold leading-none">
              Student
            </p>

            <span className="text-xs opacity-90">
              Active Plan
            </span>

          </div>

        </button>

      </div>

    </header>
  );
}

export default Topbar;