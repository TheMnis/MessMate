// ==========================================
// Hero Component
// MessMate Landing Page
// ==========================================

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaArrowRight,
  FaCheckCircle,
  FaClock,
  FaMapMarkerAlt,
  FaStar,
  FaUtensils,
} from "react-icons/fa";

function Hero() {
  const navigate = useNavigate();
  const [role, setRole] = useState("student");
  const [mode, setMode] = useState("login");

  const handleContinue = () => {
    if (role === "owner") {
      navigate(mode === "login" ? "/owner/login" : "/owner/register");
      return;
    }

    navigate(mode === "login" ? "/login" : "/register");
  };
  return (
    <section className="bg-gradient-to-br from-[var(--color-primary-subtle)] via-[var(--color-surface)] to-[var(--color-success-subtle)]">
      <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-center">

        {/* ================= LEFT ================= */}

        <div>

          <span className="inline-flex items-center gap-2 [background:var(--color-success-subtle)] [color:var(--color-success-hover)] px-5 py-2 radius-full font-semibold">
            🍽️ India's Smart Mess Platform
          </span>

          <h1 className="mt-8 text-5xl lg:text-7xl font-extrabold leading-tight [color:var(--color-text-primary)]">
            Smart
            <br />

            <span className="[color:var(--color-success)]">
              Mess Management
            </span>

            <br />

            Made Easy
          </h1>

          <p className="mt-8 text-xl [color:var(--color-text-secondary)] leading-9">
            Find nearby messes, subscribe to meal plans,
            track breakfast, lunch & dinner attendance,
            reduce food waste and enjoy hassle-free dining.
          </p>

          {/* Auth CTA */}

          <div className="mt-10 rounded-3xl border [border-color:var(--color-border)] [background:var(--color-surface)] p-5 elevation-md max-w-xl">
            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => setMode("login")}
                className={`px-4 py-2 radius-full font-semibold transition ${mode === "login" ? "[background:var(--color-primary)] [color:var(--color-text-inverse)]" : "[background:var(--color-primary-subtle)] [color:var(--color-text-primary)]"}`}
              >
                Login
              </button>
              <button
                type="button"
                onClick={() => setMode("register")}
                className={`px-4 py-2 radius-full font-semibold transition ${mode === "register" ? "[background:var(--color-primary)] [color:var(--color-text-inverse)]" : "[background:var(--color-primary-subtle)] [color:var(--color-text-primary)]"}`}
              >
                Register
              </button>
            </div>

            <div className="mt-4 flex flex-wrap gap-3">
              <label className="flex items-center gap-2 rounded-2xl border px-4 py-3 [border-color:var(--color-border)]">
                <input
                  type="radio"
                  name="role"
                  value="student"
                  checked={role === "student"}
                  onChange={() => setRole("student")}
                />
                <span className="font-semibold">Student</span>
              </label>
              <label className="flex items-center gap-2 rounded-2xl border px-4 py-3 [border-color:var(--color-border)]">
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

            <button
              onClick={handleContinue}
              className="mt-5 [background:var(--color-primary)] hover:[background:var(--color-primary-hover)] [color:var(--color-text-inverse)] px-8 py-4 radius-xl flex items-center gap-3 text-lg font-semibold transition"
            >
              Continue as {role === "owner" ? "Mess Owner" : "Student"}
              <FaArrowRight />
            </button>
          </div>

          {/* Features */}

          <div className="grid grid-cols-2 gap-4 mt-12">

            <div className="flex items-center gap-3">
              <FaCheckCircle className="[color:var(--color-success)]" />
              Attendance Tracking
            </div>

            <div className="flex items-center gap-3">
              <FaCheckCircle className="[color:var(--color-success)]" />
              Subscription Plans
            </div>

            <div className="flex items-center gap-3">
              <FaCheckCircle className="[color:var(--color-success)]" />
              Food Delivery
            </div>

            <div className="flex items-center gap-3">
              <FaCheckCircle className="[color:var(--color-success)]" />
              Waste Reduction
            </div>

          </div>

        </div>

        {/* ================= RIGHT ================= */}

        <div className="relative">

          <div className="[background:var(--color-surface)] radius-3xl elevation-2xl p-8">

            <div className="flex justify-between items-center mb-6">

              <h2 className="text-3xl font-bold">
                Today's Menu
              </h2>

              <span className="[background:var(--color-success-subtle)] [color:var(--color-success-hover)] px-4 py-2 radius-full text-sm font-semibold">
                LIVE
              </span>

            </div>

            <div className="space-y-5">

              <div className="flex items-center gap-3 text-lg">
                <FaUtensils className="[color:var(--color-success)]" />
                Paneer Butter Masala
              </div>

              <div className="flex items-center gap-3 text-lg">
                🍚 Jeera Rice
              </div>

              <div className="flex items-center gap-3 text-lg">
                🫓 Butter Roti
              </div>

              <div className="flex items-center gap-3 text-lg">
                🥗 Fresh Salad
              </div>

              <div className="flex items-center gap-3 text-lg">
                🍨 Gulab Jamun
              </div>

            </div>

            <hr className="my-8" />

            <div className="space-y-4">

              <div className="flex items-center gap-3">

                <FaClock className="[color:var(--color-highlight)]" />

                Attendance Till 1:00 PM

              </div>

              <div className="flex items-center gap-3">

                <FaMapMarkerAlt className="[color:var(--color-danger)]" />

                Delivery Available

              </div>

              <div className="flex items-center gap-3">

                <FaStar className="[color:var(--color-warning)]" />

                4.9 Rating (2,450 Reviews)

              </div>

            </div>

          </div>

          {/* Floating Card */}

          <div className="hidden lg:block absolute -bottom-8 -left-8 [background:var(--color-surface)] elevation-xl radius-2xl p-5">

            <p className="[color:var(--color-text-muted)]">
              Remaining Meals
            </p>

            <h2 className="text-4xl font-bold [color:var(--color-success)]">
              18
            </h2>

            <p className="text-sm [color:var(--color-text-muted)]">
              Monthly Subscription
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;

