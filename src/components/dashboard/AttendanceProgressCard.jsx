import { motion } from "framer-motion";
import { FaCircleCheck, FaArrowTrendUp } from "react-icons/fa6";

function AttendanceProgressCard() {
  const attendance = 92;
  const circumference = 327;
  const offset = circumference - (circumference * attendance) / 100;

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.28 }}
      className="radius-3xl border p-6 [background:var(--color-surface)] [border-color:var(--color-border-subtle)] [box-shadow:0_10px_28px_color-mix(in_srgb,var(--color-text-primary)_6%,transparent)]"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.14em] [color:var(--color-text-muted)]">Attendance</p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight [color:var(--color-text-primary)]">Attendance Progress</h2>
        </div>
        <div className="flex items-center gap-1.5 radius-full px-3 py-1.5 text-xs font-bold [background:var(--color-success-subtle)] [color:var(--color-success)]">
          <FaArrowTrendUp /> +2% this month
        </div>
      </div>

      <div className="mt-8 flex flex-col items-center gap-8 lg:flex-row">
        <div className="relative grid h-44 w-44 shrink-0 place-items-center radius-full [background:color-mix(in_srgb,var(--color-success)_7%,transparent)]">
          <svg className="absolute h-40 w-40 -rotate-90" viewBox="0 0 120 120">
            <circle cx="60" cy="60" r="52" stroke="var(--color-border-strong)" strokeWidth="9" fill="none" />
            <motion.circle
              cx="60" cy="60" r="52" stroke="var(--color-success)" strokeWidth="9" fill="none" strokeLinecap="round"
              strokeDasharray={circumference} initial={{ strokeDashoffset: circumference }} animate={{ strokeDashoffset: offset }} transition={{ duration: 1.15, ease: "easeOut" }}
            />
          </svg>
          <div className="relative text-center">
            <h2 className="text-4xl font-extrabold tracking-tight [color:var(--color-text-primary)]">{attendance}%</h2>
            <p className="mt-1 text-xs font-bold uppercase tracking-[0.12em] [color:var(--color-success)]">Present</p>
          </div>
        </div>

        <div className="w-full flex-1">
          <div className="space-y-3">
            {[
              "Excellent attendance this month.",
              "Eligible for attendance rewards.",
              "Keep attendance above 90%.",
            ].map((message) => (
              <div key={message} className="flex items-center gap-3 radius-xl p-3 [background:var(--color-surface-hover)]">
                <span className="grid h-7 w-7 shrink-0 place-items-center radius-lg [background:var(--color-success-subtle)] [color:var(--color-success)]"><FaCircleCheck className="text-sm" /></span>
                <span className="text-sm font-medium [color:var(--color-text-secondary)]">{message}</span>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <div className="mb-2 flex justify-between text-xs font-bold uppercase tracking-[0.12em] [color:var(--color-text-muted)]"><span>Monthly goal</span><span>{attendance}/100</span></div>
            <div className="h-2.5 overflow-hidden radius-full [background:var(--color-border-strong)]">
              <motion.div initial={{ width: 0 }} animate={{ width: `${attendance}%` }} transition={{ duration: 0.85, ease: "easeOut" }} className="h-full radius-full [background:linear-gradient(90deg,var(--color-success),var(--color-primary))]" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default AttendanceProgressCard;
