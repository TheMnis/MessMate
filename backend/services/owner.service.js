const Owner = require("../models/Owner");
const ApiError = require("../utils/ApiError");
const { hashPassword, comparePassword } = require("../utils/hashPassword");
const generateToken = require("../utils/generateToken");

const registerOwner = async (ownerData) => {
  const existingOwner = await Owner.findOne({ email: ownerData.email });

  if (existingOwner) {
    throw new ApiError(400, "Email already exists");
  }

  ownerData.password = await hashPassword(ownerData.password);
  const owner = await Owner.create(ownerData);
  const token = generateToken(owner);

  return { token, owner };
};

const loginOwner = async (loginData) => {
  const owner = await Owner.findOne({ email: loginData.email });

  if (!owner) {
    throw new ApiError(404, "Owner not found");
  }

  const isPasswordCorrect = await comparePassword(loginData.password, owner.password);

  if (!isPasswordCorrect) {
    throw new ApiError(401, "Invalid email or password");
  }

  const token = generateToken(owner);

  return { token, owner };
};

module.exports = {
  registerOwner,
  loginOwner,
};
