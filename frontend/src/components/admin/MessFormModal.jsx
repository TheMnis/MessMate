import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FaStore,
  FaSave,
  FaTimes,
} from "react-icons/fa";

const initialState = {
  name: "",
  owner: "",
  students: "",
  revenue: "",
  status: "Active",
};

function MessFormModal({
  open,
  onClose,
  mess,
  onSave,
}) {
  const [formData, setFormData] =
    useState(initialState);

  useEffect(() => {
    if (mess) {
      setFormData({
        ...initialState,
        ...mess,
      });
    } else {
      setFormData(initialState);
    }
  }, [mess]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (onSave) {
      onSave(formData);
    }

    onClose();
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          className="fixed inset-0 z-50 flex items-center justify-center p-5"
          style={{
            background:
              "rgba(0,0,0,.45)",
            backdropFilter:
              "blur(8px)",
          }}
        >
          <motion.div
            initial={{
              scale: 0.92,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            exit={{
              scale: 0.92,
              opacity: 0,
            }}
            className="w-full max-w-2xl rounded-3xl p-8"
            style={{
              background:
                "var(--color-surface)",
              border:
                "1px solid var(--color-border)",
              boxShadow:
                "var(--shadow-xl)",
            }}
          >
            <div className="mb-8 flex items-center justify-between">

              <div>

                <div
                  className="inline-flex items-center gap-2 rounded-full px-4 py-2"
                  style={{
                    background:
                      "var(--color-primary-subtle)",
                    color:
                      "var(--color-primary)",
                  }}
                >
                  <FaStore />

                  {mess
                    ? "Edit Mess"
                    : "New Mess"}

                </div>

                <h2
                  className="mt-4 text-3xl font-bold"
                  style={{
                    color:
                      "var(--color-text-primary)",
                  }}
                >
                  {mess
                    ? "Update Mess"
                    : "Register New Mess"}
                </h2>

              </div>

              <button
                onClick={onClose}
                className="flex h-12 w-12 items-center justify-center rounded-2xl"
                style={{
                  background:
                    "var(--color-danger-subtle)",
                  color:
                    "var(--color-danger)",
                }}
              >
                <FaTimes />
              </button>

            </div>

            <form
              onSubmit={
                handleSubmit
              }
              className="grid gap-6 md:grid-cols-2"
            >
              <div>

                <label className="mb-2 block font-semibold">
                  Mess Name
                </label>

                <input
                  name="name"
                  value={
                    formData.name
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
                  Owner Name
                </label>

                <input
                  name="owner"
                  value={
                    formData.owner
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
                  Total Students
                </label>

                <input
                  type="number"
                  name="students"
                  value={
                    formData.students
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
                  Monthly Revenue
                </label>

                <input
                  type="number"
                  name="revenue"
                  value={
                    formData.revenue
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

              <div className="md:col-span-2">

                <label className="mb-2 block font-semibold">
                  Status
                </label>

                <select
                  name="status"
                  value={
                    formData.status
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
                    Active
                  </option>

                  <option>
                    Pending
                  </option>

                  <option>
                    Inactive
                  </option>

                  <option>
                    Blocked
                  </option>

                </select>

              </div>

              <div className="mt-2 flex gap-4 md:col-span-2">

                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 rounded-2xl py-4 font-semibold"
                  style={{
                    background:
                      "var(--color-background)",
                    border:
                      "1px solid var(--color-border)",
                  }}
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="flex flex-1 items-center justify-center gap-2 rounded-2xl py-4 font-semibold"
                  style={{
                    background:
                      "var(--gradient-primary)",
                    color:
                      "var(--color-text-inverse)",
                  }}
                >
                  <FaSave />

                  Save Mess

                </button>

              </div>

            </form>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default MessFormModal;