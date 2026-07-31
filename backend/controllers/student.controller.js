const {
  getAllStudents,
  createNewStudent,
} = require("../services/student.service");

const getStudents = async (req, res) => {
  try {
    const students = await getAllStudents();

    res.status(200).json({
      success: true,
      count: students.length,
      data: students,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const createStudent = async (req, res) => {
  try {
    const student = await createNewStudent(req.body);

    res.status(201).json({
      success: true,
      message: "Student created successfully",
      data: student,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getStudents,
  createStudent,
};