import { FaBars, FaSearch, FaBell } from "react-icons/fa";

function Topbar({ toggleSidebar }) {
  const user = {
    name: "DewaYadav",
    image:
      "https://api.dicebear.com/9.x/adventurer/svg?seed=DewaYadav",
  };

  return (
    <header
      className="sticky top-0 z-30 flex items-center justify-between gap-6 px-6 py-4"
      style={{
        background: "var(--color-surface)",
        borderBottom: "1px solid var(--color-border)",
        boxShadow: "var(--shadow-sm)",
      }}
    >
      <div className="flex items-center gap-4">

        <button
          onClick={toggleSidebar}
          className="flex h-11 w-11 items-center justify-center rounded-2xl lg:hidden"
          style={{
            background: "var(--color-background)",
            color: "var(--color-text-primary)",
            border: "1px solid var(--color-border)",
          }}
        >
          <FaBars />
        </button>

        <div
          className="hidden md:flex items-center gap-3 rounded-2xl px-4 py-3"
          style={{
            background: "var(--color-background)",
            border: "1px solid var(--color-border)",
          }}
        >
          <FaSearch
            style={{
              color: "var(--color-text-muted)",
            }}
          />

          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none"
            style={{
              color: "var(--color-text-primary)",
            }}
          />
        </div>

      </div>

      <div className="flex items-center gap-5">

        <button
          className="relative flex h-12 w-12 items-center justify-center rounded-2xl"
          style={{
            background: "var(--color-background)",
            border: "1px solid var(--color-border)",
            color: "var(--color-text-primary)",
          }}
        >
          <FaBell />

          <span
            className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full text-xs font-bold"
            style={{
              background: "var(--color-danger)",
              color: "white",
            }}
          >
            3
          </span>

        </button>

        <div className="flex items-center gap-3">

          <img
            src={user.image}
            alt={user.name}
            className="h-12 w-12 rounded-full object-cover"
            style={{
              border: "2px solid var(--color-primary)",
              boxShadow: "var(--shadow-md)",
            }}
          />

          <div className="hidden sm:block">

            <div
              className="font-bold"
              style={{
                color: "var(--color-text-primary)",
              }}
            >
              {user.name}
            </div>

            <div
              style={{
                color: "var(--color-text-secondary)",
                fontSize: 13,
              }}
            >
              Student
            </div>

          </div>

        </div>

      </div>

    </header>
  );
}

export default Topbar;