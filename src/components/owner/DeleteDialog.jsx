function DeleteDialog({
  isOpen,
  onClose,
  onConfirm,
  meal,
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-overlay flex items-center justify-center z-50">

      <div className="bg-surface radius-2xl elevation-xl w-full max-w-md p-6">

        <h2 className="text-2xl font-bold text-danger">
          Delete Meal
        </h2>

        <p className="mt-4 text-text-secondary">
          Are you sure you want to delete
          <span className="font-semibold">
            {" "}
            {meal?.day}
          </span>
          's menu?
        </p>

        <div className="mt-8 flex justify-end gap-3">

          <button
            onClick={onClose}
            className="px-5 py-2 radius-xl border border-border hover:bg-surface-hover transition"
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            className="px-5 py-2 radius-xl bg-danger text-text-inverse hover:bg-danger-hover transition"
          >
            Delete
          </button>

        </div>

      </div>

    </div>
  );
}

export default DeleteDialog;