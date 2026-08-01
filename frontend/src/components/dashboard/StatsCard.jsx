import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowTrendUp } from "react-icons/fa6";

function StatsCard({ title, value, icon, color, link, change = "+12%" }) {
  return (
    <motion.div whileHover={{ y: -5, scale: 1.01 }} transition={{ duration: 0.22 }}>
      <Link
        to={link}
        className="group relative block overflow-hidden rounded-3xl border p-6 [background:var(--color-surface)] [border-color:var(--color-border-subtle)] [box-shadow:0_8px_24px_color-mix(in_srgb,var(--color-text-primary)_5%,transparent)] transition-shadow duration-200 hover:[box-shadow:0_20px_42px_color-mix(in_srgb,var(--color-text-primary)_10%,transparent)]"
      >
        <div className={`absolute inset-x-0 top-0 h-1 ${color}`} />
        <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full [background:color-mix(in_srgb,var(--color-primary)_8%,transparent)] transition-transform duration-300 group-hover:scale-125" />

        <div className="relative flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.14em] [color:var(--color-text-muted)]">{title}</p>
            <h2 className="mt-3 text-4xl font-extrabold tracking-tight [color:var(--color-text-primary)]">{value}</h2>
          </div>

          <div className={`relative grid h-14 w-14 shrink-0 place-items-center overflow-hidden rounded-2xl text-2xl [color:var(--color-text-inverse)] [box-shadow:0_12px_24px_color-mix(in_srgb,var(--color-primary)_20%,transparent)] ${color}`}>
            <span className="absolute inset-0 [background:linear-gradient(135deg,color-mix(in_srgb,var(--color-surface)_22%,transparent),transparent)]" />
            <span className="relative transition-transform duration-200 group-hover:scale-110 group-hover:-rotate-3">{icon}</span>
          </div>
        </div>

        <div className="relative mt-7 flex items-center gap-2 text-sm">
          <span className="grid h-6 w-6 place-items-center rounded-full [background:var(--color-success-subtle)] [color:var(--color-success)]"><FaArrowTrendUp className="text-xs" /></span>
          <span className="font-bold [color:var(--color-success)]">{change}</span>
          <span className="[color:var(--color-text-muted)]">vs last month</span>
        </div>
      </Link>
    </motion.div>
  );
}

export default StatsCard;

