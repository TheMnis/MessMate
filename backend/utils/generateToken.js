const jwt = require("jsonwebtoken");

const generateToken = (student) => {
  return jwt.sign(
    {
      id: student._id,
      email: student.email,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_EXPIRES_IN,
    }
  );
};

module.exports = generateToken;