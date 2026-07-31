import { FaPlus } from "react-icons/fa";

function StudentHeader({
  onAddStudent,
}) {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-4">

      <div>

        <h1 className="text-4xl font-bold text-gray-800">
          Student Management
        </h1>

        <p className="text-gray-500 mt-2">
          Manage all students, subscriptions and status.
        </p>

      </div>

      <button
        onClick={onAddStudent}
        className="
          flex
          items-center
          gap-3
          bg-green-600
          hover:bg-green-700
          text-white
          px-6
          py-3
          rounded-xl
          font-semibold
          shadow-lg
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