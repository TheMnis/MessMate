import { motion } from "framer-motion";
import {
  FaEdit,
  FaTrash,
  FaPhoneAlt,
  FaClipboardCheck,
} from "react-icons/fa";

function StudentTable({ students }) {
  return (
    <section
      className="overflow-hidden rounded-3xl"
      style={{
        background: "var(--color-surface)",
        border: "1px solid var(--color-border)",
        boxShadow: "var(--shadow-lg)",
      }}
    >
      <div className="overflow-x-auto">

        <table className="w-full">

          <thead
            style={{
              background: "var(--color-background)",
            }}
          >
            <tr>

              <th className="px-6 py-5 text-left">
                Student
              </th>

              <th className="px-6 py-5 text-left">
                Room
              </th>

              <th className="px-6 py-5 text-left">
                Phone
              </th>

              <th className="px-6 py-5 text-left">
                Attendance
              </th>

              <th className="px-6 py-5 text-left">
                Status
              </th>

              <th className="px-6 py-5 text-center">
                Actions
              </th>

            </tr>
          </thead>

          <tbody>

            {students.map((student) => (

              <motion.tr
                key={student.id}
                whileHover={{
                  backgroundColor:
                    "rgba(0,0,0,.02)",
                }}
                style={{
                  borderTop:
                    "1px solid var(--color-border)",
                }}
              >

                <td className="px-6 py-5">

                  <div className="flex items-center gap-4">

                    <img
                      src={`https://api.dicebear.com/9.x/adventurer/svg?seed=${student.name}`}
                      alt={student.name}
                      className="h-14 w-14 rounded-full object-cover"
                    />

                    <div>

                      <div
                        className="font-bold"
                        style={{
                          color:
                            "var(--color-text-primary)",
                        }}
                      >
                        {student.name}
                      </div>

                    </div>

                  </div>

                </td>

                <td className="px-6 py-5">
                  {student.room}
                </td>

                <td className="px-6 py-5">

                  <div className="flex items-center gap-2">

                    <FaPhoneAlt
                      style={{
                        color:
                          "var(--color-success)",
                      }}
                    />

                    {student.phone}

                  </div>

                </td>

                <td className="px-6 py-5">

                  <div className="flex items-center gap-2">

                    <FaClipboardCheck
                      style={{
                        color:
                          "var(--color-warning)",
                      }}
                    />

                    {student.attendance}%

                  </div>

                </td>

                <td className="px-6 py-5">

                  <span
                    className="rounded-full px-3 py-1 text-sm font-semibold"
                    style={{
                      background:
                        student.status === "Active"
                          ? "var(--color-success-subtle)"
                          : "var(--color-warning-subtle)",
                      color:
                        student.status === "Active"
                          ? "var(--color-success)"
                          : "var(--color-warning)",
                    }}
                  >
                    {student.status}
                  </span>

                </td>

                <td className="px-6 py-5">

                  <div className="flex justify-center gap-3">

                    <motion.button
                      whileHover={{
                        scale: 1.08,
                      }}
                      whileTap={{
                        scale: 0.96,
                      }}
                      className="flex h-10 w-10 items-center justify-center rounded-xl"
                      style={{
                        background:
                          "var(--color-primary-subtle)",
                        color:
                          "var(--color-primary)",
                      }}
                    >
                      <FaEdit />
                    </motion.button>

                    <motion.button
                      whileHover={{
                        scale: 1.08,
                      }}
                      whileTap={{
                        scale: 0.96,
                      }}
                      className="flex h-10 w-10 items-center justify-center rounded-xl"
                      style={{
                        background:
                          "var(--color-danger-subtle)",
                        color:
                          "var(--color-danger)",
                      }}
                    >
                      <FaTrash />
                    </motion.button>

                  </div>

                </td>

              </motion.tr>

            ))}

          </tbody>

        </table>

      </div>

    </section>
  );
}

export default StudentTable;