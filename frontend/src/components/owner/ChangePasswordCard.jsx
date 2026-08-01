import { FaLock, FaShieldAlt } from "react-icons/fa";

function ChangePasswordCard() {
  return (
    <section
      className="rounded-3xl p-8"
      style={{
        background: "var(--color-surface)",
        border: "1px solid var(--color-border)",
        boxShadow: "var(--shadow-lg)",
      }}
    >
      <div className="flex items-center gap-4">

        <div
          className="flex h-16 w-16 items-center justify-center rounded-2xl"
          style={{
            background: "var(--color-primary-subtle)",
            color: "var(--color-primary)",
          }}
        >
          <FaShieldAlt size={28} />
        </div>

        <div>

          <h2
            className="text-2xl font-bold"
            style={{
              color: "var(--color-text-primary)",
            }}
          >
            Security
          </h2>

          <p
            className="mt-1"
            style={{
              color: "var(--color-text-secondary)",
            }}
          >
            Change your account password.
          </p>

        </div>

      </div>

      <div className="mt-8 space-y-5">

        <div>

          <label
            className="mb-2 block font-semibold"
            style={{
              color: "var(--color-text-primary)",
            }}
          >
            Current Password
          </label>

          <div
            className="flex items-center gap-3 rounded-2xl px-4 py-3"
            style={{
              background: "var(--color-background)",
              border: "1px solid var(--color-border)",
            }}
          >
            <FaLock />

            <input
              type="password"
              placeholder="••••••••"
              className="w-full bg-transparent outline-none"
            />

          </div>

        </div>

        <div>

          <label
            className="mb-2 block font-semibold"
            style={{
              color: "var(--color-text-primary)",
            }}
          >
            New Password
          </label>

          <div
            className="flex items-center gap-3 rounded-2xl px-4 py-3"
            style={{
              background: "var(--color-background)",
              border: "1px solid var(--color-border)",
            }}
          >
            <FaLock />

            <input
              type="password"
              placeholder="••••••••"
              className="w-full bg-transparent outline-none"
            />

          </div>

        </div>

        <div>

          <label
            className="mb-2 block font-semibold"
            style={{
              color: "var(--color-text-primary)",
            }}
          >
            Confirm Password
          </label>

          <div
            className="flex items-center gap-3 rounded-2xl px-4 py-3"
            style={{
              background: "var(--color-background)",
              border: "1px solid var(--color-border)",
            }}
          >
            <FaLock />

            <input
              type="password"
              placeholder="••••••••"
              className="w-full bg-transparent outline-none"
            />

          </div>

        </div>

      </div>

      <button
        className="mt-8 w-full rounded-2xl py-4 font-semibold transition-all hover:scale-[1.02]"
        style={{
          background: "var(--color-primary)",
          color: "var(--color-text-inverse)",
        }}
      >
        Update Password
      </button>

    </section>
  );
}

export default ChangePasswordCard;