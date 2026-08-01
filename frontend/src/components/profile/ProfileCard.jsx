import { motion } from "framer-motion";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaUniversity,
  FaDoorOpen,
} from "react-icons/fa";

function ProfileCard({
  profile,
  onChange,
}) {
  const fields = [
    {
      key: "name",
      label: "Full Name",
      icon: <FaUser />,
      type: "text",
    },
    {
      key: "email",
      label: "Email Address",
      icon: <FaEnvelope />,
      type: "email",
    },
    {
      key: "phone",
      label: "Phone Number",
      icon: <FaPhone />,
      type: "text",
    },
    {
      key: "college",
      label: "College",
      icon: <FaUniversity />,
      type: "text",
    },
    {
      key: "room",
      label: "Room Number",
      icon: <FaDoorOpen />,
      type: "text",
    },
  ];

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
      className="rounded-3xl p-8"
      style={{
        background: "var(--color-surface)",
        border: "1px solid var(--color-border)",
        boxShadow: "var(--shadow-lg)",
      }}
    >
      <h2
        className="mb-8 text-3xl font-bold"
        style={{
          color: "var(--color-text-primary)",
        }}
      >
        Personal Information
      </h2>

      <div className="grid gap-6 md:grid-cols-2">

        {fields.map((field) => (

          <div key={field.key}>

            <label
              className="mb-2 block font-semibold"
              style={{
                color: "var(--color-text-secondary)",
              }}
            >
              {field.label}
            </label>

            <div className="relative">

              <div
                className="absolute left-5 top-1/2 -translate-y-1/2"
                style={{
                  color: "var(--color-primary)",
                }}
              >
                {field.icon}
              </div>

              <input
                type={field.type}
                value={profile[field.key]}
                onChange={(e) =>
                  onChange(field.key, e.target.value)
                }
                className="w-full rounded-2xl py-4 pl-14 pr-5 outline-none"
                style={{
                  background:
                    "var(--color-background)",
                  border:
                    "1px solid var(--color-border)",
                  color:
                    "var(--color-text-primary)",
                }}
              />

            </div>

          </div>

        ))}

        <div className="md:col-span-2">

          <label
            className="mb-2 block font-semibold"
            style={{
              color: "var(--color-text-secondary)",
            }}
          >
            Address
          </label>

          <div className="relative">

            <div
              className="absolute left-5 top-5"
              style={{
                color: "var(--color-primary)",
              }}
            >
              <FaMapMarkerAlt />
            </div>

            <textarea
              rows={4}
              value={profile.address}
              onChange={(e) =>
                onChange("address", e.target.value)
              }
              className="w-full resize-none rounded-2xl py-4 pl-14 pr-5 outline-none"
              style={{
                background:
                  "var(--color-background)",
                border:
                  "1px solid var(--color-border)",
                color:
                  "var(--color-text-primary)",
              }}
            />

          </div>

        </div>

      </div>

    </motion.section>
  );
}

export default ProfileCard;