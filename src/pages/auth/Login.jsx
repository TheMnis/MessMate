// ==========================================
// Login Page
// ==========================================

function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">

      <div className="bg-white shadow-xl rounded-2xl p-10 w-[420px]">

        <h1 className="text-4xl font-bold text-center text-green-600">
          Login
        </h1>

        <p className="text-center text-gray-500 mt-3">
          Welcome Back to MessMate
        </p>

        <input
          type="email"
          placeholder="Email"
          className="w-full mt-8 border rounded-xl px-4 py-3 outline-none focus:border-green-600"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mt-5 border rounded-xl px-4 py-3 outline-none focus:border-green-600"
        />

        <button
          className="w-full mt-8 bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold"
        >
          Login
        </button>

      </div>

    </div>
  );
}

export default Login;