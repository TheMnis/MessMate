import {
  FaBell,
  FaSearch,
  FaMoon,
  FaSun,
  FaUserShield,
} from "react-icons/fa";

function AdminTopbar() {
  return (
    <header
      className="sticky top-0 z-30 border-b backdrop-blur-xl"
      style={{
        background: "rgba(255,255,255,.75)",
        borderColor: "var(--color-border)",
      }}
    >
      <div className="flex flex-wrap items-center justify-between gap-5 px-6 py-5">

        <div>

          <h1
            className="text-3xl font-bold"
            style={{
              color: "var(--color-text-primary)",
            }}
          >
            Welcome Back 👋
          </h1>

          <p
            className="mt-1"
            style={{
              color: "var(--color-text-secondary)",
            }}
          >
            Monitor the entire MessMate platform from
            one place.
          </p>

        </div>

        <div className="flex items-center gap-4">

          <div
            className="flex items-center gap-3 rounded-2xl px-4 py-3"
            style={{
              background: "var(--color-surface)",
              border: "1px solid var(--color-border)",
            }}
          >
            <FaSearch
              style={{
                color: "var(--color-text-secondary)",
              }}
            />

            <input
              type="text"
              placeholder="Search..."
              className="w-56 bg-transparent outline-none"
              style={{
                color: "var(--color-text-primary)",
              }}
            />

          </div>

          <button
            className="flex h-12 w-12 items-center justify-center rounded-2xl"
            style={{
              background: "var(--color-surface)",
              border: "1px solid var(--color-border)",
              color: "var(--color-text-primary)",
            }}
          >
            <FaMoon />
          </button>

          <button
            className="relative flex h-12 w-12 items-center justify-center rounded-2xl"
            style={{
              background: "var(--color-surface)",
              border: "1px solid var(--color-border)",
              color: "var(--color-text-primary)",
            }}
          >
            <FaBell />

            <span
              className="absolute right-2 top-2 h-2.5 w-2.5 rounded-full"
              style={{
                background: "var(--color-danger)",
              }}
            />

          </button>

          <div
            className="flex items-center gap-4 rounded-2xl px-4 py-2"
            style={{
              background: "var(--color-surface)",
              border: "1px solid var(--color-border)",
            }}
          >
            <div
              className="flex h-12 w-12 items-center justify-center rounded-2xl text-xl"
              style={{
                background: "var(--gradient-primary)",
                color: "var(--color-text-inverse)",
              }}
            >
              <FaUserShield />
            </div>

            <div>

              <div
                className="font-bold"
                style={{
                  color: "var(--color-text-primary)",
                }}
              >
                Super Admin
              </div>

              <div
                className="text-sm"
                style={{
                  color: "var(--color-text-secondary)",
                }}
              >
                administrator@messmate.com
              </div>

            </div>

          </div>

        </div>

      </div>
    </header>
  );
}

export default AdminTopbar;