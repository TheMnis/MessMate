import React from "react";
import weeklyMenuData from "../../data/weeklyMenuData";

const WeeklyMenu = () => {
  return (
    <div className="grid gap-6">
      {weeklyMenuData.map((menu) => (
        <div
          key={menu.day}
          className="bg-surface radius-xl elevation-md border border-border-strong p-6 hover:elevation-lg transition"
        >
          <h2 className="text-2xl font-bold text-secondary-hover mb-5">
            {menu.day}
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-highlight-subtle radius-lg p-4">
              <h3 className="font-semibold text-highlight mb-2">
                🍳 Breakfast
              </h3>

              <ul className="list-disc list-inside text-text-secondary">
                {menu.breakfast.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="bg-primary-subtle radius-lg p-4">
              <h3 className="font-semibold text-success mb-2">
                🍛 Lunch
              </h3>

              <ul className="list-disc list-inside text-text-secondary">
                {menu.lunch.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="bg-warning-subtle radius-lg p-4">
              <h3 className="font-semibold text-warning-hover mb-2">
                ☕ Snacks
              </h3>

              <ul className="list-disc list-inside text-text-secondary">
                {menu.snacks.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="bg-secondary-subtle radius-lg p-4">
              <h3 className="font-semibold text-secondary mb-2">
                🍽 Dinner
              </h3>

              <ul className="list-disc list-inside text-text-secondary">
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