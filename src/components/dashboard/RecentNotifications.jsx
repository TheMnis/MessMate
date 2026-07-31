import {
  FaBell,
  FaCheckCircle,
  FaExclamationCircle,
} from "react-icons/fa";

function RecentNotifications() {
  const notifications = [
    {
      id: 1,
      title: "Today's menu has been updated.",
      time: "10 min ago",
      icon: <FaBell />,
      color: "bg-blue-500",
    },
    {
      id: 2,
      title: "Attendance marked successfully.",
      time: "1 hour ago",
      icon: <FaCheckCircle />,
      color: "bg-green-500",
    },
    {
      id: 3,
      title: "Subscription expires in 5 days.",
      time: "Yesterday",
      icon: <FaExclamationCircle />,
      color: "bg-red-500",
    },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-md p-6">
      <h2 className="text-2xl font-bold mb-6">
        🔔 Recent Notifications
      </h2>

      <div className="space-y-5">
        {notifications.map((item) => (
          <div
            key={item.id}
            className="flex items-start gap-4 border-b pb-4 last:border-none last:pb-0"
          >
            <div
              className={`w-12 h-12 rounded-full flex items-center justify-center text-white ${item.color}`}
            >
              {item.icon}
            </div>

            <div className="flex-1">
              <h3 className="font-semibold">
                {item.title}
              </h3>

              <p className="text-sm text-gray-500 mt-1">
                {item.time}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentNotifications;