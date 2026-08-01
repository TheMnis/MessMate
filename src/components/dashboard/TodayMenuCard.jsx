import {
  FaSun,
  FaMoon,
  FaBowlFood,
  FaCircleCheck,
} from "react-icons/fa6";

import { motion } from "framer-motion";

function TodayMenuCard() {
  const menu = [
    {
      meal: "Breakfast",
      icon: <FaSun />,
      items: "Poha, Banana & Tea",
      time: "08:00 AM",
    },
    {
      meal: "Lunch",
      icon: <FaBowlFood />,
      items: "Rice, Dal, Paneer & Salad",
      time: "01:00 PM",
    },
    {
      meal: "Dinner",
      icon: <FaMoon />,
      items: "Roti, Mix Veg & Sweet",
      time: "08:00 PM",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="[background:var(--color-surface)] radius-3xl elevation-lg border [border-color:var(--color-border-subtle)] p-6"
    >
      <div className="flex items-center justify-between mb-6">

        <h2 className="text-2xl font-bold">
          🍽 Today's Menu
        </h2>

        <span className="[color:var(--color-success)] text-sm font-semibold">
          3 Meals
        </span>

      </div>

      <div className="space-y-5">

        {menu.map((item) => (

          <motion.div
            key={item.meal}
            whileHover={{ scale: 1.02 }}
            className="flex items-center justify-between p-5 radius-2xl [background:var(--color-surface-muted)] hover:[background:var(--color-primary-subtle)] transition-all"
          >

            <div className="flex items-center gap-4">

              <div className="w-14 h-14 radius-2xl [background:var(--color-primary)] [color:var(--color-text-inverse)] flex items-center justify-center text-xl elevation-lg">
                {item.icon}
              </div>

              <div>

                <h3 className="font-bold text-lg">
                  {item.meal}
                </h3>

                <p className="[color:var(--color-text-muted)] text-sm">
                  {item.items}
                </p>

                <p className="[color:var(--color-success)] text-xs mt-1">
                  {item.time}
                </p>

              </div>

            </div>

            <FaCircleCheck className="[color:var(--color-success)] text-2xl" />

          </motion.div>

        ))}

      </div>
    </motion.div>
  );
}

export default TodayMenuCard;