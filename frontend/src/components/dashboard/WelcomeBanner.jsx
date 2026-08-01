import { motion } from "framer-motion";
import { FaCalendarDays, FaClock } from "react-icons/fa6";

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
      initial={{ opacity: 0, y: -14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      style={{
        backgroundColor: "var(--color-primary)",
        background: "var(--hero-gradient, linear-gradient(135deg, var(--color-primary), var(--color-secondary)))",
      }}
      className="relative overflow-hidden radius-3xl p-8 [box-shadow:0_20px_45px_color-mix(in_srgb,var(--color-primary)_24%,transparent)]"
    >
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight" style={{ color: "var(--color-text-inverse)" }}>
            👋 {greeting}, Deva Yadav
          </h1>

          <p className="mt-3 max-w-2xl text-lg leading-7" style={{ color: "var(--color-text-inverse)" }}>
            Welcome back to MessMate. Manage your meals, attendance and subscription from one place.
          </p>
        </div>

        <motion.div
          whileHover={{ y: -2 }}
          transition={{ duration: 0.2 }}
          style={{
            backgroundColor: "var(--color-primary)",
            color: "var(--color-text-inverse)",
          }}
          className="space-y-3 radius-2xl border px-6 py-4 [background:color-mix(in_srgb,var(--color-surface)_14%,transparent)] [border-color:color-mix(in_srgb,var(--color-surface)_22%,transparent)] [box-shadow:0_12px_28px_color-mix(in_srgb,var(--color-text-primary)_14%,transparent)] backdrop-blur-md"
        >
          <div className="flex items-center gap-3">
            <span className="grid h-8 w-8 place-items-center radius-lg [background:color-mix(in_srgb,var(--color-surface)_14%,transparent)]"><FaCalendarDays /></span>
            <span className="font-medium">{currentDate}</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="grid h-8 w-8 place-items-center radius-lg [background:color-mix(in_srgb,var(--color-surface)_14%,transparent)]"><FaClock /></span>
            <span className="font-medium">{currentTime}</span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default WelcomeBanner;
