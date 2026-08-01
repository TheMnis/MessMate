import { FaCheckCircle, FaExclamationTriangle, FaInfoCircle } from "react-icons/fa";

function NotificationCard({ notification }) {
  const icon =
    notification.type === "success" ? (
      <FaCheckCircle className="text-success text-xl" />
    ) : notification.type === "warning" ? (
      <FaExclamationTriangle className="text-warning text-xl" />
    ) : (
      <FaInfoCircle className="text-secondary text-xl" />
    );

  return (
    <div
      className={`bg-surface radius-xl elevation-md p-4 border-l-4 transition hover:elevation-lg ${
        notification.read
          ? "border-border"
          : "border-secondary bg-secondary-subtle"
      }`}
    >
      <div className="flex gap-4">
        <div>{icon}</div>

        <div className="flex-1">
          <div className="flex justify-between items-start">
            <h3 className="font-semibold text-text-primary">
              {notification.title}
            </h3>

            {!notification.read && (
              <span className="bg-secondary text-text-inverse text-xs px-2 py-1 radius-full">
                New
              </span>
            )}
          </div>

          <p className="text-text-secondary mt-1">
            {notification.message}
          </p>

          <p className="text-xs text-text-disabled mt-3">
            {notification.time}
          </p>
        </div>
      </div>
    </div>
  );
}

export default NotificationCard;