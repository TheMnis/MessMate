import { FaPlus } from "react-icons/fa";

function StudentHeader({
  onAddStudent,
}) {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-4">

      <div>

        <h1 className="text-4xl font-bold [color:var(--color-text-primary)]">
          Student Management
        </h1>

        <p className="[color:var(--color-text-muted)] mt-2">
          Manage all students, subscriptions and status.
        </p>

      </div>

      <button
        onClick={onAddStudent}
        className="
          flex
          items-center
          gap-3
          [background:var(--color-primary)]
          hover:[background:var(--color-primary-hover)]
          [color:var(--color-text-inverse)]
          px-6
          py-3
          radius-xl
          font-semibold
          elevation-lg
          transition
        "
      >
        <FaPlus />

        Add Student

      </button>

    </div>
  );
}

export default StudentHeader;