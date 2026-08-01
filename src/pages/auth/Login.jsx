// ==========================================
// Login Page
// ==========================================

function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">

      <div className="bg-surface elevation-xl radius-2xl p-10 w-[420px]">

        <h1 className="text-4xl font-bold text-center text-success">
          Login
        </h1>

        <p className="text-center text-text-muted mt-3">
          Welcome Back to MessMate
        </p>

        <input
          type="email"
          placeholder="Email"
          className="w-full mt-8 border radius-xl px-4 py-3 outline-none focus:border-primary"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mt-5 border radius-xl px-4 py-3 outline-none focus:border-primary"
        />

        <button
          className="w-full mt-8 bg-primary hover:bg-primary-hover text-text-inverse py-3 radius-xl font-semibold"
        >
          Login
        </button>

      </div>

    </div>
  );
}

export default Login;