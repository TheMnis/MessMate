import { FaSun, FaMoon, FaBowlFood, FaCircleCheck } from "react-icons/fa6";
import { motion } from "framer-motion";

function TodayMenuCard() {
  const menu = [
    { meal: "Breakfast", icon: <FaSun />, items: "Poha, Banana & Tea", time: "08:00 AM" },
    { meal: "Lunch", icon: <FaBowlFood />, items: "Rice, Dal, Paneer & Salad", time: "01:00 PM" },
    { meal: "Dinner", icon: <FaMoon />, items: "Roti, Mix Veg & Sweet", time: "08:00 PM" },
  ];
  const accents = ["[background:linear-gradient(135deg,var(--color-warning),var(--color-primary))]", "[background:linear-gradient(135deg,var(--color-primary),var(--color-secondary))]", "[background:linear-gradient(135deg,color-mix(in_srgb,var(--color-primary)_58%,var(--color-danger)),var(--color-primary))]"];

  return (
    <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} whileHover={{ y: -4 }} transition={{ duration: 0.28 }} className="radius-3xl border p-6 [background:var(--color-surface)] [border-color:var(--color-border-subtle)] [box-shadow:0_10px_28px_color-mix(in_srgb,var(--color-text-primary)_6%,transparent)]">
      <div className="mb-7 flex items-start justify-between gap-4">
        <div><p className="text-xs font-bold uppercase tracking-[0.14em] [color:var(--color-text-muted)]">Dining</p><h2 className="mt-2 text-2xl font-bold tracking-tight [color:var(--color-text-primary)]">Today&apos;s Menu</h2></div>
        <span className="radius-full px-3 py-1.5 text-xs font-bold [background:var(--color-success-subtle)] [color:var(--color-success)]">3 Meals</span>
      </div>
      <div className="space-y-3">
        {menu.map((item, index) => (
          <motion.div key={item.meal} whileHover={{ x: 3 }} transition={{ duration: 0.18 }} className="group flex items-center justify-between gap-3 radius-2xl border p-3.5 [background:var(--color-surface-hover)] [border-color:color-mix(in_srgb,var(--color-border)_65%,transparent)] hover:[border-color:color-mix(in_srgb,var(--color-primary)_25%,var(--color-border))]">
            <div className="flex min-w-0 items-center gap-3">
              <div className={`grid h-11 w-11 shrink-0 place-items-center radius-xl text-lg [color:var(--color-text-inverse)] [box-shadow:0_9px_18px_color-mix(in_srgb,var(--color-primary)_18%,transparent)] ${accents[index]}`}>{item.icon}</div>
              <div className="min-w-0"><h3 className="font-bold [color:var(--color-text-primary)]">{item.meal}</h3><p className="mt-0.5 truncate text-xs [color:var(--color-text-muted)]">{item.items}</p><p className="mt-1 text-[10px] font-bold uppercase tracking-[0.12em] [color:var(--color-success)]">{item.time}</p></div>
            </div>
            <FaCircleCheck className="shrink-0 text-lg [color:var(--color-success)]" />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default TodayMenuCard;

