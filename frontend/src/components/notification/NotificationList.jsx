import NotificationCard from "./NotificationCard";

function NotificationList({ notifications }) {
  return (
    <div className="space-y-4">
      {notifications.map((notification) => (
        <NotificationCard
          key={notification.id}
          notification={notification}
        />
      ))}
    </div>
  );
}

export default NotificationList;