import { useState } from "react";
import { FaUserPlus } from "react-icons/fa";

import StudentHeader from "../../components/owner/StudentHeader";
import StudentStats from "../../components/owner/StudentStats";
import StudentFilter from "../../components/owner/StudentFilter";
import StudentTable from "../../components/owner/StudentTable";
import StudentCard from "../../components/owner/StudentCard";
import StudentModal from "../../components/owner/StudentModal";

function Students() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [view, setView] = useState("table");
  const [openModal, setOpenModal] = useState(false);

  const students = [
    {
      id: 1,
      name: "Rahul Verma",
      room: "A-101",
      phone: "9876543210",
      attendance: 93,
      status: "Active",
    },
    {
      id: 2,
      name: "Aman Singh",
      room: "A-102",
      phone: "9876543211",
      attendance: 88,
      status: "Active",
    },
    {
      id: 3,
      name: "Riya Sharma",
      room: "B-204",
      phone: "9876543212",
      attendance: 95,
      status: "Active",
    },
    {
      id: 4,
      name: "Neha Patel",
      room: "B-305",
      phone: "9876543213",
      attendance: 76,
      status: "Inactive",
    },
  ];

  const filteredStudents = students.filter((student) => {
    const matchSearch =
      student.name
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchFilter =
      filter === "All"
        ? true
        : student.status === filter;

    return matchSearch && matchFilter;
  });

  return (
    <div className="space-y-8">

      <StudentHeader />

      <StudentStats />

      <StudentFilter
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
      />

      <div className="flex justify-end">

        <button
          onClick={() => setOpenModal(true)}
          className="flex items-center gap-3 rounded-2xl px-6 py-3 font-semibold"
          style={{
            background: "var(--color-primary)",
            color: "var(--color-text-inverse)",
          }}
        >
          <FaUserPlus />

          Add Student

        </button>

      </div>

      {view === "table" ? (
        <StudentTable
          students={filteredStudents}
        />
      ) : (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

          {filteredStudents.map((student) => (
            <StudentCard
              key={student.id}
              student={student}
            />
          ))}

        </div>
      )}

      <StudentModal
        open={openModal}
        onClose={() => setOpenModal(false)}
      />

    </div>
  );
}

export default Students;