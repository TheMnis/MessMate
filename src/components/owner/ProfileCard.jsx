import toast from "react-hot-toast";
import { useState } from "react";
import {
  FaCamera,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaStore,
} from "react-icons/fa";

function ProfileCard({ profile, onSave }) {
  const [formData, setFormData] = useState(profile);

  const [preview, setPreview] = useState(profile.image);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImage = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setPreview(URL.createObjectURL(file));
  };

  const handleSave = () => {
  if (!formData.ownerName.trim()) {
    toast.error("Owner Name is required");
    return;
  }

  if (!formData.email.includes("@")) {
    toast.error("Enter valid email");
    return;
  }

  if (formData.phone.length !== 10) {
    toast.error("Phone number must be 10 digits");
    return;
  }

  onSave({
    ...formData,
    image: preview,
  });

  toast.success("Profile updated successfully");
};

  return (
    <div className="bg-surface radius-3xl elevation-lg p-8">

      <div className="flex flex-col items-center">

        <div className="relative">

          <img
            src={preview}
            alt="Owner"
            className="w-36 h-36 radius-full object-cover border-4 border-primary elevation-lg"
          />

          <label
            htmlFor="profileImage"
            className="absolute bottom-2 right-2 bg-primary hover:bg-primary-hover text-text-inverse p-3 radius-full cursor-pointer transition"
          >
            <FaCamera />
          </label>

          <input
            id="profileImage"
            type="file"
            accept="image/*"
            hidden
            onChange={handleImage}
          />

        </div>

        <h2 className="text-2xl font-bold mt-5">
          {formData.ownerName}
        </h2>

        <p className="text-text-muted">
          {formData.messName}
        </p>

      </div>

      <div className="grid md:grid-cols-2 gap-5 mt-10">

        <div className="relative">

          <FaUser className="absolute top-4 left-4 text-success" />

          <input
            name="ownerName"
            value={formData.ownerName}
            onChange={handleChange}
            placeholder="Owner Name"
            className="w-full border radius-xl py-3 pl-12 pr-4"
          />

        </div>

        <div className="relative">

          <FaStore className="absolute top-4 left-4 text-success" />

          <input
            name="messName"
            value={formData.messName}
            onChange={handleChange}
            placeholder="Mess Name"
            className="w-full border radius-xl py-3 pl-12 pr-4"
          />

        </div>

        <div className="relative">

          <FaEnvelope className="absolute top-4 left-4 text-success" />

          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full border radius-xl py-3 pl-12 pr-4"
          />

        </div>

        <div className="relative">

          <FaPhone className="absolute top-4 left-4 text-success" />

          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone"
            className="w-full border radius-xl py-3 pl-12 pr-4"
          />

        </div>

        <div className="relative md:col-span-2">

          <FaMapMarkerAlt className="absolute top-4 left-4 text-success" />

          <textarea
            rows="4"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Address"
            className="w-full border radius-xl py-3 pl-12 pr-4"
          />

        </div>

      </div>

      <div className="flex justify-end mt-8">

        <button
          onClick={handleSave}
          className="bg-primary hover:bg-primary-hover text-text-inverse px-8 py-3 radius-xl elevation-lg transition"
        >
          Save Changes
        </button>

      </div>

    </div>
  );
}

export default ProfileCard;