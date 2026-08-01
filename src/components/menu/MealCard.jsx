import { useState } from "react";
import { FaHeart, FaRegHeart, FaStar, FaFire } from "react-icons/fa";

function MealCard({ meal }) {
  const [favorite, setFavorite] = useState(false);

  return (
    <div className="radius-3xl [background:var(--color-surface)] p-6 elevation-md transition-all duration-300 hover:-translate-y-1 hover:elevation-xl">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-2xl font-bold">
            {meal.icon} {meal.meal}
          </h2>

          <p className="mt-1 text-sm [color:var(--color-text-muted)]">
            {meal.time}
          </p>
        </div>

        <button
          onClick={() => setFavorite(!favorite)}
          className="text-2xl transition hover:scale-110"
        >
          {favorite ? (
            <FaHeart className="[color:var(--color-danger)]" />
          ) : (
            <FaRegHeart className="[color:var(--color-text-disabled)]" />
          )}
        </button>
      </div>

      {/* Status */}
      <div className="mt-5 flex items-center gap-3">
        <span
          className={`radius-full px-3 py-1 text-sm font-semibold ${
            meal.available
              ? "[background:var(--color-success-subtle)] [color:var(--color-success-hover)]"
              : "[background:var(--color-danger-subtle)] [color:var(--color-danger)]"
          }`}
        >
          {meal.available ? "Available" : "Closed"}
        </span>

        <span className="radius-full [background:var(--color-success-subtle)] px-3 py-1 text-sm font-semibold [color:var(--color-success-hover)]">
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
              className="flex items-center gap-2 [color:var(--color-text-secondary)]"
            >
              <span className="[color:var(--color-success)]">✔</span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Footer */}
      <div className="mt-6 flex items-center justify-between border-t pt-4">
        <div className="flex items-center gap-2">
          <FaFire className="[color:var(--color-highlight)]" />
          <span className="font-semibold">
            {meal.calories} kcal
          </span>
        </div>

        <div className="flex items-center gap-2">
          <FaStar className="[color:var(--color-warning)]" />
          <span className="font-semibold">
            {meal.rating}
          </span>
        </div>
      </div>
    </div>
  );
}

export default MealCard;