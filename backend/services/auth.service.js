const Student = require("../models/Student");

const ApiError = require("../utils/ApiError");

const {
  hashPassword,
  comparePassword,
} = require("../utils/hashPassword");

const generateToken = require("../utils/generateToken");

const registerStudent = async (studentData) => {
  const existingStudent = await Student.findOne({
    email: studentData.email,
  });

  if (existingStudent) {
    throw new ApiError(400, "Email already exists");
  }

  studentData.password = await hashPassword(
    studentData.password
  );

  const student = await Student.create(studentData);

  const token = generateToken(student);

  return {
    token,
    student,
  };
};

const loginStudent = async (loginData) => {
  const student = await Student.findOne({
    email: loginData.email,
  });

  if (!student) {
    throw new ApiError(404, "Student not found");
  }

  const isPasswordCorrect =
    await comparePassword(
      loginData.password,
      student.password
    );

  if (!isPasswordCorrect) {
    throw new ApiError(
      401,
      "Invalid email or password"
    );
  }

  const token = generateToken(student);

  return {
    token,
    student,
  };
};

module.exports = {
  registerStudent,
  loginStudent,
};