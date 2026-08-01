import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaShieldAlt,
  FaLock,
  FaKey,
  FaSave,
} from "react-icons/fa";

function SecuritySettings() {

  const [security, setSecurity] = useState({
    twoFactor: true,
    loginAlert: true,
    sessionTimeout: "30",
    passwordExpiry: "90",
    allowMultipleLogin: false,
  });


  const handleChange = (e) => {
    const {
      name,
      value,
      checked,
      type,
    } = e.target;

    setSecurity({
      ...security,
      [name]:
        type === "checkbox"
          ? checked
          : value,
    });
  };


  const handleSave = () => {
    console.log(security);
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
              "var(--color-danger-subtle)",
            color:
              "var(--color-danger)",
          }}
        >
          <FaShieldAlt />
        </div>


        <div>

          <h2
            className="text-2xl font-bold"
            style={{
              color:
                "var(--color-text-primary)",
            }}
          >
            Security Settings
          </h2>

          <p
            style={{
              color:
                "var(--color-text-secondary)",
            }}
          >
            Control authentication and account security.
          </p>

        </div>

      </div>


      <div className="mt-8 space-y-5">


        <div
          className="flex items-center justify-between rounded-2xl p-5"
          style={{
            background:
              "var(--color-background)",
          }}
        >

          <div className="flex items-center gap-4">

            <FaKey />

            <div>

              <h3 className="font-semibold">
                Two Factor Authentication
              </h3>

              <p
                className="text-sm"
                style={{
                  color:
                    "var(--color-text-secondary)",
                }}
              >
                Add extra protection for admin accounts.
              </p>

            </div>

          </div>


          <input
            type="checkbox"
            name="twoFactor"
            checked={
              security.twoFactor
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

          <div className="flex items-center gap-4">

            <FaLock />

            <div>

              <h3 className="font-semibold">
                Login Alerts
              </h3>

              <p
                className="text-sm"
                style={{
                  color:
                    "var(--color-text-secondary)",
                }}
              >
                Receive notification on new logins.
              </p>

            </div>

          </div>


          <input
            type="checkbox"
            name="loginAlert"
            checked={
              security.loginAlert
            }
            onChange={
              handleChange
            }
            className="h-5 w-5"
          />

        </div>



        <div className="grid gap-5 md:grid-cols-2">

          <div>

            <label className="mb-2 block font-semibold">
              Session Timeout (Minutes)
            </label>

            <select
              name="sessionTimeout"
              value={
                security.sessionTimeout
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

              <option value="15">
                15 Minutes
              </option>

              <option value="30">
                30 Minutes
              </option>

              <option value="60">
                60 Minutes
              </option>

              <option value="120">
                120 Minutes
              </option>

            </select>

          </div>



          <div>

            <label className="mb-2 block font-semibold">
              Password Expiry Days
            </label>

            <select
              name="passwordExpiry"
              value={
                security.passwordExpiry
              }
              onChange={
                handleChange
              }
              className="w-full rounded-2xl px-4 py-3 outline-none"
              style={{
                background:
                  "var(--color-background)",
                border:
                  "1px solid(var(--color-border)",
              }}
            >

              <option value="30">
                30 Days
              </option>

              <option value="60">
                60 Days
              </option>

              <option value="90">
                90 Days
              </option>

              <option value="180">
                180 Days
              </option>

            </select>

          </div>

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
              Multiple Device Login
            </h3>

            <p
              className="text-sm"
              style={{
                color:
                  "var(--color-text-secondary)",
              }}
            >
              Allow same account on multiple devices.
            </p>

          </div>


          <input
            type="checkbox"
            name="allowMultipleLogin"
            checked={
              security.allowMultipleLogin
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

          Save Security Settings

        </button>


      </div>

    </motion.section>
  );
}

export default SecuritySettings;