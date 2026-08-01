import { FaCheckCircle, FaExclamationTriangle, FaInfoCircle } from "react-icons/fa";

function NotificationCard({ notification }) {
  const icon =
    notification.type === "success" ? (
      <FaCheckCircle className="[color:var(--color-success)] text-xl" />
    ) : notification.type === "warning" ? (
      <FaExclamationTriangle className="[color:var(--color-warning)] text-xl" />
    ) : (
      <FaInfoCircle className="[color:var(--color-secondary)] text-xl" />
    );

  return (
    <div
      className={`[background:var(--color-surface)] radius-xl elevation-md p-4 border-l-4 transition hover:elevation-lg ${
        notification.read
          ? "[border-color:var(--color-border)]"
          : "[border-color:var(--color-secondary)] [background:var(--color-secondary-subtle)]"
      }`}
    >
      <div className="flex gap-4">
        <div>{icon}</div>

        <div className="flex-1">
          <div className="flex justify-between items-start">
            <h3 className="font-semibold [color:var(--color-text-primary)]">
              {notification.title}
            </h3>

            {!notification.read && (
              <span className="[background:var(--color-secondary)] [color:var(--color-text-inverse)] text-xs px-2 py-1 radius-full">
                New
              </span>
            )}
          </div>

          <p className="[color:var(--color-text-secondary)] mt-1">
            {notification.message}
          </p>

          <p className="text-xs [color:var(--color-text-disabled)] mt-3">
            {notification.time}
          </p>
        </div>
      </div>
    </div>
  );
}

export default NotificationCard;