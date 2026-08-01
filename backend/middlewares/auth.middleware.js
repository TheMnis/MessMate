const jwt = require("jsonwebtoken");
const ApiError = require("../utils/ApiError");
const Owner = require("../models/Owner");
const Student = require("../models/Student");

const authMiddleware = (allowedRoles = []) => {
  return async (req, res, next) => {
    try {
      const authHeader = req.headers.authorization || "";
      const token = authHeader.startsWith("Bearer ") ? authHeader.slice(7) : "";

      if (!token) {
        throw new ApiError(401, "Authentication token is required");
      }

      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const userModel = decoded.role === "Owner" ? Owner : Student;
      const user = await userModel.findById(decoded.id).select("-password");

      if (!user) {
        throw new ApiError(401, "User not found");
      }

      if (allowedRoles.length && !allowedRoles.includes(user.role || decoded.role)) {
        throw new ApiError(403, "You are not authorized to access this route");
      }

      req.user = user;
      next();
    } catch (error) {
      next(error);
    }
  };
};

module.exports = authMiddleware;
