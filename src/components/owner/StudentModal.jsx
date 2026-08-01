import { useEffect, useState } from "react";

function StudentModal({
  isOpen,
  onClose,
  onSave,
  initialData,
}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    plan: "Monthly",
    status: "Active",
  });

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    } else {
      setFormData({
        name: "",
        email: "",
        phone: "",
        plan: "Monthly",
        status: "Active",
      });
    }
  }, [initialData]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSave(formData);

    onClose();
  };

  return (
    <div className="fixed inset-0 bg-overlay flex items-center justify-center z-50">

      <div className="bg-surface radius-2xl elevation-xl w-full max-w-lg p-6">

        <h2 className="text-2xl font-bold mb-6">
          {initialData ? "✏️ Edit Student" : "➕ Add Student"}
        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >

          <input
            type="text"
            name="name"
            placeholder="Student Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border radius-xl p-3 outline-none focus:border-primary"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border radius-xl p-3 outline-none focus:border-primary"
            required
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border radius-xl p-3 outline-none focus:border-primary"
            required
          />

          <select
            name="plan"
            value={formData.plan}
            onChange={handleChange}
            className="w-full border radius-xl p-3 outline-none focus:border-primary"
          >
            <option>Monthly</option>
            <option>Quarterly</option>
            <option>Half Yearly</option>
            <option>Yearly</option>
          </select>

          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full border radius-xl p-3 outline-none focus:border-primary"
          >
            <option>Active</option>
            <option>Expired</option>
          </select>

          <div className="flex justify-end gap-3 pt-4">

            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2 border radius-xl hover:bg-surface-hover"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-5 py-2 bg-primary hover:bg-primary-hover text-text-inverse radius-xl"
            >
              Save
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}

export default StudentModal;