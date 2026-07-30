import { useState } from "react";
import { FaHeart, FaRegHeart, FaStar, FaFire } from "react-icons/fa";

function MealCard({ meal }) {
  const [favorite, setFavorite] = useState(false);

  return (
    <div className="rounded-3xl bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-2xl font-bold">
            {meal.icon} {meal.meal}
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            {meal.time}
          </p>
        </div>

        <button
          onClick={() => setFavorite(!favorite)}
          className="text-2xl transition hover:scale-110"
        >
          {favorite ? (
            <FaHeart className="text-red-500" />
          ) : (
            <FaRegHeart className="text-gray-400" />
          )}
        </button>
      </div>

      {/* Status */}
      <div className="mt-5 flex items-center gap-3">
        <span
          className={`rounded-full px-3 py-1 text-sm font-semibold ${
            meal.available
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-600"
          }`}
        >
          {meal.available ? "Available" : "Closed"}
        </span>

        <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-700">
          {meal.type}
        </span>
      </div>

      {/* Items */}
      <div className="mt-6">
        <h3 className="mb-3 font-semibold">
          Today's Items
        </h3>

        <ul className="space-y-2">
          {meal.items.map((item) => (
            <li
              key={item}
              className="flex items-center gap-2 text-gray-600"
            >
              <span className="text-green-600">✔</span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Footer */}
      <div className="mt-6 flex items-center justify-between border-t pt-4">
        <div className="flex items-center gap-2">
          <FaFire className="text-orange-500" />
          <span className="font-semibold">
            {meal.calories} kcal
          </span>
        </div>

        <div className="flex items-center gap-2">
          <FaStar className="text-yellow-400" />
          <span className="font-semibold">
            {meal.rating}
          </span>
        </div>
      </div>
    </div>
  );
}

export default MealCard;