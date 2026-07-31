import { FaSun, FaHamburger, FaMoon } from "react-icons/fa";

function TodayMenuCard() {
  const menu = [
    {
      meal: "Breakfast",
      icon: <FaSun />,
      items: "Poha, Banana & Tea",
    },
    {
      meal: "Lunch",
      icon: <FaHamburger />,
      items: "Rice, Dal, Paneer & Salad",
    },
    {
      meal: "Dinner",
      icon: <FaMoon />,
      items: "Roti, Mix Veg & Sweet",
    },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-md p-6">
      <h2 className="text-2xl font-bold mb-6">
        🍽 Today's Menu
      </h2>

      <div className="space-y-4">
        {menu.map((item) => (
          <div
            key={item.meal}
            className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 hover:bg-green-50 transition"
          >
            <div className="w-12 h-12 rounded-full bg-green-600 text-white flex items-center justify-center text-xl">
              {item.icon}
            </div>

            <div>
              <h3 className="font-semibold">{item.meal}</h3>
              <p className="text-gray-600 text-sm">
                {item.items}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodayMenuCard;