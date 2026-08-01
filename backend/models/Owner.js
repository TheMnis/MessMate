const mongoose = require("mongoose");
const roles = require("../constants/roles");

const ownerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      default: "",
    },
    messName: {
      type: String,
      default: "",
    },
    role: {
      type: String,
      default: roles.OWNER,
      enum: [roles.STUDENT, roles.OWNER, roles.ADMIN],
    },
    status: {
      type: String,
      enum: ["Active", "Inactive"],
      default: "Active",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Owner", ownerSchema);
