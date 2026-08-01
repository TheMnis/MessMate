import { useState } from "react";
import toast from "react-hot-toast";

function ChangePasswordCard() {
  const [passwords, setPasswords] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setPasswords({
      ...passwords,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (passwords.newPassword !== passwords.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    toast.success("Password Changed Successfully");

    setPasswords({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
  };

  return (
    <div className="bg-surface radius-2xl elevation-lg p-8">
      <h2 className="text-2xl font-bold mb-6">
        Change Password
      </h2>

      <div className="space-y-5">
        <input
          type="password"
          name="currentPassword"
          placeholder="Current Password"
          value={passwords.currentPassword}
          onChange={handleChange}
          className="w-full border radius-xl p-3"
        />

        <input
          type="password"
          name="newPassword"
          placeholder="New Password"
          value={passwords.newPassword}
          onChange={handleChange}
          className="w-full border radius-xl p-3"
        />

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={passwords.confirmPassword}
          onChange={handleChange}
          className="w-full border radius-xl p-3"
        />
      </div>

      <div className="mt-8 flex justify-end">
        <button
          onClick={handleSubmit}
          className="bg-primary hover:bg-primary-hover text-text-inverse px-8 py-3 radius-xl transition"
        >
          Update Password
        </button>
      </div>
    </div>
  );
}

export default ChangePasswordCard;