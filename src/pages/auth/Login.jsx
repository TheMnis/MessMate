// ==========================================
// Login Page
// ==========================================

function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center [background:var(--color-background)]">

      <div className="[background:var(--color-surface)] elevation-xl radius-2xl p-10 w-[420px]">

        <h1 className="text-4xl font-bold text-center [color:var(--color-success)]">
          Login
        </h1>

        <p className="text-center [color:var(--color-text-muted)] mt-3">
          Welcome Back to MessMate
        </p>

        <input
          type="email"
          placeholder="Email"
          className="w-full mt-8 border radius-xl px-4 py-3 outline-none focus:[border-color:var(--color-primary)]"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mt-5 border radius-xl px-4 py-3 outline-none focus:[border-color:var(--color-primary)]"
        />

        <button
          className="w-full mt-8 [background:var(--color-primary)] hover:[background:var(--color-primary-hover)] [color:var(--color-text-inverse)] py-3 radius-xl font-semibold"
        >
          Login
        </button>

      </div>

    </div>
  );
}

export default Login;