import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { loginUser } from "../../services/authService";
import { loginOwner } from "../../services/ownerAuthService";

function Login() {
  const navigate = useNavigate();
  const [role, setRole] = useState("student");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      if (role === "owner") {
        const response = await loginOwner(formData);
        localStorage.setItem("messmate_token", response.token);
        localStorage.setItem("messmate_user", JSON.stringify(response.owner));
        toast.success("Owner login successful");
        navigate("/owner/dashboard");
        return;
      }

      const response = await loginUser(formData);
      localStorage.setItem("messmate_token", response.token);
      localStorage.setItem("messmate_user", JSON.stringify(response.student));
      toast.success("Login successful");
      navigate("/student/dashboard");
    } catch (error) {
      toast.error(error.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center [background:var(--color-background)] px-4">
      <div className="[background:var(--color-surface)] elevation-xl radius-2xl p-10 w-full max-w-[420px]">
        <h1 className="text-4xl font-bold text-center [color:var(--color-success)]">Login</h1>
        <p className="text-center [color:var(--color-text-muted)] mt-3">Welcome Back to MessMate</p>

        <div className="mt-6 flex gap-3">
          <label className="flex-1 flex items-center justify-center gap-2 rounded-2xl border px-4 py-3 [border-color:var(--color-border)]">
            <input
              type="radio"
              name="role"
              value="student"
              checked={role === "student"}
              onChange={() => setRole("student")}
            />
            <span className="font-semibold">Student</span>
          </label>
          <label className="flex-1 flex items-center justify-center gap-2 rounded-2xl border px-4 py-3 [border-color:var(--color-border)]">
            <input
              type="radio"
              name="role"
              value="owner"
              checked={role === "owner"}
              onChange={() => setRole("owner")}
            />
            <span className="font-semibold">Mess Owner</span>
          </label>
        </div>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
            className="w-full mt-8 border radius-xl px-4 py-3 outline-none focus:[border-color:var(--color-primary)]"
          />

          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            required
            className="w-full mt-5 border radius-xl px-4 py-3 outline-none focus:[border-color:var(--color-primary)]"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full mt-8 [background:var(--color-primary)] hover:[background:var(--color-primary-hover)] [color:var(--color-text-inverse)] py-3 radius-xl font-semibold disabled:opacity-70"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="text-center mt-5 [color:var(--color-text-muted)]">
          Don&apos;t have an account?{" "}
          <Link to="/register" className="[color:var(--color-primary)] font-semibold">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;