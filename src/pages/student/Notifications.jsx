import notificationData from "../../data/notificationData";
import NotificationHeader from "../../components/notification/NotificationHeader";
import NotificationList from "../../components/notification/NotificationList";

function Notifications() {
  const unread = notificationData.filter((item) => !item.read).length;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <NotificationHeader
        total={notificationData.length}
        unread={unread}
      />

      <NotificationList notifications={notificationData} />
    </div>
  );
}

export default Notifications;