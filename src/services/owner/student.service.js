const students = [
  {
    id: 1,
    name: "Rahul Kumar",
    email: "rahul@gmail.com",
    phone: "9876543210",
    plan: "Monthly",
    status: "Active",
  },
  {
    id: 2,
    name: "Aman Singh",
    email: "aman@gmail.com",
    phone: "9876543211",
    plan: "Yearly",
    status: "Active",
  },
  {
    id: 3,
    name: "Priya Sharma",
    email: "priya@gmail.com",
    phone: "9876543212",
    plan: "Monthly",
    status: "Expired",
  },
  {
    id: 4,
    name: "Rohit Verma",
    email: "rohit@gmail.com",
    phone: "9876543213",
    plan: "Quarterly",
    status: "Active",
  },
  {
    id: 5,
    name: "Neha Patel",
    email: "neha@gmail.com",
    phone: "9876543214",
    plan: "Monthly",
    status: "Expired",
  },
];

export function getStudents() {
  return students;
}

export function addStudent(student) {
  students.push({
    id: Date.now(),
    ...student,
  });

  return students;
}

export function updateStudent(id, updatedStudent) {
  const index = students.findIndex(
    (student) => student.id === id
  );

  if (index !== -1) {
    students[index] = {
      ...students[index],
      ...updatedStudent,
    };
  }

  return students;
}

export function deleteStudent(id) {
  const index = students.findIndex(
    (student) => student.id === id
  );

  if (index !== -1) {
    students.splice(index, 1);
  }

  return students;
}