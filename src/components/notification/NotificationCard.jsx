import { FaCheckCircle, FaExclamationTriangle, FaInfoCircle } from "react-icons/fa";

function NotificationCard({ notification }) {
  const icon =
    notification.type === "success" ? (
      <FaCheckCircle className="text-green-500 text-xl" />
    ) : notification.type === "warning" ? (
      <FaExclamationTriangle className="text-yellow-500 text-xl" />
    ) : (
      <FaInfoCircle className="text-blue-500 text-xl" />
    );

  return (
    <div
      className={`bg-white rounded-xl shadow-md p-4 border-l-4 transition hover:shadow-lg ${
        notification.read
          ? "border-gray-300"
          : "border-blue-500 bg-blue-50"
      }`}
    >
      <div className="flex gap-4">
        <div>{icon}</div>

        <div className="flex-1">
          <div className="flex justify-between items-start">
            <h3 className="font-semibold text-gray-800">
              {notification.title}
            </h3>

            {!notification.read && (
              <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                New
              </span>
            )}
          </div>

          <p className="text-gray-600 mt-1">
            {notification.message}
          </p>

          <p className="text-xs text-gray-400 mt-3">
            {notification.time}
          </p>
        </div>
      </div>
    </div>
  );
}

export default NotificationCard;