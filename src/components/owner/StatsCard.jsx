import {
  FaArrowTrendUp,
} from "react-icons/fa6";

function StatsCard({ stat }) {

  const colors = {
    green: "bg-success",
    blue: "bg-secondary",
    orange: "bg-highlight",
    red: "bg-danger",
  };

  return (

    <div className="bg-surface radius-3xl elevation-lg p-6 hover:elevation-2xl transition-all duration-300">

      <div className="flex justify-between items-start">

        <div>

          <p className="text-text-muted">
            {stat.title}
          </p>

          <h2 className="text-3xl font-bold mt-3">
            {stat.value}
          </h2>

        </div>

        <div
          className={`w-12 h-12 radius-2xl flex items-center justify-center text-text-inverse ${colors[stat.color]}`}
        >
          <FaArrowTrendUp />
        </div>

      </div>

      <p className="text-success font-semibold mt-6">
        {stat.change}
      </p>

    </div>

  );

}

export default StatsCard;