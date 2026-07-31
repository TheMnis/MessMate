function NotificationHeader({ total, unread }) {
  return (
    <div className="mb-6">
      <h1 className="text-3xl font-bold text-gray-800">
        Notifications
      </h1>

      <p className="text-gray-500 mt-2">
        {unread} unread • {total} total notifications
      </p>
    </div>
  );
}

export default NotificationHeader;