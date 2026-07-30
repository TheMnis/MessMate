import React from "react";
import weeklyMenuData from "../../data/weeklyMenuData";

const WeeklyMenu = () => {
  return (
    <div className="grid gap-6">
      {weeklyMenuData.map((menu) => (
        <div
          key={menu.day}
          className="bg-white rounded-xl shadow-md border border-gray-200 p-6 hover:shadow-lg transition"
        >
          <h2 className="text-2xl font-bold text-indigo-600 mb-5">
            {menu.day}
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-orange-50 rounded-lg p-4">
              <h3 className="font-semibold text-orange-600 mb-2">
                🍳 Breakfast
              </h3>

              <ul className="list-disc list-inside text-gray-700">
                {menu.breakfast.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="bg-green-50 rounded-lg p-4">
              <h3 className="font-semibold text-green-600 mb-2">
                🍛 Lunch
              </h3>

              <ul className="list-disc list-inside text-gray-700">
                {menu.lunch.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="bg-yellow-50 rounded-lg p-4">
              <h3 className="font-semibold text-yellow-600 mb-2">
                ☕ Snacks
              </h3>

              <ul className="list-disc list-inside text-gray-700">
                {menu.snacks.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="bg-blue-50 rounded-lg p-4">
              <h3 className="font-semibold text-blue-600 mb-2">
                🍽 Dinner
              </h3>

              <ul className="list-disc list-inside text-gray-700">
                {menu.dinner.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WeeklyMenu;