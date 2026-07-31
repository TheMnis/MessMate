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
    <div className="bg-white rounded-2xl shadow-md p-5 space-y-4">

      <div className="flex items-center justify-between">

        <div>

          <h2 className="text-xl font-bold">
            {student.name}
          </h2>

          <span
            className={`inline-block mt-2 px-3 py-1 rounded-full text-sm ${
              student.status === "Active"
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {student.status}
          </span>

        </div>

      </div>

      <div className="space-y-2 text-gray-600">

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
          className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg"
        >
          <FaEdit className="inline mr-2" />

          Edit
        </button>

        <button
          onClick={() => onDelete(student.id)}
          className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg"
        >
          <FaTrash className="inline mr-2" />

          Delete
        </button>

      </div>

    </div>
  );
}

export default StudentCard;