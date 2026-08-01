import { useState } from "react";
import { FaHeart, FaRegHeart, FaStar, FaFire } from "react-icons/fa";

function MealCard({ meal }) {
  const [favorite, setFavorite] = useState(false);

  return (
    <div className="radius-3xl bg-surface p-6 elevation-md transition-all duration-300 hover:-translate-y-1 hover:elevation-xl">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-2xl font-bold">
            {meal.icon} {meal.meal}
          </h2>

          <p className="mt-1 text-sm text-text-muted">
            {meal.time}
          </p>
        </div>

        <button
          onClick={() => setFavorite(!favorite)}
          className="text-2xl transition hover:scale-110"
        >
          {favorite ? (
            <FaHeart className="text-danger" />
          ) : (
            <FaRegHeart className="text-text-disabled" />
          )}
        </button>
      </div>

      {/* Status */}
      <div className="mt-5 flex items-center gap-3">
        <span
          className={`radius-full px-3 py-1 text-sm font-semibold ${
            meal.available
              ? "bg-success-subtle text-success-hover"
              : "bg-danger-subtle text-danger"
          }`}
        >
          {meal.available ? "Available" : "Closed"}
        </span>

        <span className="radius-full bg-success-subtle px-3 py-1 text-sm font-semibold text-success-hover">
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
              className="flex items-center gap-2 text-text-secondary"
            >
              <span className="text-success">✔</span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Footer */}
      <div className="mt-6 flex items-center justify-between border-t pt-4">
        <div className="flex items-center gap-2">
          <FaFire className="text-highlight" />
          <span className="font-semibold">
            {meal.calories} kcal
          </span>
        </div>

        <div className="flex items-center gap-2">
          <FaStar className="text-warning" />
          <span className="font-semibold">
            {meal.rating}
          </span>
        </div>
      </div>
    </div>
  );
}

export default MealCard;