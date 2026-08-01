import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaServer,
  FaDatabase,
  FaCloud,
  FaSave,
} from "react-icons/fa";

function SystemSettings() {

  const [system, setSystem] =
    useState({
      environment: "Production",
      database: "MongoDB Atlas",
      backupFrequency: "Daily",
      autoBackup: true,
      apiStatus: true,
      maintenanceNotice: false,
    });


  const handleChange = (e) => {

    const {
      name,
      value,
      checked,
      type,
    } = e.target;

    setSystem({
      ...system,
      [name]:
        type === "checkbox"
          ? checked
          : value,
    });

  };


  const handleSave = () => {
    console.log(system);
  };


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
              "var(--color-secondary-subtle)",
            color:
              "var(--color-secondary)",
          }}
        >
          <FaServer />
        </div>


        <div>

          <h2
            className="text-2xl font-bold"
            style={{
              color:
                "var(--color-text-primary)",
            }}
          >
            System Settings
          </h2>

          <p
            style={{
              color:
                "var(--color-text-secondary)",
            }}
          >
            Manage server, database and application
            configuration.
          </p>

        </div>

      </div>


      <div className="mt-8 space-y-5">


        <div
          className="grid gap-5 md:grid-cols-2"
        >

          <div>

            <label className="mb-2 block font-semibold">
              Environment
            </label>

            <select
              name="environment"
              value={
                system.environment
              }
              onChange={
                handleChange
              }
              className="w-full rounded-2xl px-4 py-3 outline-none"
              style={{
                background:
                  "var(--color-background)",
                border:
                  "1px solid var(--color-border)",
              }}
            >

              <option>
                Development
              </option>

              <option>
                Testing
              </option>

              <option>
                Production
              </option>

            </select>

          </div>


          <div>

            <label className="mb-2 block font-semibold">
              Database
            </label>

            <div
              className="flex items-center gap-3 rounded-2xl px-4 py-3"
              style={{
                background:
                  "var(--color-background)",
                border:
                  "1px solid var(--color-border)",
              }}
            >

              <FaDatabase />

              {system.database}

            </div>

          </div>

        </div>



        <div>

          <label className="mb-2 block font-semibold">
            Backup Frequency
          </label>

          <select
            name="backupFrequency"
            value={
              system.backupFrequency
            }
            onChange={
              handleChange
            }
            className="w-full rounded-2xl px-4 py-3 outline-none"
            style={{
              background:
                "var(--color-background)",
              border:
                "1px solid var(--color-border)",
            }}
          >

            <option>
              Hourly
            </option>

            <option>
              Daily
            </option>

            <option>
              Weekly
            </option>

            <option>
              Monthly
            </option>

          </select>

        </div>



        <div
          className="space-y-4"
        >

          <div
            className="flex items-center justify-between rounded-2xl p-5"
            style={{
              background:
                "var(--color-background)",
            }}
          >

            <div className="flex items-center gap-4">

              <FaCloud />

              <div>

                <h3 className="font-semibold">
                  Automatic Backup
                </h3>

                <p
                  className="text-sm"
                  style={{
                    color:
                      "var(--color-text-secondary)",
                  }}
                >
                  Automatically backup system data.
                </p>

              </div>

            </div>


            <input
              type="checkbox"
              name="autoBackup"
              checked={
                system.autoBackup
              }
              onChange={
                handleChange
              }
              className="h-5 w-5"
            />

          </div>



          <div
            className="flex items-center justify-between rounded-2xl p-5"
            style={{
              background:
                "var(--color-background)",
            }}
          >

            <div>

              <h3 className="font-semibold">
                API Service Status
              </h3>

              <p
                className="text-sm"
                style={{
                  color:
                    "var(--color-text-secondary)",
                }}
              >
                Enable or disable backend APIs.
              </p>

            </div>


            <input
              type="checkbox"
              name="apiStatus"
              checked={
                system.apiStatus
              }
              onChange={
                handleChange
              }
              className="h-5 w-5"
            />

          </div>



          <div
            className="flex items-center justify-between rounded-2xl p-5"
            style={{
              background:
                "var(--color-background)",
            }}
          >

            <div>

              <h3 className="font-semibold">
                Maintenance Notice
              </h3>

              <p
                className="text-sm"
                style={{
                  color:
                    "var(--color-text-secondary)",
                }}
              >
                Show maintenance message to users.
              </p>

            </div>


            <input
              type="checkbox"
              name="maintenanceNotice"
              checked={
                system.maintenanceNotice
              }
              onChange={
                handleChange
              }
              className="h-5 w-5"
            />

          </div>

        </div>



        <button
          onClick={handleSave}
          className="flex w-full items-center justify-center gap-2 rounded-2xl py-4 font-semibold"
          style={{
            background:
              "var(--gradient-primary)",
            color:
              "var(--color-text-inverse)",
          }}
        >

          <FaSave />

          Save System Settings

        </button>


      </div>

    </motion.section>
  );
}

export default SystemSettings;