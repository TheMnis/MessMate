import {
  FaBoxes,
  FaExclamationTriangle,
  FaCheckCircle,
  FaWarehouse,
} from "react-icons/fa";

function InventoryStats({ items }) {

  const totalItems = items.length;

  const lowStock = items.filter(
    (item) => item.quantity <= item.minimumStock
  ).length;

  const available = totalItems - lowStock;

  const stats = [
    {
      title: "Total Items",
      value: totalItems,
      icon: <FaBoxes />,
      color: "bg-blue-600",
    },
    {
      title: "Low Stock",
      value: lowStock,
      icon: <FaExclamationTriangle />,
      color: "bg-red-600",
    },
    {
      title: "Available",
      value: available,
      icon: <FaCheckCircle />,
      color: "bg-green-600",
    },
    {
      title: "Categories",
      value: 5,
      icon: <FaWarehouse />,
      color: "bg-purple-600",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

      {stats.map((stat) => (

        <div
          key={stat.title}
          className="bg-white rounded-2xl shadow-md p-6 flex justify-between items-center"
        >

          <div>

            <p className="text-gray-500">
              {stat.title}
            </p>

            <h2 className="text-3xl font-bold mt-2">
              {stat.value}
            </h2>

          </div>

          <div
            className={`${stat.color} w-14 h-14 rounded-xl flex items-center justify-center text-white text-2xl`}
          >
            {stat.icon}
          </div>

        </div>

      ))}

    </div>
  );
}

export default InventoryStats;