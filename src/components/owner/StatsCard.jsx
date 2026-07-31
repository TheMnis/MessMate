import {
  FaArrowTrendUp,
} from "react-icons/fa6";

function StatsCard({ stat }) {

  const colors = {
    green: "bg-green-500",
    blue: "bg-blue-500",
    orange: "bg-orange-500",
    red: "bg-red-500",
  };

  return (

    <div className="bg-white rounded-3xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300">

      <div className="flex justify-between items-start">

        <div>

          <p className="text-gray-500">
            {stat.title}
          </p>

          <h2 className="text-3xl font-bold mt-3">
            {stat.value}
          </h2>

        </div>

        <div
          className={`w-12 h-12 rounded-2xl flex items-center justify-center text-white ${colors[stat.color]}`}
        >
          <FaArrowTrendUp />
        </div>

      </div>

      <p className="text-green-600 font-semibold mt-6">
        {stat.change}
      </p>

    </div>

  );

}

export default StatsCard;