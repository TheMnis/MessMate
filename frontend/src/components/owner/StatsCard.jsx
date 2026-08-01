import {
  FaArrowTrendUp,
} from "react-icons/fa6";

function StatsCard({ stat }) {

  const colors = {
    green: "[background:var(--color-success)]",
    blue: "[background:var(--color-secondary)]",
    orange: "[background:var(--color-highlight)]",
    red: "[background:var(--color-danger)]",
  };

  return (

    <div className="[background:var(--color-surface)] radius-3xl elevation-lg p-6 hover:elevation-2xl transition-all duration-300">

      <div className="flex justify-between items-start">

        <div>

          <p className="[color:var(--color-text-muted)]">
            {stat.title}
          </p>

          <h2 className="text-3xl font-bold mt-3">
            {stat.value}
          </h2>

        </div>

        <div
          className={`w-12 h-12 radius-2xl flex items-center justify-center [color:var(--color-text-inverse)] ${colors[stat.color]}`}
        >
          <FaArrowTrendUp />
        </div>

      </div>

      <p className="[color:var(--color-success)] font-semibold mt-6">
        {stat.change}
      </p>

    </div>

  );

}

export default StatsCard;
