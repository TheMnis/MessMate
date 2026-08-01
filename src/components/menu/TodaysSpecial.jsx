import { FaStar, FaFire } from "react-icons/fa";

function TodaysSpecial() {
  return (
    <div className="mb-8 overflow-hidden radius-3xl bg-gradient-to-r from-highlight to-danger p-8 text-text-inverse elevation-xl">

      <p className="text-sm font-semibold uppercase tracking-widest">
        👨‍🍳 Chef's Recommendation
      </p>

      <h2 className="mt-2 text-4xl font-bold">
        Paneer Butter Masala
      </h2>

      <p className="mt-3 max-w-xl text-highlight-subtle">
        Rich creamy paneer served with fresh butter naan and
        jeera rice. One of the most loved meals in today's menu.
      </p>

      <div className="mt-6 flex flex-wrap gap-4">

        <div className="flex items-center gap-2 radius-full bg-surface/20 px-4 py-2">
          <FaStar />
          <span>4.9 Rating</span>
        </div>

        <div className="flex items-center gap-2 radius-full bg-surface/20 px-4 py-2">
          <FaFire />
          <span>780 kcal</span>
        </div>

        <div className="radius-full bg-surface/20 px-4 py-2">
          ⭐ Student Favourite
        </div>

      </div>
    </div>
  );
}

export default TodaysSpecial;