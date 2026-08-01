function NotificationHeader({ total, unread }) {
  return (
    <div className="mb-6">
      <h1 className="text-3xl font-bold [color:var(--color-text-primary)]">
        Notifications
      </h1>

      <p className="[color:var(--color-text-muted)] mt-2">
        {unread} unread • {total} total notifications
      </p>
    </div>
  );
}

export default NotificationHeader;