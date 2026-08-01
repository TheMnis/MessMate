import { motion } from "framer-motion";
import {
  FaCog,
  FaShieldAlt,
  FaServer,
} from "react-icons/fa";

function SettingsHeader() {
  return (
    <motion.section
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.35,
      }}
      className="relative overflow-hidden rounded-3xl p-8"
      style={{
        background:
          "var(--gradient-primary)",
        color:
          "var(--color-text-inverse)",
        boxShadow:
          "var(--shadow-xl)",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: -120,
          right: -100,
          width: 280,
          height: 280,
          borderRadius: "999px",
          background:
            "rgba(255,255,255,.08)",
        }}
      />

      <div
        style={{
          position: "absolute",
          bottom: -120,
          left: -100,
          width: 260,
          height: 260,
          borderRadius: "999px",
          background:
            "rgba(255,255,255,.05)",
        }}
      />


      <div className="relative flex flex-col gap-8 xl:flex-row xl:items-center xl:justify-between">

        <div>

          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-2"
            style={{
              background:
                "rgba(255,255,255,.15)",
            }}
          >
            <FaCog />

            System Settings

          </div>


          <h1 className="mt-6 text-5xl font-bold">
            Admin Configuration
          </h1>


          <p
            className="mt-4 max-w-3xl text-lg leading-8"
            style={{
              color:
                "rgba(255,255,255,.92)",
            }}
          >
            Configure platform preferences, security
            controls, notifications, system behavior
            and backup options from one centralized
            administration panel.
          </p>

        </div>


        <div className="grid gap-5 sm:grid-cols-3">


          <div
            className="rounded-3xl p-6"
            style={{
              background:
                "rgba(255,255,255,.12)",
            }}
          >

            <FaShieldAlt size={30} />


            <div className="mt-5 text-4xl font-bold">
              Secure
            </div>


            <div
              className="mt-2"
              style={{
                color:
                  "rgba(255,255,255,.9)",
              }}
            >
              Protection
            </div>

          </div>


          <div
            className="rounded-3xl p-6"
            style={{
              background:
                "rgba(255,255,255,.12)",
            }}
          >

            <FaServer size={30} />


            <div className="mt-5 text-4xl font-bold">
              99.9%
            </div>


            <div
              className="mt-2"
              style={{
                color:
                  "rgba(255,255,255,.9)",
              }}
            >
              System Uptime
            </div>

          </div>


          <div
            className="rounded-3xl p-6"
            style={{
              background:
                "rgba(255,255,255,.12)",
            }}
          >

            <FaCog size={30} />


            <div className="mt-5 text-4xl font-bold">
              24/7
            </div>


            <div
              className="mt-2"
              style={{
                color:
                  "rgba(255,255,255,.9)",
              }}
            >
              Monitoring
            </div>

          </div>


        </div>

      </div>

    </motion.section>
  );
}

export default SettingsHeader;