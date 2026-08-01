function DeleteDialog({
  isOpen,
  onClose,
  onConfirm,
  meal,
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 [background:var(--color-overlay)] flex items-center justify-center z-50">

      <div className="[background:var(--color-surface)] radius-2xl elevation-xl w-full max-w-md p-6">

        <h2 className="text-2xl font-bold [color:var(--color-danger)]">
          Delete Meal
        </h2>

        <p className="mt-4 [color:var(--color-text-secondary)]">
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
            className="px-5 py-2 radius-xl border [border-color:var(--color-border)] hover:[background:var(--color-surface-hover)] transition"
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            className="px-5 py-2 radius-xl [background:var(--color-danger)] [color:var(--color-text-inverse)] hover:[background:var(--color-danger-hover)] transition"
          >
            Delete
          </button>

        </div>

      </div>

    </div>
  );
}

export default DeleteDialog;