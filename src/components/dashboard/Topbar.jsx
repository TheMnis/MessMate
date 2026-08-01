import {
  FaBars,
  FaBell,
  FaMoon,
  FaSearch,
  FaUserCircle,
} from "react-icons/fa";

function Topbar({ toggleSidebar }) {
  return (
    <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-xl border-b border-border h-20 flex items-center justify-between px-6 lg:px-10">

      {/* LEFT */}

      <div className="flex items-center gap-5">

        <button
          onClick={toggleSidebar}
          className="lg:hidden w-11 h-11 rounded-2xl bg-surface-hover hover:bg-primary-subtle transition-all duration-300 flex items-center justify-center"
        >
          <FaBars />
        </button>

        <div>

          <h1 className="text-3xl font-bold tracking-tight text-text-primary">
            Student Dashboard
          </h1>

          <p className="text-sm text-text-muted mt-1">
            Welcome back 👋 Have a great day.
          </p>

        </div>

      </div>

      {/* RIGHT */}

      <div className="flex items-center gap-4">

        {/* Search */}

        <div className="hidden lg:block relative">

          <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-text-muted" />

          <input
            placeholder="Search anything..."
            className="
              w-80
              h-12
              rounded-2xl
              bg-surface-hover
              border
              border-border
              pl-12
              pr-5
              outline-none
              transition-all
              focus:border-primary
              focus:bg-white
            "
          />

        </div>

        {/* Notification */}

        <button
          className="
          relative
          w-12
          h-12
          rounded-2xl
          bg-surface-hover
          hover:bg-primary-subtle
          transition-all
          "
        >

          <FaBell className="mx-auto text-lg" />

          <span className="absolute top-2 right-2 w-2.5 h-2.5 rounded-full bg-danger"></span>

        </button>

        {/* Theme */}

        <button
          className="
          hidden
          sm:flex
          w-12
          h-12
          rounded-2xl
          bg-surface-hover
          hover:bg-primary-subtle
          transition-all
          items-center
          justify-center
          "
        >

          <FaMoon />

        </button>

        {/* Profile */}

        <div
          className="
          flex
          items-center
          gap-3
          bg-surface
          border
          border-border
          rounded-2xl
          px-3
          py-2
          shadow-sm
          "
        >

          <FaUserCircle className="text-4xl text-primary" />

          <div className="hidden xl:block">

            <h4 className="font-semibold text-text-primary">
              Student
            </h4>

            <p className="text-xs text-text-muted">
              Active Subscription
            </p>

          </div>

        </div>

      </div>

    </header>
  );
}

export default Topbar;