import React from "react";
import weeklyMenuData from "../../data/weeklyMenuData";

const WeeklyMenu = () => {
  return (
    <div className="grid gap-6">
      {weeklyMenuData.map((menu) => (
        <div
          key={menu.day}
          className="[background:var(--color-surface)] radius-xl elevation-md border [border-color:var(--color-border-strong)] p-6 hover:elevation-lg transition"
        >
          <h2 className="text-2xl font-bold [color:var(--color-secondary-hover)] mb-5">
            {menu.day}
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="[background:var(--color-highlight-subtle)] radius-lg p-4">
              <h3 className="font-semibold [color:var(--color-highlight)] mb-2">
                🍳 Breakfast
              </h3>

              <ul className="list-disc list-inside [color:var(--color-text-secondary)]">
                {menu.breakfast.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="[background:var(--color-primary-subtle)] radius-lg p-4">
              <h3 className="font-semibold [color:var(--color-success)] mb-2">
                🍛 Lunch
              </h3>

              <ul className="list-disc list-inside [color:var(--color-text-secondary)]">
                {menu.lunch.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="[background:var(--color-warning-subtle)] radius-lg p-4">
              <h3 className="font-semibold [color:var(--color-warning-hover)] mb-2">
                ☕ Snacks
              </h3>

              <ul className="list-disc list-inside [color:var(--color-text-secondary)]">
                {menu.snacks.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="[background:var(--color-secondary-subtle)] radius-lg p-4">
              <h3 className="font-semibold [color:var(--color-secondary)] mb-2">
                🍽 Dinner
              </h3>

              <ul className="list-disc list-inside [color:var(--color-text-secondary)]">
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