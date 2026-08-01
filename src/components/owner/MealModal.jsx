import { useEffect, useState } from "react";

function MealModal({
  isOpen,
  onClose,
  onSave,
  initialData,
}) {
  const [formData, setFormData] = useState({
    day: "",
    breakfast: "",
    lunch: "",
    dinner: "",
  });

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    } else {
      setFormData({
        day: "",
        breakfast: "",
        lunch: "",
        dinner: "",
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
          {initialData ? "✏️ Edit Meal" : "➕ Add Meal"}
        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >

          <input
            type="text"
            name="day"
            placeholder="Day"
            value={formData.day}
            onChange={handleChange}
            className="w-full border radius-xl p-3 outline-none focus:border-primary"
            required
          />

          <input
            type="text"
            name="breakfast"
            placeholder="Breakfast"
            value={formData.breakfast}
            onChange={handleChange}
            className="w-full border radius-xl p-3 outline-none focus:border-primary"
            required
          />

          <input
            type="text"
            name="lunch"
            placeholder="Lunch"
            value={formData.lunch}
            onChange={handleChange}
            className="w-full border radius-xl p-3 outline-none focus:border-primary"
            required
          />

          <input
            type="text"
            name="dinner"
            placeholder="Dinner"
            value={formData.dinner}
            onChange={handleChange}
            className="w-full border radius-xl p-3 outline-none focus:border-primary"
            required
          />

          <div className="flex justify-end gap-3 pt-4">

            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2 radius-xl border"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-5 py-2 radius-xl bg-primary text-text-inverse hover:bg-primary-hover transition"
            >
              Save
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}

export default MealModal;