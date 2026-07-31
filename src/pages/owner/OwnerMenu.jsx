import { useState } from "react";
import {
  FaPlus,
  FaEdit,
  FaTrash,
} from "react-icons/fa";

function OwnerMenu() {
  const [menu] = useState([
    {
      id: 1,
      day: "Monday",
      breakfast: "Poha & Tea",
      lunch: "Rice, Dal, Paneer",
      dinner: "Roti, Mix Veg",
    },
    {
      id: 2,
      day: "Tuesday",
      breakfast: "Upma & Tea",
      lunch: "Jeera Rice, Rajma",
      dinner: "Roti, Aloo Gobhi",
    },
    {
      id: 3,
      day: "Wednesday",
      breakfast: "Paratha & Curd",
      lunch: "Rice, Chole",
      dinner: "Roti, Bhindi",
    },
  ]);

  return (
    <div className="space-y-8">

      {/* Header */}

      <div className="flex flex-col md:flex-row justify-between items-center gap-4">

        <div>
          <h1 className="text-4xl font-bold">
            🍽 Weekly Menu
          </h1>

          <p className="text-gray-500 mt-2">
            Manage your weekly mess menu.
          </p>
        </div>

        <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl flex items-center gap-3 font-semibold transition">
          <FaPlus />
          Add Meal
        </button>

      </div>

      {/* Table */}

      <div className="bg-white rounded-2xl shadow-md overflow-hidden">

        <table className="w-full">

          <thead className="bg-green-600 text-white">

            <tr>

              <th className="p-4 text-left">Day</th>

              <th className="p-4 text-left">Breakfast</th>

              <th className="p-4 text-left">Lunch</th>

              <th className="p-4 text-left">Dinner</th>

              <th className="p-4 text-center">Actions</th>

            </tr>

          </thead>

          <tbody>

            {menu.map((meal) => (

              <tr
                key={meal.id}
                className="border-b hover:bg-gray-50"
              >

                <td className="p-4 font-semibold">
                  {meal.day}
                </td>

                <td className="p-4">
                  {meal.breakfast}
                </td>

                <td className="p-4">
                  {meal.lunch}
                </td>

                <td className="p-4">
                  {meal.dinner}
                </td>

                <td className="p-4">

                  <div className="flex justify-center gap-3">

                    <button className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-lg transition">

                      <FaEdit />

                    </button>

                    <button className="bg-red-500 hover:bg-red-600 text-white p-3 rounded-lg transition">

                      <FaTrash />

                    </button>

                  </div>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default OwnerMenu;