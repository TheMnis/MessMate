const asyncHandler = require("../utils/asyncHandler");

const {
  registerStudent,
  loginStudent,
} = require("../services/auth.service");

const ApiResponse = require("../utils/ApiResponse");

const register = asyncHandler(async (req, res) => {
  const student = await registerStudent(req.body);

  return res
    .status(201)
    .json(
      new ApiResponse(
        201,
        "Student registered successfully",
        student
      )
    );
});

const login = asyncHandler(async (req, res) => {
  const response = await loginStudent(req.body);

  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        "Login successful",
        response
      )
    );
});

module.exports = {
  register,
  login,
};