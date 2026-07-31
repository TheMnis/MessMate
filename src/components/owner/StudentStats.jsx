import {
  FaUsers,
  FaUserCheck,
  FaUserTimes,
  FaWallet,
} from "react-icons/fa";

function StudentStats({ students }) {
  const total = students.length;

  const active = students.filter(
    (student) => student.status === "Active"
  ).length;

  const expired = students.filter(
    (student) => student.status === "Expired"
  ).length;

  const monthlyRevenue = active * 2500;

  const cards = [
    {
      title: "Total Students",
      value: total,
      icon: <FaUsers />,
      color: "bg-blue-600",
    },
    {
      title: "Active",
      value: active,
      icon: <FaUserCheck />,
      color: "bg-green-600",
    },
    {
      title: "Expired",
      value: expired,
      icon: <FaUserTimes />,
      color: "bg-red-600",
    },
    {
      title: "Revenue",
      value: `₹${monthlyRevenue}`,
      icon: <FaWallet />,
      color: "bg-purple-600",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      {cards.map((card) => (
        <div
          key={card.title}
          className="bg-white rounded-2xl shadow-md p-6 flex items-center justify-between"
        >
          <div>
            <p className="text-gray-500">{card.title}</p>

            <h2 className="text-3xl font-bold mt-2">
              {card.value}
            </h2>
          </div>

          <div
            className={`${card.color} w-14 h-14 rounded-xl flex items-center justify-center text-white text-2xl`}
          >
            {card.icon}
          </div>
        </div>
      ))}
    </div>
  );
}

export default StudentStats;