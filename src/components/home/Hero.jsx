// ==========================================
// Hero Component
// MessMate Landing Page
// ==========================================

import {
  FaArrowRight,
  FaCheckCircle,
  FaClock,
  FaMapMarkerAlt,
  FaStar,
  FaUtensils,
} from "react-icons/fa";

function Hero() {
  return (
    <section className="bg-gradient-to-br from-primary-subtle via-surface to-success-subtle">
      <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-center">

        {/* ================= LEFT ================= */}

        <div>

          <span className="inline-flex items-center gap-2 bg-success-subtle text-success-hover px-5 py-2 radius-full font-semibold">
            🍽️ India's Smart Mess Platform
          </span>

          <h1 className="mt-8 text-5xl lg:text-7xl font-extrabold leading-tight text-text-primary">
            Smart
            <br />

            <span className="text-success">
              Mess Management
            </span>

            <br />

            Made Easy
          </h1>

          <p className="mt-8 text-xl text-text-secondary leading-9">
            Find nearby messes, subscribe to meal plans,
            track breakfast, lunch & dinner attendance,
            reduce food waste and enjoy hassle-free dining.
          </p>

          {/* Buttons */}

          <div className="flex flex-wrap gap-5 mt-10">

            <button className="bg-primary hover:bg-primary-hover text-text-inverse px-8 py-4 radius-xl flex items-center gap-3 text-lg font-semibold transition">

              Find a Mess

              <FaArrowRight />

            </button>

            <button className="border-2 border-primary text-success hover:bg-primary hover:text-text-inverse px-8 py-4 radius-xl text-lg font-semibold transition">

              Register Your Mess

            </button>

          </div>

          {/* Features */}

          <div className="grid grid-cols-2 gap-4 mt-12">

            <div className="flex items-center gap-3">
              <FaCheckCircle className="text-success" />
              Attendance Tracking
            </div>

            <div className="flex items-center gap-3">
              <FaCheckCircle className="text-success" />
              Subscription Plans
            </div>

            <div className="flex items-center gap-3">
              <FaCheckCircle className="text-success" />
              Food Delivery
            </div>

            <div className="flex items-center gap-3">
              <FaCheckCircle className="text-success" />
              Waste Reduction
            </div>

          </div>

        </div>

        {/* ================= RIGHT ================= */}

        <div className="relative">

          <div className="bg-surface radius-3xl elevation-2xl p-8">

            <div className="flex justify-between items-center mb-6">

              <h2 className="text-3xl font-bold">
                Today's Menu
              </h2>

              <span className="bg-success-subtle text-success-hover px-4 py-2 radius-full text-sm font-semibold">
                LIVE
              </span>

            </div>

            <div className="space-y-5">

              <div className="flex items-center gap-3 text-lg">
                <FaUtensils className="text-success" />
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

                <FaClock className="text-highlight" />

                Attendance Till 1:00 PM

              </div>

              <div className="flex items-center gap-3">

                <FaMapMarkerAlt className="text-danger" />

                Delivery Available

              </div>

              <div className="flex items-center gap-3">

                <FaStar className="text-warning" />

                4.9 Rating (2,450 Reviews)

              </div>

            </div>

          </div>

          {/* Floating Card */}

          <div className="hidden lg:block absolute -bottom-8 -left-8 bg-surface elevation-xl radius-2xl p-5">

            <p className="text-text-muted">
              Remaining Meals
            </p>

            <h2 className="text-4xl font-bold text-success">
              18
            </h2>

            <p className="text-sm text-text-muted">
              Monthly Subscription
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;
