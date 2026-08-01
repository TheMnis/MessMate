import {
  FaPhone,
  FaEnvelope,
  FaEdit,
  FaTrash,
} from "react-icons/fa";

function StudentCard({
  student,
  onEdit,
  onDelete,
}) {
  return (
    <div className="[background:var(--color-surface)] radius-2xl elevation-md p-5 space-y-4">

      <div className="flex items-center justify-between">

        <div>

          <h2 className="text-xl font-bold">
            {student.name}
          </h2>

          <span
            className={`inline-block mt-2 px-3 py-1 radius-full text-sm ${
              student.status === "Active"
                ? "[background:var(--color-success-subtle)] [color:var(--color-success-hover)]"
                : "[background:var(--color-danger-subtle)] [color:var(--color-danger-hover)]"
            }`}
          >
            {student.status}
          </span>

        </div>

      </div>

      <div className="space-y-2 [color:var(--color-text-secondary)]">

        <p className="flex items-center gap-2">
          <FaEnvelope />

          {student.email}
        </p>

        <p className="flex items-center gap-2">
          <FaPhone />

          {student.phone}
        </p>

        <p>
          <strong>Plan :</strong> {student.plan}
        </p>

      </div>

      <div className="flex gap-3 pt-3">

        <button
          onClick={() => onEdit(student)}
          className="flex-1 [background:var(--color-secondary)] hover:[background:var(--color-secondary-hover)] [color:var(--color-text-inverse)] py-2 radius-lg"
        >
          <FaEdit className="inline mr-2" />

          Edit
        </button>

        <button
          onClick={() => onDelete(student.id)}
          className="flex-1 [background:var(--color-danger)] hover:[background:var(--color-danger-hover)] [color:var(--color-text-inverse)] py-2 radius-lg"
        >
          <FaTrash className="inline mr-2" />

          Delete
        </button>

      </div>

    </div>
  );
}

export default StudentCard;
