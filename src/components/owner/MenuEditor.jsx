import { useEffect, useState } from "react";
import DayMenuCard from "./DayMenuCard";
import { getWeeklyMenu } from "../../services/owner/ownerMenu.service";

const MenuEditor = () => {
  const [weeklyMenu, setWeeklyMenu] = useState([]);

  useEffect(() => {
    const data = getWeeklyMenu();
    setWeeklyMenu(data);
  }, []);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h1 className="text-3xl font-bold text-gray-800">
          Weekly Menu Management
        </h1>

        <p className="text-gray-500 mt-2">
          Manage breakfast, lunch, snacks and dinner for the entire week.
        </p>
      </div>

      {/* Weekly Menu */}
      {weeklyMenu.map((menu) => (
        <DayMenuCard key={menu.id} menu={menu} />
      ))}
    </div>
  );
};

export default MenuEditor;