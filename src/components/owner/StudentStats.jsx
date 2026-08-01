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
      color: "bg-secondary",
    },
    {
      title: "Active",
      value: active,
      icon: <FaUserCheck />,
      color: "bg-primary",
    },
    {
      title: "Expired",
      value: expired,
      icon: <FaUserTimes />,
      color: "bg-danger",
    },
    {
      title: "Revenue",
      value: `₹${monthlyRevenue}`,
      icon: <FaWallet />,
      color: "bg-accent",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      {cards.map((card) => (
        <div
          key={card.title}
          className="bg-surface radius-2xl elevation-md p-6 flex items-center justify-between"
        >
          <div>
            <p className="text-text-muted">{card.title}</p>

            <h2 className="text-3xl font-bold mt-2">
              {card.value}
            </h2>
          </div>

          <div
            className={`${card.color} w-14 h-14 radius-xl flex items-center justify-center text-text-inverse text-2xl`}
          >
            {card.icon}
          </div>
        </div>
      ))}
    </div>
  );
}

export default StudentStats;