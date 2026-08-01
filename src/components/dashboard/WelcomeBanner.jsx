import { motion } from "framer-motion";
import {
  FaCalendarDays,
  FaClock,
} from "react-icons/fa6";

function WelcomeBanner() {
  const now = new Date();

  const hour = now.getHours();

  let greeting = "Good Evening";

  if (hour < 12) {
    greeting = "Good Morning";
  } else if (hour < 18) {
    greeting = "Good Afternoon";
  }

  const currentDate = now.toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const currentTime = now.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.5,
      }}
      className="bg-gradient-to-r from-primary via-success to-primary-hover radius-3xl elevation-xl text-text-inverse p-8"
    >
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-6">

        <div>

          <h1 className="text-4xl font-bold">
            👋 {greeting}, Deva Yadav
          </h1>

          <p className="mt-3 text-primary-muted text-lg">
            Welcome back to MessMate.
            Manage your meals, attendance and subscription from one place.
          </p>

        </div>

        <div className="bg-surface/15 backdrop-blur-md radius-2xl px-6 py-4 space-y-3">

          <div className="flex items-center gap-3">

            <FaCalendarDays />

            <span>
              {currentDate}
            </span>

          </div>

          <div className="flex items-center gap-3">

            <FaClock />

            <span>
              {currentTime}
            </span>

          </div>

        </div>

      </div>
    </motion.div>
  );
}

export default WelcomeBanner;