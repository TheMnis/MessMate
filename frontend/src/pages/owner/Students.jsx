import { useState } from "react";
import { getStudents } from "../../services/owner/student.service";

import StudentHeader from "../../components/owner/StudentHeader";
import StudentStats from "../../components/owner/StudentStats";
import StudentTable from "../../components/owner/StudentTable";
import StudentFilter from "../../components/owner/StudentFilter";
import StudentModal from "../../components/owner/StudentModal";
import SearchBar from "../../components/owner/SearchBar";

function Students() {
  const [students, setStudents] = useState(getStudents());

  const [search, setSearch] = useState("");

  const [filter, setFilter] = useState("All");

  const [modalOpen, setModalOpen] = useState(false);

  const filteredStudents = students.filter((student) => {
    const matchSearch =
      student.name.toLowerCase().includes(search.toLowerCase()) ||
      student.email.toLowerCase().includes(search.toLowerCase()) ||
      student.phone.includes(search);

    const matchFilter =
      filter === "All" ||
      student.status === filter ||
      student.plan === filter;

    return matchSearch && matchFilter;
  });

  return (
    <div className="space-y-8">

      <StudentHeader
        onAddStudent={() => setModalOpen(true)}
      />

      <StudentStats students={students} />

      <div className="flex flex-col md:flex-row gap-4 justify-between">

        <SearchBar
          value={search}
          onChange={setSearch}
        />

        <StudentFilter
          value={filter}
          onChange={setFilter}
        />

      </div>

      <StudentTable
        students={filteredStudents}
        onEdit={(student) => console.log(student)}
        onDelete={(id) => console.log(id)}
      />

      <StudentModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSave={(student) => {
          console.log(student);
          setModalOpen(false);
        }}
      />

    </div>
  );
}

export default Students;
