import { useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaBuilding,
  FaGraduationCap,
  FaLocationDot,
  FaFloppyDisk,
} from "react-icons/fa6";

import toast from "react-hot-toast";

function ProfileCard({ profile, onSave }) {
  const [formData, setFormData] = useState(profile);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = () => {
    onSave(formData);

    toast.success("Profile updated successfully");
  };

  const fields = [
    {
      label: "Full Name",
      name: "name",
      icon: <FaUser />,
    },
    {
      label: "Email",
      name: "email",
      icon: <FaEnvelope />,
    },
    {
      label: "Phone",
      name: "phone",
      icon: <FaPhone />,
    },
    {
      label: "College",
      name: "college",
      icon: <FaBuilding />,
    },
    {
      label: "Branch",
      name: "branch",
      icon: <FaGraduationCap />,
    },
  ];

  return (
    <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8">

      <h2 className="text-2xl font-bold mb-8">
        Personal Information
      </h2>

      <div className="grid md:grid-cols-2 gap-6">

        {fields.map((field) => (

          <div key={field.name}>

            <label className="block text-sm font-semibold mb-2 text-gray-600">
              {field.label}
            </label>

            <div className="relative">

              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-green-600">

                {field.icon}

              </span>

              <input
                type="text"
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-2xl py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-green-500"
              />

            </div>

          </div>

        ))}

        <div className="md:col-span-2">

          <label className="block text-sm font-semibold mb-2 text-gray-600">
            Address
          </label>

          <div className="relative">

            <span className="absolute left-4 top-5 text-green-600">

              <FaLocationDot />

            </span>

            <textarea
              rows="4"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-2xl py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
            />

          </div>

        </div>

      </div>

      <div className="flex justify-end mt-8">

        <button
          onClick={handleSubmit}
          className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-2xl font-semibold flex items-center gap-3 transition"
        >

          <FaFloppyDisk />

          Save Changes

        </button>

      </div>

    </div>
  );
}

export default ProfileCard;