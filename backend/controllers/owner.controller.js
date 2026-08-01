const asyncHandler = require("../utils/asyncHandler");
const { registerOwner, loginOwner } = require("../services/owner.service");
const ApiResponse = require("../utils/ApiResponse");

const register = asyncHandler(async (req, res) => {
  const owner = await registerOwner(req.body);

  return res.status(201).json(new ApiResponse(201, "Owner registered successfully", owner));
});

const login = asyncHandler(async (req, res) => {
  const response = await loginOwner(req.body);

  return res.status(200).json(new ApiResponse(200, "Login successful", response));
});

module.exports = {
  register,
  login,
};
