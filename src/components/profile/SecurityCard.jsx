import { useState } from "react";
import { FaLock, FaKey } from "react-icons/fa6";
import toast from "react-hot-toast";

import { changePassword } from "../../services/student/profile.service";

function SecurityCard() {
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = ({ target }) => {
    setFormData((prev) => ({
      ...prev,
      [target.name]: target.value,
    }));
  };

  const handleSubmit = () => {
    if (
      !formData.currentPassword ||
      !formData.newPassword ||
      !formData.confirmPassword
    ) {
      toast.error("All fields are required.");
      return;
    }

    if (formData.newPassword !== formData.confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    const response = changePassword();

    if (response.success) {
      toast.success(response.message);

      setFormData({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
    }
  };

  return (
    <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8">

      <h2 className="text-2xl font-bold mb-8">
        Security Settings
      </h2>

      <div className="space-y-6">

        <div>

          <label className="block mb-2 text-sm font-semibold text-gray-600">
            Current Password
          </label>

          <div className="relative">

            <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-green-600" />

            <input
              type="password"
              name="currentPassword"
              value={formData.currentPassword}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-2xl py-3 pl-12 pr-4 focus:ring-2 focus:ring-green-500 outline-none"
            />

          </div>

        </div>

        <div>

          <label className="block mb-2 text-sm font-semibold text-gray-600">
            New Password
          </label>

          <div className="relative">

            <FaKey className="absolute left-4 top-1/2 -translate-y-1/2 text-green-600" />

            <input
              type="password"
              name="newPassword"
              value={formData.newPassword}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-2xl py-3 pl-12 pr-4 focus:ring-2 focus:ring-green-500 outline-none"
            />

          </div>

        </div>

        <div>

          <label className="block mb-2 text-sm font-semibold text-gray-600">
            Confirm Password
          </label>

          <div className="relative">

            <FaKey className="absolute left-4 top-1/2 -translate-y-1/2 text-green-600" />

            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-2xl py-3 pl-12 pr-4 focus:ring-2 focus:ring-green-500 outline-none"
            />

          </div>

        </div>

      </div>

      <div className="flex justify-end mt-8">

        <button
          onClick={handleSubmit}
          className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-2xl font-semibold transition"
        >
          Change Password
        </button>

      </div>

    </div>
  );
}

export default SecurityCard;