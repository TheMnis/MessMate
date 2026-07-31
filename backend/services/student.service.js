const Student = require("../models/Student");

const getAllStudents = async () => {
  return await Student.find();
};

const createNewStudent = async (studentData) => {
  return await Student.create(studentData);
};

module.exports = {
  getAllStudents,
  createNewStudent,
};