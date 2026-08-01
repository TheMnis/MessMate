import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaGlobe,
  FaBuilding,
  FaSave,
} from "react-icons/fa";

function GeneralSettings() {

  const [settings, setSettings] = useState({
    platformName: "MessMate",
    supportEmail: "support@messmate.com",
    timezone: "Asia/Kolkata",
    language: "English",
    maintenance: false,
  });


  const handleChange = (e) => {
    const {
      name,
      value,
      checked,
      type,
    } = e.target;

    setSettings({
      ...settings,
      [name]:
        type === "checkbox"
          ? checked
          : value,
    });
  };


  const handleSave = () => {
    console.log(settings);
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
              "var(--color-primary-subtle)",
            color:
              "var(--color-primary)",
          }}
        >
          <FaBuilding />
        </div>


        <div>

          <h2
            className="text-2xl font-bold"
            style={{
              color:
                "var(--color-text-primary)",
            }}
          >
            General Settings
          </h2>

          <p
            style={{
              color:
                "var(--color-text-secondary)",
            }}
          >
            Manage basic platform information.
          </p>

        </div>

      </div>


      <div className="mt-8 space-y-5">


        <div>

          <label className="mb-2 block font-semibold">
            Platform Name
          </label>

          <input
            name="platformName"
            value={
              settings.platformName
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
          />

        </div>


        <div>

          <label className="mb-2 block font-semibold">
            Support Email
          </label>

          <input
            name="supportEmail"
            value={
              settings.supportEmail
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
          />

        </div>


        <div className="grid gap-5 md:grid-cols-2">

          <div>

            <label className="mb-2 block font-semibold">
              Timezone
            </label>

            <select
              name="timezone"
              value={
                settings.timezone
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
                Asia/Kolkata
              </option>

              <option>
                UTC
              </option>

              <option>
                America/New_York
              </option>

            </select>

          </div>


          <div>

            <label className="mb-2 block font-semibold">
              Language
            </label>

            <select
              name="language"
              value={
                settings.language
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
                English
              </option>

              <option>
                Hindi
              </option>

            </select>

          </div>

        </div>


        <div
          className="flex items-center justify-between rounded-2xl p-4"
          style={{
            background:
              "var(--color-background)",
          }}
        >

          <div className="flex items-center gap-3">

            <FaGlobe />

            <div>

              <h3 className="font-semibold">
                Maintenance Mode
              </h3>

              <p
                className="text-sm"
                style={{
                  color:
                    "var(--color-text-secondary)",
                }}
              >
                Temporarily disable user access.
              </p>

            </div>

          </div>


          <input
            type="checkbox"
            name="maintenance"
            checked={
              settings.maintenance
            }
            onChange={
              handleChange
            }
            className="h-5 w-5"
          />

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

          Save Changes

        </button>


      </div>

    </motion.section>
  );
}

export default GeneralSettings;