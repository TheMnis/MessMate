import { FaBell, FaSearch, FaMoon } from "react-icons/fa";

function OwnerTopbar() {
  return (
    <header
      className="sticky top-0 z-30"
      style={{
        background: "var(--color-background)",
        borderBottom: "1px solid var(--color-border)",
      }}
    >
      <div className="flex flex-col gap-5 px-6 py-5 lg:flex-row lg:items-center lg:justify-between">

        <div className="flex-1">

          <div
            className="flex items-center gap-3 rounded-2xl px-5 py-3"
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
              placeholder="Search students, meals, reports..."
              className="w-full bg-transparent outline-none"
              style={{
                color: "var(--color-text-primary)",
              }}
            />

          </div>

        </div>

        <div className="flex items-center gap-4">

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

          <div
            className="flex items-center gap-4 rounded-2xl px-4 py-2"
            style={{
              background: "var(--color-surface)",
              border: "1px solid var(--color-border)",
            }}
          >

            <img
              src="https://api.dicebear.com/9.x/adventurer/svg?seed=Owner"
              alt="Owner"
              className="h-12 w-12 rounded-full object-cover"
            />

            <div>

              <h3
                className="font-bold"
                style={{
                  color: "var(--color-text-primary)",
                }}
              >
                Mess Owner
              </h3>

              <p
                className="text-sm"
                style={{
                  color: "var(--color-text-secondary)",
                }}
              >
                Premium Plan
              </p>

            </div>

          </div>

        </div>

      </div>
    </header>
  );
}
export default OwnerTopbar;