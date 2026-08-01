import { motion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";

function DashboardCard({ title, value, icon, color = "from-[var(--color-success)] to-[var(--color-primary)]", change = "+12%" }) {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.01 }}
      transition={{ duration: 0.22 }}
      className="group relative overflow-hidden radius-3xl border p-6 [background:var(--color-surface)] [border-color:var(--color-border-subtle)] [box-shadow:0_8px_24px_color-mix(in_srgb,var(--color-text-primary)_5%,transparent)]"
    >
      <div className="absolute -right-12 -top-12 h-36 w-36 radius-full [background:color-mix(in_srgb,var(--color-primary)_9%,transparent)] transition-transform duration-300 group-hover:scale-125" />
      <div className="relative flex items-start justify-between gap-5">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.14em] [color:var(--color-text-muted)]">{title}</p>
          <h2 className="mt-3 text-4xl font-extrabold tracking-tight [color:var(--color-text-primary)]">{value}</h2>
        </div>
        <div className={`grid h-14 w-14 place-items-center radius-2xl bg-gradient-to-br ${color} text-2xl [color:var(--color-text-inverse)] [box-shadow:0_12px_26px_color-mix(in_srgb,var(--color-primary)_22%,transparent)]`}>
          {icon}
        </div>
      </div>
      <div className="relative mt-7 flex items-center justify-between text-sm">
        <div className="flex items-center gap-2 font-bold [color:var(--color-success)]"><FaArrowUp className="text-xs" />{change}</div>
        <span className="[color:var(--color-text-disabled)]">This Month</span>
      </div>
      <div className="relative mt-4 h-2 overflow-hidden radius-full [background:var(--color-border-strong)]">
        <motion.div initial={{ width: 0 }} animate={{ width: "75%" }} transition={{ duration: 0.65, ease: "easeOut" }} className="h-full radius-full [background:linear-gradient(90deg,var(--color-success),var(--color-primary))]" />
      </div>
    </motion.div>
  );
}

export default DashboardCard;
