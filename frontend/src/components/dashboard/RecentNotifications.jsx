import { FaBell, FaCheckCircle, FaExclamationTriangle, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

function RecentNotifications() {
  const notifications = [
    { id: 1, title: "Today's menu has been updated", description: "Breakfast and lunch menu changed for today.", time: "10 min ago", icon: <FaBell />, color: "[background:var(--color-secondary)]" },
    { id: 2, title: "Attendance marked successfully", description: "Your attendance has been recorded.", time: "1 hour ago", icon: <FaCheckCircle />, color: "[background:var(--color-success)]" },
    { id: 3, title: "Subscription expires soon", description: "Your subscription will expire in 5 days.", time: "Yesterday", icon: <FaExclamationTriangle />, color: "[background:var(--color-danger)]" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 14 }} animate={{ opacity: 1, x: 0 }} whileHover={{ y: -4 }} transition={{ duration: 0.28 }}
      className="radius-3xl border p-6 [background:var(--color-surface)] [border-color:var(--color-border-subtle)] [box-shadow:0_10px_28px_color-mix(in_srgb,var(--color-text-primary)_6%,transparent)]"
    >
      <div className="mb-7 flex items-start justify-between gap-4">
        <div><p className="text-xs font-bold uppercase tracking-[0.14em] [color:var(--color-text-muted)]">Updates</p><h2 className="mt-2 text-2xl font-bold tracking-tight [color:var(--color-text-primary)]">Recent Notifications</h2></div>
        <button className="group flex items-center gap-2 rounded-lg px-2 py-1 text-xs font-bold [color:var(--color-primary)] hover:[background:var(--color-primary-subtle)] transition-colors">View All <FaArrowRight className="transition-transform duration-200 group-hover:translate-x-0.5" /></button>
      </div>

      <div className="space-y-2">
        {notifications.map((item) => (
          <motion.div key={item.id} whileHover={{ x: 3 }} transition={{ duration: 0.18 }} className="group flex items-start gap-3 radius-2xl border p-3.5 [background:var(--color-surface-hover)] [border-color:color-mix(in_srgb,var(--color-border)_62%,transparent)] hover:[border-color:color-mix(in_srgb,var(--color-primary)_25%,var(--color-border))]">
            <div className={`relative grid h-10 w-10 shrink-0 place-items-center radius-xl text-base [color:var(--color-text-inverse)] [box-shadow:0_8px_18px_color-mix(in_srgb,var(--color-text-primary)_12%,transparent)] ${item.color}`}>
              <span className="absolute inset-0 radius-xl [background:linear-gradient(135deg,color-mix(in_srgb,var(--color-surface)_20%,transparent),transparent)]" />
              <span className="relative">{item.icon}</span>
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-start justify-between gap-3"><h3 className="text-sm font-bold [color:var(--color-text-primary)]">{item.title}</h3><span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full [background:var(--color-primary)]" /></div>
              <p className="mt-1 text-xs leading-5 [color:var(--color-text-muted)]">{item.description}</p>
              <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.1em] [color:var(--color-text-disabled)]">{item.time}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default RecentNotifications;

