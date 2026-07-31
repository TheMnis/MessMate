import { Link } from "react-router-dom";

function StatsCard({
  title,
  value,
  icon,
  color,
  link,
}) {
  return (
    <Link
      to={link}
      className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 flex items-center justify-between hover:-translate-y-1"
    >
      <div>
        <p className="text-gray-500 text-sm">
          {title}
        </p>

        <h2 className="text-3xl font-bold mt-2">
          {value}
        </h2>
      </div>

      <div
        className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl text-white ${color}`}
      >
        {icon}
      </div>
    </Link>
  );
}

export default StatsCard;