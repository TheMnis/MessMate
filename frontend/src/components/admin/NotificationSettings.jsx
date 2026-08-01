import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaBell,
  FaEnvelope,
  FaMobileAlt,
  FaSave,
} from "react-icons/fa";

function NotificationSettings() {

  const [notifications, setNotifications] =
    useState({
      emailNotification: true,
      pushNotification: true,
      smsNotification: false,
      paymentAlert: true,
      userRegistration: true,
      systemAlert: true,
      weeklyReport: true,
    });


  const handleChange = (e) => {

    const {
      name,
      checked,
    } = e.target;

    setNotifications({
      ...notifications,
      [name]: checked,
    });

  };


  const handleSave = () => {
    console.log(notifications);
  };


  const options = [
    {
      key: "emailNotification",
      title: "Email Notifications",
      description:
        "Receive important updates through email.",
      icon: <FaEnvelope />,
    },
    {
      key: "pushNotification",
      title: "Push Notifications",
      description:
        "Get instant alerts on admin panel.",
      icon: <FaBell />,
    },
    {
      key: "smsNotification",
      title: "SMS Notifications",
      description:
        "Send critical alerts through SMS.",
      icon: <FaMobileAlt />,
    },
    {
      key: "paymentAlert",
      title: "Payment Alerts",
      description:
        "Notify when payments are completed.",
      icon: <FaBell />,
    },
    {
      key: "userRegistration",
      title: "New User Registration",
      description:
        "Alert when new users join platform.",
      icon: <FaBell />,
    },
    {
      key: "systemAlert",
      title: "System Alerts",
      description:
        "Receive server and security alerts.",
      icon: <FaBell />,
    },
    {
      key: "weeklyReport",
      title: "Weekly Reports",
      description:
        "Send weekly analytics summary.",
      icon: <FaEnvelope />,
    },
  ];


  return (
    <motion.section
      whileHover={{
        y: -4,
      }}
      className="rounded-3xl p-6"
      style={{
        background:
          "var(--color-surface)",
        border:
          "1px solid var(--color-border)",
        boxShadow:
          "var(--shadow-lg)",
      }}
    >

      <div className="flex items-center gap-4">

        <div
          className="flex h-14 w-14 items-center justify-center rounded-2xl text-xl"
          style={{
            background:
              "var(--color-warning-subtle)",
            color:
              "var(--color-warning)",
          }}
        >
          <FaBell />
        </div>


        <div>

          <h2
            className="text-2xl font-bold"
            style={{
              color:
                "var(--color-text-primary)",
            }}
          >
            Notification Settings
          </h2>


          <p
            style={{
              color:
                "var(--color-text-secondary)",
            }}
          >
            Control platform alerts and notifications.
          </p>

        </div>

      </div>



      <div className="mt-8 space-y-4">

        {options.map((item) => (

          <div
            key={item.key}
            className="flex items-center justify-between rounded-2xl p-5"
            style={{
              background:
                "var(--color-background)",
            }}
          >

            <div className="flex items-center gap-4">

              <div
                className="flex h-12 w-12 items-center justify-center rounded-2xl"
                style={{
                  background:
                    "var(--color-primary-subtle)",
                  color:
                    "var(--color-primary)",
                }}
              >
                {item.icon}
              </div>


              <div>

                <h3 className="font-semibold">
                  {item.title}
                </h3>


                <p
                  className="text-sm"
                  style={{
                    color:
                      "var(--color-text-secondary)",
                  }}
                >
                  {item.description}
                </p>

              </div>

            </div>


            <input
              type="checkbox"
              name={item.key}
              checked={
                notifications[item.key]
              }
              onChange={
                handleChange
              }
              className="h-5 w-5"
            />

          </div>

        ))}

      </div>



      <button
        onClick={handleSave}
        className="mt-8 flex w-full items-center justify-center gap-2 rounded-2xl py-4 font-semibold"
        style={{
          background:
            "var(--gradient-primary)",
          color:
            "var(--color-text-inverse)",
        }}
      >

        <FaSave />

        Save Notification Settings

      </button>


    </motion.section>
  );
}

export default NotificationSettings;