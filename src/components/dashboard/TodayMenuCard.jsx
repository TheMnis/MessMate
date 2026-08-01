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
      className="bg-surface radius-3xl elevation-lg border border-border-subtle p-6"
    >
      <div className="flex items-center justify-between mb-6">

        <h2 className="text-2xl font-bold">
          🍽 Today's Menu
        </h2>

        <span className="text-success text-sm font-semibold">
          3 Meals
        </span>

      </div>

      <div className="space-y-5">

        {menu.map((item) => (

          <motion.div
            key={item.meal}
            whileHover={{ scale: 1.02 }}
            className="flex items-center justify-between p-5 radius-2xl bg-surface-muted hover:bg-primary-subtle transition-all"
          >

            <div className="flex items-center gap-4">

              <div className="w-14 h-14 radius-2xl bg-primary text-text-inverse flex items-center justify-center text-xl elevation-lg">
                {item.icon}
              </div>

              <div>

                <h3 className="font-bold text-lg">
                  {item.meal}
                </h3>

                <p className="text-text-muted text-sm">
                  {item.items}
                </p>

                <p className="text-success text-xs mt-1">
                  {item.time}
                </p>

              </div>

            </div>

            <FaCircleCheck className="text-success text-2xl" />

          </motion.div>

        ))}

      </div>
    </motion.div>
  );
}

export default TodayMenuCard;